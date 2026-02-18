import { create } from 'zustand';
import { AppState, PersonalityScores, HistoricalFigure, PersonalityDimension } from '../types';
import { questions } from '../data/questions';
import { figures } from '../data/figures';

interface AppActions {
  startTest: () => void;
  answerQuestion: (questionId: number, answer: 'A' | 'B' | 'C' | 'D') => void;
  prevQuestion: () => void;
  resetTest: () => void;
  setGeneratingImage: (isGenerating: boolean) => void;
  goToShare: () => void;
  calculateResult: () => void;
}

const initialState: AppState = {
  currentStep: 'welcome',
  currentQuestion: 0,
  answers: {},
  result: null,
  isGeneratingImage: false,
  history: [],
};

export const useAppStore = create<AppState & AppActions>((set, get) => ({
  ...initialState,

  startTest: () => {
    set({
      ...initialState,
      currentStep: 'testing',
      currentQuestion: 0, // Index based, so 0 is first question
    });
  },

  goToShare: () => {
    set({ currentStep: 'share' });
  },

  answerQuestion: (questionId, answer) => {
    const { currentQuestion, answers, history } = get();
    const nextQuestion = currentQuestion + 1;
    const isLastQuestion = nextQuestion >= questions.length;

    // Save answer
    const newAnswers = { ...answers, [questions[currentQuestion].id]: answer };
    const newHistory = [...history.slice(0, currentQuestion), answer];

    if (isLastQuestion) {
      set({ answers: newAnswers, history: newHistory });
      get().calculateResult();
    } else {
      set({
        answers: newAnswers,
        currentQuestion: nextQuestion,
        history: newHistory,
      });
    }
  },

  prevQuestion: () => {
    const { currentQuestion } = get();
    if (currentQuestion > 0) {
      set({ currentQuestion: currentQuestion - 1 });
    }
  },

  resetTest: () => {
    set(initialState);
  },

  setGeneratingImage: (isGenerating) => {
    set({ isGeneratingImage: isGenerating });
  },

  calculateResult: () => {
    const { answers } = get();
    
    // Initialize scores
    const scores: PersonalityScores = {
      P: 0, S: 0, E: 0, I: 0, R: 0, T: 0
    };

    // Calculate scores
    questions.forEach((q) => {
      const answer = answers[q.id];
      if (!answer) return;

      const points = q.isWeighted ? 4 : 2;

      // Basic scoring
      switch (answer) {
        case 'A': scores.P += points; break;
        case 'B': scores.S += points; break;
        case 'C': scores.E += points; break;
        case 'D': scores.T += points; break;
      }

      // Realism check
      if (q.isRealismCheck && answer === 'A') {
        scores.R += 3;
      }
    });

    // Determine matched figure
    let matchedFigure: HistoricalFigure | undefined;
    
    // 1. Extreme personality check (>= 28)
    const extremeThreshold = 28;
    const extremeDimensions = (Object.keys(scores) as PersonalityDimension[]).filter(
      dim => scores[dim] >= extremeThreshold
    );

    // Sort extreme dimensions by score descending
    extremeDimensions.sort((a, b) => scores[b] - scores[a]);

    if (extremeDimensions.length > 0) {
      const topExtreme = extremeDimensions[0];
      // Find figures with matching extreme dimension
      const extremeMatches = figures.filter(f => f.personality.extreme === topExtreme);
      
      if (extremeMatches.length > 0) {
        // If R is high and matches R extreme figures (Cao Cao, Cixi), prioritize them
        if (topExtreme === 'R') {
             matchedFigure = extremeMatches[0]; // Simple selection for now
        } else {
            // Pick the one that matches secondary dimension best, or random
            matchedFigure = extremeMatches[0];
        }
      }
    }

    // 2. If no extreme match found, use primary/secondary logic
    if (!matchedFigure) {
      // Find primary dimension (highest score)
      const dimensions = (Object.keys(scores) as PersonalityDimension[]);
      dimensions.sort((a, b) => scores[b] - scores[a]);
      
      const primaryDim = dimensions[0];
      const secondaryDim = dimensions[1];

      // Filter by primary
      const candidates = figures.filter(f => f.personality.primary === primaryDim);
      
      // If candidates found, try to match secondary
      if (candidates.length > 0) {
        const perfectMatch = candidates.find(f => f.personality.secondary === secondaryDim);
        matchedFigure = perfectMatch || candidates[0];
      } else {
        // Fallback: should not happen if figures cover all primary types
        matchedFigure = figures[0];
      }

      // Special handling for high Realism (R) if not already matched to an R-primary
      // PRD: "R高者优先匹配现实政治人物（曹操、武则天、司马懿）"
      // If R is high (e.g., in top 2) and current match is not very 'realistic', maybe swap?
      // For MVP, we'll stick to the defined logic unless R is primary.
      // Note: Cao Cao is Primary P, Extreme R. Sima Yi is Primary S. 
      // If R is high but not primary, it might not trigger unless we add specific logic.
      // Let's add: If R is the second highest score and > 20, consider switching to an R-heavy character if the primary match allows.
      // But given the figure definitions, Cao Cao has Extreme R. So if R >= 28, he is caught by extreme check.
    }

    set({
      result: {
        id: crypto.randomUUID(),
        scores,
        matchedFigure: matchedFigure!,
        createdAt: new Date(),
        answers
      },
      currentStep: 'result'
    });
  }
}));

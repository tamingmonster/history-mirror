export interface PersonalityScores {
  P: number; // Power (权力驱动)
  S: number; // Strategy (战略理性)
  E: number; // Emotion (情义浓度)
  I: number; // Idealism (理想主义)
  R: number; // Realism (现实主义)
  T: number; // Transcendence (超然疏离)
}

export type PersonalityDimension = keyof PersonalityScores;

export interface HistoricalFigure {
  id: string;
  name: string;
  dynasty: string;
  avatar?: string; // Optional, might use placeholder or generated image
  description: string;
  personality: {
    primary: PersonalityDimension;
    secondary: PersonalityDimension;
    extreme?: PersonalityDimension;
  };
  category: 'power' | 'strategy' | 'ideal' | 'emotion' | 'transcend';
  quote?: string; // Added for flavor text
}

export interface Question {
  id: number;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  isWeighted?: boolean; // Default false
  isRealismCheck?: boolean; // Default false
}

export interface TestResult {
  id: string;
  scores: PersonalityScores;
  matchedFigure: HistoricalFigure;
  createdAt: Date;
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>;
}

export interface AppState {
  currentStep: 'welcome' | 'testing' | 'result' | 'share';
  currentQuestion: number;
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  result: TestResult | null;
  isGeneratingImage: boolean;
  history: ('A' | 'B' | 'C' | 'D')[]; // To track history for back navigation
}

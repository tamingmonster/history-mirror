import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { questions } from '../data/questions';
import { ChevronLeft } from 'lucide-react';
import clsx from 'clsx';

export const Test: React.FC = () => {
  const { currentQuestion, answerQuestion, prevQuestion, answers } = useAppStore();
  const question = questions[currentQuestion];
  const totalQuestions = questions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswer = (option: 'A' | 'B' | 'C' | 'D') => {
    // Small delay for better UX
    setTimeout(() => {
      answerQuestion(question.id, option);
    }, 200);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-6 bg-cream relative overflow-hidden">
      
      {/* Progress Bar */}
      <div className="w-full max-w-xl fixed top-0 left-0 right-0 px-6 py-4 z-20 bg-cream/95 backdrop-blur-sm border-b-2 border-ink">
        <div className="flex justify-between text-ink font-sans font-bold mb-2 text-sm uppercase tracking-widest">
          <span>第 {currentQuestion + 1} 题</span>
          <span>共 {totalQuestions} 题</span>
        </div>
        <div className="h-4 bg-white rounded-full overflow-hidden border-2 border-ink shadow-brutal-sm">
          <div 
            className="h-full bg-brand-green border-r-2 border-ink transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="w-full max-w-2xl mt-20 mb-24 z-10 space-y-6 px-2 overflow-y-auto">
        {/* Question Card */}
        <div className="card min-h-[160px] flex items-center justify-center relative transform -rotate-1 hover:rotate-0 transition-transform duration-300 mx-2">
            {/* Decorative tape */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-brand-yellow/80 rotate-2 border-2 border-ink z-10"></div>
            
            <h2 className="text-2xl md:text-3xl font-serif font-black text-ink text-center leading-tight px-2">
                {question.text}
            </h2>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 gap-3 pb-20">
          {Object.entries(question.options).map(([key, text]) => (
            <button
              key={key}
              onClick={() => handleAnswer(key as 'A' | 'B' | 'C' | 'D')}
              className={clsx(
                "w-full p-4 rounded-xl border-2 text-left transition-all duration-200 group relative overflow-hidden flex flex-row items-center justify-between min-h-[80px]",
                "hover:-translate-y-1 hover:shadow-brutal active:scale-[0.98]",
                answers[question.id] === key 
                  ? "bg-brand-blue text-white border-ink shadow-brutal transform -translate-y-1" 
                  : "bg-white text-ink border-ink hover:border-ink"
              )}
            >
              <div className="flex-1 pr-4">
                <span className={clsx(
                  "text-lg font-sans font-bold leading-tight block",
                  answers[question.id] === key ? "text-white" : "text-ink"
                )}>
                  {text}
                </span>
              </div>
              <span className={clsx(
                "w-8 h-8 flex items-center justify-center rounded-full border-2 text-lg font-bold font-sans transition-colors flex-shrink-0",
                answers[question.id] === key
                  ? "bg-white border-ink text-brand-blue"
                  : "bg-brand-yellow border-ink text-ink"
              )}>
                {key}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t-2 border-ink z-20 flex justify-between items-center shadow-[0_-4px_0_0_rgba(21,21,21,1)]">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className={clsx(
            "flex items-center text-ink font-sans font-bold text-lg hover:text-brand-orange transition-colors uppercase tracking-wide px-4 py-2 rounded-lg hover:bg-gray-100",
            currentQuestion === 0 && "opacity-0 pointer-events-none"
          )}
        >
          <ChevronLeft size={24} strokeWidth={3} />
          <span className="ml-1">上一题</span>
        </button>
        
        <span className="text-ink font-sans font-bold text-xs uppercase tracking-widest bg-brand-yellow border-2 border-ink px-4 py-2 rounded-full shadow-brutal-sm">
          {Math.round(progress)}% 完成
        </span>
      </div>
    </div>
  );
};

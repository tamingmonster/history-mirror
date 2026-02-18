import React, { useRef, useState, useMemo } from 'react';
import { useAppStore } from '../store/useAppStore';
import { Download, ChevronLeft, QrCode, Quote } from 'lucide-react';
import { snapdom } from '@zumer/snapdom';
import { getKeywords } from '../utils/keywords';

export const Share: React.FC = () => {
  const { result, resetTest } = useAppStore();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Memoize keywords to avoid recalculation
  const keywords = useMemo(() => {
    if (!result) return [];
    return getKeywords(result.scores);
  }, [result]);

  if (!result) return null;

  const { matchedFigure } = result;

  const handleDownload = async () => {
    if (!cardRef.current) return;
    setIsGenerating(true);
    try {
      await snapdom.download(cardRef.current, {
        type: 'png',
        filename: `history-mirror-${matchedFigure.name}.png`,
        scale: 2, // High resolution
      });
    } catch (error) {
      console.error('Failed to generate image:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-cream overflow-y-auto">
      
      {/* Capture Area - Poster Style */}
      <div className="flex-1 w-full flex items-center justify-center pb-32">
        <div 
          ref={cardRef}
          className="w-full max-w-md bg-cream aspect-[9/16] relative flex flex-col border-4 border-ink shadow-brutal mx-auto overflow-hidden"
        >
          {/* Decorative Corner Patterns */}
          <div className="absolute top-0 left-0 w-16 h-16 border-r-2 border-b-2 border-ink rounded-br-3xl bg-brand-orange/20 z-0"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-l-2 border-b-2 border-ink rounded-bl-3xl bg-brand-blue/20 z-0"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-r-2 border-t-2 border-ink rounded-tr-3xl bg-brand-green/20 z-0"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-l-2 border-t-2 border-ink rounded-tl-3xl bg-brand-purple/20 z-0"></div>

          {/* Header */}
          <div className="text-center z-10 pt-12 pb-6">
            <h2 className="font-sans font-bold text-sm tracking-[0.3em] text-ink/60 uppercase mb-2">
              History Mirror
            </h2>
            <div className="inline-block border-y-2 border-ink py-1 px-4">
              <h1 className="font-serif font-black text-2xl text-ink tracking-widest">
                历史镜像
              </h1>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col items-center justify-center px-8 relative z-10">
            {/* Intro */}
            <p className="font-serif text-ink/80 text-lg mb-4 italic">
              如果穿越回古代，我是...
            </p>

            {/* Character Name - Large Vertical or Bold */}
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-ink/5 rotate-3 rounded-lg blur-sm"></div>
              <h1 className="relative font-serif font-black text-7xl text-ink tracking-tight leading-none z-10 drop-shadow-sm">
                {matchedFigure.name}
              </h1>
              <div className="absolute -right-6 -bottom-4 bg-brand-red text-cream text-xs font-bold px-2 py-1 rotate-12 border border-ink shadow-sm">
                {matchedFigure.dynasty}
              </div>
            </div>

            {/* Keywords */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {keywords.map((keyword, index) => (
                <span 
                  key={index} 
                  className={`
                    px-3 py-1 border-2 border-ink text-sm font-bold shadow-[2px_2px_0_0_rgba(21,21,21,1)] bg-white
                    ${index === 0 ? 'rotate-[-3deg]' : index === 1 ? 'rotate-[2deg]' : 'rotate-[-1deg]'}
                  `}
                >
                  #{keyword}
                </span>
              ))}
            </div>

            {/* Quote / Description */}
            <div className="relative bg-white/50 p-6 border-2 border-ink rounded-lg backdrop-blur-sm max-w-xs mx-auto">
              <Quote className="absolute -top-3 -left-3 text-ink fill-brand-yellow w-8 h-8 transform -scale-x-100" />
              <p className="font-serif text-ink text-justify leading-relaxed text-sm md:text-base">
                {matchedFigure.quote || matchedFigure.description}
              </p>
              <Quote className="absolute -bottom-3 -right-3 text-ink fill-brand-yellow w-8 h-8" />
            </div>
          </div>

          {/* Footer / Call to Action */}
          <div className="mt-auto bg-ink text-cream p-6 flex items-center justify-between relative z-10">
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">测测你的</span>
              <span className="font-serif text-2xl font-black text-brand-yellow">历史人格</span>
            </div>
            
            <div className="flex items-center space-x-3 bg-cream/10 p-2 rounded-lg border border-cream/20">
              <div className="bg-white p-1 rounded">
                <QrCode className="w-10 h-10 text-ink" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider opacity-80">Scan to Play</p>
                <p className="text-xs font-bold">扫码测试</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t-2 border-ink z-20 shadow-[0_-4px_0_0_rgba(21,21,21,1)]">
        <div className="max-w-xl mx-auto flex space-x-4">
          <button 
            onClick={resetTest}
            className="btn-secondary flex-1 flex items-center justify-center space-x-2 text-sm md:text-base px-4"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
            <span>返回首页</span>
          </button>
          
          <button 
            onClick={handleDownload}
            disabled={isGenerating}
            className="btn-primary flex-[2] flex items-center justify-center space-x-2 text-sm md:text-base px-4"
          >
            {isGenerating ? (
              <span className="animate-pulse">生成中...</span>
            ) : (
              <>
                <Download size={20} strokeWidth={2.5} />
                <span>保存图片</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

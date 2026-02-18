import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { Sparkles, Brain, ArrowRight } from 'lucide-react';

export const Welcome: React.FC = () => {
  const startTest = useAppStore((state) => state.startTest);

  return (
    <div className="min-h-screen max-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-cream">
      {/* Decorative background elements - scattered like the reference image */}
      <div className="absolute top-10 left-10 text-brand-yellow animate-float opacity-80">
        <Sparkles size={64} strokeWidth={2.5} />
      </div>
      <div className="absolute top-20 right-20 text-brand-blue animate-float opacity-80 delay-1000">
        <Brain size={56} strokeWidth={2.5} />
      </div>

      <div className="max-w-xl w-full text-center space-y-8 z-10 relative flex-1 flex flex-col justify-center">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-8xl font-serif font-black text-ink leading-tight tracking-tight">
            历史
            {/* <br /> */}
            <span className="italic text-brand-orange">镜像</span>
          </h1>
          <p className="text-lg md:text-xl font-sans font-bold uppercase tracking-widest text-ink/80 border-y-2 border-ink py-4 mx-10">
            谁是你灵魂深处的历史印记？
          </p>
        </div>

        <div className="card transform rotate-2 hover:rotate-0 transition-transform duration-500 mx-4">
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-3 border-b-2 border-ink pb-2">
              <span className="text-2xl">📜</span>
              <span className="font-serif font-bold text-xl">测试说明</span>
            </div>
            <ul className="space-y-3 font-sans font-medium text-lg text-ink">
              <li className="flex items-center space-x-3 group">
                <span className="w-8 h-8 rounded-full bg-brand-yellow border-2 border-ink flex items-center justify-center group-hover:bg-brand-orange transition-colors">1</span>
                <span>回答40道精选题目</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <span className="w-8 h-8 rounded-full bg-brand-blue border-2 border-ink flex items-center justify-center text-white group-hover:bg-brand-purple transition-colors">2</span>
                <span>分析6维人格模型</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <span className="w-8 h-8 rounded-full bg-brand-green border-2 border-ink flex items-center justify-center text-white group-hover:bg-brand-yellow group-hover:text-ink transition-colors">3</span>
                <span>遇见你的历史双生</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full max-w-sm z-20 sticky bottom-6 bg-cream/90 backdrop-blur-sm p-4 rounded-xl border-2 border-ink shadow-brutal-sm">
        <button 
          onClick={startTest}
          className="btn-primary w-full text-xl flex items-center justify-center space-x-3 group mb-2"
        >
          <span>开始旅程</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
        </button>
        
        <p className="text-xs text-center font-sans font-bold uppercase tracking-wide text-ink/60">
          预计用时: 5-8 分钟
        </p>
      </div>
    </div>
  );
};

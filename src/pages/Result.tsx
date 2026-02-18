import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { Radar } from 'react-chartjs-2';
import { Share2, RefreshCw, Trophy } from 'lucide-react';
import '../utils/chartSetup';

export const Result: React.FC = () => {
  const { result, resetTest, goToShare } = useAppStore();

  if (!result) return null;

  const { matchedFigure, scores } = result;

  const data = {
    labels: ['权力 P', '战略 S', '情义 E', '理想 I', '现实 R', '超然 T'],
    datasets: [
      {
        label: '人格维度',
        data: [scores.P, scores.S, scores.E, scores.I, scores.R, scores.T],
        backgroundColor: 'rgba(90, 89, 230, 0.2)', // Brand Blue
        borderColor: '#5A59E6',
        borderWidth: 3,
        pointBackgroundColor: '#E85A2E', // Brand Orange
        pointBorderColor: '#151515',
        pointBorderWidth: 2,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#151515',
        pointRadius: 6,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          color: 'rgba(21, 21, 21, 0.1)',
          lineWidth: 2,
        },
        grid: {
          color: 'rgba(21, 21, 21, 0.05)',
          circular: true,
          lineWidth: 2,
        },
        pointLabels: {
          font: {
            family: '"DM Sans", sans-serif',
            size: 12,
            weight: 'bold' as const,
          },
          color: '#151515',
        },
        ticks: {
          display: false,
          maxTicksLimit: 5,
        },
        suggestedMin: 0,
        suggestedMax: 40,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-cream overflow-y-auto">
      <div className="max-w-xl w-full space-y-8 pb-32 pt-4">
        
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-serif font-black text-ink leading-tight">
            {matchedFigure.name}
          </h1>
          <p className="text-xl font-sans font-bold text-brand-blue uppercase tracking-wide">
            {matchedFigure.dynasty} · {matchedFigure.category === 'power' ? '权力极强型' : 
             matchedFigure.category === 'strategy' ? '谋略操盘型' :
             matchedFigure.category === 'ideal' ? '铁血理想型' :
             matchedFigure.category === 'emotion' ? '情义统合型' :
             matchedFigure.category === 'transcend' ? '超然觉醒型' : matchedFigure.category}
          </p>
        </div>

        {/* Character Card */}
        <div className="card bg-white relative overflow-visible mt-12 transform rotate-1 hover:rotate-0 transition-transform duration-500">
           <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 rounded-full bg-brand-yellow border-4 border-ink shadow-brutal flex items-center justify-center overflow-hidden">
                 <Trophy size={40} className="text-ink" strokeWidth={2.5} />
              </div>
           </div>
           <div className="pt-12 text-center space-y-6">
              <p className="text-2xl font-serif font-bold italic text-ink px-4 leading-relaxed">
                "{matchedFigure.quote}"
              </p>
              <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full"></div>
              <p className="text-ink/80 font-sans font-medium leading-relaxed text-justify px-4 text-lg">
                {matchedFigure.description}
              </p>
           </div>
        </div>

        {/* Radar Chart */}
        <div className="card h-96 flex items-center justify-center p-4 transform -rotate-1 hover:rotate-0 transition-transform duration-500 bg-white">
           <Radar data={data} options={options} />
        </div>
      </div>

      {/* Fixed Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t-2 border-ink z-20 shadow-[0_-4px_0_0_rgba(21,21,21,1)]">
        <div className="max-w-xl mx-auto flex space-x-4">
          <button 
            onClick={resetTest}
            className="btn-secondary flex-1 flex items-center justify-center space-x-2 group text-sm md:text-base px-4"
          >
            <RefreshCw size={20} strokeWidth={2.5} className="group-hover:rotate-180 transition-transform duration-500" />
            <span>再测一次</span>
          </button>
          
          <button 
            onClick={goToShare}
            className="btn-primary flex-[2] flex items-center justify-center space-x-2 bg-brand-blue border-brand-blue text-white text-sm md:text-base px-4"
          >
            <Share2 size={20} strokeWidth={2.5} />
            <span>生成分享画像</span>
          </button>
        </div>
      </div>
    </div>
  );
};

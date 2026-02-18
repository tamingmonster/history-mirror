import React from 'react';
import { useAppStore } from './store/useAppStore';
import { Welcome } from './pages/Welcome';
import { Test } from './pages/Test';
import { Result } from './pages/Result';
import { Share } from './pages/Share';

function App() {
  const currentStep = useAppStore((state) => state.currentStep);

  return (
    <div className="font-sans text-ink bg-cream min-h-screen selection:bg-brand-yellow selection:text-ink">
      {currentStep === 'welcome' && <Welcome />}
      {currentStep === 'testing' && <Test />}
      {currentStep === 'result' && <Result />}
      {currentStep === 'share' && <Share />}
    </div>
  );
}

export default App;

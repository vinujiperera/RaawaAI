import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Login from './components/Login';
import SimulationForm from './components/SimulationForm';
import Dashboard from './components/Dashboard';
import RefinementPanel from './components/RefinementPanel';
import ReportViewer from './components/ReportViewer';
import { runSimulation, refinePolicy, generateReport } from './services/geminiService';

const App = () => {
  const [view, setView] = useState('landing');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [refinement, setRefinement] = useState(null);
  const [report, setReport] = useState(null);
  const [isRefining, setIsRefining] = useState(false);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);

  const handleStartSimulation = async (concept, audience) => {
    setIsLoading(true);
    setRefinement(null);
    try {
      const data = await runSimulation(concept, audience);
      setResult(data);
    } catch (error) {
      console.error("Simulation failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefine = async () => {
    if (!result) return;
    setIsRefining(true);
    try {
      const data = await refinePolicy(result.concept, result.summary);
      setRefinement(data);
    } catch (error) {
      console.error("Refinement failed:", error);
    } finally {
      setIsRefining(false);
    }
  };

  const handleGenerateReport = async () => {
    if (!result) return;
    setIsGeneratingReport(true);
    try {
      const data = await generateReport(result);
      setReport(data);
    } catch (error) {
      console.error("Report generation failed:", error);
    } finally {
      setIsGeneratingReport(false);
    }
  };

  if (view === 'login') return <Login onBack={() => setView('landing')} />;

  return (
    <div className="min-h-screen bg-[#050816] text-slate-100 selection:bg-blue-500/30">
      <Header 
        onHome={() => setView('landing')}
        onSignIn={() => setView('login')}
        onStart={() => setView('simulator')}
        showNav={view === 'simulator'}
      />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {view === 'landing' ? (
          <Hero onStart={() => setView('simulator')} />
        ) : (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-black mb-4 tracking-tight">Pulse Command</h1>
              <p className="text-slate-500 font-medium text-lg uppercase tracking-widest">
                Predicting Human Resonance via Multi-Agent Personas
              </p>
            </div>

            <SimulationForm onSubmit={handleStartSimulation} isLoading={isLoading} />

            {result && (
              <Dashboard 
                result={result} 
                onRefine={handleRefine}
                onGenerateReport={handleGenerateReport}
                isRefining={isRefining}
                isGeneratingReport={isGeneratingReport}
              />
            )}

            {refinement && (
              <RefinementPanel 
                refinement={refinement} 
                onClose={() => setRefinement(null)} 
              />
            )}
          </div>
        )}
      </main>

      {report && (
        <ReportViewer 
          report={report} 
          onClose={() => setReport(null)} 
        />
      )}

      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/5 blur-[150px] rounded-full"></div>
      </div>
    </div>
  );
};

export default App;

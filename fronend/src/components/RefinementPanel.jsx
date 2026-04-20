import React from 'react';

const RefinementPanel = ({ refinement, onClose }) => {
  return (
    <div className="bg-emerald-950/20 border-2 border-emerald-500/20 rounded-[2rem] p-10 shadow-3xl mb-12 animate-in fade-in slide-in-from-top duration-500 backdrop-blur-md relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] -z-10"></div>
      
      <div className="flex justify-between items-start mb-8">
        <h2 className="text-2xl font-bold text-emerald-400 flex items-center">
          <span className="bg-emerald-500 w-3 h-8 rounded-full mr-5 shadow-[0_0_15px_rgba(16,185,129,0.3)]"></span>
          Neural Optimization Report
        </h2>
        <button onClick={onClose} className="p-2 text-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-xl transition-all">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white/[0.02] p-8 rounded-3xl border border-emerald-500/10 shadow-inner">
          <h3 className="text-[10px] font-black text-emerald-500 uppercase mb-4 tracking-[0.3em]">Optimized Logic Vector</h3>
          <p className="text-slate-100 leading-relaxed font-bold text-lg opacity-90">
            {refinement.improvedConcept}
          </p>
        </div>
        <div className="bg-white/[0.02] p-8 rounded-3xl border border-emerald-500/10 shadow-inner">
          <h3 className="text-[10px] font-black text-emerald-500 uppercase mb-4 tracking-[0.3em]">Delta Reasoning</h3>
          <p className="text-slate-400 text-sm leading-relaxed font-medium">
            {refinement.reasoning}
          </p>
        </div>
      </div>
      
      <div className="mt-8 flex justify-end">
        <button 
          onClick={() => {
            navigator.clipboard.writeText(refinement.improvedConcept);
          }}
          className="group relative text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-8 py-4 rounded-xl hover:bg-emerald-500/20 transition-all active:scale-95 border border-emerald-500/20"
        >
          Copy Heuristic Fix
          <div className="absolute inset-0 rounded-xl bg-emerald-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>
    </div>
  );
};

export default RefinementPanel;

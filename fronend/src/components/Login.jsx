import React from 'react';

const Login = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-100 flex flex-col font-inter">
      {/* Header */}
      <header className="w-full border-b border-white/5 py-8 px-12 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={onBack}>
          <div className="w-10 h-10 relative flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#49C5E0]" />
              <path d="M12 28V12H20C24 12 26 14 26 18C26 21 24 23 20 24L26 30V32H23L17 25H15V32H12Z" fill="url(#grad1)" />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#49C5E0', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#1061CC', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="text-4xl font-black tracking-tight bg-gradient-to-r from-[#49C5E0] to-[#1061CC] bg-clip-text text-transparent">
            RaawaAI
          </span>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center pt-24 pb-12">
        <h1 className="text-3xl font-medium mb-4">Welcome Back</h1>
        <p className="text-[#4285F4] text-sm mb-12">Sign in to your account to continue</p>

        <form className="w-full max-w-[480px] space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="w-full bg-[#050816] border border-slate-800 rounded-xl py-3.5 pl-12 pr-4 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="w-full bg-[#050816] border border-slate-800 rounded-xl py-3.5 pl-12 pr-12 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-500"
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-[#1A4B9F] hover:bg-[#205bc2] text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98]">
            Sign In
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;

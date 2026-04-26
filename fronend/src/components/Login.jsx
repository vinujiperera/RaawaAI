import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, X } from 'lucide-react';

const Login = ({ onBack }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full text-slate-100 flex flex-col font-sans">
      {/* Header */}
      <header className="w-full border-b border-white/5 py-6 px-12 flex justify-between items-center bg-[#050816]">
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
          <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-[#49C5E0] to-[#1061CC] bg-clip-text text-transparent">
            RAAWA AI
          </span>
        </div>
      </header>

      {/* Main content - Forced to fill a large portion of viewport to push footer down */}
      <main className="min-h-screen flex flex-col items-center justify-center relative px-6 py-8 pb-20">
        {/* Close Button */}
        <button 
          onClick={onBack}
          className="absolute top-8 right-12 text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="w-full max-w-[480px] flex flex-col items-center">
          <h1 className="text-3xl font-medium mb-2 tracking-tight">Welcome Back</h1>
          <p className="text-blue-500 text-sm mb-12 font-medium">Sign in to your account to continue</p>

          <form className="w-full space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-300">Email</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </span>
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  className="w-full bg-[#050816] border border-slate-800 rounded-lg py-3 pl-12 pr-4 focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-300">Password</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors">
                  <Lock className="w-5 h-5" />
                </span>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter your password" 
                  className="w-full bg-[#050816] border border-slate-800 rounded-lg py-3 pl-12 pr-12 focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-600"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between py-1">
              <label className="flex items-center space-x-2.5 cursor-pointer select-none group text-slate-300 hover:text-white transition-colors">
                <div className="relative flex items-center">
                  <input type="checkbox" className="peer w-5 h-5 rounded border-slate-800 bg-[#050816] checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer" defaultChecked />
                </div>
                <span className="text-sm">Remember me</span>
              </label>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Forgot password?</a>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3.5 rounded-lg shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98]"
            >
              Sign In
            </button>

            <div className="text-center text-sm pt-2">
              <span className="text-slate-400">Don't have an account? </span>
              <a href="#" className="text-blue-500 hover:underline font-medium">Sign up</a>
            </div>

            <div className="relative py-4 flex items-center justify-center">
              <div className="absolute inset-x-0 h-[1px] bg-slate-800"></div>
              <span className="relative z-10 bg-[#050816] px-4 text-xs font-medium text-slate-500">Or continue with</span>
            </div>

            <button 
              type="button" 
              className="w-full bg-[#1A365D]/30 border border-slate-800/50 hover:bg-[#1A365D]/50 text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center space-x-3 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.273 0 3.19 2.427.604 6.136l4.662 3.629z" />
                <path fill="#FBBC05" d="M.604 6.136L5.266 9.765A7.066 7.066 0 0 1 12 19.091c.21 0 .415-.013.62-.036l.001.001c.254-.027.503-.073.745-.136L18.028 23.55a12.001 12.001 0 0 0-5.419 1.141c.227 0 .45-.008.672-.023a12.02 12.02 0 0 0 6.62-2.126l-4.662-3.629c-.205.023-.41.036-.62.036a7.066 7.066 0 0 1-6.666-4.91L.604 6.136z" />
                <path fill="#4285F4" d="M23.491 12.273c0-.818-.073-1.609-.21-2.364H12v4.477h6.49c-.282 1.495-1.127 2.764-2.395 3.614l4.662 3.629c2.727-2.518 4.734-6.227 4.734-10.356z" />
                <path fill="#34A853" d="M12 24c3.245 0 5.973-1.077 7.964-2.918l-4.662-3.629c-1.118.75-2.545 1.191-3.964 1.191-3.055 0-5.636-2.064-6.564-4.845L.112 17.436C2.112 21.318 6.136 24 12 24z" />
              </svg>
              <div className="flex items-center border-l border-slate-700 pl-3">
                <span className="text-slate-250">Sign in with Google</span>
              </div>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
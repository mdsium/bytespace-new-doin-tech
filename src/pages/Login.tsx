import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { AuthVisualComposition } from '../components/auth/AuthVisualComposition';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      navigate('/courses');
    }
  };

  return (
    <div className="min-h-screen bg-[#003BE2] relative flex flex-col justify-between p-6 sm:p-8 lg:p-12 select-none overflow-x-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 2px, transparent 2px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      
      <div className="relative z-20 w-full max-w-[1240px] xl:max-w-[1280px] mx-auto flex flex-col flex-1 justify-between">
        {/* Top Bar: Left = Logo (aligned with left content), Right = Back to Home Button (aligned with right card) */}
        <header className="flex items-center justify-between w-full">
          <Link to="/" className="inline-flex items-center" aria-label="ByteSpace Home">
            <img
              src="/ByteSpaceIcon.png"
              alt="ByteSpace"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain hover:scale-105 transition-transform"
            />
          </Link>

          {/* Back to Home Button Top Right */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-white/25 transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            <span>Back to Home</span>
          </Link>
        </header>

        {/* Main 2-Column Split: Exactly aligned with Logo on left and Back to Home on right (W: 579px, H: 784px) */}
        <main className="flex-1 w-full flex items-center justify-between my-auto py-6 sm:py-8 lg:py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-10 xl:gap-14">
            {/* Left Column: Aligned flush with Logo */}
            <div className="w-full lg:w-auto flex justify-start shrink-0">
              <AuthVisualComposition
                title="Sign in with ease"
                subtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
              />
            </div>

            {/* Right Column: Clean White Form Card matching Figma (W: 579px, H: 784px) aligned flush with Back to Home button */}
            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <div className="w-full max-w-[579px] lg:w-[579px] min-h-[640px] lg:h-[784px] bg-white rounded-[40px] sm:rounded-[44px] p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col justify-between text-left select-none border border-slate-100/90">
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-[#003BE2] block mb-2">
                    Sign In
                  </span>

                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.15] mb-8 font-poppins">
                    Welcome Back
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="designer@example.com"
                        required
                        className="w-full px-5 py-3.5 sm:py-4 rounded-[16px] border border-slate-200 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#003BE2] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="********"
                        required
                        className="w-full px-5 py-3.5 sm:py-4 rounded-[16px] border border-slate-200 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#003BE2] transition-colors"
                      />
                    </div>

                    {/* Right-aligned Sign In Button matching Login.png */}
                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        className="px-9 sm:px-10 py-3 sm:py-3.5 rounded-full bg-[#CBFC01] text-slate-950 font-bold text-sm sm:text-base hover:brightness-105 active:scale-95 transition-all shadow-md cursor-pointer"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>

                  {/* Or Divider matching Login.png */}
                  <div className="relative my-7 sm:my-8 text-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-200" />
                    </div>
                    <span className="relative px-4 bg-white text-xs sm:text-sm text-slate-400">
                      or
                    </span>
                  </div>

                  {/* Social Login Buttons: Facebook & Google matching Login.png */}
                  <div className="flex items-center justify-center gap-4">
                    {/* Facebook Button */}
                    <button
                      type="button"
                      className="w-13 h-13 sm:w-14 sm:h-14 rounded-[18px] border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
                      aria-label="Sign in with Facebook"
                    >
                      <svg className="w-6 h-6 fill-slate-950" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>

                    {/* Google Button */}
                    <button
                      type="button"
                      className="w-13 h-13 sm:w-14 sm:h-14 rounded-[18px] border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
                      aria-label="Sign in with Google"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          fill="#EA4335"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Create Account Link */}
                <div className="pt-6 text-center">
                  <p className="text-xs sm:text-sm text-slate-600">
                    New user?{' '}
                    <Link to="/signup" className="text-[#003BE2] font-semibold hover:underline">
                      Create an account
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Spacer */}
        <div className="h-2 w-full" />
      </div>
    </div>
  );
};

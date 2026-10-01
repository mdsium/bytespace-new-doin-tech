import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { AuthVisualComposition } from '../components/auth/AuthVisualComposition';

export const Signup: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      navigate('/login');
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

      {/* Shared Outer Container: Ensures Header (Logo & Back button) and Main Content share EXACT alignment */}
      <div className="relative z-20 w-full max-w-[1240px] xl:max-w-[1280px] mx-auto flex flex-col flex-1 justify-between">
        {/* 2. Top Bar: Left = Logo, Right = Back to Home Button */}
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

        {/* 3. Main 2-Column Split: Visual on Left, Form Card on Right (Figma 579px x 784px) */}
        <main className="flex-1 w-full flex items-center justify-between my-auto py-6 sm:py-8 lg:py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-10 xl:gap-14">
  
            <div className="w-full lg:w-auto flex justify-start shrink-0">
              <AuthVisualComposition
                title="Join Our Learning Community"
                subtitle="Unlock unlimited access to expert-led digital creation courses and accelerate your journey today."
              />
            </div>

      
            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <div className="w-full max-w-[579px] lg:w-[579px] min-h-[640px] lg:h-[784px] bg-white rounded-[40px] sm:rounded-[44px] p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col justify-between text-left select-none border border-slate-100">
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-[#003BE2] block mb-2">
                    Create an Account
                  </span>

                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.15] mb-8 font-poppins">
                    Welcome to <br />
                    ByteSpace
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Jamie Davis"
                        required
                        className="w-full px-5 py-3.5 sm:py-4 rounded-[16px] border border-slate-200 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#003BE2] transition-colors"
                      />
                    </div>

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

                   
                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        className="px-9 sm:px-10 py-3 sm:py-3.5 rounded-full bg-[#CBFC01] text-slate-950 font-bold text-sm sm:text-base hover:brightness-105 active:scale-95 transition-all shadow-md cursor-pointer"
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                </div>

                {/* Already have an account */}
                <div className="pt-6 text-center">
                  <p className="text-xs sm:text-sm text-slate-500">
                    Already have an account?{' '}
                    <Link to="/login" className="text-[#003BE2] font-semibold hover:underline">
                      Login
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

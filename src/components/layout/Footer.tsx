import React, { useState } from 'react';
import { ByteSpaceLogo } from '../ui/ByteSpaceLogo';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  const linkColumns = [
    [
      { name: 'Featured Courses', href: '#courses' },
      { name: 'Featured Categories', href: '#categories' },
      { name: 'Business', href: '#courses' },
      { name: 'IT', href: '#courses' },
      { name: 'Design', href: '#courses' },
    ],
    [
      { name: 'Development', href: '#courses' },
      { name: 'Marketing', href: '#courses' },
      { name: 'Photography', href: '#courses' },
      { name: 'Finance', href: '#courses' },
      { name: 'Sport', href: '#courses' },
    ],
    [
      { name: 'Become a Creator', href: '#creators' },
      { name: 'Affiliate Program', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Help', href: '#' },
      { name: 'About', href: '#' },
    ],
  ];

  return (
    <footer className="w-full bg-white pt-16 sm:pt-20 pb-12 select-none border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Newsletter + 3 Columns of Links matching Footer.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Logo + Newsletter Signup */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <ByteSpaceLogo variant="dark" size="md" />

            <p className="mt-5 text-sm sm:text-base text-slate-700 font-normal leading-relaxed max-w-sm">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input + Search Button with gap */}
            <form onSubmit={handleSubmit} className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full sm:w-[260px] md:w-[280px] px-6 py-3.5 rounded-full border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-500 shadow-2xs transition-colors"
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full bg-[#CBFC01] text-slate-950 font-bold text-sm sm:text-base hover:brightness-105 active:scale-95 transition-all shadow-xs cursor-pointer shrink-0"
              >
                {submitted ? 'Joined!' : 'Search'}
              </button>
            </form>

            <p className="mt-4 text-xs text-slate-500 leading-relaxed max-w-sm">
              By subscribing, you agree to our{' '}
              <a href="#" className="underline hover:text-slate-800 transition-colors">
                Privacy Policy
              </a>{' '}
              and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: 3 Navigation Link Columns matching Footer.png */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 text-left lg:pt-2">
            {linkColumns.map((col, colIdx) => (
              <ul key={colIdx} className="space-y-4">
                {col.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm sm:text-[15px] text-slate-700 hover:text-slate-950 transition-colors font-normal inline-block"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Thin Divider Line matching Footer.png */}
        <div className="border-t border-slate-200/90 my-10 sm:my-14" />

        {/* Bottom Bar: Copyright on Left, Legal Links on Right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
          <p>@ 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6 sm:gap-8">
            <a href="#" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

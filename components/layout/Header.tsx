'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/dich-vu', label: 'Services' },
    { href: '/giai-phap', label: 'Solutions', dropdown: true },
    { href: '/ve-xperc', label: 'About' },
  ];

  const industries = [
    { name: 'Construction & Engineering', slug: 'construction' },
    { name: 'Real Estate', slug: 'real-estate' },
    { name: 'Hospitality & Resort', slug: 'hospitality' },
    { name: 'IT / Software', slug: 'it-software' },
  ];

  const problems = [
    { name: 'AI Helpdesk', slug: 'ai-helpdesk' },
    { name: 'Meeting Summarizer', slug: 'meeting-summary' },
    { name: 'AI Project Agent', slug: 'ai-project-agent' },
    { name: 'Work Efficiency', slug: 'work-efficiency' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
        : 'bg-white border-b border-transparent'
    }`}>
      <div className="container-max py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity"
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.dropdown ? (
                  <>
                    <button className={`text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? 'text-accent'
                        : 'text-[#1A1A2E] hover:text-accent'
                    }`}>
                      {link.label} ▾
                    </button>
                    
                    {/* Mega Menu Dropdown */}
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-screen md:w-auto">
                      <div className="bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                        <div className="grid grid-cols-2 gap-8 p-8 min-w-[500px]">
                          {/* By Industry */}
                          <div>
                            <h4 className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">By Industry</h4>
                            <ul className="space-y-3">
                              {industries.map((ind) => (
                                <li key={ind.slug}>
                                  <Link
                                    href={`/nganh/${ind.slug}`}
                                    className="text-[#4A4A6A] hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                                  >
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    {ind.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* By Problem */}
                          <div>
                            <h4 className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">By Problem</h4>
                            <ul className="space-y-3">
                              {problems.map((prob) => (
                                <li key={prob.slug}>
                                  <Link
                                    href={`/bai-toan/${prob.slug}`}
                                    className="text-[#4A4A6A] hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                                  >
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    {prob.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? 'text-accent border-b-2 border-accent pb-1'
                        : 'text-[#1A1A2E] hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right: CTA Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/dat-ai-audit"
              className="inline-flex items-center px-6 py-2.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg shadow-md hover:shadow-glow transition-all duration-300"
            >
              Book AI Audit →
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`w-5 h-0.5 bg-[#1A1A2E] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-[#1A1A2E] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-[#1A1A2E] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 space-y-3 animate-slide-up">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                      className="block w-full text-left px-4 py-2 rounded-lg text-[#1A1A2E] hover:bg-gray-100 hover:text-accent transition-colors font-medium"
                    >
                      {link.label} {solutionsDropdownOpen ? '▾' : '▸'}
                    </button>
                    {solutionsDropdownOpen && (
                      <div className="ml-4 mt-2 space-y-3 border-l border-gray-200 pl-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Industries</p>
                          {industries.map((ind) => (
                            <Link
                              key={ind.slug}
                              href={`/nganh/${ind.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-sm text-[#4A4A6A] hover:text-accent py-1 transition-colors"
                            >
                              → {ind.name}
                            </Link>
                          ))}
                        </div>
                        <div className="pt-2">
                          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Problems</p>
                          {problems.map((prob) => (
                            <Link
                              key={prob.slug}
                              href={`/bai-toan/${prob.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-sm text-[#4A4A6A] hover:text-accent py-1 transition-colors"
                            >
                              → {prob.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg transition-colors font-medium ${
                      pathname === link.href
                        ? 'bg-accent/10 text-accent'
                        : 'text-[#1A1A2E] hover:bg-gray-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <a
              href="/dat-ai-audit"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg text-center mt-4 transition-all"
            >
              Book AI Audit →
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

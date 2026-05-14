'use client';

import { useState } from 'react';

interface FormData {
  fullName: string;
  jobTitle: string;
  companyName: string;
  industry: string;
  companySize: string;
  phoneNumber: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  challenge: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function BookAuditPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    jobTitle: '',
    companyName: '',
    industry: '',
    companySize: '',
    phoneNumber: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    challenge: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.jobTitle) {
      newErrors.jobTitle = 'Please select your job title';
    }

    if (!formData.companyName) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.industry) {
      newErrors.industry = 'Please select your industry';
    }

    if (!formData.companySize) {
      newErrors.companySize = 'Please select company size';
    } else if (formData.companySize === '500+') {
      newErrors.companySize = 'For enterprises over 500 employees, please email us at enterprise@xperc.com';
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else {
      const phoneRegex = /^(\+84|0[3-9])\d{8,9}$/;
      if (!phoneRegex.test(formData.phoneNumber.replace(/\s/g, ''))) {
        newErrors.phoneNumber = 'Please enter a valid Vietnamese phone number';
      }
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a date';
    } else {
      const selectedDate = new Date(formData.preferredDate);
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);

      if (selectedDate < tomorrow) {
        newErrors.preferredDate = 'Please select a future date';
      } else if (selectedDate.getDay() === 0 || selectedDate.getDay() === 6) {
        newErrors.preferredDate = 'Please select a weekday (Mon–Fri)';
      }
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a time slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
    } catch {
      setErrors({ submit: 'Something went wrong. Please try again or email us at hello@xperc.com' });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[calc(100vh-80px)] bg-bg-primary flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full">
          <div className="bg-gradient-to-br from-success/10 to-success/5 border border-success/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-success flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✓</span>
            </div>
            <h2 className="font-display text-4xl font-bold text-text-primary mb-4">
              Your AI Audit is booked!
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              We&apos;ve sent a confirmation to <span className="font-medium text-accent">{formData.email}</span>
            </p>

            <div className="bg-bg-card rounded-lg border border-border p-6 md:p-8 text-left mb-8">
              <h3 className="font-semibold text-text-primary mb-4">What&apos;s next:</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-accent flex-shrink-0">→</span>
                  <span>Check your email for calendar invite</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent flex-shrink-0">→</span>
                  <span>We&apos;ll send a brief prep questionnaire 24h before</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent flex-shrink-0">→</span>
                  <span>Your AI Opportunity Map will be ready within 3 days after the session</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-all duration-300"
              >
                Back to Home
              </a>
              <a 
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-bg-secondary border border-border text-text-primary hover:border-accent transition-all duration-300 rounded-lg"
              >
                Add to Calendar
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-bg-primary via-bg-primary to-bg-secondary section-spacing px-4">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Left Panel: Value Reminder */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-6">
              {/* Step counter */}
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                <span>Step 1 of 3 — Your Information</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-bg-card rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-gradient-to-r from-accent to-accent-hover rounded-full transition-all duration-500"></div>
              </div>

              {/* What you&apos;ll get — redesigned */}
              <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-xl border border-accent/20 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-text-primary">What you&apos;ll get</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: '🎯', text: '60-min 1-on-1 with an AI specialist' },
                    { icon: '🔍', text: 'Analysis of your operational bottlenecks' },
                    { icon: '🗺️', text: 'AI Opportunity Map tailored to your business' },
                    { icon: '🚀', text: 'Clear, prioritized next steps' },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-lg flex-shrink-0">{item.icon}</span>
                      <span className="text-sm text-text-secondary leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial — more visual */}
              <div className="relative bg-bg-card rounded-xl border border-border p-6 overflow-hidden">
                <div className="absolute top-0 right-0 text-6xl text-accent/10 font-serif leading-none pr-3 pt-1">&ldquo;</div>
                <div className="relative z-10">
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-text-secondary italic leading-relaxed mb-3">
                    &ldquo;The most concrete AI conversation I&apos;ve had. I walked away knowing exactly what to do next.&rdquo;
                  </p>
                  <p className="text-xs text-text-tertiary font-medium">
                    — COO, logistics company
                  </p>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-bg-card rounded-full px-3 py-1.5 text-xs text-text-secondary border border-border/50">
                  <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  Free — 60 min
                </span>
                <span className="inline-flex items-center gap-1.5 bg-bg-card rounded-full px-3 py-1.5 text-xs text-text-secondary border border-border/50">
                  <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                  Tailored roadmap
                </span>
                <span className="inline-flex items-center gap-1.5 bg-bg-card rounded-full px-3 py-1.5 text-xs text-text-secondary border border-border/50">
                  <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  No commitment
                </span>
              </div>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="lg:col-span-3">
            <div className="bg-bg-secondary rounded-xl border border-border p-6 md:p-8">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-2">Book your free AI Audit</h1>
              <p className="text-text-secondary text-sm mb-8">Fill in your details and we&apos;ll match you with the right specialist</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-text-primary mb-2">
                  Full Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={submitting}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-bg-secondary text-text-primary placeholder-text-tertiary transition-colors ${
                    errors.fullName
                      ? 'border-danger focus:border-danger focus:outline-none'
                      : 'border-border focus:border-accent focus:outline-none'
                  }`}
                  placeholder="Your full name"
                />
                {errors.fullName && <p className="text-danger text-xs mt-1">{errors.fullName}</p>}
              </div>

              {/* Job Title */}
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-text-primary mb-2">
                  Job Title <span className="text-danger">*</span>
                </label>
                <select
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  disabled={submitting}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-bg-secondary text-text-primary transition-colors ${
                    errors.jobTitle
                      ? 'border-danger focus:border-danger focus:outline-none'
                      : 'border-border focus:border-accent focus:outline-none'
                  }`}
                >
                  <option value="">Select your position</option>
                  <option value="CEO">CEO</option>
                  <option value="Founder">Founder</option>
                  <option value="Director">Director</option>
                  <option value="C-level">C-level</option>
                  <option value="Other">Other</option>
                </select>
                {errors.jobTitle && <p className="text-danger text-xs mt-1">{errors.jobTitle}</p>}
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-text-primary mb-2">
                  Company Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  disabled={submitting}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-bg-secondary text-text-primary placeholder-text-tertiary transition-colors ${
                    errors.companyName
                      ? 'border-danger focus:border-danger focus:outline-none'
                      : 'border-border focus:border-accent focus:outline-none'
                  }`}
                  placeholder="Your company name"
                />
                {errors.companyName && <p className="text-danger text-xs mt-1">{errors.companyName}</p>}
              </div>

              {/* Industry */}
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-text-primary mb-2">
                  Industry <span className="text-danger">*</span>
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  disabled={submitting}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-bg-secondary text-text-primary transition-colors ${
                    errors.industry
                      ? 'border-danger focus:border-danger focus:outline-none'
                      : 'border-border focus:border-accent focus:outline-none'
                  }`}
                >
                  <option value="">Select your industry</option>
                  <option value="construction">Construction & Engineering</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="hospitality">Hospitality & Resort</option>
                  <option value="it-software">IT / Software</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="fnb">F&B</option>
                  <option value="retail">Retail</option>
                  <option value="logistics">Logistics</option>
                  <option value="other">Other</option>
                </select>
                {errors.industry && <p className="text-danger text-xs mt-1">{errors.industry}</p>}
              </div>

              {/* Company Size */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  Company Size <span className="text-danger">*</span>
                </label>
                <div className="space-y-2">
                  {['20–50', '51–150', '151–500', '500+'].map((size) => (
                    <label key={size} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="companySize"
                        value={size}
                        checked={formData.companySize === size}
                        onChange={handleChange}
                        disabled={submitting}
                        className="w-4 h-4 accent-accent"
                      />
                      <span className="text-text-primary">{size}</span>
                    </label>
                  ))}
                </div>
                {errors.companySize && <p className="text-danger text-xs mt-2">{errors.companySize}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-text-primary mb-2">
                  Phone Number <span className="text-danger">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  disabled={submitting}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-bg-secondary text-text-primary placeholder-text-tertiary transition-colors ${
                    errors.phoneNumber
                      ? 'border-danger focus:border-danger focus:outline-none'
                      : 'border-border focus:border-accent focus:outline-none'
                  }`}
                  placeholder="+84 (0)123 456 789"
                />
                {errors.phoneNumber && <p className="text-danger text-xs mt-1">{errors.phoneNumber}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Email Address <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={submitting}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-bg-secondary text-text-primary placeholder-text-tertiary transition-colors ${
                    errors.email
                      ? 'border-danger focus:border-danger focus:outline-none'
                      : 'border-border focus:border-accent focus:outline-none'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-danger text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Preferred Date */}
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-text-primary mb-2">
                  Preferred Date <span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  disabled={submitting}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-bg-secondary text-text-primary transition-colors ${
                    errors.preferredDate
                      ? 'border-danger focus:border-danger focus:outline-none'
                      : 'border-border focus:border-accent focus:outline-none'
                  }`}
                />
                {errors.preferredDate && <p className="text-danger text-xs mt-1">{errors.preferredDate}</p>}
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  Preferred Time <span className="text-danger">*</span>
                </label>
                <div className="space-y-2">
                  {['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'].map((time) => (
                    <label key={time} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredTime"
                        value={time}
                        checked={formData.preferredTime === time}
                        onChange={handleChange}
                        disabled={submitting}
                        className="w-4 h-4 accent-accent"
                      />
                      <span className="text-text-primary">{time}</span>
                    </label>
                  ))}
                </div>
                {errors.preferredTime && <p className="text-danger text-xs mt-2">{errors.preferredTime}</p>}
              </div>

              {/* Challenge (optional) */}
              <div>
                <label htmlFor="challenge" className="block text-sm font-medium text-text-primary mb-2">
                  What&apos;s your biggest operational challenge right now? (Optional)
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  disabled={submitting}
                  maxLength={300}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-bg-secondary text-text-primary placeholder-text-tertiary transition-colors focus:border-accent focus:outline-none resize-none"
                  placeholder="Tell us briefly about your biggest operational challenge..."
                />
                <p className="text-xs text-text-tertiary mt-1">{formData.challenge.length}/300</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-4 font-semibold rounded-lg transition-all duration-300 ${
                  submitting
                    ? 'bg-accent/50 text-white cursor-not-allowed'
                    : 'bg-accent hover:bg-accent-hover text-white hover:shadow-glow'
                }`}
              >
                {submitting ? 'Submitting...' : 'Book Your AI Audit'}
              </button>

              {errors.submit && <p className="text-danger text-sm text-center">{errors.submit}</p>}
            </form>

            <p className="text-xs text-text-tertiary text-center mt-6">
              We respect your privacy. Your information is secure.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

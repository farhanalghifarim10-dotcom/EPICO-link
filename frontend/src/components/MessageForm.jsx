import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MessageForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('PLEASE COMPLETE ALL FIELDS BEFORE SUBMITTING.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'FAILED TO SEND MESSAGE.');
      }

      setStatus('success');
      setFormData({ name: '', contact: '', message: '' });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'UNABLE TO DISPATCH MESSAGE. CHECK CONNECTION.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section aria-labelledby="message-section-title" className="w-full max-w-md mx-auto px-4 mt-8 mb-12">
      <div className="relative border border-white/15 bg-obsidian-card p-5 sm:p-6 rounded-none sm:rounded-sm">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-white block" />
            <h2
              id="message-section-title"
              className="font-athletic text-lg sm:text-xl font-bold tracking-wider uppercase text-white"
            >
              DROP A MESSAGE
            </h2>
          </div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-ash-muted">
            DIRECT INQUIRY
          </span>
        </div>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success-box"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="py-8 px-4 text-center flex flex-col items-center justify-center space-y-4"
            >
              <div className="w-12 h-12 border-2 border-white flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div className="space-y-1">
                <h3 className="font-athletic text-xl font-bold tracking-widest uppercase text-white">
                  MESSAGE SENT
                </h3>
                <p className="font-athletic text-sm tracking-super-wide uppercase text-ash-light">
                  MAKE IT EPIC.
                </p>
                <p className="text-xs text-ash-muted max-w-xs pt-1">
                  Our official team has received your note and will review it promptly.
                </p>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 bg-white text-black font-athletic font-bold text-xs uppercase tracking-widest hover:bg-ash-light transition-colors focus-visible:ring-2 focus-visible:ring-white"
              >
                SEND ANOTHER NOTE
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="message-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
              noValidate
            >
              {/* Field 1: Name */}
              <div>
                <label
                  htmlFor="field-name"
                  className="block text-xs font-mono font-medium tracking-wider uppercase text-ash-light mb-1.5"
                >
                  YOUR NAME <span className="text-white">*</span>
                </label>
                <input
                  id="field-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="E.G. ALEX RIVERA"
                  disabled={status === 'loading'}
                  className="w-full bg-black border border-white/20 focus:border-white text-white px-3.5 py-2.5 text-sm font-sans placeholder:text-ash-subtle rounded-none transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white"
                />
              </div>

              {/* Field 2: Contact Info */}
              <div>
                <label
                  htmlFor="field-contact"
                  className="block text-xs font-mono font-medium tracking-wider uppercase text-ash-light mb-1.5"
                >
                  CONTACT (EMAIL / PHONE / IG) <span className="text-white">*</span>
                </label>
                <input
                  id="field-contact"
                  name="contact"
                  type="text"
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="E.G. @alex or alex@email.com"
                  disabled={status === 'loading'}
                  className="w-full bg-black border border-white/20 focus:border-white text-white px-3.5 py-2.5 text-sm font-sans placeholder:text-ash-subtle rounded-none transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white"
                />
              </div>

              {/* Field 3: Message / Inquiry */}
              <div>
                <label
                  htmlFor="field-message"
                  className="block text-xs font-mono font-medium tracking-wider uppercase text-ash-light mb-1.5"
                >
                  MESSAGE / INQUIRY <span className="text-white">*</span>
                </label>
                <textarea
                  id="field-message"
                  name="message"
                  rows={3}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Drop a note, collaboration proposal, or apparel inquiry..."
                  disabled={status === 'loading'}
                  className="w-full bg-black border border-white/20 focus:border-white text-white px-3.5 py-2.5 text-sm font-sans placeholder:text-ash-subtle rounded-none transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white resize-none"
                />
              </div>

              {/* Error Alert Display */}
              {status === 'error' && errorMessage && (
                <div
                  role="alert"
                  className="p-3 bg-obsidian border-l-2 border-white text-xs font-mono tracking-wide text-white uppercase"
                >
                  {errorMessage}
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`
                  w-full min-h-[48px] py-3 px-4
                  bg-white text-black hover:bg-ash-light
                  font-athletic font-bold text-sm tracking-super-wide uppercase
                  rounded-none sm:rounded-sm
                  transition-all duration-200 ease-out
                  flex items-center justify-center space-x-2
                  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black
                  disabled:opacity-50 disabled:cursor-not-allowed
                `}
              >
                {status === 'loading' ? (
                  <span className="flex items-center space-x-2">
                    <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent animate-spin inline-block" />
                    <span>SENDING...</span>
                  </span>
                ) : (
                  <span>SUBMIT INQUIRY</span>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}


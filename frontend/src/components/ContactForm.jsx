import { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContact } from '../services/api';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const initialForm = { name: '', email: '', phone: '', city: '', type: 'Residential', message: '' };

export default function ContactForm({ compact = false }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.city) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setStatus('loading');
    try {
      // Map form fields to match backend schema (city required, type goes into message)
      const payload = {
        name: form.name,
        phone: form.phone,
        email: form.email,
        city: form.city || 'Not specified',
        message: `[${form.type}] ${form.message || 'No additional message'}`,
      };
      await submitContact(payload);
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setError(err?.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center gap-4"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-display font-bold text-xl text-slate-800">Thank You!</h3>
        <p className="text-slate-500 text-sm max-w-xs">
          We received your enquiry and will get back to you within 24 hours. Our team may also WhatsApp you.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-green-700 hover:text-green-900 text-sm font-medium underline underline-offset-2"
        >
          Submit another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Rajesh Baruah"
            className="input-field"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 7002322258"
            className="input-field"
            required
          />
        </div>
      </div>

      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="input-field"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Jorhat, Guwahati..."
            className="input-field"
            required
          />
        </div>
      </div>


      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Installation Type</label>
        <select name="type" value={form.type} onChange={handleChange} className="input-field">
          <option>Residential</option>
          <option>Commercial</option>
          <option>Industrial</option>
          <option>Agricultural / Water Pump</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Message (Optional)</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={compact ? 3 : 4}
          placeholder="Tell us about your energy needs, monthly bill, or any questions..."
          className="input-field resize-none"
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {error}
        </div>
      )}

      <button
        type="submit"
        id="contact-form-submit"
        disabled={status === 'loading'}
        className="btn-primary w-full justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending...
          </span>
        ) : (
          <>
            <Send className="w-4 h-4" /> Send Enquiry
          </>
        )}
      </button>
      <p className="text-slate-400 text-xs text-center">We'll respond within 24 hours. No spam, ever.</p>
    </form>
  );
}

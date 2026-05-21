import { Link } from 'react-router-dom';
import { Sun, Phone, Mail, MapPin } from 'lucide-react';
import { submitNewsletter } from '../services/api';
import { useState } from 'react';

// Inline SVG social icons (lucide-react doesn't ship Facebook/Instagram/etc.)
const SocialFacebook = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const SocialInstagram = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);
const SocialYoutube = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" /></svg>
);
const SocialLinkedin = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);

const footerLinks = {
  Company: [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Our Projects', to: '/projects' },
    { label: 'Contact Us', to: '/contact' },
  ],
  Products: [
    { label: 'Residential Solar', to: '/products' },
    { label: 'Commercial Solar', to: '/products' },
    { label: 'Industrial Solar', to: '/products' },
    { label: 'Solar Water Pumps', to: '/products' },
  ],
  Support: [
    { label: 'Get Free Quote', to: '/contact' },
    { label: 'Solar Calculator', to: '/contact' },
    { label: 'Installation Guide', to: '/contact' },
    { label: 'Warranty Info', to: '/contact' },
  ],
};

const socials = [
  { icon: SocialFacebook, href: '#', label: 'Facebook' },
  { icon: SocialInstagram, href: '#', label: 'Instagram' },
  { icon: SocialYoutube, href: '#', label: 'YouTube' },
  { icon: SocialLinkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      await submitNewsletter({ email });
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-green-950 text-white">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center">
                <Sun className="w-6 h-6 text-green-900" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">DRT ENTERPRISE</div>
                <div className="text-green-400 text-xs">Solar Energy Solutions</div>
              </div>
            </Link>
            <p className="text-green-200/70 text-sm leading-relaxed mb-6 max-w-xs">
              Powering Assam with clean, affordable solar energy since 2022. Trusted by 500+ happy households and businesses across the Northeast.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5 mb-6">
              <a href="tel:+917002322258" className="flex items-center gap-2.5 text-sm text-green-200/80 hover:text-yellow-400 transition-colors">
                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                +91 7002322258
              </a>
              <a href="mailto:hello@drtenterprise.in" className="flex items-center gap-2.5 text-sm text-green-200/80 hover:text-yellow-400 transition-colors">
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                hello@drtenterprise.in
              </a>
              <div className="flex items-start gap-2.5 text-sm text-green-200/80">
                <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />

                <div className="flex flex-col leading-relaxed">
                  <span>Jorhat, Assam — 781001</span>
                  <span>Choladhara Chari ali, Below Mejankari</span>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-green-800/60 hover:bg-yellow-400 hover:text-green-900 flex items-center justify-center text-green-300 transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white text-sm mb-4 tracking-wide uppercase">{title}</h3>
              <ul className="space-y-2.5">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-green-200/70 hover:text-yellow-400 text-sm transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-10 border-t border-green-800/50">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div>
              <h3 className="font-semibold text-white mb-1">Get Solar Tips & Offers</h3>
              <p className="text-green-200/60 text-sm">No spam. Unsubscribe anytime.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto min-w-[320px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-xl bg-green-800/50 border border-green-700 text-white placeholder-green-400/60 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-5 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-green-900 font-semibold text-sm rounded-xl transition-colors disabled:opacity-60 whitespace-nowrap"
              >
                {status === 'loading' ? '...' : status === 'success' ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
          {status === 'error' && <p className="text-red-400 text-xs mt-2">Failed to subscribe. Please try again.</p>}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-800/50 py-5">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-green-300/50">
          <span>© 2026 DRT ENTERPRISE. All rights reserved.</span>
          <span>Made with ♥ in Jorhat, Assam</span>
        </div>
      </div>
    </footer>
  );
}

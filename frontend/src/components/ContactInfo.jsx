import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '917002322258';
const DEFAULT_MSG = encodeURIComponent('Hello DRT ENTERPRISE! I would like to learn more about your solar solutions.');

const info = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7002322258',
    href: 'tel:+917002322258',
    sub: 'Mon – Sat, 9 AM – 7 PM',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@drtenterprise.in',
    href: 'mailto:hello@drtenterprise.in',
    sub: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Jorhat, Assam — 785001',
    href: 'https://maps.google.com/?q=Jorhat+Assam',
    sub: 'Visit us for a consultation',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Sat: 9 AM – 7 PM',
    href: null,
    sub: 'Sunday by appointment',
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-5">
      {info.map(({ icon: Icon, label, value, href, sub }) => (
        <div key={label} className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-green-700" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium mb-0.5">{label}</div>
            {href ? (
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="text-slate-800 font-semibold text-sm hover:text-green-700 transition-colors"
              >
                {value}
              </a>
            ) : (
              <div className="text-slate-800 font-semibold text-sm">{value}</div>
            )}
            <div className="text-slate-400 text-xs mt-0.5">{sub}</div>
          </div>
        </div>
      ))}

      {/* WhatsApp quick CTA */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MSG}`}
        target="_blank"
        rel="noreferrer"
        id="contact-info-whatsapp"
        className="flex items-center gap-3 mt-4 bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl px-4 py-3.5 transition-colors group"
      >
        <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="text-green-800 font-semibold text-sm">Chat on WhatsApp</div>
          <div className="text-green-600/70 text-xs">Fastest way to reach us</div>
        </div>
      </a>
    </div>
  );
}

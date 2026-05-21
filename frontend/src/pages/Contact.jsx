import ScrollReveal from '../components/ScrollReveal';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-950 to-green-800 py-20 px-4">
        <div className="container-custom text-center">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest text-yellow-300 uppercase bg-yellow-400/10 border border-yellow-400/30 px-4 py-1.5 rounded-full mb-5">
              Contact Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Let's Get You <span className="text-yellow-400">Solar-Powered</span>
            </h1>
            <p className="text-green-200/70 text-lg max-w-xl mx-auto">
              Reach out for a free consultation. Our team will assess your needs and prepare a custom quote within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main contact */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-1">
              <ScrollReveal>
                <h2 className="font-display font-bold text-xl text-slate-800 mb-6">Get in Touch</h2>
                <ContactInfo />
              </ScrollReveal>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.1}>
                <div className="bg-slate-50 rounded-3xl p-7 md:p-10 border border-slate-100">
                  <h2 className="font-display font-bold text-xl text-slate-800 mb-1">Send Us an Enquiry</h2>
                  <p className="text-slate-500 text-sm mb-6">We'll respond within 24 hours on working days.</p>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="bg-slate-50 py-12">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="font-display font-bold text-xl text-slate-800 mb-5">Find Our Office</h2>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm" style={{ height: '380px' }}>
              <iframe
                title="DRT ENTERPRISE Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1059.1427372152414!2d94.19903562170991!3d26.759774884337364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3746c377e59c1a61%3A0x4773f0fcec30e363!2sCholadhara%20Chariali!5e0!3m2!1sen!2sin!4v1779348920078!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick action bar */}
      <section className="bg-green-800 py-8">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <a href="tel:+917002322258" className="inline-flex items-center gap-2 bg-white text-green-800 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors text-sm">
              📞 Call Now: +91 7002322258
            </a>
            <a
              href="https://wa.me/917002322258?text=Hello%20DRT%20ENTERPRISE!%20I%20want%20a%20free%20solar%20quote."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              💬 WhatsApp Us
            </a>
            <a href="mailto:hello@drtenterprise.in" className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              ✉️ hello@drtenterprise.in
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
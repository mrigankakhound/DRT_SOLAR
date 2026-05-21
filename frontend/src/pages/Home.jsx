import HeroSection from '../components/HeroSection';
import WhyGoSolar from '../components/WhyGoSolar';
import ProductsPreview from '../components/ProductsPreview';
import BenefitsSection from '../components/BenefitsSection';
import SavingsCalculator from '../components/SavingsCalculator';
import TestimonialsSection from '../components/TestimonialsSection';
import CTABanner from '../components/CTABanner';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyGoSolar />
      <ProductsPreview />
      <BenefitsSection />
      <SavingsCalculator />
      <TestimonialsSection />
      <CTABanner />
      <FAQSection />
      <ContactSection />
    </>
  );
}

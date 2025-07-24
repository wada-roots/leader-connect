import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import PoliciesSection from '@/components/PoliciesSection';
import Footer from '@/components/Footer';

const Policies = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <PoliciesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Policies;
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

const News = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default News;
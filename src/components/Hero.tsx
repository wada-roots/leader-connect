import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Heart, Target } from 'lucide-react';
import heroLandscape from '@/assets/hero-landscape.jpg';
import politicianPortrait from '@/assets/politician-portrait.jpg';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 64, 154, 0.7), rgba(33, 154, 92, 0.6)), url(${heroLandscape})`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-hero font-bold mb-6 leading-tight">
              Building a
              <span className="block text-secondary"> Prosperous Kenya</span>
              <span className="block">Together</span>
            </h1>
            
            <p className="text-lg sm:text-xl mb-8 max-w-2xl leading-relaxed opacity-90">
              Hon. Deal Moja Safi - Dedicated to serving the people of Kenya with integrity, 
              vision, and unwavering commitment to progress. Join me in creating 
              lasting change for our communities.
            </p>

            {/* Key Values */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-secondary" />
                <span className="font-medium">Unity</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-secondary" />
                <span className="font-medium">Integrity</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-secondary" />
                <span className="font-medium">Progress</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Read My Manifesto
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="lg:flex justify-center hidden">
            <div className="relative">
              <div className="w-72 h-72 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-white shadow-elegant">
                <img 
                  src={politicianPortrait} 
                  alt="Hon. Deal Moja Safi"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
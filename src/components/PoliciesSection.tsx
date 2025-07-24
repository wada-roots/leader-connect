import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Heart, 
  Briefcase, 
  Home, 
  Wheat, 
  Shield,
  ArrowRight 
} from 'lucide-react';

const PoliciesSection = () => {
  const policies = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Education Reform",
      description: "Ensuring quality, accessible education for all children through improved infrastructure, teacher training, and technology integration.",
      highlights: ["Free primary education", "Digital classrooms", "Teacher empowerment"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare Access",
      description: "Building a robust healthcare system that serves every Kenyan with dignity, regardless of their economic status.",
      highlights: ["Universal health coverage", "Community health centers", "Maternal care programs"]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Economic Development",
      description: "Creating sustainable job opportunities and supporting local businesses to drive economic growth in our communities.",
      highlights: ["Youth employment programs", "SME support", "Skills development"]
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Housing & Infrastructure",
      description: "Developing affordable housing solutions and modern infrastructure to improve the quality of life for all residents.",
      highlights: ["Affordable housing", "Road construction", "Clean water access"]
    },
    {
      icon: <Wheat className="w-8 h-8" />,
      title: "Agriculture & Food Security",
      description: "Supporting farmers with modern techniques, fair pricing, and market access to ensure food security and prosperity.",
      highlights: ["Farmer subsidies", "Modern farming", "Market linkages"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Governance",
      description: "Promoting transparency, accountability, and safety in our communities through good governance practices.",
      highlights: ["Community policing", "Transparent governance", "Anti-corruption measures"]
    }
  ];

  return (
    <section className="py-section bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold text-foreground mb-4">
            Our Policy <span className="text-primary">Priorities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These are the key areas where we will focus our efforts to bring about 
            meaningful change and improve the lives of every citizen in our constituency.
          </p>
        </div>

        {/* Policies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {policies.map((policy, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-card hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {policy.icon}
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {policy.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {policy.description}
                </p>
                
                {/* Policy Highlights */}
                <div className="space-y-2">
                  {policy.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Learn More?
          </h3>
          <p className="text-muted-foreground mb-6">
            Download our complete manifesto to see detailed plans and timelines for implementation.
          </p>
          <Button variant="cta" size="lg" className="group">
            Download Full Manifesto
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PoliciesSection;
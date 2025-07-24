import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, Users, Building } from 'lucide-react';
import communityEngagement from '@/assets/community-engagement.jpg';

const AboutSection = () => {
  const achievements = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "Master's in Public Administration, University of Nairobi"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Experience",
      description: "15+ years in public service and community development"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Work",
      description: "Founded 3 NGOs focused on youth empowerment"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Recognition",
      description: "Outstanding Leader Award, Kenya Leadership Institute"
    }
  ];

  return (
    <section className="py-section bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src={communityEngagement} 
              alt="Community engagement"
              className="rounded-lg shadow-elegant w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-heading font-bold text-foreground mb-6">
              Dedicated to <span className="text-primary">Serving</span> Our Community
            </h2>
            
            <div className="prose prose-lg text-muted-foreground mb-8">
              <p className="mb-4">
                Born and raised in Kenya, I have witnessed firsthand the challenges 
                and opportunities that define our community. My journey in public service began 
                with a simple belief: that every Kenyan deserves access to quality education, 
                healthcare, and economic opportunities.
              </p>
              
              <p className="mb-6">
                Throughout my career, I have championed policies that prioritize sustainable 
                development, youth empowerment, and good governance. My commitment extends beyond 
                politics to active community engagement and grassroots initiatives that create 
                tangible change in people's lives.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-primary mt-1">
                        {achievement.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="outline" size="lg">
              Read Full Biography
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
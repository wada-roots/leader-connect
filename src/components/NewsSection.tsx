import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      title: "Youth Empowerment Program Launch",
      excerpt: "Announcing a new initiative to provide skills training and mentorship for 1,000 young people in our constituency.",
      date: "March 15, 2024",
      readTime: "3 min read",
      category: "Community Development",
      image: "/api/placeholder/400/240"
    },
    {
      title: "Healthcare Access Expansion",
      excerpt: "Working with county government to establish three new health centers in underserved areas of the constituency.",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Healthcare",
      image: "/api/placeholder/400/240"
    },
    {
      title: "Infrastructure Development Update",
      excerpt: "Progress report on the ongoing road construction projects and plans for improved water access in rural areas.",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Infrastructure",
      image: "/api/placeholder/400/240"
    }
  ];

  const upcomingEvents = [
    {
      title: "Town Hall Meeting",
      date: "March 25, 2024",
      time: "2:00 PM",
      location: "[Venue Name], [Location]"
    },
    {
      title: "Youth Forum",
      date: "April 2, 2024",
      time: "10:00 AM",
      location: "[Community Center]"
    },
    {
      title: "Agricultural Workshop",
      date: "April 8, 2024",
      time: "9:00 AM",
      location: "[Agricultural Center]"
    }
  ];

  return (
    <section className="py-section bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold text-foreground mb-4">
            Latest <span className="text-primary">News</span> & Updates
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay informed about our latest initiatives, community projects, and upcoming events.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Articles */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {newsItems.map((item, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-card">
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="md:col-span-1">
                      <div className="h-48 md:h-full bg-gradient-primary rounded-l-lg flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <div className="text-4xl font-bold mb-2">
                            {item.date.split(' ')[1].split(',')[0]}
                          </div>
                          <div className="text-sm opacity-90">
                            {item.date.split(' ')[0]} {item.date.split(' ')[2]}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="md:col-span-2">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                            {item.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {item.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {item.excerpt}
                        </p>
                        <Button variant="link" className="p-0 h-auto group">
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                View All News
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <h3 className="text-xl font-bold text-foreground">Upcoming Events</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-secondary pl-4 pb-4">
                    <h4 className="font-semibold text-foreground mb-1">{event.title}</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {event.time}
                      </div>
                      <div className="text-xs">
                        {event.location}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="border-0 shadow-card bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <h3 className="text-xl font-bold text-foreground">Stay Connected</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Subscribe to our newsletter for regular updates on our work and community events.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Button variant="cta" size="sm" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
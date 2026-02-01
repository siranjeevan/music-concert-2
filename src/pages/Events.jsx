import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Heart, ArrowRight, Clock, Tag } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'SEEEDS Educational NonProfit Fundraiser',
      date: 'March 15, 2026',
      time: '7:00 PM - 9:00 PM',
      location: 'Seattle Community Center',
      initiative: 'Harmony for Hope',
      partner: 'SEEEDS Educational NonProfit',
      description: 'Join us for an evening of Carnatic fusion music supporting educational initiatives for underserved youth.',
      status: 'upcoming',
      ticketInfo: 'Suggested donation: $25'
    },
    {
      id: 2,
      title: 'Neerthuli Cultural Festival',
      date: 'April 8, 2026',
      time: '6:30 PM - 8:30 PM',
      location: 'Bellevue Arts Center',
      initiative: 'Cultural Outreach',
      partner: 'Neerthuli Organization',
      description: 'Celebrating South Indian culture and tradition through music at this vibrant community festival.',
      status: 'upcoming',
      ticketInfo: 'Free admission'
    },
    {
      id: 3,
      title: 'Northwest Folklife Festival',
      date: 'May 25-27, 2026',
      time: 'Various Times',
      location: 'Seattle Center',
      initiative: 'Community Engagement',
      partner: 'Northwest Folklife',
      description: 'Multi-day festival celebrating cultural diversity through music, featuring Dhwayam performances.',
      status: 'upcoming',
      ticketInfo: 'Festival pass required'
    },
    {
      id: 4,
      title: 'Spring Community Outreach',
      date: 'June 12, 2026',
      time: '2:00 PM - 4:00 PM',
      location: 'Sunrise Senior Living',
      initiative: 'Together Through Music',
      partner: 'Sunrise Senior Living',
      description: 'Bringing joy and musical connection to our senior community members.',
      status: 'upcoming',
      ticketInfo: 'Private event'
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Sankara Healthcare Fundraiser',
      date: 'November 18, 2025',
      location: 'Redmond Community Hall',
      initiative: 'Harmony for Hope',
      partner: 'Sankara Healthcare',
      impact: '100 children received prosthetics',
      fundsRaised: '$8,000'
    },
    {
      id: 6,
      title: 'Microsoft Giving Campaign',
      date: 'October 22, 2025',
      location: 'Microsoft Campus',
      initiative: 'Harmony for Hope',
      partner: 'Asha for Education & REDP',
      impact: '100+ students supported',
      fundsRaised: '$4,000'
    },
    {
      id: 7,
      title: 'Diwali at Aegis Living',
      date: 'October 15, 2025',
      location: 'Aegis Living Bellevue',
      initiative: 'Together Through Music',
      partner: 'Aegis Living',
      impact: '50+ seniors engaged',
      fundsRaised: 'Community impact'
    },
    {
      id: 8,
      title: 'Community Arts Center Performance',
      date: 'August 20, 2025',
      location: 'Seattle Community Arts Center',
      initiative: 'Together Through Music',
      partner: 'Community Arts Center',
      impact: '60+ participants',
      fundsRaised: 'Educational outreach'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Our <span className="gradient-text">Events</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Join us at our upcoming performances and see how music creates lasting change in our community
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                Upcoming <span className="gradient-text">Events</span>
              </h2>
              <Calendar className="text-accent-400" size={48} />
            </div>
          </AnimatedSection>

          <div className="grid gap-8">
            {upcomingEvents.map((event, index) => (
              <AnimatedSection key={event.id} delay={index * 0.1}>
                <div className="bg-gray-800 rounded-xl overflow-hidden card-hover">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 p-8">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="bg-accent-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                          {event.initiative}
                        </span>
                        <div className="flex items-center text-accent-400">
                          <Calendar className="mr-2" size={16} />
                          <span className="font-semibold">{event.date}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-serif font-bold mb-3">{event.title}</h3>
                      <p className="text-gray-400 mb-4">{event.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-gray-300">
                          <Clock className="text-accent-400 mr-3" size={16} />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <MapPin className="text-accent-400 mr-3" size={16} />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Users className="text-accent-400 mr-3" size={16} />
                          <span>Partner: {event.partner}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Tag className="text-accent-400 mr-3" size={16} />
                          <span>{event.ticketInfo}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 p-8 flex flex-col justify-center items-center text-center">
                      <Heart className="text-accent-400 mb-4" size={48} />
                      <h4 className="text-lg font-semibold mb-2">Get Involved</h4>
                      <p className="text-gray-400 text-sm mb-4">
                        Join us and be part of creating positive change through music
                      </p>
                      <button className="btn-primary w-full">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Archive */}
      <section className="section-padding bg-gray-800">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Past <span className="gradient-text">Events</span>
              </h2>
              <p className="text-xl text-gray-400">
                Celebrating the impact we've created together
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <AnimatedSection key={event.id} delay={index * 0.1}>
                <div className="bg-gray-900 rounded-xl p-6 card-hover">
                  <div className="flex items-center mb-4">
                    <Calendar className="text-accent-400 mr-3" size={20} />
                    <span className="text-accent-400 font-semibold">{event.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="text-accent-400 mr-3" size={16} />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="text-accent-400 mr-3" size={16} />
                      <span>{event.partner}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-accent-400">Impact Created</h4>
                    <p className="text-gray-300 text-sm mb-2">{event.impact}</p>
                    <p className="text-accent-400 font-semibold">{event.fundsRaised}</p>
                  </div>
                  
                  <span className="inline-block mt-4 bg-gray-800 text-accent-400 px-3 py-1 rounded-full text-sm">
                    {event.initiative}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Types of <span className="gradient-text">Events</span>
              </h2>
              <p className="text-xl text-gray-400">
                Different ways we create impact through music
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-gray-800 rounded-xl p-8 text-center card-hover">
                <Heart className="text-accent-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-4">Fundraising Concerts</h3>
                <p className="text-gray-400 mb-6">
                  Harmony for Hope series supporting youth healthcare and educational initiatives 
                  through ticketed performances.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-accent-400 font-semibold">Recent Impact:</p>
                  <p className="text-gray-300">$15,000+ raised</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-gray-800 rounded-xl p-8 text-center card-hover">
                <Users className="text-accent-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-4">Community Outreach</h3>
                <p className="text-gray-400 mb-6">
                  Together Through Music program bringing live performances to senior centers 
                  and community spaces.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-accent-400 font-semibold">Recent Impact:</p>
                  <p className="text-gray-300">300+ seniors reached</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="bg-gray-800 rounded-xl p-8 text-center card-hover">
                <Calendar className="text-accent-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-4">Cultural Festivals</h3>
                <p className="text-gray-400 mb-6">
                  Participating in community festivals to celebrate cultural diversity and 
                  promote cross-cultural understanding.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-accent-400 font-semibold">Recent Impact:</p>
                  <p className="text-gray-300">5+ festivals participated</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-600 to-maroon-600">
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Want to Book Dhwayam for Your Event?
            </h2>
            <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
              Bring the power of music and social impact to your next event. All performance 
              remuneration is donated to youth welfare charities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/booking" 
                className="bg-gray-900 hover:bg-gray-800 text-accent-400 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Book Us Now <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="/contact" 
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-accent-400 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Contact Us <Users className="ml-2" size={20} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Events;
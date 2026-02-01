import { motion } from 'framer-motion';
import { TrendingUp, Heart, Users, Award, Calendar, MapPin, DollarSign, Target } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CountUp from '../components/CountUp';

const Impact = () => {
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
                Our <span className="gradient-text">Impact</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Measuring the change we create through music, one performance at a time
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Impact Overview */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Social Impact & <span className="gradient-text">Youth Welfare</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                At the heart of everything we do is a commitment to improving the lives of young people 
                and strengthening communities through the transformative power of music.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Heart className="text-accent-400 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Healthcare Access</h3>
                    <p className="text-gray-400">
                      Providing critical healthcare support and medical equipment to children 
                      and youth who need it most, ensuring no young person is left behind.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="text-accent-400 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Community Connection</h3>
                    <p className="text-gray-400">
                      Building bridges between generations and cultures through shared musical 
                      experiences that foster understanding and unity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="text-accent-400 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Educational Support</h3>
                    <p className="text-gray-400">
                      Supporting educational initiatives and programs that empower young people 
                      to reach their full potential and create positive change.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-serif font-semibold mb-6 text-center text-accent-400">
                  Transparency Promise
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    We believe in complete transparency about our impact. Every dollar raised 
                    and every life touched is documented and shared with our community.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <p className="text-accent-400 font-semibold mb-2">Our Commitment:</p>
                    <p className="text-gray-400 text-sm">
                      100% of performance remuneration is donated to charities supporting 
                      youth welfare. We cover our own expenses to ensure maximum impact.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="section-padding bg-gray-800">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Our Impact <span className="gradient-text">in Numbers</span>
              </h2>
              <p className="text-xl text-gray-400">
                Quantifying the change we've created together
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <DollarSign className="text-accent-400 mx-auto mb-4" size={48} />
                <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">
                  $<CountUp end={15000} />+
                </div>
                <p className="text-gray-400">Total Funds Raised</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <Users className="text-accent-400 mx-auto mb-4" size={48} />
                <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">
                  <CountUp end={500} />+
                </div>
                <p className="text-gray-400">Lives Directly Impacted</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <Calendar className="text-accent-400 mx-auto mb-4" size={48} />
                <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">
                  <CountUp end={25} />+
                </div>
                <p className="text-gray-400">Events Completed</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <Target className="text-accent-400 mx-auto mb-4" size={48} />
                <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">
                  <CountUp end={12} />
                </div>
                <p className="text-gray-400">Partner Organizations</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Impact <span className="gradient-text">Stories</span>
              </h2>
              <p className="text-xl text-gray-400">
                Real stories of change from our recent initiatives
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {/* Case Study 1 */}
            <AnimatedSection delay={0.2}>
              <div className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <Calendar className="text-accent-400 mr-3" size={20} />
                      <span className="text-accent-400 font-semibold">October 2025</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4">
                      Diwali at Aegis Living
                    </h3>
                    <p className="text-gray-400 mb-4">
                      <strong className="text-accent-400">Initiative:</strong> Together Through Music
                    </p>
                    <p className="text-gray-300 mb-6">
                      Our Diwali celebration at Aegis Living brought the joy of traditional Indian 
                      music and culture to over 50 senior community members. The evening featured 
                      Carnatic fusion performances, interactive storytelling, and cultural education 
                      that created meaningful intergenerational connections.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-900 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-accent-400">50+</div>
                        <p className="text-gray-400 text-sm">Seniors Engaged</p>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-accent-400">2hrs</div>
                        <p className="text-gray-400 text-sm">Performance Time</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-900 flex items-center justify-center p-8">
                    <div className="text-center">
                      <Users className="text-accent-400 mx-auto mb-4" size={64} />
                      <p className="text-gray-400">Event Photo Placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Case Study 2 */}
            <AnimatedSection delay={0.4}>
              <div className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-gray-900 flex items-center justify-center p-8 lg:order-1">
                    <div className="text-center">
                      <Heart className="text-accent-400 mx-auto mb-4" size={64} />
                      <p className="text-gray-400">Event Photo Placeholder</p>
                    </div>
                  </div>
                  <div className="p-8 lg:order-2">
                    <div className="flex items-center mb-4">
                      <Calendar className="text-accent-400 mr-3" size={20} />
                      <span className="text-accent-400 font-semibold">October 2025</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4">
                      Microsoft Giving Campaign
                    </h3>
                    <p className="text-gray-400 mb-4">
                      <strong className="text-accent-400">Initiative:</strong> Harmony for Hope | 
                      <strong className="text-accent-400"> Partners:</strong> Asha for Education & REDP
                    </p>
                    <p className="text-gray-300 mb-6">
                      A powerful fundraising concert that raised $4,000 for educational initiatives 
                      supporting underprivileged children. The intimate performance showcased the 
                      beauty of Carnatic fusion while directly funding educational programs that 
                      change young lives.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-900 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-accent-400">$4,000</div>
                        <p className="text-gray-400 text-sm">Funds Raised</p>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-accent-400">100+</div>
                        <p className="text-gray-400 text-sm">Students Supported</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Case Study 3 */}
            <AnimatedSection delay={0.6}>
              <div className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <Calendar className="text-accent-400 mr-3" size={20} />
                      <span className="text-accent-400 font-semibold">November 2025</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4">
                      Sankara Healthcare Fundraiser
                    </h3>
                    <p className="text-gray-400 mb-4">
                      <strong className="text-accent-400">Initiative:</strong> Harmony for Hope
                    </p>
                    <p className="text-gray-300 mb-6">
                      Our most impactful concert to date, this fundraising event provided prosthetics 
                      for 100 children through Sankara Healthcare. The evening demonstrated how music 
                      can literally help children walk again, creating life-changing opportunities 
                      for mobility and independence.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-900 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-accent-400">100</div>
                        <p className="text-gray-400 text-sm">Children Helped</p>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-accent-400">$8,000</div>
                        <p className="text-gray-400 text-sm">Estimated Value</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-900 flex items-center justify-center p-8">
                    <div className="text-center">
                      <Award className="text-accent-400 mx-auto mb-4" size={64} />
                      <p className="text-gray-400">Event Photo Placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="section-padding bg-gray-800">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Looking <span className="gradient-text">Forward</span>
              </h2>
              <p className="text-xl text-gray-400">
                Our vision for expanding impact in 2026 and beyond
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-gray-900 rounded-xl p-8 text-center">
                <TrendingUp className="text-accent-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-4">Scale Our Reach</h3>
                <p className="text-gray-400 mb-4">
                  Expand to reach 1,000+ lives directly impacted through our initiatives by end of 2026.
                </p>
                <div className="text-2xl font-bold text-accent-400">1,000+ Goal</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-gray-900 rounded-xl p-8 text-center">
                <Heart className="text-accent-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-4">Deepen Partnerships</h3>
                <p className="text-gray-400 mb-4">
                  Build lasting relationships with 20+ nonprofit organizations for sustained impact.
                </p>
                <div className="text-2xl font-bold text-accent-400">20+ Partners</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="bg-gray-900 rounded-xl p-8 text-center">
                <Users className="text-accent-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-4">Expand Programs</h3>
                <p className="text-gray-400 mb-4">
                  Launch new initiative focused on music education for underserved youth communities.
                </p>
                <div className="text-2xl font-bold text-accent-400">New Program</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Impact;
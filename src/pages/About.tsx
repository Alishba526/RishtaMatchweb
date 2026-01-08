import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { Heart, Shield, Users, Award, Target, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Trust & Respect",
      description: "We believe every interaction should be grounded in mutual respect and genuine intentions.",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Your personal information is protected with the highest standards of security.",
    },
    {
      icon: Users,
      title: "Family Values",
      description: "We honor the importance of family involvement in the marriage process.",
    },
    {
      icon: Award,
      title: "Quality Profiles",
      description: "Every profile undergoes verification to ensure authenticity and seriousness.",
    },
  ];

  const stats = [
    { number: "50,000+", label: "Active Members" },
    { number: "10,000+", label: "Successful Marriages" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "5+", label: "Years of Service" },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blush via-background to-cream relative overflow-hidden">
        <div className="absolute inset-0 decorative-pattern opacity-50" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About RishtaMatch
            </span>
            <h1 className="heading-xl text-foreground mt-3 mb-6">
              Connecting Hearts with <span className="gradient-text">Trust & Dignity</span>
            </h1>
            <p className="text-body text-lg">
              RishtaMatch is Pakistan's premier marriage matchmaking platform, 
              combining traditional values with modern technology to help you 
              find your perfect life partner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  Our Mission
                </span>
              </div>
              <h2 className="heading-lg text-foreground mb-6">
                Making Marriage <span className="gradient-text">Simple & Dignified</span>
              </h2>
              <p className="text-body mb-6">
                We understand that finding a life partner is one of the most important 
                decisions in life. That's why we've created a platform that respects 
                your privacy, values your time, and prioritizes genuine connections.
              </p>
              <p className="text-body">
                Our mission is to facilitate meaningful matches between individuals 
                and families who share similar values, aspirations, and commitment 
                to building a loving home together.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=600&h=500&fit=crop"
                alt="Happy couple"
                className="rounded-3xl shadow-elevated w-full"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 glass-card p-5 shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Premium Quality</p>
                    <p className="text-sm text-muted-foreground">Verified Profiles Only</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <h2 className="heading-lg text-foreground mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-body">
              The principles that guide everything we do at RishtaMatch.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card p-6 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5"
                >
                  <value.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-14"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-serif font-bold gradient-text">
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;

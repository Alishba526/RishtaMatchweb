import { motion } from "framer-motion";
import { UserPlus, Search, MessageCircle, Heart, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Build a comprehensive profile that showcases your personality, values, and expectations.",
  },
  {
    icon: Search,
    title: "Discover Matches",
    description: "Use our smart filters to find profiles that match your preferences and criteria.",
  },
  {
    icon: MessageCircle,
    title: "Connect & Chat",
    description: "Send interests, receive responses, and have meaningful conversations.",
  },
  {
    icon: Heart,
    title: "Find Your Partner",
    description: "Take your relationship forward with family involvement and blessings.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "100% Verified Profiles",
    description: "Every profile undergoes strict verification for your safety and trust.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our dedicated team is always here to help you on your journey.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 decorative-pattern opacity-50" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="heading-lg text-foreground mt-3 mb-4">
            Your Journey to <span className="gradient-text">True Love</span>
          </h2>
          <p className="text-body">
            A simple, dignified process designed to help you find your life partner 
            while respecting traditional values.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 text-center group"
            >
              {/* Step Number */}
              <div className="absolute top-4 right-4 text-4xl font-serif font-bold text-primary/10">
                0{index + 1}
              </div>
              
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300"
              >
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </motion.div>

              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start gap-5 glass-card p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-foreground mb-1">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

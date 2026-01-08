import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "../../assets/hero-couple.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden decorative-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush via-background to-cream" />
      
      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] w-20 h-20 rounded-full bg-primary/10 blur-2xl"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[15%] w-32 h-32 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">
                Pakistan's Premium Matchmaking Platform
              </span>
            </motion.div>

            <h1 className="heading-xl text-foreground mb-6">
              Find Your
              <span className="block gradient-text">Perfect Life Partner</span>
            </h1>

            <p className="text-body max-w-lg mx-auto lg:mx-0 mb-8">
              Experience a journey of love built on trust, tradition, and modern technology. 
              Connect with verified profiles and find your soulmate with dignity and respect.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/signup">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="btn-primary w-full sm:w-auto text-base px-8 py-6">
                    Start Your Journey
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/find-match">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="outline" className="btn-secondary w-full sm:w-auto text-base px-8 py-6">
                    Browse Profiles
                  </Button>
                </motion.div>
              </Link>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10"
            >
              {[
                { icon: Users, text: "50K+ Members" },
                { icon: Heart, text: "10K+ Marriages" },
                { icon: Shield, text: "100% Verified" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden shadow-elevated"
              >
                <img
                  src={heroImage}
                  alt="Happy Couple"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 lg:-left-12 glass-card p-4 shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary animate-heart-beat" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">New Match Found!</p>
                    <p className="text-xs text-muted-foreground">98% Compatibility</p>
                  </div>
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -top-4 -right-4 lg:-right-8 glass-card p-4 shadow-elevated"
              >
                <p className="text-2xl font-serif font-bold text-primary">4.9★</p>
                <p className="text-xs text-muted-foreground">Trust Score</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

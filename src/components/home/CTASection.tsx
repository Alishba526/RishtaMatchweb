import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-gold/5" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-40 h-40 border-2 border-primary/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-16 -left-16 w-32 h-32 border-2 border-gold/10 rounded-full"
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary animate-heart-beat" />
            </div>
          </motion.div>

          <h2 className="heading-lg text-foreground mb-4 max-w-2xl mx-auto">
            Begin Your Journey to <span className="gradient-text">Forever Love</span>
          </h2>

          <p className="text-body max-w-xl mx-auto mb-8">
            Join thousands of successful couples who found their perfect match. 
            Your story of love and happiness is just a click away.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="btn-primary px-8 py-6 text-base w-full sm:w-auto">
                  Create Free Account
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </Link>
            <Link to="/about">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="outline" className="btn-secondary px-8 py-6 text-base w-full sm:w-auto">
                  Learn More
                </Button>
              </motion.div>
            </Link>
          </div>

          <p className="text-muted-foreground text-sm mt-6">
            ✓ Free to join  ✓ Verified profiles  ✓ Privacy protected
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

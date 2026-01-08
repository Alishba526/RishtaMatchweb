import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sara & Bilal",
    location: "Lahore",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=200&h=200&fit=crop",
    quote: "We found each other on RishtaMatch and knew instantly it was meant to be. The platform made everything so dignified and easy. Alhamdulillah, we are happily married now!",
    rating: 5,
  },
  {
    id: 2,
    name: "Amna & Zain",
    location: "Karachi",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=200&h=200&fit=crop",
    quote: "What I loved most was the respect and privacy maintained throughout. Our families were able to be involved from the start. Thank you RishtaMatch for this blessing!",
    rating: 5,
  },
  {
    id: 3,
    name: "Hira & Usman",
    location: "Islamabad",
    image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=200&h=200&fit=crop",
    quote: "After trying many platforms, RishtaMatch felt different. The quality of profiles and the genuine intentions of members made our search successful. Highly recommended!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="heading-lg text-foreground mt-3 mb-4">
            Real Couples, <span className="gradient-text">Real Love</span>
          </h2>
          <p className="text-body">
            Thousands of happy couples have found their soulmates through our platform. 
            Here are some of their beautiful stories.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/10">
                <Quote className="w-10 h-10" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: "50K+", label: "Active Members" },
            { number: "10K+", label: "Successful Marriages" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "4.9", label: "Average Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold gradient-text">
                {stat.number}
              </p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { motion } from "framer-motion";
import ProfileCard from "@/components/profiles/ProfileCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample profiles data
const sampleProfiles = [
  {
    id: "1",
    name: "Ayesha",
    age: 26,
    city: "Lahore",
    profession: "Software Engineer",
    education: "MS Computer Science",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    isVerified: true,
  },
  {
    id: "2",
    name: "Ahmed",
    age: 29,
    city: "Karachi",
    profession: "Doctor",
    education: "MBBS, FCPS",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    isVerified: true,
  },
  {
    id: "3",
    name: "Fatima",
    age: 24,
    city: "Islamabad",
    profession: "Architect",
    education: "B.Arch",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop",
    isVerified: false,
  },
  {
    id: "4",
    name: "Hassan",
    age: 31,
    city: "Lahore",
    profession: "Business Owner",
    education: "MBA Finance",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    isVerified: true,
  },
];

const ProfilesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Featured Profiles
          </span>
          <h2 className="heading-lg text-foreground mt-3 mb-4">
            Meet Our <span className="gradient-text">Verified Members</span>
          </h2>
          <p className="text-body">
            Browse through our carefully verified profiles and find someone 
            who shares your values and dreams.
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sampleProfiles.map((profile, index) => (
            <ProfileCard
              key={profile.id}
              {...profile}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/find-match">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button className="btn-primary px-8 py-6 text-base">
                View All Profiles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfilesSection;

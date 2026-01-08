import { motion } from "framer-motion";
import { Heart, MapPin, Briefcase, GraduationCap } from "lucide-react";

interface ProfileCardProps {
  name: string;
  age: number;
  city: string;
  profession: string;
  education: string;
  image: string;
  isVerified?: boolean;
  delay?: number;
}

const ProfileCard = ({
  name,
  age,
  city,
  profession,
  education,
  image,
  isVerified = false,
  delay = 0,
}: ProfileCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="group glass-card overflow-hidden cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        
        {/* Verified Badge */}
        {isVerified && (
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Verified
          </div>
        )}
        
        {/* Quick Info on Image */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-serif text-xl font-semibold">
            {name}, {age}
          </h3>
          <div className="flex items-center gap-1 text-white/80 text-sm">
            <MapPin className="w-3 h-3" />
            {city}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Briefcase className="w-4 h-4 text-primary" />
            <span>{profession}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span>{education}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-2.5 bg-secondary text-secondary-foreground rounded-xl text-sm font-medium hover:bg-accent transition-colors duration-200"
          >
            View Profile
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 flex items-center justify-center bg-primary text-primary-foreground rounded-xl"
          >
            <Heart className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;

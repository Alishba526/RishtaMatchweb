import { useState } from "react";
import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import ProfileCard from "@/components/profiles/ProfileCard";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const allProfiles = [
  { id: "1", name: "Ayesha Khan", age: 26, city: "Lahore", profession: "Software Engineer", education: "MS Computer Science", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop", isVerified: true },
  { id: "2", name: "Ahmed Ali", age: 29, city: "Karachi", profession: "Doctor", education: "MBBS, FCPS", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop", isVerified: true },
  { id: "3", name: "Fatima Noor", age: 24, city: "Islamabad", profession: "Architect", education: "B.Arch", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop", isVerified: false },
  { id: "4", name: "Hassan Raza", age: 31, city: "Lahore", profession: "Business Owner", education: "MBA Finance", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop", isVerified: true },
  { id: "5", name: "Sana Malik", age: 27, city: "Multan", profession: "Teacher", education: "M.Ed", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop", isVerified: true },
  { id: "6", name: "Usman Sheikh", age: 28, city: "Faisalabad", profession: "Engineer", education: "BSc Engineering", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop", isVerified: false },
  { id: "7", name: "Zara Ahmed", age: 25, city: "Karachi", profession: "Marketing Manager", education: "BBA Marketing", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop", isVerified: true },
  { id: "8", name: "Bilal Khan", age: 30, city: "Islamabad", profession: "IT Consultant", education: "BS IT", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop", isVerified: true },
];

const cities = ["All Cities", "Lahore", "Karachi", "Islamabad", "Multan", "Faisalabad"];
const ageRanges = ["All Ages", "20-25", "26-30", "31-35", "36-40"];
const professions = ["All Professions", "Doctor", "Engineer", "Business Owner", "Teacher", "IT Professional"];

const FindMatch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    city: "All Cities",
    ageRange: "All Ages",
    profession: "All Professions",
  });

  const filteredProfiles = allProfiles.filter((profile) => {
    const matchesSearch = profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.profession.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCity = filters.city === "All Cities" || profile.city === filters.city;
    
    let matchesAge = true;
    if (filters.ageRange !== "All Ages") {
      const [min, max] = filters.ageRange.split("-").map(Number);
      matchesAge = profile.age >= min && profile.age <= max;
    }
    
    const matchesProfession = filters.profession === "All Professions" || 
      profile.profession.toLowerCase().includes(filters.profession.toLowerCase());
    
    return matchesSearch && matchesCity && matchesAge && matchesProfession;
  });

  return (
    <MainLayout>
      <section className="section-padding bg-background min-h-screen">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h1 className="heading-lg text-foreground mb-4">
              Find Your <span className="gradient-text">Perfect Match</span>
            </h1>
            <p className="text-body">
              Browse through our verified profiles and discover someone special who shares your values.
            </p>
          </motion.div>

          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-10"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by name, city, or profession..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-field pl-12 py-6"
                />
              </div>
              
              {/* Filter Toggle */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={() => setShowFilters(!showFilters)}
                  variant="outline"
                  className="btn-secondary py-6 px-6"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </motion.div>
            </div>

            {/* Filter Panel */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="glass-card p-6 mb-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-foreground">Filter Profiles</h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {/* City Filter */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">City</label>
                    <select
                      value={filters.city}
                      onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                      className="input-field"
                    >
                      {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Age Filter */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Age Range</label>
                    <select
                      value={filters.ageRange}
                      onChange={(e) => setFilters({ ...filters, ageRange: e.target.value })}
                      className="input-field"
                    >
                      {ageRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Profession Filter */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Profession</label>
                    <select
                      value={filters.profession}
                      onChange={(e) => setFilters({ ...filters, profession: e.target.value })}
                      className="input-field"
                    >
                      {professions.map((prof) => (
                        <option key={prof} value={prof}>{prof}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-6">
            Showing {filteredProfiles.length} profiles
          </p>

          {/* Profiles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProfiles.map((profile, index) => (
              <ProfileCard key={profile.id} {...profile} delay={index * 0.05} />
            ))}
          </div>

          {filteredProfiles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">No profiles found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setFilters({ city: "All Cities", ageRange: "All Ages", profession: "All Professions" });
                }}
                variant="outline"
                className="mt-4"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default FindMatch;

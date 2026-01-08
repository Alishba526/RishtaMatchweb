import { motion } from "framer-motion";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { 
  Eye, Heart, MessageCircle, Users, TrendingUp, 
  ArrowUpRight, Calendar, User, LogOut
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Profile Views", value: "1,234", icon: Eye, change: "+12%", color: "bg-primary/10 text-primary" },
  { label: "Connections", value: "48", icon: Users, change: "+5%", color: "bg-gold/20 text-gold" },
  { label: "Messages", value: "128", icon: MessageCircle, change: "+18%", color: "bg-rose/20 text-rose" },
  { label: "Interests Sent", value: "32", icon: Heart, change: "+8%", color: "bg-burgundy-light/20 text-burgundy-light" },
];

const recentActivity = [
  { type: "view", user: "Ahmed Ali", action: "viewed your profile", time: "2 hours ago", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { type: "interest", user: "Sara Khan", action: "sent you an interest", time: "5 hours ago", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
  { type: "message", user: "Usman Sheikh", action: "sent you a message", time: "1 day ago", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
  { type: "connection", user: "Fatima Noor", action: "accepted your connection", time: "2 days ago", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop" },
];

const Dashboard = () => {
  const { logout } = useAuth();
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Welcome Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="heading-md text-foreground mb-2">Welcome back, Ayesha! 👋</h1>
            <p className="text-muted-foreground">Here's what's happening with your profile today.</p>
          </div>
          <Button onClick={logout} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-green-600 flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" />
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-serif font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 glass-card p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-lg font-semibold text-foreground">Recent Activity</h2>
              <Link to="/dashboard/notifications" className="text-sm text-primary hover:underline flex items-center gap-1">
                View All <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors"
                >
                  <img
                    src={activity.image}
                    alt={activity.user}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-foreground">
                      <span className="font-medium">{activity.user}</span>{" "}
                      <span className="text-muted-foreground">{activity.action}</span>
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <Calendar className="w-3 h-3" />
                      {activity.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card p-6"
          >
            <h2 className="font-serif text-lg font-semibold text-foreground mb-6">Quick Actions</h2>
            
            <div className="space-y-3">
              <Link to="/dashboard/profile">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary hover:bg-accent transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Edit Profile</p>
                    <p className="text-xs text-muted-foreground">Update your details</p>
                  </div>
                </motion.div>
              </Link>
              
              <Link to="/find-match">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary hover:bg-accent transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Find Match</p>
                    <p className="text-xs text-muted-foreground">Browse profiles</p>
                  </div>
                </motion.div>
              </Link>
              
              <Link to="/dashboard/create-blog">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary hover:bg-accent transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-rose" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Write Blog</p>
                    <p className="text-xs text-muted-foreground">Share your thoughts</p>
                  </div>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Dashboard;

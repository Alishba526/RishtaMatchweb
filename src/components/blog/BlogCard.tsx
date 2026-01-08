import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  delay?: number;
}

const BlogCard = ({
  id,
  title,
  excerpt,
  image,
  author,
  date,
  category,
  delay = 0,
}: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card overflow-hidden group"
    >
      {/* Image */}
      <Link to={`/blog/${id}`} className="block relative h-52 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
            {category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <User className="w-3.5 h-3.5" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{date}</span>
          </div>
        </div>

        {/* Title */}
        <Link to={`/blog/${id}`}>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {excerpt}
        </p>

        {/* Read More */}
        <Link
          to={`/blog/${id}`}
          className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
        >
          Read More
          <motion.span
            className="inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;

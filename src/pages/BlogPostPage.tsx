import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { ArrowLeft, CalendarDays, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts, BlogPost } from "@/data/blogPosts"; // Import blogPosts and BlogPost type

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | undefined>(undefined);

  useEffect(() => {
    // In a real application, you would fetch this from an API
    const foundPost = blogPosts.find((p) => p.id === id);
    setPost(foundPost);
  }, [id]);

  if (!post) {
    return (
      <MainLayout>
        <section className="section-padding bg-background min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-lg text-foreground mb-4">Blog Post Not Found</h1>
            <Button onClick={() => navigate("/blog")} className="btn-primary">
              Go to Blog
            </Button>
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="section-padding bg-background min-h-screen">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Button
              variant="ghost"
              onClick={() => navigate("/blog")}
              className="mb-6 flex items-center gap-2 text-primary hover:text-primary/80"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>

            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg mb-8 shadow-lg"
            />

            <h1 className="heading-lg text-foreground mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-8">
              <span className="flex items-center gap-1">
                <UserRound className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4" />
                {post.date}
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                {post.category}
              </span>
            </div>

            <div
              className="prose prose-lg dark:prose-invert max-w-none text-body"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogPostPage;
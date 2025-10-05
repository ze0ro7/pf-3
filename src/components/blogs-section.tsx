import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { SectionTitle } from "./common/SectionTitle";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    description:
      "A beginner's guide to setting up and building your first React application",
    date: "May 13, 2025",
    readTime: "10 min read",
    image: "/b1.png",
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns",
    description:
      "Exploring advanced type patterns to make your TypeScript code more robust",
    date: "May 12, 2025",
    readTime: "12 min read",
    image: "/b2.png",
  },
  {
    id: 3,
    title: "Building with Next.js",
    description:
      "Learn how to create high-performance web applications with Next.js",
    date: "May 10, 2025",
    readTime: "11 min read",
    image: "/b3.png",
  },
];

export function BlogsSection() {
  return (
    <section id="blogs" className="py-20 px-13">
      <div className="container">
        <SectionTitle
          title="Latest Blog Posts"
          subtitle="Thoughts, tutorials, and insights about web development"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription className="flex justify-between items-center">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.description}</p>
                </CardContent>
                <CardFooter>
                  <Link to={`/blog/${post.id}`} className="w-full">
                    <Button variant="ghost" className="w-full">
                      Read More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link to="/blog">
            <Button variant="outline" size="lg">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

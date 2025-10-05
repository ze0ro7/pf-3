import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

// Sample projects data
const projects: Project[] = [
  {
    id: 1,
    title: "Monitor Our Planet's Health",
    description:
      "Faura provides comprehensive environmental data visualizations, tracking climate change metrics.",
    image: "/p1.png",
    tags: ["React", "Shadcn", "Tailwind CSS", "Frontend", "Backend"],
    liveUrl: "https://faura-flax.vercel.app/",
  },
  {
    id: 2,
    title: "Anonymous Feedback",
    description:
      "Share your personalized link and get honest, anonymous feedback from friends, colleagues, and peers.",
    image: "/p2.png",
    tags: ["React", "AI", "TypeScript", "Frontend", "Backend", "API"],
    githubUrl: "https://github.com",
    liveUrl: "https://feed-loop.vercel.app/",
  },
  {
    id: 3,
    title: "Rasa Chatbot",
    description: "AI-powered chatbot for customer support, built with Rasa.",
    image: "/p3.png",
    tags: ["Python", "AI", "Rasa"],
    githubUrl: "https://github.com/InFiNiTy0639/SmartAi",
  },
  {
    id: 4,
    title: "ClipSync",
    description:
      "ClipSync is a video messaging platform designed for asynchronous communication, particularly in work environments.",
    image: "/p4.png",
    tags: [
      "Nextjs",
      "TypeScript",
      "Frontend",
      "Backend",
      "API",
      "AI",
      "Shadcn",
      "Tailwind CSS",
      "Socket.io",
      "Node.js",
      "Express",
      "Prisma",
      "Cloudinary",
      "voiceflow",
    ],
    githubUrl: "https://github.com/InFiNiTy0639/hack.io",
  },
  {
    id: 5,
    title: "Basic Projects",
    description:
      "A collection of basic projects showcasing various technologies and frameworks. Includes BMI calculator, 3D cube, Dice Gmae, Matrix, Guess Number, Earth orbit, Falling Number,color switcher, keyboard, India Flag and more. ",
    image: "/p5.png",
    tags: ["HTML", "CSS", "JavaScript", "Frontend"],
    githubUrl: "https://github.com/InFiNiTy0639/BasicCompile",
    liveUrl: "https://infinity0639.github.io/BasicCompile/",
  },
  {
    id: 6,
    title: "Fluentix",
    description:
      "Experience crystal-clear video calls with advanced features designed for both personal and professional use.",
    image: "/p6.png",
    tags: ["Nextjs", "TypeScript", "Frontend", "Backend","API","Tailwind CSS","Node.js"],
    githubUrl: "https://github.com/InFiNiTy0639/Fluentix",
  },
];

// Extract all unique tags
const allTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
);

export function ProjectsSection() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter projects based on selected tag
  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  return (
    <section id="projects" className="py-20 px-14 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of my recent work and personal projects
          </p>
        </motion.div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Button
            variant={selectedTag === null ? "default" : "outline"}
            onClick={() => setSelectedTag(null)}
            className={`rounded-full ${
              selectedTag === null
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : ""
            }`}
          >
            All
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full ${
                selectedTag === tag
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : ""
              }`}
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="group overflow-hidden bg-card rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-background/20 backdrop-blur-sm p-2 rounded-full hover:bg-primary/80 transition-colors"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-background/20 backdrop-blur-sm p-2 rounded-full hover:bg-primary/80 transition-colors"
                      >
                        <ExternalLink className="h-6 w-6" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={`${project.id}-${tag}`}
                        className={cn(
                          "text-xs px-2 py-1 rounded-full",
                          selectedTag === tag
                            ? "bg-primary/20 text-primary"
                            : "bg-secondary text-secondary-foreground"
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

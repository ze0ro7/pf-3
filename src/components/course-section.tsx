import { ExternalLink, Award, Calendar } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Course {
  id: number;
  platform: string;
  title: string;
  provider: string;
  year: string;
  position: string;
  description: string;
  skills: string[];
  certificateUrl: string;
}

export function CourseSection() {
  const courses: Course[] = [
    {
      id: 1,
      platform: "Coursera",
      title: " Supervised Machine Learning: Regression and Classification",
      provider: "Stanford University",
      year: "Jan 11, 2025",
      position: "Certificate Completed",
      description:
        "Build & train supervised machine learning models for prediction & binary classification tasks, including linear regression & logistic regression.",
      skills: [
        "Jupyter",
        "Supervised Learning",
        "Scikit-learn",
        "NumPy",
        "Regression",
        "Matplotlib",
      ],
      certificateUrl: "/c1.png",
    },
    {
      id: 2,
      platform: "Coursera",
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      provider: "Stanford University",
      year: "Jan 11, 2025",
      position: "Certificate Completed",
      description:
        "Use unsupervised learning techniques for unsupervised learning: including clustering and anomaly detection,and build a deep reinforcement learning model.",
      skills: [
        "AI/ML",
        "Unsupervised Learning",
        "Reinforcement Learning",
        "Clustering",
        "Anomaly Detection",
        "Scikit-learn",
      ],
      certificateUrl: "/c2.png",
    },
    {
      id: 3,
      platform: "Coursera",
      title: " Advanced Learning Algorithms",
      provider: "Stanford University",
      year: "Mar 14, 2025",
      position: "Certificate Completed",
      description:
        "Build and train a neural network with TensorFlow to perform multi-class classification.",
      skills: [
        "Deep Learning",
        "TensorFlow",
        "Neural Networks",
        "Random Forests",
        "CART",
        "Supervised Learning",
        "Performance Tuning",
      ],
      certificateUrl: "/c3.png",
    },
    {
      id: 4,
      platform: "Udemy",
      title: "The Complete 2024 Web Development Bootcamp",
      provider: "Udemy",
      year: "June 23, 2024",
      position: "Certificate Completed",
      description:
        "Full-stack development course. Learn HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB",
      skills: [
        "React",
        "Redux",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Tailwind CSS",
        "Git",
        "GitHub",
        "Rest APIs",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      certificateUrl: "/c4.png",
    },
  ];

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "coursera":
        return "bg-blue-900/50 text-blue-300 border-blue-600";
      case "udemy":
        return "bg-purple-900/50 text-purple-300 border-purple-600";
      default:
        return "bg-green-900/50 text-green-300 border-green-600";
    }
  };

  const getTechColor = (technology: string) => {
    const tech = technology.toLowerCase();
    switch (tech) {
      case "react":
        return "bg-blue-900/50 text-blue-300 border-blue-600";
      case "python":
        return "bg-yellow-900/50 text-yellow-300 border-yellow-600";
      case "javascript":
        return "bg-yellow-900/50 text-yellow-300 border-yellow-600";
      case "typescript":
        return "bg-blue-900/50 text-blue-300 border-blue-600";
      case "node.js":
        return "bg-green-900/50 text-green-300 border-green-600";
      case "aws":
        return "bg-orange-900/50 text-orange-300 border-orange-600";
      case "tensorflow":
        return "bg-orange-900/50 text-orange-300 border-orange-600";
      case "firebase":
        return "bg-red-900/50 text-red-300 border-red-600";
      case "mongodb":
        return "bg-green-900/50 text-green-300 border-green-600";
      case "redux":
        return "bg-purple-900/50 text-purple-300 border-purple-600";
      default:
        return "bg-slate-700/50 text-slate-300 border-slate-600";
    }
  };

  return (
    <section id="courses" className="py-20 bg-muted/30 px-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Courses</h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Continuous learning through online courses. 
        </p>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-8">Course Completions</h3>
        <div className="space-y-6">
          {courses.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: course.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Award className="w-6 h-6" />
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                    </div>

                    <div className="flex items-center gap-4 mb-4 ">
                      <Badge
                        variant="outline"
                        className={getPlatformColor(course.platform)}
                      >
                        {course.platform}
                      </Badge>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {course.year} - {course.position}
                      </span>
                    </div>

                    <p className="mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={`px-3 py-1 text-xs rounded-full border ${getTechColor(
                            tech
                          )}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <Button asChild>
                      <a
                        href={course.certificateUrl}
                        className="inline-flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

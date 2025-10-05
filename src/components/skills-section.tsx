import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface SkillCategory {
  title: string;
  skills: { name: string; logo: string }[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Django",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      },
      {
        name: "FastAPI",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Firebase",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
    ],
  },
  {
    title: "Blockchain",
    skills: [
      {
        name: "Solidity",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
      },
      {
        name: "Ethereum",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg",
      },
      {
        name: "Web3.js",
        logo: "https://seeklogo.com/images/W/web3js-logo-62DEE79B50-seeklogo.com.png",
      },
    ],
  },
  {
    title: "AI/ML",
    skills: [
      {
        name: "TensorFlow",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "PyTorch",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      },
      {
        name: "Scikit-Learn",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      },
      {
        name: "Pandas",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
    ],
  },
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const activeSkills =
    skillsData.find((category) => category.title === activeCategory)?.skills ||
    [];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I've worked with
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skillsData.map((category) => (
            <Badge
              key={category.title}
              variant={
                activeCategory === category.title ? "default" : "outline"
              }
              className={`text-sm md:text-base px-4 py-1.5 cursor-pointer transition-all duration-300 hover:scale-105 ${
                activeCategory === category.title ? "bg-blue-500" : ""
              }`}
              onClick={() => setActiveCategory(category.title)}
            >
              {category.title}
            </Badge>
          ))}
        </div>

        {/* Horizontal Scrolling Skills */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="overflow-hidden relative py-6">
            <div className="scroll-wrapper flex space-x-12 w-max">
              {[...activeSkills, ...activeSkills].map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Inline keyframe style */}
          <style>{`
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .scroll-wrapper {
      animation: scroll 20s linear infinite;
    }
  `}</style>
        </motion.div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  skill: { name: string; logo: string };
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex-shrink-0 w-40"
    >
      <Card className="h-40 w-40 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden bg-card/80 backdrop-blur-sm">
        <div className="bg-background/50 dark:bg-background/30 rounded-full p-3 m-2 w-20 h-20 flex items-center justify-center">
          <img
            src={skill.logo}
            alt={`${skill.name} logo`}
            className={`w-14 h-14 object-contain ${
              ["Next.js", "Express"].includes(skill.name)
                ? "invert dark:invert-0"
                : ""
            }`}
          />
        </div>
        <p className="mt-2 font-medium text-center px-2">{skill.name}</p>
      </Card>
    </motion.div>
  );
}

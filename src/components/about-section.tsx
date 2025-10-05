import { motion } from "framer-motion";
import { Timeline } from "./timeline";

const experienceItems = [
  {
    date: "May 2025 - present",
    title: "Founder at Faura",
    description: "Started a company focused on Nature, Climate.",
  },
  {
    date: "Feb-Mar (2025)",
    title: "Full Stack Developer at Landx",
    description: "Developed responsive web applications for Land Broker client.",
  },
];

const educationItems = [
  {
    date: "2023 - 2027",
    title: "B.Tech in Chemical Engineering",
    description:
      "NIT Allahabad - Pursuing a degree in Chemical Engineering with a focus on sustainable technologies.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 underline-blue">About Me</h2>
          <div className="h-1 w-20 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Full Stack Developer, ML hobbyist and competitive
            programmer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-1 flex justify-center"
          >
            <div className="w-100 h-100 rounded-lg overflow-hidden relative group">
              <img
                src="/profile.png"
                alt="RIZWAN"
                className="object-cover w-full h-full filter grayscale transition-all duration-500 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-muted-foreground mb-4">
                I am a pre-Final year undergraduate student at <span className="text-blue-500 text-lg font-bold">NIT Allahabad</span>,
                pursuing a B.Tech in Chemical Engineering. Alongside my academic
                journey, I am a passionate full-stack developer with a keen
                interest in machine learning and competitive programming.
              </p>
              <p className="text-muted-foreground">
                My diverse interests allow me to blend my knowledge of Chemical
                Engineering with modern technologies like Machine Learning and
                Web Development. I am particularly passionate about using
                data-driven insights and innovative technologies to solve
                real-world problems, especially those related to sustainability,
                nature, and climate.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Experience</h3>
              <Timeline items={experienceItems} />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <Timeline items={educationItems} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

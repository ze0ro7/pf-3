import { motion } from "framer-motion";
import { AboutSection } from "@/components/about-section";

const AboutPage = () => {
  return (
    <main className="pt-28 pb-16">
      <div className="container mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="heading text-center"
        >
          About Me
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 w-20 bg-blue-500 mx-auto mt-6"
        />
      </div>

      <AboutSection />
    </main>
  );
};

export default AboutPage;

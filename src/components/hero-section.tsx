import { motion } from "framer-motion";
import { ParticlesBackground } from "./particles-background";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24">
      <ParticlesBackground />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 leading-tight text-center">
              <div className="text-4xl md:text-5xl font-bold">
                Hi, I'm <span className="text-blue-500">AADIL RIZWAN</span>
              </div>
              <div className="text-5xl md:text-6xl font-bold mt-2">
                Programmer
              </div>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-2xl text-muted-foreground mb-8">
              Full-stack Developer || competitive programmer || and ML-hobbyist,
              solving problems at every layer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              variant="default"
              className="rounded-full px-6 bg-blue-500 hover:bg-blue-600 text-white"
              asChild
            >
              <Link to="/contact">Contact Me</Link>
            </Button>

            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-6"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <span className="flex items-center">
                Resume
                <Download className="ml-2 h-4 w-4" />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

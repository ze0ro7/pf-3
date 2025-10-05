import { motion } from "framer-motion";
import { ContactSection } from "@/components/contact-section";

const ContactPage = () => {
  return (
    <main className="pt-28 pb-16">
      <div className="container mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="heading text-center"
        >
          Contact Me
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 w-20 bg-blue-500 mx-auto mt-6"
        />
      </div>

      <ContactSection />
    </main>
  );
};

export default ContactPage;

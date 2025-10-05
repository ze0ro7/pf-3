
import { useState } from "react";
import { motion } from "framer-motion";
import { ContactForm } from "./contact/ContactForm";
import { ContactInfo } from "./contact/ContactInfo";
import { SuccessMessage } from "./contact/SuccessMessage";
import { SectionTitle } from "./common/SectionTitle";

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSuccess = () => {
    setIsSubmitted(true);
  };
  
  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 px-12">
      <div className="container">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a question or want to work together? Drop me a message!" 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <ContactInfo />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-card p-8 rounded-lg shadow-sm"
          >
            {isSubmitted ? (
              <SuccessMessage onReset={handleReset} />
            ) : (
              <ContactForm onSuccess={handleSuccess} />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

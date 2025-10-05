
import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function ContactInfo() {
  return (
    <div className="space-y-8 px-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-start gap-4"
      >
        <div className="bg-primary/10 p-3 rounded-full">
          <Mail className="h-6 w-6 text-blue-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">Email</h3>
          <a href="mailto:marizwan639@gmail.com" className="text-muted-foreground hover:text-primary">
            marizwan639@gmail.com
          </a>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex items-start gap-4"
      >
        <div className="bg-primary/10 p-3 rounded-full">
          <MapPin className="h-6 w-6 text-blue-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">Location</h3>
          <p className="text-muted-foreground">
            Allahabad,UP, India.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

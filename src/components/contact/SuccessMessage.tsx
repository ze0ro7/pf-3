
import { Button } from "../ui/button";
import { Alert, AlertDescription } from "../ui/alert";
import { motion } from "framer-motion";

interface SuccessMessageProps {
  onReset: () => void;
}

export function SuccessMessage({ onReset }: SuccessMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Alert className="bg-primary/10 border-primary/20 mb-4">
        <AlertDescription className=" justify-center py-8">
          <h3 className="text-2xl font-bold mb-4 text-white">Thank You!</h3>
          <p className="text-lg mb-2 text-white">Your message has been received.</p>
          <p className="text-muted-foreground">I'll get back to you as soon as possible.</p>
        </AlertDescription>
      </Alert>
      <Button 
        onClick={onReset} 
        className="w-full bg-blue-500"
      >
        Send Another Message
      </Button>
    </motion.div>
  );
}

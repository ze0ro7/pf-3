
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TimelineItem = {
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
};

type TimelineProps = {
  items: TimelineItem[];
  className?: string;
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("space-y-8", className)}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative pl-8 border-l border-border"
        >
          <div className="absolute left-[-8px] top-1 h-4 w-4 rounded-full bg-blue-500" />
          <div className="text-sm font-medium text-muted-foreground mb-1">{item.date}</div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-muted-foreground">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

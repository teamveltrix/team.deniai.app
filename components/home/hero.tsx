import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl mb-4 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-foreground/60">We are</span>{" "}
          <span className="font-mono">Veltrix</span>
        </motion.h1>

        <motion.p
          className="text-xl text-muted-foreground mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We are filling a missing piece of the world.
        </motion.p>

        <motion.div
          className="flex items-center mb-8 text-left gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="animate-bounce">
            <ArrowDown />
          </div>
          <span>Scroll down to learn more</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

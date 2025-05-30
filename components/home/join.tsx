import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Join() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4 font-mono">
        Fill the missing piece with us
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl text-center mb-8">
        If you are looking for a team that can bring your ideas to life and fill
        the missing pieces in your projects, we would love to hear from you.
        Let's collaborate and create something amazing together!
      </p>

      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/projects">View Projects</Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}

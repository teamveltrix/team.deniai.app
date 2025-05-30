import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4 font-mono">About Us</h2>
      <p className="text-lg text-muted-foreground max-w-2xl text-center">
        We are a team of passionate individuals dedicated to creating innovative
        solutions that make a difference in the world. Our mission is to fill
        the gaps in various industries with cutting-edge technology and creative
        thinking.
      </p>
    </motion.div>
  );
}

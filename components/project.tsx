"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { ProjectType } from "@/app/projects/page";

interface ProjectProps {
  project: ProjectType;
  index?: number;
}

export default function Project({ project, index = 0 }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden hover:shadow-lg grayscale transition-all duration-100 hover:grayscale-0">
        <motion.div
          className="aspect-video relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>
        <CardHeader>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <CardTitle className="font-mono mb-2">{project.title}</CardTitle>
            <CardDescription className="mb-4">
              {project.description}
            </CardDescription>
          </motion.div>
          <motion.div
            className="flex gap-2 mt-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Link
              href={project.href}
              className="text-white/80 hover:text-white transition-all duration-300 hover:underline text-sm"
            >
              Learn More
            </Link>
            {project.website && (
              <>
                <span className="text-muted-foreground">•</span>
                <Link
                  href={project.website}
                  className="text-white/80 hover:text-white transition-all duration-300 hover:underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </Link>
              </>
            )}
            {project.github && (
              <>
                <span className="text-muted-foreground">•</span>
                <Link
                  href={project.github}
                  className="text-white/80 hover:text-white transition-all duration-300 hover:underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </>
            )}
          </motion.div>
        </CardHeader>
      </Card>
    </motion.div>
  );
}

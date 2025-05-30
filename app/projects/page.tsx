"use client";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import React from "react";
import Project from "@/components/project";
import { motion } from "framer-motion";

export interface ProjectType {
  title: string;
  description: string;
  image: string;
  href: string;
  website?: string;
  github?: string;
}

export default function ProjectsPage() {
  const projects = [
    {
      title: "Deni AI",
      description:
        "A Free, Unlimited, Open Source AI Chatbot Application for Everyone",
      image: "/assets/deni-ai-hero.png",
      href: "/projects/deni-ai",
      website: "https://deniai.app/",
      github: "https://github.com/raicdev/deni-ai",
    },
    {
      title: "VistaUpdater",
      description: "A tool for updating Windows Vista to the latest updates.",
      image: "/assets/vistaupdater-hero.png",
      href: "/projects/vistaupdater",
      website: "https://vistaupdater.net/",
      github: "https://github.com/raicdev/VistaUpdater",
    },
    {
      title: "Coming Soon",
      description:
        "A unknown project that is coming soon. but, it is very good and useful.",
      image: "/assets/coming-soon.png",
      href: "#",
    },
    // Add more projects here
  ];

  return (
    <motion.div 
      className="min-h-screen py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Our brightest works</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </motion.div>

        <motion.div 
          className="text-center mb-12 mt-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-4 font-mono">
            Our Brightest Works
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Discover our innovative projects and cutting-edge solutions
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Project index={index} project={project as ProjectType} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

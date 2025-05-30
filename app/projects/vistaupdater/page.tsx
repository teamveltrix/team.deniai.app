"use client";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DeniAIPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="min-h-screen py-12 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div variants={itemVariants}>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/projects">
                  Our brightest works
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>VistaUpdater</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </motion.div>

        <motion.div className="text-center mb-12 mt-12" variants={itemVariants}>
          <motion.h1
            className="text-4xl font-bold mb-4 font-mono"
            variants={itemVariants}
          >
            VistaUpdater
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground mb-4"
            variants={itemVariants}
          >
            A tool for updating Windows Vista to the latest updates.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Image
              src="/assets/vistaupdater-hero.png"
              alt="Deni AI"
              width={500}
              height={300}
              className="w-full md:max-w-1/2 mx-auto h-48 object-cover rounded-lg mb-6"
            />
          </motion.div>
        </motion.div>

        <motion.div className="p-6" variants={itemVariants}>
          <motion.h2
            className="text-2xl font-semibold mb-4 font-mono"
            variants={itemVariants}
          >
            About VistaUpdater
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-4"
            variants={itemVariants}
          >
            VistaUpdater is a free and open-source tool designed to help users
            update their Windows Vista operating system to the latest available
            updates. It simplifies the process of finding and running the
            patches.
          </motion.p>
        </motion.div>

        <motion.div className="p-6" variants={itemVariants}>
          <motion.h2
            className="text-2xl font-semibold mb-4 font-mono"
            variants={itemVariants}
          >
            Features
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-4"
            variants={itemVariants}
          >
            VistaUpdater offers a range of features to enhance the update
            experience for Windows Vista users.
          </motion.p>
          <motion.div className="space-y-4" variants={containerVariants}>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              variants={containerVariants}
            >
              <motion.div variants={cardVariants}>
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>Open Source</CardTitle>
                    <CardDescription>
                      VistaUpdater is fully open source, allowing developers to
                      contribute and customize the application.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
              <motion.div variants={cardVariants}>
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>Welcome, Requests.</CardTitle>
                    <CardDescription>
                      VistaUpdater welcomes requests for new features and
                      improvements, allowing the community to shape the future
                      of the application.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
              <motion.div variants={cardVariants}>
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>Privacy</CardTitle>
                    <CardDescription>
                      VistaUpdater is designed with privacy in mind, we do not
                      collect any personal data from users. Your privacy is our
                      priority.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="p-6" variants={itemVariants}>
          <motion.h2
            className="text-2xl font-semibold mb-4 font-mono"
            variants={itemVariants}
          >
            Get Involved
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-4"
            variants={itemVariants}
          >
            We encourage contributions from the community. If you have ideas for
            new features or improvements, feel free to submit a request on our
            GitHub repository.
          </motion.p>
          <motion.p
            className="text-lg text-muted-foreground mb-4"
            variants={itemVariants}
          >
            Visit our{" "}
            <Link
              href="https://vistaupdater.net/"
              className="text-white/80 hover:text-white transition-all duration-300 hover:underline"
            >
              Website
            </Link>
            , check out the{" "}
            <Link
              href="https://github.com/raicdev/VistaUpdater"
              className="text-white/80 hover:text-white transition-all duration-300 hover:underline"
            >
              GitHub Repository
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}

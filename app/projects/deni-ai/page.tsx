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
                <BreadcrumbPage>Deni AI</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </motion.div>

        <motion.div className="text-center mb-12 mt-12" variants={itemVariants}>
          <motion.h1
            className="text-4xl font-bold mb-4 font-mono"
            variants={itemVariants}
          >
            Deni AI
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground mb-4"
            variants={itemVariants}
          >
            A Free, Unlimited, Open Source AI Chatbot Application for Everyone
          </motion.p>

          <motion.div variants={itemVariants}>
            <Image
              src="/assets/deni-ai-hero.png"
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
            About Deni AI
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-4"
            variants={itemVariants}
          >
            Deni AI is a free, unlimited use, open source AI chatbot
            application. This app is a project based on the philosophy that
            everyone should be able to use the latest AI as soon as possible and
            without being limited by money.
          </motion.p>
          <motion.p
            className="text-lg text-muted-foreground mb-4"
            variants={itemVariants}
          >
            Deni AI is designed to be user-friendly and accessible, allowing
            anyone to interact with advanced AI technology without barriers.
          </motion.p>
          <motion.p
            className="text-lg text-muted-foreground"
            variants={itemVariants}
          >
            Join us in making AI accessible to everyone!
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
            Deni AI offers a range of features that make it a powerful tool for
            anyone looking to leverage AI technology.
          </motion.p>
          <motion.div className="space-y-4" variants={containerVariants}>
            <motion.div
              className="flex items-center gap-4"
              variants={containerVariants}
            >
              <motion.div variants={cardVariants} className="flex-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Open Source</CardTitle>
                    <CardDescription>
                      Deni AI is fully open source, allowing developers to
                      contribute and customize the application.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
              <motion.div variants={cardVariants} className="flex-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Unlimited uses</CardTitle>
                    <CardDescription>
                      You can use Deni AI as much as you want, without any
                      limitations on usage.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
              <motion.div variants={cardVariants} className="flex-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Privacy</CardTitle>
                    <CardDescription>
                      Deni AI is designed with privacy in mind, ensuring that
                      your data is secure and not misused.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              variants={containerVariants}
            >
              <motion.div variants={cardVariants} className="flex-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Many features</CardTitle>
                    <CardDescription>
                      Deni AI comes with a variety of features, including hubs,
                      branches, share conversations, and more, to enhance your
                      AI experience.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
              <motion.div variants={cardVariants} className="flex-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Free (Cheaper)</CardTitle>
                    <CardDescription>
                      Deni AI is free to use, making it accessible to everyone.
                      It is also cheaper than many other AI services.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
              <motion.div variants={cardVariants} className="flex-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Welcome, Requests.</CardTitle>
                    <CardDescription>
                      Deni AI welcomes requests for new features and
                      improvements, allowing the community to shape the future
                      of the application.
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
            We invite you to join us in making Deni AI even better. Whether you
            are a developer, designer, or simply an AI enthusiast, your
            contributions are welcome.
          </motion.p>
          <motion.p
            className="text-lg text-muted-foreground mb-4"
            variants={itemVariants}
          >
            Visit our{" "}
            <Link
              href="https://deniai.app/"
              className="text-white/80 hover:text-white transition-all duration-300 hover:underline"
            >
              Website
            </Link>
            , check out the{" "}
            <Link
              href="https://github.com/raicdev/deni-ai"
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

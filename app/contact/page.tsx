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
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  return (
    <motion.div
      className="min-h-screen py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
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
                <BreadcrumbPage>Contact</BreadcrumbPage>
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
          <h1 className="text-4xl font-bold mb-4 font-mono">Get In Touch</h1>
          <p className="text-xl text-muted-foreground mb-4">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-6 font-mono">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2 font-mono">Email</h3>
                <p className="text-muted-foreground">contact@deniai.app</p>
              </div>
              <div>
                <h3 className="font-medium mb-2 font-mono">GitHub</h3>
                <p className="text-muted-foreground">
                  <Link href="https://github.com/teamveltrix" className="text-white/80 hover:text-white transition-all duration-300 hover:underline">github.com/teamveltrix</Link>
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2 font-mono">Response Time</h3>
                <p className="text-muted-foreground">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="font-mono mb-2">
                  Name
                </Label>
                <Input type="text" id="name" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email" className="font-mono mb-2">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <Label htmlFor="subject" className="font-mono mb-2">
                  Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <Label htmlFor="message" className="font-mono mb-2">
                  Message
                </Label>
                <Textarea id="message" rows={4} placeholder="Your message..." />
              </div>
              <Button type="submit" className="min-w-full cursor-pointer">
                Send Message
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

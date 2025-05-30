"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowDown, Github, PlayCircle, TextIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "@/components/home/hero";
import AboutUs from "@/components/home/about-us";
import Works from "@/components/home/works";
import Join from "@/components/home/join";

export default function Home() {
  return (
    <main>
      <Hero />

      <AboutUs />

      <Works />

      <Join />
    </main>
  );
}

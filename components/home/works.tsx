import { motion } from "framer-motion";
import { Github, TextIcon, PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";

export default function Works() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4 font-mono">Our brightest works</h2>
      <p className="text-lg text-muted-foreground max-w-2xl text-center mb-8">
        Explore our portfolio to see how we have transformed ideas into
        impactful projects. Each project reflects our commitment to quality,
        innovation, and excellence.
      </p>

      <motion.div
        className="flex flex-col md:flex-row gap-4 items-stretch justify-center max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex-1 max-w-md"
          initial={{ opacity: 0, scale: 0.9, filter: "grayscale(100%)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "grayscale(100%)" }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02, filter: "grayscale(0%)" }}
          viewport={{ once: true }}
        >
          <Card className="flex flex-col h-full">
            <CardHeader>
              <Image
                src="/assets/deni-ai-hero.png"
                alt="Deni AI"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardTitle className="text-2xl font-bold">Deni AI</CardTitle>
              <CardDescription>
                A free, open-source, unlimited, and privacy-focused AI Chatbot.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p>
                Deni AI is a free, unlimited use, open source AI chatbot
                application.
                <br />
                This app is a project based on the philosophy that everyone
                should be able to use the latest AI as soon as possible and
                without being limited by money.
              </p>
            </CardContent>
            <CardFooter className="flex items-center w-full gap-2">
              <div>
                <Button asChild variant="outline">
                  <Link
                    href="https://github.com/raicdev/deni-ai"
                    target="_blank"
                  >
                    <Github />
                  </Link>
                </Button>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Button asChild variant="secondary">
                  <Link href="/projects/deni-ai" target="_blank">
                    <TextIcon />
                    Learn more
                  </Link>
                </Button>

                <Button asChild>
                  <Link href="https://deniai.app/" target="_blank">
                    <PlayCircle />
                    Visit
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div
          className="flex-1 max-w-md"
          initial={{ opacity: 0, scale: 0.9, filter: "grayscale(100%)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "grayscale(100%)" }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02, filter: "grayscale(0%)" }}
          viewport={{ once: true }}
        >
          <Card className="flex flex-col h-full">
            <CardHeader>
              <Image
                src="/assets/vistaupdater-hero.png"
                alt="VistaUpdater"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardTitle className="text-2xl font-bold">VistaUpdater</CardTitle>
              <CardDescription>
                Tool to update your Windows Vista to latest.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p>
                VistaUpdater is an application that allows you to easily go to
                the stage of updating Windows Vista, developed for the Japanese.
                <br />
                Together, Win7Updater has over 50,000 views on YouTube.
              </p>
            </CardContent>
            <CardFooter className="flex items-center gap-2">
              <div>
                <Button asChild variant="outline">
                  <Link
                    href="https://github.com/raicdev/VistaUpdater"
                    target="_blank"
                  >
                    <Github />
                  </Link>
                </Button>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Button asChild variant="secondary">
                  <Link href="/projects/vistaupdater" target="_blank">
                    <TextIcon />
                    Learn more
                  </Link>
                </Button>

                <Button asChild>
                  <Link href="https://vistaupdater.net" target="_blank">
                    <PlayCircle />
                    Visit
                    <span className="font-mono">50,000+</span>
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

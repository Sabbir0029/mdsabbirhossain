"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Download, Github } from "lucide-react";
import Image from "next/image";
import image from "../../app/assets/sabbir-img.jpg";
import Education from "../Education/Education";
import ProgrammingSkills from "../ProgrammingSkills/programming-skills";

export default function Portfolio() {
  const socialIcons = [
    { Icon: Facebook, href: "https://www.facebook.com/sabbirahmad.shakib/" },
    { Icon: Github, href: "https://github.com/Sabbir0029" },
    { Icon: Instagram, href: "#" },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/md-sabbir-hossain-8a8390227/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white overflow-hidden">
      {/* Main Content */}
      <div className="px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            className="space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-xl lg:text-2xl font-medium mb-4">
                Hello, It is Me
              </p>
              <h1 className="text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
                MD. SABBIR HOSSAIN
              </h1>
              <p className="text-xl lg:text-2xl font-medium">
                And I am a{" "}
                <span className="text-cyan-400 font-bold">
                  Software Engineer
                </span>
              </p>
            </motion.div>

            <motion.p
              className="text-gray-300 text-wihte lg:text-lg leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              A skilled and professional Full-stack web developer as well as a next.js developer. I have been working in these fields for a while and have gained much experience. I only need a chance to prove my worthiness.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.Icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <Button
                className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
                size="lg"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Glowing Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-[3rem] blur-xl opacity-30"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Hexagonal Frame */}
              <div className="relative">
                <div
                  className="w-80 h-80 lg:w-96 lg:h-96 relative"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                    padding: "4px",
                  }}
                >
                  <div
                    className="w-full h-full bg-slate-800 relative overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                  >
                    <Image
                      src={image}
                      alt="sabbir - Frontend Developer"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
      {/* Education section  */}
      <Education />
      {/* Programming Skills */}
      <ProgrammingSkills />
      {/* frist div end point */}
    </div>
  );
}

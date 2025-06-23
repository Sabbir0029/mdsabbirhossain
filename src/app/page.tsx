"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  
  Globe,
  Book,
  Music,
  Camera,
  Gamepad2,
  Github,
  LinkedinIcon,
} from "lucide-react";
import profile from "../app/assets/502753942_2136340813467580_3509385669655566491_n.jpg"; // Replace with your image path
import DownloadButton from "@/components/download-button";

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills = [
    { name: "Fontend Development", level: 90 },
    { name: "Backend Development", level: 85 },
    { name: "figma", level: 55 },
    { name: "Adobe Illustrator", level: 58 },
  ];

  const languages = [
    { name: "English", level: "Native" },
    { name: "Spanish", level: "Fluent" },
    { name: "French", level: "Basic" },
  ];

  const hobbies = [
    { name: "Reading Books", icon: Book },
    { name: "Music", icon: Music },
    { name: "Photography", icon: Camera },
    { name: "Gaming", icon: Gamepad2 },
    { name: "Traveling", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
          {/* Left Sidebar */}
          <div
            className={`bg-slate-800 text-white p-8 lg:p-12 transition-all duration-1000 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl text-white lg:text-4xl font-bold mb-2">
                MD. SABBIR HOSSAIN
              </h1>
              <p className="text-gray-300 font-bold text-sm lg:text-base tracking-wider">
                FULL-STACK WEB DEVELOPER | NEXT.JS DEVELOPER
              </p>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <div className="relative w-42 h-42 lg:w-50 lg:h-50">
                <div className="absolute inset-0 bg-white rounded-full p-2">
                  <div className="w-full h-full bg-gray-300 rounded-full overflow-hidden">
                    <Image
                      src={profile} // Replace with your image path
                      alt="Profile"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Download Button */}
            <div className="mb-5 text-center mx-12">
              <DownloadButton />
            </div>

            {/* Contact */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-800 font-bold text-sm ">📧</span>
                </div>
                <h3 className="text-2xl text-white font-bold">CONTACT ME</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-gray-300 text-bold" />
                  <span className="font-bold">+8801773147066</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-gray-300" />
                  <span className="font-bold">mdsabbirhossain0029@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Github className="w-4 h-4 mr-3 text-gray-300" />
                  <span className="font-bold">https://github.com/sabbir0029</span>
                </div>
                <div className="flex items-center">
                  <LinkedinIcon className="w-4 h-4 mr-3 text-gray-300" />
                  <span className="font-bold">
                    https://www.linkedin.com/in/md-sabbir-hossain-8a8390227/
                  </span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-3 text-gray-300" />
                  <span className="font-bold">www.noeltaylor.com</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-800 font-bold text-sm">🎓</span>
                </div>
                <h3 className="text-2xl font-bold">EDUCATION</h3>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="text-xl font-bold text-white">Bsc in Engineering</h4>
                  <p className="text-white font-semibold">
                    Northern University Bangladesh,Dhaka.
                  </p>
                  <p className="text-white font-semibold">
                    Computer Science and Engineering.
                  </p>
                  <p className="text-white font-semibold">6th Semester</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Diploma in Engineering</h4>
                  <p className="text-white font-semibold">
                    Pabna Polytechnic Institute,Pabna.
                  </p>
                  <p className="text-white font-semibold">Computer Technology.</p>
                  <p className="text-white font-semibold">Passing Year : 2022</p>
                </div>
              </div>
            </div>

            {/* References */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-800 font-bold text-sm">👥</span>
                </div>
                <h3 className="text-lg font-semibold">REFERENCES</h3>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold">CHARLIE B. STANTON</h4>
                  <p className="text-gray-300">Art Director</p>
                  <p className="text-gray-400 text-xs">charlie@company.com</p>
                  <p className="text-gray-400 text-xs">+1 234 567 8901</p>
                </div>
                <div>
                  <h4 className="font-semibold">ROBERT J. BELLIN</h4>
                  <p className="text-gray-300">Creative Director</p>
                  <p className="text-gray-400 text-xs">robert@agency.com</p>
                  <p className="text-gray-400 text-xs">+1 234 567 8902</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`lg:col-span-2 bg-white p-8 lg:p-12 transition-all duration-1000 delay-300 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            {/* About Me */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">👤</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">ABOUT ME</h2>
              </div>
              <p className="text-gray-900 leading-relaxed">
                Hello, I am Md. Sabbir Hossain, a skilled and professional
                Full-stack web developer as well as a next.js developer. I have
                been working in these fields for a while and have gained much
                experience. I only need a chance to prove my worthiness.
              </p>
            </section>

            {/* Job Experience */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">💼</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  TRAINING BACKGROUND
                </h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-sky-500 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-800">
                      Professional Web Development
                    </h3>
                    <span className="text-sm text-gray-900 bg-gray-100 px-3 py-1 rounded">
                      Training Duration : 12 Months
                    </span>
                  </div>
                  <p className="text-gray-600 mb-1">
                    Training Institute : Programming Hero
                  </p>
                  <p className="text-gray-600">
                    Topic Covered : <strong>Fontend :</strong> Html, Css,
                    Tailwind CSS, Bootstrap, Shadcn UI, JavaScript,
                    <br />
                    TypeScript, React.Js, Redux.js, Next.js,
                  </p>
                  <p className="text-gray-600">
                    <strong>Backend :</strong> Node.Js, Express.Js, MongoDB,
                    Prisma, PostgreSQL,
                  </p>
                  <p className="text-gray-600">
                    <strong>Others :</strong> Git, GitHub, Firebase, Netlify,
                    Vercel, Heroku, and more.
                  </p>
                </div>

                <div className="border-l-4 border-sky-500 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-800">
                      Web Development
                    </h3>
                    <span className="text-sm text-gray-900 bg-gray-100 px-3 py-1 rounded">
                      Training Duration : 3 Months
                    </span>
                  </div>
                  <p className="text-gray-600  mb-1">
                    Training Institute : Creative IT Institute Of Bangladesh.
                  </p>
                  <p className="text-gray-600 ">
                    Topic Covered : Php, Laravel ,MySql
                  </p>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">⚡</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">SKILLS</h2>
              </div>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-neutral-800 font-bold text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-red-300 rounded-full h-2">
                      <div
                        className="bg-green-800 h-2 rounded-full transition-all duration-1000 ease-out group-hover:bg-gray-600"
                        style={{
                          width: isLoaded ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 200}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages & Hobbies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Languages */}
              <section>
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">🌐</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    MY PROJECTS
                  </h2>
                </div>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-700">{lang.name}</span>
                      <span className="text-gray-500 text-sm">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Hobbies */}
              <section>
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">❤️</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">MY BLOGS</h2>
                </div>
                <div className="space-y-3">
                  {hobbies.map((hobby) => (
                    <div
                      key={hobby.name}
                      className="flex items-center group cursor-pointer"
                    >
                      <hobby.icon className="w-4 h-4 mr-3 text-gray-600 group-hover:text-gray-800 transition-colors" />
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                        {hobby.name}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

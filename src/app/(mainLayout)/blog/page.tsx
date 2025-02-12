import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Md. Sabbir Hossain || Blog",
  description: "My All Blogs Here",
};

const blog = () => {
  return (
    <div className="container  min-h-screen dark:bg-gray-900 text-black dark:text-white transition-colors">
      <div>
        <h1 className="text-center mt-8 text-2xl font-bold">
          My All Blogs Here
        </h1>
        <p className="text-center">
          Explore all programming topics in my blogs, covering coding,
          <br />
          development, frameworks, best practices, and industry trends in
          technology.
        </p>
      </div>
    </div>
  );
};

export default blog;

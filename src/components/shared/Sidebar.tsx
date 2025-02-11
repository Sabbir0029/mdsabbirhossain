"use client";
import Link from "next/link";
import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Sidebar = () => {
  const items = [
    {
      id: "1",
      path: "/",
      titel: "Home",
    },
    {
      id: "2",
      path: "/dashboard",
      titel: "Dashboard",
    },
    {
      id: "3",
      path: "/dashboard/projects",
      titel: "Create Project",
    },
    {
      id: "4",
      path: "/dashboard/blogs",
      titel: "Create Blog",
    },
    {
      id: "5",
      path: "/dashboard/messages",
      titel: "Messages view",
    },
  ];
  return (
    <div className="flex w-60 bg-slate-500">
      <div className=" mt-5 w-full">
        {/* navber Links map */}
        {items.map((item) => (
          <div key={item.id} className=" mx-5 mt-5 w-full">
            <Link
              href={item.path}
              className="bg-white dark:text-white dark:bg-info py-2 px-5 w-full rounded-full"
            >
              {item.titel}
            </Link>
            <br />
          </div>
        ))}
        {/* navber Links map End*/}
      </div>
      <div className="p-2">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Sidebar;

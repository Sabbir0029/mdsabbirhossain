'use client'
import Link from "next/link";
import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { signOut } from "next-auth/react";
export type userProps={
  user?:{
    name?:string | null |undefined,
    email?:string | null |undefined,
    image?:string | null |undefined,
  }
}

const Navber = ({session}:{session :userProps | null}) => {
  const items = [
    {
      id:'1',
      path: "/",
      titel: "Home",
    },
    {
      id:'2',
      path: "/projects",
      titel: "Projects",
    },
    {
      id:'3',
      path: "/blog",
      titel: "Blog",
    },
    {
      id:'4',
      path: "/contact",
      titel: "Contact",
    },
    {
      id:'5',
      path: "/dashboard",
      titel: "Dashboard",
    },
  ];
  return (
    <div className="container">
      <div className="navbar bg-cyan-700 dark:bg-gray-900 text-white font-bold dark:text-white transition-colors">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {/* navber Links map */}
              {items.map((item) => (
                <Link key={item.id} href={item.path}
                className="m-1"
                >
                  {" "}
                  {item.titel}
                </Link>
              ))}
                {/* navber Links map End*/}
            </ul>
          </div>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* navber Links map */}
            {items.map((item) => (
                <Link key={item.id} href={item.path}
                className="m-4"
                >
                  {" "}
                  {item.titel}
                </Link>
              ))}

                {/* navber Links map End*/}
          </ul>
        </div>
        <div className="navbar-end mx-3">{
          session?.user ? <button className="mx-5" onClick={()=> signOut()}>LogOut</button> :
        <Link href='/login' className="mx-8">Admin Login</Link>}
          <DarkModeToggle/>
        </div>
      </div>
    </div>
  );
};

export default Navber;

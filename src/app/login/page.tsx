'use client'
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  return (
    <div className="container ">
      <div className="absolute top-1/4 left-1/4">
      <div >
        <Link
          href="/"
          className="bg-info px-8 py-3 font-bold text-black rounded-full"
        >
          Home
        </Link>
      </div>
      <div className="flex text-center bg-info cursor-pointer py-4 px-8 mt-5 rounded-full">
        <button className="flex" onClick={()=>signIn("google",{
            callbackUrl:"http://localhost:3000/dashboard"
        })}>
        <FcGoogle className="text-2xl mx-2"/>
        <strong>Login with Google</strong>
        </button>
      </div>
      </div>
    </div>
  );
};

export default page;

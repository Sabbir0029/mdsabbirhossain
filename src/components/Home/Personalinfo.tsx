import profile from "../../../public/assets/profile.jpg";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Personalinfo = () => {
    return (
        <div>
            <section className="end">
          <Image
            className="absolute top-32 right-2/4 rounded-l-lg border-t-8 border-l-8 border-b-8 border-white"
            src={profile}
            alt="Profile image"
            width={250}
            height={250}
          />
          <h1 className="font-bold text-2xl mt-20 ml-5 text-white">
            Md SABBIR HOSSAIN
          </h1>
          <strong className="ml-5 text-white">Full Stack Developer</strong>{" "}
          <br />
          <div className="mt-10 ">
            <Link
              download="CVOfMd.SabbirHossain.pdf"
              className=" ml-5 mb-3 font-bold text-black p-4 bg-info rounded-full"
              target="_blank"
              href="/CVOfMd.SabbirHossain.pdf"
            >
              {" "}
              Download Resume
            </Link>
          </div>
        </section>
        </div>
    );
};

export default Personalinfo;
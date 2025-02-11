import profile from "../../../public/assets/profile.jpg";
import { FaUserAlt } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const HomePageAllContent = () => {
  return (
    <div className=" flex m-auto">
      <div className="w-2/4 bg-slate-700">
        {/* personal info start */}
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
        {/* personal info end*/}
        {/* About Me section start */}
        <section>
          <div className="mt-24 ml-5 flex">
            <div className=" bg-info rounded-full mx-2 p-3">
              <FaUserAlt />
            </div>
            <h2 className="font-bold text-2xl mt-1  text-white">ABOUT ME</h2>
          </div>
          <p className="text-white ml-8 mt-4 font-medium">
            Hello, I am Md. Sabbir Hossain, a skilled and professional
            Full-stack web developer as well as a next.js developer. I have been
            working in these fields for a while and have gained much experience.
            I only need a chance to prove my worthiness.
          </p>
        </section>
        {/* About Me section end */}
        {/* Education section start */}
        <section>
          <div className="mt-14 ml-5 flex">
            <div className=" bg-info rounded-full mx-2 p-3">
              <MdCastForEducation />
            </div>
            <h2 className="font-bold text-2xl mt-1 text-white">EDUCATION</h2>
          </div>
          <div className="ml-8 mt-2">
            {/* bcs */}
            <div className="ml-5">
              <h1 className="text-lg text-white font-bold">
                Bsc in Engineering
              </h1>
              <p className="ml-5 text-white ">
                Technology : Computer Science and Engineering
              </p>
              <p className="ml-5 text-white ">
                Institute : Northern University Bangladesh,Dhaka
              </p>
              <p className="ml-5 text-white ">Semester : 5th Semester</p>
            </div>
            {/* bcs end*/}
            {/* Diploma in Engineering */}
            <div className="ml-5 mt-4">
              <h1 className="text-lg text-white font-bold">
                Diploma in Engineering
              </h1>
              <p className="ml-5 text-white ">
                Technology : Computer Technology
              </p>
              <p className="ml-5 text-white ">
                Institute : Pabna Polytechnic Institute,Pabna
              </p>
              <p className="ml-5 text-white ">Passing Year : 2022</p>
            </div>
            {/* Diploma in Engineering end*/}
          </div>
        </section>
        {/* Education section end */}
        {/* Training Background section start */}
        <section className="mb-5">
          <div className="mt-8 ml-5 flex">
            <div className=" bg-info rounded-full mx-2 p-3">
              <FaLaptopCode />
            </div>
            <h2 className="font-bold text-2xl mt-1 text-white">
              TRAINING BACKGROUND
            </h2>
          </div>
          <div className="ml-8">
            <div className="ml-5 mt-4">
              <h1 className="text-lg text-white font-bold">
                Professional Web Development
              </h1>
              <p className="ml-5 text-white ">
                Training Institute : Programming Hero
              </p>
              <p className="ml-5 text-white ">
                Location : Level-4, 34, Awal Centre, Banani, Dhaka
              </p>
              <p className="ml-5 text-white ">Training Duration : 6 Months</p>
              <p className="ml-5 text-white ">
                Topic Covered : Html, Css, JavaScript, React.Js, Node.Js,
                <br />
                Express.Js, MongoDB
              </p>
            </div>
            <div className="ml-5 mt-4">
              <h1 className="text-lg text-white font-bold">Web Development</h1>
              <p className="ml-5 text-white ">
                Training Institute : Creative IT Institute Of Bangladesh.
              </p>
              <p className="ml-5 text-white ">
                Location : House #07, Road#04, Dhanmondi,1205 Dhaka.
              </p>
              <p className="ml-5 text-white ">Training Duration : 3 Months</p>
              <p className="ml-5 text-white ">
                Topic Covered : Php, Laravel ,MySql
              </p>
            </div>
          </div>
        </section>
        {/* Training Background section end */}
      </div>
      {/* next part start */}
      <div className="w-2/4 bg-white">
        {/* CONTACT MEsection start */}
        <section className="ml-10">
          <div className="mt-12 ml-5 flex">
            <div className=" bg-info rounded-full mx-2 p-3">
              <MdOutlineContactPhone />
            </div>
            <h2 className="font-bold text-2xl mt-1  text-black">CONTACT ME</h2>
          </div>
          <div className="ml-8">
            <ul className="steps steps-vertical">
              <li data-content="★" className="step step-info">
                <strong>Contact No : +8801773147066</strong>
              </li>
              <li data-content="★" className="step step-info">
                <strong>E-mail : mdsabbirhossain0029@gmail.com </strong>
              </li>
              <li data-content="★" className="step step-info">
                <strong>
                  Github :{" "}
                  <a
                    href="https://github.com/sabbir0029"
                    className="text-blue-700"
                  >
                    {" "}
                    Click here to view my Github account.
                  </a>{" "}
                </strong>
              </li>
              <li data-content="★" className="step step-info">
                <strong>
                  Linkedin :{" "}
                  <a
                    href="https://www.linkedin.com/in/md-sabbir-hossain-8a8390227/"
                    className="text-blue-700"
                  >
                    {" "}
                    Click here to view my Linkedin account.
                  </a>
                </strong>
              </li>
            </ul>
          </div>
        </section>
        {/* CONTACT ME section end */}
        {/* PROGRAMMING SKILLS section start */}
        <section className="ml-10">
          <div className="mt-12 ml-5 flex">
            <div className=" bg-info rounded-full mx-2 p-3">
              <FaCode />
            </div>
            <h2 className="font-bold text-2xl mt-1  text-black">
              PROGRAMMING SKILLS
            </h2>
          </div>
          <div className="ml-5 ">
            <div className="mt-4 grid grid-cols-5 gap-2">
              <div className="bg-orange-200 w-24 py-2 rounded-md">
                <strong className="text-orange-600 ml-2">HTML 80%</strong>
              </div>
              <div className="bg-blue-200 w-24 py-2 rounded-md">
                <strong className="text-blue-600 ml-2">CSS 80%</strong>
              </div>
              <div className="bg-red-200 w-28 py-2 rounded-md">
                <strong className="text-red-600 ml-2">Tailwind 80%</strong>
              </div>
              <div className="bg-amber-200 w-32 py-2 rounded-md col-span-2 ml-4">
                <strong className="text-amber-600 ml-2">JavaScript 70%</strong>
              </div>
              <div className="bg-purple-200 w-24 py-2 rounded-md ">
                <strong className="text-purple-600 ml-2">React 80%</strong>
              </div>
              <div className="bg-pink-200 w-24 py-2 rounded-md ">
                <strong className="text-pink-600 ml-1">Next.js 70%</strong>
              </div>
              <div className="bg-lime-200 w-24 py-2 rounded-md">
                <strong className="text-lime-600 ml-2">Redux 80%</strong>
              </div>
              <div className="bg-fuchsia-200 w-28 py-2 rounded-md col-span-2">
                <strong className="text-fuchsia-600 ml-2">NodeJS 80%</strong>
              </div>
              <div className="bg-rose-200 w-32 py-2 rounded-md">
                <strong className="text-rose-600 ml-2">ExpressJS 80%</strong>
              </div>
              <div className="bg-slate-200 w-32 py-2 rounded-md ml-8">
                <strong className="text-slate-600 ml-2">MongoDB 80%</strong>
              </div>
              <div className="bg-green-200 w-32 py-2 rounded-md ml-16">
                <strong className="text-green-600 ml-2">Firebase 80%</strong>
              </div>
            </div>
          </div>
        </section>
        {/* PROGRAMMING SKILLS section end */}
        {/* MY PROJECTS section start */}
        <section className="ml-10">
          <div className="mt-12 ml-5 flex">
            <div className=" bg-info rounded-full mx-2 p-3">
              <AiFillProject />
            </div>
            <h2 className="font-bold text-2xl mt-1  text-black">MY PROJECTS</h2>
          </div>
          <div className="ml-8 ">
            <div className="mt-4 grid grid-cols-4 gap-2">
              <h1>MY PROJECTS</h1>
            </div>
          </div>
        </section>
        {/* MY PROJECTS section end */}
        {/* Blogs section start */}
        <section className="ml-10">
          <div className="mt-12 ml-5 flex">
            <div className=" bg-info rounded-full mx-2 p-3">
              <FaBlog />
            </div>
            <h2 className="font-bold text-2xl mt-1  text-black">MY BLOGS</h2>
          </div>
          <div className="ml-8 ">
            <div className="mt-4 grid grid-cols-4 gap-2">
              <h1>MY BLOGS</h1>
            </div>
          </div>
        </section>
        {/* MY PROJECTS section end */}
      </div>
    </div>
  );
};

export default HomePageAllContent;

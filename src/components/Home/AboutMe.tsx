import { FaUserAlt } from "react-icons/fa";

const AboutMe = () => {
    return (
        <div>
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
        </div>
    );
};

export default AboutMe;
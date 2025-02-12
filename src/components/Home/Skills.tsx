import { FaCode } from "react-icons/fa";

const Skills = () => {
  return (
    <div>
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
    </div>
  );
};

export default Skills;

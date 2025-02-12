
import { MdCastForEducation } from "react-icons/md";

const Education = () => {
  return (
    <div>
      <section>
        <div className="mt-8 ml-5 flex">
          <div className=" bg-info rounded-full mx-2 p-3">
            <MdCastForEducation />
          </div>
          <h2 className="font-bold text-2xl mt-1 text-white">EDUCATION</h2>
        </div>
        <div className="ml-8 mt-2">
          {/* bcs */}
          <div className="ml-5">
            <h1 className="text-lg text-white font-bold">Bsc in Engineering</h1>
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
            <p className="ml-5 text-white ">Technology : Computer Technology</p>
            <p className="ml-5 text-white ">
              Institute : Pabna Polytechnic Institute,Pabna
            </p>
            <p className="ml-5 text-white ">Passing Year : 2022</p>
          </div>
          {/* Diploma in Engineering end*/}
        </div>
      </section>
    </div>
  );
};

export default Education;

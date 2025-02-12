import { FaLaptopCode } from "react-icons/fa";

const Training = () => {
  return (
    <div>
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
    </div>
  );
};

export default Training;

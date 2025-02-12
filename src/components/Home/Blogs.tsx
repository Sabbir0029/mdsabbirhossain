import { FaBlog } from "react-icons/fa";

const Blogs = () => {
  return (
    <div>
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
    </div>
  );
};

export default Blogs;

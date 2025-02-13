import Education from "./Education";
import Training from "./Training";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Skills from "./Skills";
import Blogs from "./Blogs";
import Personalinfo from "./Personalinfo";
import ProjectsHome from "./ProjectsHome";

const HomePageAllContent = () => {
  return (
    <div className=" flex m-auto">
      <div className="w-2/4 bg-slate-700">
        <Personalinfo />
        <AboutMe />
        <Education />
        <Training />
      </div>
      {/* next part start */}
      <div className="w-2/4 bg-white">
        <ContactMe />
        <Skills />
        <ProjectsHome />
        <Blogs />
      </div>
    </div>
  );
};

export default HomePageAllContent;

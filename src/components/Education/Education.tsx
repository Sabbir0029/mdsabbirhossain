import EducationSection from "./education-section";
import TrainingSection from "./Training";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="px-6 lg:px-12 py-12 lg:py-20">
      <div className="text-center mb-8">
        <motion.h2 className="text-3xl text-cyan-400 font-bold tracking-tighter sm:text-5xl mb-2">
          Education And Training Background
        </motion.h2>
        <motion.p>
          My academic journey and educational achievements that have shaped <br/> my expertise and knowledge foundation.
        </motion.p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center max-w-7xl mx-auto">
        {/* Left Content */}
        <div>
          <EducationSection />
        </div>
        {/* Right Content  */}
        <div>
          <TrainingSection />
        </div>
      </div>
    </div>
  );
};
export default Education;

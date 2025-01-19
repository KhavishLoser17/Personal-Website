import { SKILLS } from "../constants";
import {motion} from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5, 
      when: "beforeChildren", 
    },
  },
};
const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }, // Animates each item over 0.5s
  },
};


export default function Skills() {
  return (
    <section className="container mx-auto mt-20" id="skills">
      {/* Section Title */}
      <motion.h2 
      initial={{opacity: 0,}}
      whileInView={{opacity: 1,}}
      transition={{duration: 1}}
      className="mb-12 text-center text-3xl font-bold lg:text-4xl">Skills</motion.h2>

      {/* Skills List */}
      <motion.div
        initial={{opacity: 0, x: -20}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        variants={containerVariants}
        viewport={{once: true}}
        className="mx-4 flex flex-col rounded-3xl border border-stone-50/30 bg-gray-900 px-6 py-8 lg:mx-20 lg:px-20"
      >
        {SKILLS.map((skill, index) => (
          <motion.div
          variants={itemVariants}
            key={index}
            className={`py-6 flex items-center justify-between ${
              index !== SKILLS.length - 1 ? "border-b border-stone-50/30" : ""
            }`}
          >
            {/* Skill Icon and Name */}
            <div className="flex items-center">
              <div className="text-3xl text-yellow-400">{skill.icon}</div>
              <h3 className="ml-6 text-lg font-semibold lg:text-2xl">{skill.name}</h3>
            </div>

            {/* Skill Experience */}
            <div className="text-md font-semibold text-stone-200 lg:text-xl">
              <span>{skill.experience}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import {motion} from "framer-motion";

export default function Projects() {
  return (
    <section className="pt-8" id="projects">
      <motion.h2
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{ duration: 0.8}}
      className="mb-8 text-center text-3xl font-bold lg:text-4xl">Projects</motion.h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <motion.div
          initial={{opacity: 0, scale: 0.9}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          whileHover={{scale: 1.05}}
            key={project.id}
            className="group relative overflow-hidden rounded-3xl shadow-lg"
          >
            
            <motion.img
            whileHover={{scale: 1.1}}
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

           
            <motion.div
            initial={{opacity: 0}}
            whileHover={{opacity: 1}}
            transition={{duration: 0.5}}
              className="absolute inset-0 flex flex-col items-center justify-center
              text-white bg-black/70 opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100"
            >
              <h3 className="mb-4 text-xl font-semibold">{project.name}</h3>
              <p className="mb-8 px-4 text-center">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
              >
                <span>View on GitHub</span>
                <MdArrowOutward />
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { HERO } from "../constants/index.jsx"; 
import carlImg from "../assets/jekob.jpg";
import {motion} from "framer-motion";
export default function Hero() {
  
    return (
      <section className="flex min-h-screen flex-wrap items-center">
        <motion.div 
        initial={{opacity: 0, x: -50}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 1}}
         className="w-full md:w-1/2">
          <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
            {HERO.name}
          </h2>
          <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
            {HERO.greet}
          </p>
        <p className="mb-8 p-2 text-xl">{HERO.description}</p>
        </motion.div>
        <motion.div 
         initial={{ opacity: 0, scale: 0.8}}
         animate={{ opacity: 1, scale: 1 }}
         transition={{duration: 1}}
        className="w-full md:w-1/2 lg:p-8">
        <div className="flex justify-center">
        <motion.img 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
        src={carlImg} width={550} height={550}
         alt="Jaycob Magno" className="rounded-3xl" />
        </div>
    </motion.div>
      </section>
    );
  }
  
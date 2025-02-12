import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";
import { data } from "../utils/data";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative ">
      <div className="absolute top-[40%] sm:top-[20%] left-[15%] h-36 w-36 bg-blue-700 "></div>
      <div className="p-4 relative h-[90vh] flex flex-col items-center backdrop-blur-[100px]  w-screen font-jetbrains relative text-neutral-300 text-[2.4rem]">
          <div className='text-[4rem] relative w-fit bg-gradient-to-r border-white from-cyan-700 via-cyan-300 to-zinc-200 text-transparent bg-clip-text text-center flex justify-center items-center font-sans'>
              {data.name}
              <span className="h-[1.1px] absolute transition-opacity duration-200 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></span>
              <motion.span 
                initial={{
                  left : -100,
                }}
                animate={{
                  left : 60
                }}
                transition={{
                  duration : 1.5
                }}
                className="h-[5px] left-[10%] absolute transition-opacity duration-200 bottom-0 left-0 w-3/4 bg-gradient-to-r blur-sm from-transparent via-yellow-300 to-transparent"
                >
              </motion.span>
          </div>
          <div className="flex w-full justify-center items-center sm:items-start sm:pl-16 flex-col">
            <motion.div 
                whileHover={{
                  rotateX : 25,
                  rotateY : 10,
                }}
                transition={{
                  translateZ : 100,
                  duration : 0.3,
                  ease : "easeInOut"
                }}
                onClick={() => navigate("/about")} 
                className="hover:text-neutral-200 [perspective::1000px] [transform-style:preserve-3d] group relative font-medium font-jetbrains w-fit transform cursor-pointer duration-200 hover:text-[2.5rem] m-4 "
              >
                <span className="group-hover:text-[4rem] duration-200">A</span>
                bout Me
                <span className="h-[1.1px] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></span>
                <span className="h-[5px] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-0 left-0 w-full bg-gradient-to-r blur-sm from-transparent via-yellow-500 to-transparent"></span>
                <span className="h-[2px] left-[30%] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-0 left-0 w-1/2 bg-gradient-to-r blur-sm from-transparent via-yellow-300 to-transparent"></span>
            </motion.div> 
            <motion.a 
                whileHover={{
                  rotateX : 25,
                  rotateY : 10,
                }}
                transition={{
                  translateZ : 100,
                  duration : 0.3,
                  ease : "easeInOut"
                }}
                href={data.projects_link} 
                className="hover:text-neutral-200 [perspective::1000px] [transform-style:preserve-3d] group relative font-medium font-jetbrains w-fit transform cursor-pointer duration-200 hover:text-[2.5rem] m-4 "
              >
                <span className="group-hover:text-[4rem] duration-200">P</span>
                rojects
                <span className="h-[1.1px] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></span>
                <span className="h-[5px] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-0 left-0 w-full bg-gradient-to-r blur-sm from-transparent via-yellow-500 to-transparent"></span>
                <span className="h-[2px] left-[30%] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-0 left-0 w-1/2 bg-gradient-to-r blur-sm from-transparent via-yellow-300 to-transparent"></span>
            </motion.a> 
            <motion.a 
                whileHover={{
                  rotateX : 25,
                  rotateY : 10,
                }}
                transition={{
                  translateZ : 100,
                  duration : 0.3,
                  ease : "easeInOut"
                }}
                href={data.leetcode_link}
                className="hover:text-neutral-200 [perspective::1000px] [transform-style:preserve-3d] group relative font-medium font-jetbrains w-fit transform cursor-pointer duration-200 hover:text-[2.5rem] m-4 "
              >
                <span className="group-hover:text-[4rem] duration-200">L</span>
                eetcode
                <span className="h-[1.1px] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></span>
                <span className="h-[5px] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-0 left-0 w-full bg-gradient-to-r blur-sm from-transparent via-yellow-500 to-transparent"></span>
                <span className="h-[2px] left-[30%] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-0 left-0 w-1/2 bg-gradient-to-r blur-sm from-transparent via-yellow-300 to-transparent"></span>
            </motion.a> 
          </div>
      </div>
    </div>
  )
}

export default Hero
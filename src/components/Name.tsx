import { motion } from 'framer-motion'

const Name = ({data} : {data : { name : string }}) => {
  return (
    <div className='text-[4rem] relative w-fit bg-gradient-to-r border-white from-cyan-700 via-cyan-300 to-zinc-200 text-transparent bg-clip-text text-center flex justify-center items-center'>
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
  )
}

export default Name
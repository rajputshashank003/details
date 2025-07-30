import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"

const Options = ({link , name, local, count = 1 } : {link : string , name : string, local : boolean, count?: number}) => {
    const navigate = useNavigate();
    const handleClick = (e : any) => {
        if (local) {
            e.preventDefault();
            navigate(link); 
        }
    };
    return (
    <Link to={local ? "#" : link} onClick={handleClick}>
        <motion.div 
            data-scroll
            data-scroll-speed={count % 2 ? '-0.03' : '0.03'}
            whileHover={{
                rotateX : 25,
                rotateY : 10,
            }}
            transition={{
                translateZ : 100,
                duration : 0.3,
                ease : "easeInOut"
            }}
            className="hover:text-neutral-200 shadow-[1px_-1px_2px] shadow-gray-300 bg-gray-400/20 hover:bg-gray-400/10 p-2 px-4 h-fit rounded-[12px]  backdrop-blur-2xl [perspective::1000px] [transform-style:preserve-3d] group relative font-medium font-jetbrains transform cursor-pointer duration-200 max-sm:hover:text-[12px] hover:text-[2.5rem] w-fit"
        >
            <span className="max-sm:group-hover:text-[28px] group-hover:text-[4rem] duration-200">{name[0]}</span>
            {name.slice(1)}
            <span className="h-[1.1px] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"></span>
            <span className="h-[5px] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-0 left-0 w-full bg-gradient-to-r blur-sm from-transparent via-blue-500 to-transparent"></span>
            <span className="h-[2px] left-[30%] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-0 w-1/2 bg-gradient-to-r blur-sm from-transparent via-blue-300 to-transparent"></span>
        </motion.div> 
    </Link>
    )
}

export default Options
import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"

const Options = ({link , name, local } : {link : string , name : string, local : boolean}) => {
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
            whileHover={{
                rotateX : 25,
                rotateY : 10,
            }}
            transition={{
                translateZ : 100,
                duration : 0.3,
                ease : "easeInOut"
            }}
            className="hover:text-neutral-200 [perspective::1000px] [transform-style:preserve-3d] group relative font-medium font-jetbrains transform cursor-pointer duration-200 hover:text-[2.5rem] h-20 w-fit max-w-38"
        >
            <span className="group-hover:text-[4rem] duration-200">{name[0]}</span>
            {name.slice(1)}
            <span className="h-[1.1px] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></span>
            <span className="h-[5px] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-0 left-0 w-full bg-gradient-to-r blur-sm from-transparent via-yellow-500 to-transparent"></span>
            <span className="h-[2px] left-[30%] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-0 left-0 w-1/2 bg-gradient-to-r blur-sm from-transparent via-yellow-300 to-transparent"></span>
        </motion.div> 
    </Link>
    )
}

export default Options
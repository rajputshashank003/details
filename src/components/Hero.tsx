import { Link, useNavigate } from "react-router-dom"

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 relative h-[90vh] flex flex-col  w-screen font-jetbrains relative text-neutral-300 text-[2.4rem]">
        <div className='text-[4rem] w-full bg-gradient-to-r border-white from-cyan-700 to-zinc-200 text-transparent bg-clip-text text-center flex justify-center items-center font-sans'>
            Shashank Rajput
        </div>
        <div onClick={() => navigate("/about")} className="hover:text-neutral-200 font-medium font-jetbrains w-fit origin-top transform cursor-pointer hover:left-22 duration-200 hover:text-[2.5rem] p-4 left-20 relative">
            About Me
        </div>
        <Link to={"https://projectsvault.vercel.app"} className="hover:text-neutral-100 font-medium font-jetbrains w-fit origin-top transform cursor-pointer hover:left-22 duration-200 hover:text-[2.5rem] p-4 left-20 relative">
          Projects
        </Link>
        <Link to={"https://leetcode.com/rajputshashank"} className="hover:text-neutral-100 font-medium font-jetbrains w-fit origin-top transform cursor-pointer hover:left-22 duration-200 hover:text-[2.5rem] p-4 left-20 relative">
          Leetcode
        </Link>
    </div>
  )
}

export default Hero
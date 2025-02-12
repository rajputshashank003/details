import { useNavigate } from "react-router-dom"
import { data } from "../utils/data.ts";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-[10%] sm:top-[20%] left-[15%] h-36 w-36 bg-blue-700 "></div>
      <div className="absolute top-[60%] sm:top-[35%] left-[15%] h-36 w-36 bg-blue-700 "></div>
      <div className="relative backdrop-blur-[100px]">
        <div onClick={() => navigate("/")} className="fixed top-10 right-10 flex justify-center items-center w-12 h-12 p-2  cursor-pointer duration-200 rounded-full bg-zinc-500 hover:w-14 hover:h-14 text-neutral-200 hover:text-neutral-100">
          <svg className="fill-current" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M11.62 3.81 7.43 8l4.19 4.19-1.53 1.52L4.38 8l5.71-5.71 1.53 1.52z"/></svg>
        </div>
        <div className=" text-neutral-200 hover:text-neutral-100 hover:text-[2.6rem] w-fit duration-200 p-4 text-[2.5rem] font-medium font-jetbrains cursor-pointer">
            About Me
        </div>
        <div className="text-neutral-100 font-medium text-[2rem] p-8">
          {data.about_me_data_1}
          <br />
          <br />
          {data.about_me_data_2}
          <br />
        </div>
      </div>
    </div>
  )
}

export default About
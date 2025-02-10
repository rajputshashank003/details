import { useNavigate } from "react-router-dom"

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen p-2">
      <div onClick={() => navigate("/")} className="fixed top-10 right-10 flex justify-center items-center w-12 h-12 p-2  cursor-pointer duration-200 rounded-full bg-zinc-500 hover:w-14 hover:h-14 text-neutral-200 hover:text-neutral-100">
        <svg className="fill-current" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M11.62 3.81 7.43 8l4.19 4.19-1.53 1.52L4.38 8l5.71-5.71 1.53 1.52z"/></svg>
      </div>
      <div className=" text-neutral-200 hover:text-neutral-100 hover:text-[2.6rem] w-fit duration-200 p-4 text-[2.5rem] font-medium font-jetbrains cursor-pointer">
          About Me
      </div>
      <div className="text-neutral-100 font-medium text-[2rem] p-8">
        Hi, I’m Shashank Rajput, currently pursuing a Bachelor's degree in Computer Science and Engineering at Chitkara University. 
        <br />
        <br />
        I am passionate about solving complex problems using data structures, algorithms, and leveraging various technologies such as Java, JavaScript, and the MERN stack.
        <br />
      </div>
    </div>
  )
}

export default About
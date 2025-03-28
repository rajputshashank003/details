import { data } from "../utils/data";
import Options from "../components/Options";
import Name from "../components/Name";
import RedCarModel from "../components/RedCarModel";

const Hero = () => {

  return (
    <div className="relative min-h-screen font-sans bg-black">
      <div className="absolute top-[40%] sm:top-[20%] left-[15%] h-36 w-36 bg-blue-700 "></div>
      <div className="p-4 relative h-fit sm:h-fit flex flex-col items-center backdrop-blur-[100px]  w-screen font-jetbrains relative text-neutral-300 text-[2.4rem]">
        <Name data={data} />
        <div className="flex p-0 sm:p-12 max-sm:mt-8 w-full font-mono justify-center text-[1.8rem] sm:text-[2.4rem] flex-wrap gap-4 sm:gap-8 md:gap-20">
          <Options link="/about" name="About" local={true}/>
          <Options link={data.projects_link} name="Projects" local={false}/>
          <Options link={data.leetcode_link} name="Leetcode" local={false}/>
          <Options link={data.resume_link} name="Resume" local={false}/>
          <Options link={data.twitter_link} name="Twitter" local={false}/>
        </div>
        <div className="relative h-[20rem] w-screen sm:w-[80rem] m-4">
          <RedCarModel/>
        </div>
      </div>
    </div>
  )
}

export default Hero
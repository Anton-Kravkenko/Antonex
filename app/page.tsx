import LeftBar from "@/app/components/ui/left-bar/left.bar";
import About from "@/app/sections/about/about";
import HomeSection from '@/app/sections/home/home'
import Price from "@/app/sections/price/price";
import Projects from "@/app/sections/projects/projects";
import Specialization from "@/app/sections/specialization/specialization";
import Tech from "@/app/sections/tech/tech";

export default function Home() {
  return (
      <div className='justify-between items-center p-4'>
        <LeftBar/>
        <div className='relative left-[30%] w-[70%] p-8'>
        <HomeSection />
         <Specialization/>
          <Tech/>
          <Price/>
          <Projects/>
         <About/>
        </div>
      </div>
  )
}

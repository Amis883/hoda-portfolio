import Hero from "@/components/Hero";
import { FaHome } from "react-icons/fa";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <FloatingNav
          navItems={[]} // navItems={[name:'Home',link:'/'],icon:<FaHome />}
        />
        <Grid />
        <RecentProjects/>
      </div>
    </main>
  );
}

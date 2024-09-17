import About from "@/components/About";
import Contact from "@/components/Contact";
import Name from "@/components/Name";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";

const page = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr] min-[1200px]:grid-cols-[2fr_3fr] grid-rows-[auto_auto_auto_auto_auto] md:grid-rows-[auto_auto_auto_auto] gap-3 p-3">
      <Profile />
      <Name />
      <About />
      <Contact />
      <Skill />
      <Projects />
    </main>
  );
};
export default page;

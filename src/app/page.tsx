import About from "@/components/About";
import Contact from "@/components/Contact";
import Name from "@/components/Name";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";

const page = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-[60vh_auto] grid-rows-[auto_auto_auto_auto_auto] md:grid-rows-[auto_auto_auto_auto] gap-3 p-3">
      <Profile />
      <Name />
      <About />
      <Contact />
      <Projects />
    </main>
  );
};
export default page;

import About from "@/components/About";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Profile from "@/components/Profile";

const page = () => {
  return (
    <main className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 p-2">
      <Nav />
      <Profile />
      <About />
      <Cursor />
    </main>
  );
};
export default page;

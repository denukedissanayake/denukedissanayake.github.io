import Header from "@/components/Header";
import { Experience } from "@/components/sections/experience";
import { Expertise } from "@/components/sections/expertise";
import Home from "@/components/sections/Home";

export default function Page() {
  return (
    <div>
      <Header />
      <Home />
      <Experience />
      <Expertise />
    </div>
  );
}

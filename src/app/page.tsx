// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Testimonial from "./testimonial";
import Skills from "./skills";
import Clients from "./clients";
import Projects from "./projects";
// import Resume from "./resume";
// import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonial />
      <Skills />
      <Clients />
      <Projects />
      {/* <Resume />
      <PopularClients /> */}
      <ContactForm />
      {/* <Footer /> */}
    </>
  );
}

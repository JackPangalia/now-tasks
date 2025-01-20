import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-zinc-950">
      <Navbar />
      <div className="bg-zinc-950 h-screen text-white flex flex-col pt-[10rem] w-[756px] mx-auto">
        <h1 className="text-xl font-bold">About Us</h1>
        <p className="text-3xl mt-10">
          At Task Now, we believe that productivity doesn't have to be complicated.
          We set out to create a <span className = 'bg-emerald-400'> no nonesense daily task management app</span> that strips away the noise
          and focuses on what truly matters—helping you organize your tasks for
          today and plan for tomorrow. With simplicity at its core, Task Now offers a 
          <span className = 'bg-emerald-400'> distraction-free, minimalist</span> design to keep you focused on getting
          things done.
        </p>

        <h1 className="text-xl mt-10 font-bold">Our Mission</h1>
        <p className="text-3xl mt-10">
          Our mission is to provide a{" "}
          <span className="bg-emerald-400">
            streamlined digital task management
          </span>
          experience that feels as intuitive as jotting down a note on paper,
          while harnessing the power of modern technology. By prioritizing
          usability, clarity, and focus, Task Now bridges the gap between simplicity
          and functionality, <span className="bg-emerald-400">empowering</span>{" "}
          you to stay organized and productive every day.
        </p>
      </div>
      );
      <Footer />
    </div>
  );
};

export default About;

"use client";

import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import KeypointItem from "./components/KeypointItem";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-950 text-white">
        <section className="pt-[15rem] pb-[15rem] flex justify-center items-center flex-col gap-3 px-4">
          <TypeAnimation
            sequence={[
              "Tasks to take CONTROL of your life",
              1000,
              "Tasks to get things done EVERYDAY",
              1000,
              "Tasks designed for YOU",
              1000,
              "Tasks to simplify YOUR life",
              1000,
            ]}
            wrapper="h1"
            speed={50}
            className="lg:text-7xl md:text-5xl text-4xl text-center font-bold mb-6"
            repeat={Infinity}
            cursor={true}
          />

          <p className="max-w-2xl text-zinc-400 text-center text-lg mb-10">
            YOUR NO NONSENSE TASK MANAGMENT APP FOCUSED ON TODAY AND TOMORROW 
          </p>
          <Link
            href="/about"
            className="bg-white transition-transform hover:scale-105  text-black font-bold py-2 px-5  transition-colors text-lg"
          >
            Learn About Us
          </Link>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-black">
              KEY FEATURES
            </h2>
            <div className="flex gap-8 overflow-x-auto pb-8 justify-center flex-wrap">
              <KeypointItem
                title="No Nonsense"
                text="No nonesense design that focuses on what truly matters."
              />
              <KeypointItem
                title="TODAY AND TOMORROW."
                text="Crafted to keep your mind focused on what matters TODAY and TOMORROW."
              />
              <KeypointItem
                title="CROSS PLATFORM."
                text="Access your tasks from any device with real-time cloud synchronization."
              />
              <KeypointItem
                title="AI INTEGRATION."
                text="AI-powered to deligate and supercharge your productivity."
              />
              <KeypointItem
                title="SIMPLICITY IS KEY"
                text="Designed to give you the power to shape your day with our help"
              />
              <KeypointItem
                title="EASY AS 1,2,3"
                text="Task Now has no learning curve, just start using it now."
              />
            </div>
          </div>
        </section>

        {/* <section className="py-20 w-[80vw] mx-auto">
          <div className="container mx-auto px-4 ">
            <h2 className="text-3xl font-bold mb-10 text-center">
              About Tasks Now
            </h2>
            <div className="rounded-lg p-10 shadow-lg">
              <p className="text-lg text-zinc-300 leading-relaxed text-center">
                Tasks Now is a revolutionary task management platform designed
                to empower individuals to take control of their daily lives. Our
                intuitive interface combines the simplicity of traditional to-do
                lists with the power of advanced productivity tools, creating a
                seamless experience for users of all backgrounds. We understand
                that everyone has a unique approach to productivity, which is
                why Tasks Now offers customizable workflows and smart
                prioritization features. Our AI-powered system learns from your
                habits and preferences, helping you focus on what truly matters.
                With Tasks Now, you can access your tasks from any device,
                thanks to our real-time cloud synchronization. Whether you're at
                home, in the office, or on the go, your productivity companion
                is always at your fingertips. Join the thousands of users who
                have transformed their productivity with Tasks Now. Experience
                the future of task management and start accomplishing more,
                stress-free.
              </p>
            </div>
          </div>
        </section> */}
        <section>
          
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;

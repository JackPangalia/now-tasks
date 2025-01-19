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
      <main className="min-h-screen bg-zinc-900 text-white">
        <section className="pt-[10rem] pb-20 flex justify-center items-center flex-col gap-3 px-4">
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
            className="lg:text-6xl md:text-5xl text-4xl text-center font-bold mb-6"
            repeat={Infinity}
            cursor={true}
          />

          <p className="max-w-2xl text-zinc-400 text-center text-lg mb-10">
            Your personalized gateway to digital task management, effortlessly
            providing the simplicity of a to-do list with the power of advanced
            productivity tools.
          </p>
          <Link
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors text-lg"
          >
            Get Started
          </Link>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-black">
              Key Features
            </h2>
            <div className="flex gap-8 overflow-x-auto pb-8 justify-center flex-wrap">
              <KeypointItem
                title="Intuitive Interface 🖥️"
                text="User-friendly design for effortless task management and organization."
              />
              <KeypointItem
                title="Smart Prioritization 🎯"
                text="AI-powered task prioritization to help you focus on what matters most."
              />
              <KeypointItem
                title="Seamless Sync ☁️"
                text="Access your tasks from any device with real-time cloud synchronization."
              />
              <KeypointItem
                title="Customizable Workflows 🔧"
                text="Create personalized workflows that adapt to your unique productivity style."
              />
              <KeypointItem
                title="Customizable Workflows 🔧"
                text="Create personalized workflows that adapt to your unique productivity style."
              />
              <KeypointItem
                title="Customizable Workflows 🔧"
                text="Create personalized workflows that adapt to your unique productivity style."
              />
            </div>
          </div>
        </section>

        <section className="py-20 w-[80vw] mx-auto">
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
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;

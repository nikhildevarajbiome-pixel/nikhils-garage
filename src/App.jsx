import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import Navigation from "./components/Navigation";
import SpaceBackground from "./components/SpaceBackground";
import SoundToggle from "./components/SoundToggle";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Childhood from "./sections/Childhood";
import Motorsport from "./sections/Motorsport";
import Garage from "./sections/Garage";
import Memories from "./sections/Memories";
import Future from "./sections/Future";
import Contact from "./sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}

      <CustomCursor />
      <SpaceBackground />
      <Navigation />

      <main aria-hidden={loading}>
        <Hero />
        <About />
        <Childhood />
        <Motorsport />
        <Garage />
        <Memories />
        <Future />
        <Contact />
      </main>

      <SoundToggle />
    </>
  );
}

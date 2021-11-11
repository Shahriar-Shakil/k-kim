import Header from "../components/header";
import HeroSection from "../components/heroSection";
import { useRef, useEffect } from "react";
import Clients from "../components/clients";
import Gallery from "../components/gallery/Gallery";
import Contacts from "../components/contacts/contacts";

export default function Home() {
  let scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.09,
      });
    });

    // return () => scroll.destroy();
  }, []);
  return (
    <div>
      <Header />
      <main ref={scrollRef}>
        <HeroSection />
        <Gallery />
        <Clients />
        <Contacts />
       
      </main>
      
    </div>
  );
}

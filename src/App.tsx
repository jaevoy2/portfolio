import { useEffect, useState } from "react"

import Preloader from "./components/preloader"
import Threads from "./components/thread"
import Header from "./components/header"
import HeroSection from "./section/heroSection"
import ProjectSection from "./section/projectSection"
import ServiceSection from "./section/serviceSection"
import AboutSection from "./section/aboutSection"
import FloatingIcon from "./components/floatingIcon"
import TimelineDemo from "./section/timeline"
import ContactSection from "./section/contact"
import SplashCursor from "./components/splushCursor"


import './css/App.css'


function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const h = window.innerHeight;
      root.style.setProperty('--hero-p', String(Math.min(1, y / h )));
    };
    
    const onScroll = () => {
      if (!raf) {
        raf = requestAnimationFrame(update);
      }
    }
    update();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf)
    }
  }, []);


  return (
    <div className="main">
      <Preloader onReveal={() => setLoaded(true)}  />
        {loaded && (
          <>
            <Header />
            <FloatingIcon />

            <SplashCursor
              style={{ zIndex: 100 }}
              rainbow={false}
              size={1}
              force={1}
              swirl={3}
              trail={1}
              clickSplash
              colorSpeed={1}
              intensity={1}
              momentum={1}
              shading={1}
              glow={0}
              quality="high"
              intro
              contained={false}
            />
          </>
        )}

        <section id="home">
          <div style={{ position: 'relative' }} className="hero-wrap">
              <div className="threads-wrap">
                <Threads
                  color={[0, 0, 0]}
                  amplitude={1.5}
                  distance={0}
                  enableMouseInteraction
                  />
              </div>
              {loaded && <HeroSection />}
          </div>
        </section>
          
      {loaded && (
        <>
          <section id="projects">
            <ProjectSection />
          </section>

          <section id="service">
            <ServiceSection />
          </section>

          <section id="about">
            <AboutSection />
          </section>

          <section id="experience">
            <TimelineDemo />     
          </section>

          <section id="contact">
            <ContactSection />
          </section>
        </>
      )}
    </div>
  )
}

export default App
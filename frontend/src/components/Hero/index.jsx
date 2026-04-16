import { useEffect, useRef,useState } from "react";
import './index.css'
const Hero=()=>{
    const heroRef = useRef(null);
  const indicatorRef = useRef(null);
    const heroDesktopRef = useRef(null);    
    const indicatorDesktopRef = useRef(null);
  const [showIndicator, setShowIndicator] = useState(true);
   
  useEffect(() => {
    const hero = heroRef.current;
    const indicator = indicatorRef.current;
    const heroDesktop = heroDesktopRef.current;
    const indicatorDesktop = indicatorDesktopRef.current;

    if (!hero || !indicator) return; // 🔥 prevents crash
    if (!heroDesktop || !indicatorDesktop) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
  setShowIndicator(false);
} else {
  setShowIndicator(true);
}
      },
      { threshold: 0.3 }
    );

    observer.observe(hero);
    observer.observe(heroDesktop);

    return () => observer.disconnect(); // cleanup
  }, []);

const onClickProjects=()=>{
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
  
}
   return(
        <>
        <section className="hero-section hero" ref={heroRef} id="home">
            <div className='hero-details-container'><h1 className="portfolio-name">Prasanthi Kadali</h1>
            <p className="portfolio-title">Full stack developer</p>
            <p id="dyanmic-text" className="portfolio-description">I build secure, intelligent web applications.</p>
            
              
            </div>
            <div className='view-projects-container'>
                <button className="view-projects-btn" onClick={onClickProjects}>View Projects</button>
            <a href="/final-resume.pdf" target="_blank" rel="noopener noreferrer">
  <button class="view-projects-btn">View Resume</button>
</a> 
            </div>
            <div>
                <img src="https://i.pinimg.com/originals/6b/7f/36/6b7f36a9720dfd7cfa2448df7f680a10.jpg" alt="Prasanthi Kadali" className="portfolio-img"/>
            </div>
            <div ref={indicatorRef} className={`scroll-indicator ${showIndicator ? "show" : "hide"}`}>
               <p>Explore my work ↓</p>
               <span></span>
            </div>
            
        </section>

        
        <hr className="section-bar"/>
        </>
    )
}
export default Hero
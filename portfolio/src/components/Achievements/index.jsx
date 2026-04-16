import { Trophy, Flame, Users, GraduationCap } from "lucide-react";

{/* <Trophy size={20} />
<Flame size={20} />
<Users size={20} />
<GraduationCap size={20} /> */}
import './index.css'
const Achievements=()=>{
  return (<section className="achievements-section" id="achievements">
    <h1>Achievements</h1>
    <p>Here are some of my achievements:</p>
   <div className="achievement-cards-container">
    <div className="achievement-card">
  <div className="achievement-title-container">
    <Trophy size={30} className="icon" />
  <h3>All-India Rank 415</h3>
  </div>
  <p>Ranked among top performers nationwide</p>
</div>
<div className="achievement-card">
  <div className="achievement-title-container">
    <Flame size={50} className="icon" />
  <h3>361-Day Learning Streak — NxtWave</h3>
  </div>
  
  <p>Demonstrated long-term consistency and discipline  
</p>
</div>
<div className="achievement-card">
  <div className="achievement-title-container">
    <Users size={60} className="icon" />
  <h3>Team Lead — Secure Cardless Transaction System </h3>
    </div>
  
  <p>Leading development of an ML-powered, MFA-based secure transaction platform  
</p>
</div>
<div className="achievement-card">
  <div className="achievement-title-container">
    <GraduationCap size={60} className="icon" />
  <h3>Full-Stack & Generative AI Certifications — NxtWave</h3>
    </div>
  
  <p>Trained across modern web technologies and AI fundamentals  </p>
</div>
   </div>
  </section>)
}
export default Achievements
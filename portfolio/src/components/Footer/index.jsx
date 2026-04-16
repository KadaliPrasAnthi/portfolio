import './index.css'
const Footer=()=>{
  return (<footer className="footer">
  <div className="footer-container">

    <div className="footer-left">
      <h2>Prasanthi Kadali</h2>
      <p>Full Stack Developer</p>
      <p>Building secure, intelligent web applications</p>
    </div>

    <div className="footer-center">
      <h3>Quick Links</h3>
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#achievements">Achievements</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-right">
      <h3>Connect</h3>
      
      <a href="https://www.linkedin.com/in/prasanthi-kadali" target='_blank'>LinkedIn</a>
      <a href="https://github.com/KadaliPrasAnthi" target='_blank'>GitHub</a>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 Prasanthi Kadali. All rights reserved.</p>
  </div>
</footer>)
}
export default Footer
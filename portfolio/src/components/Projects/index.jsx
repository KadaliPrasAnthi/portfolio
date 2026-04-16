import './index.css'
const Projects=()=>{
  return (<section className="projects-section" id="projects">
    <h1>Projects</h1>
    <p>Projects I've built to solve real-world problems</p>
    <ul className='projects-container'>
      <li className='project-card'>
        <img src="https://res.cloudinary.com/dw1xohqzy/image/upload/v1776171413/Screenshot_2026-04-14_at_6.24.59_PM_odkozw.png" alt="Project 1" className='project-img'/>
        <h3 className='project-title'>ATS Resume Analyzer</h3>
        <p className='project-desc'>AI-powered resume scoring system.</p>
        <div class="tags">
            <span>React</span>
            <span>Node</span>
            <span>ML</span>
        </div>
        <a className='links' href="https://atsresumeanalyzer-frontend.onrender.com" target="_blank" rel="noopener noreferrer">Demo</a> |
        <a className='links' href="https://github.com/KadaliPrasAnthi/AtsResumeAnalyzer" target="_blank" rel="noopener noreferrer"> Code</a>
      </li>
      <li className='project-card'>
        <img src="https://res.cloudinary.com/dw1xohqzy/image/upload/v1776172360/Screenshot_2026-04-14_at_6.36.13_PM_zp5nfa.png" alt="Project 2" className='project-img'/>
        <h3 className='project-title'>Jobby App</h3>
        <p className='project-desc'>Streamlines job discovery with seamless search, filtering, and application tracking in one place.</p>
        <div class="tags">
            <span>React</span>
            <span>Node</span>
            <span>CSS</span>
        </div>
        <a className='links' href="https://ats-resume-analyzer.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a> |
        <a className='links' href="https://github.com/prasanthikadali/ats" target="_blank" rel="noopener noreferrer"> Code</a>
      </li><li className='project-card'>
        <img src="https://res.cloudinary.com/dw1xohqzy/image/upload/v1776172368/Screenshot_2026-04-14_at_6.42.19_PM_vwgdfi.png" alt="Project 3" className='project-img'/>
        <h3 className='project-title'>Todo List</h3>
        <p className='project-desc'>Helps users stay consistent and focused with an intuitive task management system.</p>
        <div class="tags">
            <span>JS</span>
            <span>HTML</span>
            <span>CSS</span>
        </div>
        <a className='links' href="https://todo-list-n1x0.onrender.com" target="_blank" rel="noopener noreferrer">Demo</a> |
          <a className='links' href="https://github.com/KadaliPrasAnthi/Todo-List" target="_blank" rel="noopener noreferrer">  Code</a>
      </li>
    </ul>
  </section>)
}
export default Projects
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import './App.css'
const App=()=>{
  return (
    <div className="app-container">
    <Navbar/>
    <Hero/>
    <Projects/>
    <Achievements/>
    <Footer/>
    </div>
  )
}
export default App;
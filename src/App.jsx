import './App.css'
import About from './component/About'
import Features from './component/Features'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Story from './component/Story'
import Contact from "./component/Contact";
import Footer from "./component/Footer";
function App() {
  
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
    <Navbar/>
    <Hero/>
  <About/>
<Features/>
<Story/>
<Contact />
<Footer />
</main>
  )
}

export default App

import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

function App() {
  return (
    <>
   <Header/>
    <Nav/>
    <About/>
    <Skills/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    </>
  )
}

export default App;
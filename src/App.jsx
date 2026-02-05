import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import Blog from './components/Blog/Blog'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Blog />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App

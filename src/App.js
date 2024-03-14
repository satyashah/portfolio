import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Research from './components/research/Research';
import Projects from './components/projects/Projects';
import Project_list from './components/projects/Project_list';
import Footer from './components/footer/Footer';

function App() {
  return (
    
    <div className="App">
      <Header />
      <Hero />
      <Education />
      <Experience />
      <Research />
      <Projects projects={Project_list} />
      <Footer />
    </div>
  );
}

export default App;

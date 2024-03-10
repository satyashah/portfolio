import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Research from './components/research/Research';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Education />
      <Experience />
      <Research />
    </div>
  );
}

export default App;

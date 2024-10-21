import { useRef } from 'react';
import About from './About';
import './App.css';
import Contact from './Contact';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (section) => {
    switch (section) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <Header scrollTo={scrollTo} />
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={contactRef}><Contact /></div>
    </div>
  );
}

export default App;

import './App.css';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Cards from './components/Cards/Cards';
import Experience from './components/Experience/Experience';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
        <Experience />
    </div>
  );
}

export default App;

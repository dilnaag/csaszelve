import Header from "./components/Header/Header";
import Head from "./components/Head/Head";
import './App.css'
import Goals from "./components/Goals/Goals";
import Contact from "./components/Contact/Contact";
import Gmaps from "./components/Gmaps/Gmaps";


function App() {
  return (
    <div className="App">
      <header>
        <div className="white-gradient"/>
        <Header />
        <Head />
      </header>
      <section id="goals">
        <Goals />
      </section>
      <section id="location">
        <Gmaps />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;

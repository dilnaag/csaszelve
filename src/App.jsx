import Header from "./components/Header/Header";
import Head from "./components/Head/Head";
import './App.css'
import Companies from "./components/Companies/Companies";
import Goals from "./components/Goals/Goals";
import Contact from "./components/Contact/Contact";


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
      <section>
        <Companies/>
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;

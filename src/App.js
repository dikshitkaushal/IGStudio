import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Subscription from "./components/Subscription/Subscription";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Section />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;

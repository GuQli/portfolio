import "./App.css";
import { Footer, HeaderAlt } from "./components";
import { About, HomePage, Contact } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeaderAlt />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

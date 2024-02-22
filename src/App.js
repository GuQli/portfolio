import "./App.css";
import { Footer, HeaderAlt } from "./components";
import { About, HomePage, Contact } from "./pages";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  console.log(name, message, email);

  return (
    <div className="App dark:bg-gray-800">
      <HeaderAlt />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <form name="contact" method="POST">
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name Surname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">message</label>
          <input
            type="text"
            name="message"
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </form>

      <Footer />
    </div>
  );
}

export default App;

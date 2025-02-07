import { useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import Greetings from "./components/Greetings";
import TodoApp from "./components/Todos";
import ToggleTheme from "./components/themeShift";
// import Timer from "./components/Timer";

import { StoreProvider } from "./context/StoreContext";
import { ProductList } from "./components/ProductList/ProductList";
import { CategoryFilter } from "./components/CategoryFilter/CategoryFilter";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
// import Navbar from "./components/Navbar";

function App() {
  const [name, setName] = useState("Random");

  const handleNameChange = (data) => {
    setName(data);
  };
  console.log(`name->${name}`);
  return (
    <div className="font-[monospace]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {/* <div className=" p-6 font-[monospace] flex flex-col">
        <Greetings myName={name} changeName={handleNameChange} />
        <Counter />
        <TodoApp />
        <ToggleTheme />
      </div> */}
      {/* <StoreProvider>
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center my-6">
            FakeStore Products
          </h1>
          <CategoryFilter />
          <ProductList />
        </div>
      </StoreProvider> */}
    </div>
  );
}

export default App;

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

function App() {
  const [name, setName] = useState("Random");

  const handleNameChange = (data) => {
    setName(data);
  };
  console.log(`name->${name}`);
  return (
    <>
      <div className=" p-6 font-[monospace] flex flex-col">
        <Greetings myName={name} changeName={handleNameChange} />
        <Counter />
        <TodoApp />
        <ToggleTheme />
        {/* <Timer/> */}
      </div>
      <StoreProvider>
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center my-6">
            FakeStore Products
          </h1>
          <CategoryFilter />
          <ProductList />
        </div>
      </StoreProvider>
    </>
  );
}

export default App;

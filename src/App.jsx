import { useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import Greetings from "./components/Greetings";
import TodoApp from "./components/Todos";
import ToggleTheme from "./components/themeShift";

function App() {
  const [name, setName] = useState("Random");

  const handleNameChange = (data) => {
    setName(data);
  };
  console.log(`name->${name}`);
  return (
    <div className=" p-6 font-[monospace] flex flex-col">
      <Greetings myName={name} changeName={handleNameChange} />
      <Counter />
      <TodoApp />
      <ToggleTheme />
    </div>
  );
}

export default App;

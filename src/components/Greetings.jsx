import React, { useState } from "react";

function Greetings({ myName, changeName }) {
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState("");
   
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim()) {
        changeName(inputValue);
        setInputValue("");
    }
    setShowInput(false);
    };
   
    return (
      <div className="flex flex-row items-center">
        <h1>Hello, {myName}!</h1>
        {!showInput ? (
          <button
            onClick={() => setShowInput(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
          >
            Change Name
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="mt-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border p-2 rounded mr-2"
              placeholder="Enter new name"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
   
  export default Greetings;
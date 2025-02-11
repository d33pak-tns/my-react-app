import React from "react";
import { cleanUser, setUser } from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function UserComponent() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");

  const handleChange = (val) => {
    dispatch(setUser({ name: val }));
    setUserName(val);
    setTimeout(() => {
      setUserName("");
    }, 1000);
  };

  return (
    <div className="flex flex-row justify-evenly items-center px-2 py-3">
      <p>
        User:{" "}
        <span
          className={
            user ? `decoration-auto decoration-pink-500 underline` : ``
          }
        >
          {user ? user.name : "No User"}
        </span>{" "}
      </p>
      <button
        onClick={userName.length > 0 ? () => handleChange(userName) : null}
        // disabled={userName.length > 0 ? true : false}
      >
        Set User
      </button>
      <button onClick={() => dispatch(cleanUser())}>Clear User</button>
      <Greetings changeName={handleChange} />
    </div>
  );
}

function Greetings({ changeName }) {
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
      {/* <h1>Hello, {myName}!</h1> */}
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

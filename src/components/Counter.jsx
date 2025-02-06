import React, { useState } from "react";

export default function counter() {
  const [count, setCount] = useState(0);

  function handleInc() {
    setCount((count) => count + 1);
  }

  function handleDec() {
    count > 0 && setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className=" my-2 flex flex-row w-8 h-4 justify-evenly items-center border-red-500">
      <button
        onClick={() => handleInc()}
        className=" border-[0] rounded-sm px-3 py-1 text-center bg-slate-400"
      >
        Increment
      </button>
      <span className="p-2">{count}</span>
      <button
        onClick={() => handleDec()}
        className={
          count > 0
            ? `border-[0] px-3 py-1 text-center bg-slate-400`
            : `border-[0] px-3 py-1 text-center bg-slate-200 cursor-none`
        }
        disabled={count < 0}
      >
        Decrement
      </button>
    </div>
  );
}

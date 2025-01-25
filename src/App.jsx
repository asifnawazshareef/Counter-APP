import React, { useState } from "react";

const App = () => {
  const initialValue = 0;
  const [counter, setCounter] = useState(initialValue);
  return (
    <section className="h-screen bg-[#efeff6] w-full">
      <h1 className="text-lg font-medium text-center py-5 bg-[#6667ab] text-white">
        Counter App
      </h1>
      <div className="flex justify-center mt-10">
        <div className="flex gap-3 mt-3">
          <button
            onClick={() => setCounter(counter + 1)}
            className="bg-blue-400 px-4 py-1 rounded-md"
          >
            + Add Apple
          </button>
          <button
            onClick={() => {
              if (counter > 0) {
                setCounter(counter - 1);
              }
            }}
            className="bg-red-400 px-4 py-1 rounded-md"
          >
            - Remove Apple
          </button>
          <button
            onClick={() => {
              setCounter(initialValue);
            }}
            className="bg-yellow-400 px-4 py-1 rounded-md"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <h2 className="bg-[#6667ab] text-white px-5 py-3 rounded-full mt-10 text-lg font-semibold">
          {counter}
        </h2>
      </div>
    </section>
  );
};

export default App;

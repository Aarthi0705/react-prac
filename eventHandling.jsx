import React, { useState } from "react";

function App() {
  const [head, setHeading] = useState("Hello");
  const [isOver, setOver] = useState(false);
  function click() {
    console.log(
      "Why did you do that\nWhy did you do that\nWhy did you do that\nWhy did you do that"
    );
  }
  function handle() {
    setOver(true);
  }
  function handlee() {
    setOver(false);
  }
  return (
    <div className="container">
      <h1>{head}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={click}
        onMouseOver={handle}
        onMouseOut={handlee}
        style={{ backgroundColor: isOver ? "black" : "white" }}
      >
        Dont click the button
      </button>
    </div>
  );
}

export default App;

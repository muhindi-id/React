import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [input, setInput] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((input) => {
        setInput(input);
      });
  }, []);

  return (
    <div className="nav">
      {input.slice(0, 20).map((photo) => (
        <div key={photo.id}>
          <h2>{photo.id}</h2>
          <img src={photo.url} alt="" />
          <h3>{photo.title} </h3>
        </div>
      ))}
    </div>
  );
}

export default App;

import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Apollo",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Juno",
      animal: "Cat",
      breed: "Scottish Fold",
    }),
    React.createElement(Pet, {
      name: "Pluto",
      animal: "Rabbit",
      breed: "English Lop",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));

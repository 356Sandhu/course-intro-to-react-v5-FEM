const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));

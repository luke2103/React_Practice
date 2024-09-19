// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", { id: "abc" }, "I'm h1 tag")
//   )
// );


//if i'm want two children , i.e to child div , i want two siblings we need to create an array thn


const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
      [
          React.createElement("h1", { id: "abc" }, "I'm h1 tag"),
          React.createElement("h2", { id: "abc" }, "I'm h2 tag")
        ]
  )
);

// console.log(heading); //Object


// const root = ReactDOM.createRoot(document.getElementById("root"));
const root = ReactDOM.createRoot(document.body);

root.render(parent); // this is responsible for converting heading object to HTML h1

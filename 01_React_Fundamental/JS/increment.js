const domContainer = document.querySelector("#root");

// const myElement = React.createElement("div", null, [React.createElement("p", null, "Hello World"),
//   React.createElement("p", null, "Hello World")
// ]);

// ReactDOM.render(myElement, domContainer);

let p = document.createElement("p");
p.innerHTML = "Hello World";
domContainer.appendchild(p);
const domContainer = document.querySelector("#root");

const Increment = () => {
  return (
    <div>
      <h1 id="display">0</h1>
        <div>
          <button id="button">Increment +</button>
        </div>    
  </div>
  )
}

const myElement = (
  <div>
    <h1 id="display">0</h1>
      <div>
        <button id="button">Increment +</button>
      </div>    
  </div>
);

 ReactDOM.render(myElement, domContainer);

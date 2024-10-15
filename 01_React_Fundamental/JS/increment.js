const domContainer = document.querySelector("#root");

const Increment = () => {
  
  return (
    <div>
      <h1 id="display">0</h1>
        <div>
          <button id="button">Increment +</button>
        </div>    
    </div>
  );
};


 ReactDOM.render(<Increment />, domContainer);


 let number = 0;

const button = document.querySelector("#button");
const display = document.querySelector("#display");

button.addEventListener("click", () => {
  number++;
  display.textContent = number;
});

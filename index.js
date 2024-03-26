import { createBtn } from "./js/createBtn.js";
import { values } from "./refs.js";

const listEl = document.querySelector("#list")

 

  const buttonsContainer = document.querySelector("#list");

  const selectedButtons =
    JSON.parse(localStorage.getItem("name-buttons")) || [];

  const buttons = values.map((value) => {
    const button = createBtn(value, selectedButtons.includes(value.id));
    return button;
  
        // const button = document.createElement("button");
    // button.textContent = value.name;
    // button.dataset.id = value.id;
    // 
    // button.addEventListener("click", function () {
  
    // buttonsContainer.appendChild(button);
  });

  buttonsContainer.innerHTML = buttons.join("");

  listEl.addEventListener("click", (e) => {
    const btn = e.target;
    if (btn.tagName !== "BUTTON") {
      return;
    }
    const selectedButtons =
      JSON.parse(localStorage.getItem("name-buttons")) || [];  
    const idx = Number(btn.dataset.id);
    if (btn.classList.contains("selected")) {
        btn.classList.remove("selected");
 
      
       const index = selectedButtons.indexOf(idx);
        if (index > -1) {
          selectedButtons.splice(index, 1);
        }
      } else {
        btn.classList.add("selected");
             selectedButtons.push(idx);
      }
      localStorage.setItem("name-buttons", JSON.stringify(selectedButtons));
   
}); 




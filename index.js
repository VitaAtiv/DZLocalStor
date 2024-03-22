import { createBtn } from "./js/createBtn.js";
import { values } from "./refs.js";

const listEl = document.querySelector("#list")

document.addEventListener("DOMContentLoaded", function () {
  

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

  listEl.addEventListener("clikc", () => {
       if (button.classList.contains("selected")) {
        button.classList.remove("selected");
       const index = selectedButtons.indexOf(value.id);
        if (index > -1) {
          selectedButtons.splice(index, 1);
        }
      } else {
        button.classList.add("selected");
             selectedButtons.push(value.id);
      }
      localStorage.setItem("name-buttons", JSON.stringify(selectedButtons));
    }); 
  });

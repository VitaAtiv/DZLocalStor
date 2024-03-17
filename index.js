document.addEventListener("DOMContentLoaded", function () {
  const values = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "Node.js" },
    { id: 5, name: "React" },
    { id: 6, name: "Vue" },
    { id: 7, name: "Next.js" },
    { id: 8, name: "Mobx" },
    { id: 9, name: "Redux" },
    { id: 10, name: "React Router" },
    { id: 11, name: "GraphQl" },
    { id: 12, name: "PostgreQl" },
    { id: 13, name: "MongoDB" },
  ];

  const buttonsContainer = document.getElementById("container");

  // Retrieve selected buttons from local storage if available
  const selectedButtons =
    JSON.parse(localStorage.getItem("name-buttons")) || [];

  values.forEach((value) => {
    const button = document.createElement("button");
    button.textContent = value.name;
    button.dataset.id = value.id;
    if (selectedButtons.includes(value.id)) {
      button.classList.add("selected");
    }
    button.addEventListener("click", function () {
      if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        // Remove button ID from selectedButtons array
        const index = selectedButtons.indexOf(value.id);
        if (index > -1) {
          selectedButtons.splice(index, 1);
        }
      } else {
        button.classList.add("selected");
        // Add button ID to selectedButtons array
        selectedButtons.push(value.id);
      }
      // Save selectedButtons array to local storage
      localStorage.setItem("name-buttons", JSON.stringify(selectedButtons));
    });
    buttonsContainer.appendChild(button);
  });
});

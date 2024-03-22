export const createBtn = (btn, isSelected) => {
  return `  <li>
        <button class="${isSelected ? "selected" : ""}" data-id=${btn.id} type="button">${btn.name}</button>
    </li>`;
}
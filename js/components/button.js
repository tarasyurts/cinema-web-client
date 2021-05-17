export function button({ text, color, className, onClick }) {
  const button = document.createElement("button");

  button.className = "button";

  if (className !== undefined) {
    button.classList.add(className);
  }

  if (color !== undefined) {
    button.classList.add(`button--${color}`);
  }

  button.textContent = text;

  button.addEventListener("click", onClick);

  return { el: button };
}

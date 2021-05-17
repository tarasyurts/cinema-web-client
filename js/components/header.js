import { container } from "./container.js";
import { nav } from "./nav.js";

export function header({ links, className, onBurgerClick }) {
  const header = document.createElement("header");

  header.classList.add('header');
  header.classList.add('container');


  if (className !== undefined) {
    header.classList.add(className);
  }

  header.insertAdjacentHTML(
    "afterbegin",
    `<div class="header__brand">
        <a href="/index.html" class="brand-link">
          <h3 class="brand-title">FilmetZZ</h3>
        </a>
      </div>`,
  );

  const burgerButton = header.querySelector(".header__nav");

  if (typeof onBurgerClick === "function") {
    burgerButton.addEventListener("click", onBurgerClick);
  }

  const location = container(
    {className: 'header__location', content: {}})
    location.el.innerHTML =  `
    <object class="header__location-icon" data="/images/svg/placeholder.svg" type="image/svg+xml"></object>
    <span class="header__location-city">Івано-Франківськ</span>`

  header.append(
    nav({
      links,
      className: "header__nav",
      ulClassName: "header__nav-list",
      liClassName: "menu__item",
    }).el,
    location.el
  );

  function isBurgerIcon(element) {
    return burgerButton.isSameNode(element);
  }

  return { el: header, isBurgerIcon };
}

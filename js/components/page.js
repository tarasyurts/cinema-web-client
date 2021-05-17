import {header} from '../components/header.js'

const links = [
  {
    href: "/",
    text: "Головна",
  },
  {
    href: "/films",
    text: "Фільми",
  },
  {
    href: "/schedule",
    text: "Розклад",
  },
];

export function page({ content }) {
  const main = document.createElement("main");

  main.className = "page__content";
  main.append(
    content.el,
  );

  const pageHeader = header({
    links,
    className: "page__header",
    // onBurgerClick: toggleNavModal,
  });

  return { elArray: [pageHeader.el, main] };
}

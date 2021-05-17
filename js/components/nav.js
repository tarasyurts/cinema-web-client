function link({ text, href, className, anchorClassName }) {
  const li = document.createElement("li");

  li.className = className;

  li.insertAdjacentHTML(
    "afterbegin",
    `<a class="menu__link ${anchorClassName ?? ""}" href="${href}">${text}</a>`,
  );

  return { el: li };
}

export function nav({
  links,
  className,
  ulClassName,
  liClassName,
  anchorClassName,
}) {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  ul.append(
    ...links.map(
      ({ text, href }) =>
        link({
          text,
          href,
          anchorClassName,
          className: liClassName,
        }).el,
    ),
  );

  nav.append(ul);

  ul.classList.add("menu");

  if (ulClassName) {
    ul.classList.add(ulClassName);
  }

  nav.className = className;

  return { el: nav };
}

export function container({ className, content }) {
  const div = document.createElement("div");

  div.className = className;

  if (Array.isArray(content)) {
    div.append(
      ...content.map((content) => (content.el ? content.el : content)),
    );
  } else if (content) {
    div.append(content.el);
  }

  function replaceContent(...newContent) {
    div.replaceChildren(...newContent);
  }

  return { el: div, replaceContent };
}

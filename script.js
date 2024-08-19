const l = document.getElementById("level");

function getDOMLevel(node) {
  let level = 0;
  while (node?.parentNode) {
    level++;
    node = node.parentNode;
  }
  return level;
}

const domLevel = getDOMLevel(l);
alert(`The level of the element is: ${domLevel}`);
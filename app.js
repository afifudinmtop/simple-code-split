function app() {
  return `
  ${element_1()}
  ${element_2()}
  `;
}

document.getElementById("root").innerHTML = app();

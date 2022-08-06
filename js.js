const createDiv = document.querySelector("#container");

// const btnAdd = document.querySelector(".btn-add");
// btnAdd.addEventListener("click", sixteen);
function sixteen(rows,cols) {
    container.style.setProperty('--grid-rows',rows)
    container.style.setProperty('--grid-cols',cols)
  for (let i = 0; i < (rows*cols); i++) {
    const newDiv = document.createElement("div");
    // newDiv.innerText = i + 1;
    newDiv.classList.add("div-style");
    document.getElementById('container').appendChild(newDiv);
  }
}
sixteen(16,16)

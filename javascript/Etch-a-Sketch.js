const container = document.querySelector('#container');
let contentH;
let size = 16;

// removes old and creates new grid
function createGrid() { 
  let rowRemove = document.querySelectorAll(".rowi");
  rowRemove.forEach(element => element.remove());

  for (i=0; i<size; i++) {
    const contentRow = document.createElement('div');
    contentRow.classList.add('rowi'+i, "rowi");
    container.appendChild(contentRow);
    const rivi = document.querySelector(".rowi"+i);
    for (j=0; j<size; j++) {
      const content = document.createElement('div');
      content.classList.add('content'+j, "content");
      rivi.appendChild(content);
    }
  }

  // Add border to left and bottom ends of grid and removes old ones
  let lastColumn = document.querySelectorAll(".lastColumn");
  lastColumn.forEach(element => element.classList.remove("lastColumn"));
  let lastRowi = document.querySelectorAll(".lastRow");
  lastRowi.forEach(element => element.classList.remove("lastRow"));

  let lastCol = document.querySelectorAll(".content"+(j-1));
  lastCol.forEach(element => element.classList.add("lastColumn"));
  let lastRow = document.querySelectorAll(".rowi"+(i-1));
  lastRow.forEach(element => element.classList.add("lastRow"));
}
createGrid()


// Sketch on hover
container.addEventListener("mouseover", function(event) {
  if (event.target.classList[1] == "content") {
    event.target.classList.add("colored");
  }
});


// Makes squares' height to equal width
function resizeHeight() {
  contentH = document.querySelectorAll(".content");
  contentH.forEach(element => element.style.height = getComputedStyle(element).width);
}
resizeHeight();
window.addEventListener('resize', resizeHeight);


// Clear board and ask new dimensions on button click
document.getElementById("clearBtn").addEventListener("click", function(event) {
  contentH.forEach(element => element.classList.remove("colored"));
  let sizePrompt = prompt("What size board should we make?", "16px");
  size = sizePrompt.replace(/\D/g,'');
  createGrid();
  resizeHeight();
}); 





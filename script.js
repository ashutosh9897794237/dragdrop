const dragElement = document.getElementById("drag");
const dropElement = document.getElementById("drop");

dropElement.addEventListener("dragover", (event) =>{
   event.preventDefault();
});

dropElement.addEventListener("drop", () => {
   // console.log("drop an item into it");
   dropElement.appendChild(dragElement);
});
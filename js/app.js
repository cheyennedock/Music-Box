(() => {
  // stub
  console.log('fired!');

  // const is short for constant --> variables that shouldnt change
  const peicesBoard = document.quearySelector('.puzzle-peices'),
        puzzleBoard = document.quearySelector('.puzzle-board'),
        puzzleSelectors = document.quearySelector('#buttonHolder img'),
        dropzones = document.quearySelector('.dropzone');

      let draggablePeices = peicesBoard.quearySelectorAll(".img");

      //debugger;

      function switchImage() {
        console.log(this);
      }

  puzzleSelectors.forEach(thumbnail => button.addEventListener("click", switchImage); });

  // loop through the draggablePeices images
  // this lets us drag stuff its not that hard
  draggablePeices.forEach(peice => {
    peice.addEventListener("dragstart", function(e) {
      console.log("draggin...");

      // the dataTransfer object had two methods,a setter and getter
      // set data on the drag and retreave it on the drop
      e.dataTransfer.setData("text/plain", this.id);
    });
  });

// this is the drag and drop functionality. it is for the dron Zones
dropZones.forEach(Zone => {
// allow user to drag over element
zone.addEventListener("dragover", function(e) {
  e.preventDefault();
  console.log('dragged sumoun over me');
});

// allow a user to drop an element
zone.addEventListener("drop", function(e) {
  e.preventDefault();
  console.log('you dropped something on me');

  let draggedElement = e.dataTransfer.setData("text/plain");
  console.log('you dragged: ', draggedElement);

  // add the image to the drp zone
  e.target.appendChild(document.quearySelector(`#${draggedElement}`));
});
})

])();

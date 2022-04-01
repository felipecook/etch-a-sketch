const outerContainer = document.querySelector("#outerContainer");
let drawScreenButton = document.createElement('button');
drawScreenButton.classList.add('drawScreenButton');
drawScreenButton.innerText = 'Redraw Screen';
outerContainer.appendChild(drawScreenButton);

console.log(outerContainer);




// have this function draw a user defined grid of boxes.
function drawScreen(size) {


  for (let index = 0; index < size; index++) {

    const boxes = document.querySelectorAll('.box');
    

    boxes.forEach(box => {
      console.log(box);
      box.addEventListener('mouseover', addEffects);
    });

    //this creates the rows
    let innerContainer = document.createElement('div');
    innerContainer.classList.add('container');
    outerContainer.appendChild(innerContainer);

    for (let innerIndex = 0; innerIndex < size; innerIndex++) {
      //This creates the boxes
      let box = document.createElement('div');
      box.classList.add('box');
      innerContainer.appendChild(box);

    }
  }

}


function addEffects(e) {

  console.log(e);
  e.target.classList.add('hovered')

  // setTimeout(function () {
  //   e.target.classList.remove('hovered');
  // }, 500);
}

// drawScreen();



drawScreenButton.addEventListener('click', () => {

  let size = parseInt(prompt('Please enter the size of the grid you want, must be a number', 4))

  if (Number.isInteger(size) && size < 101){

    drawScreen(size);
  } else {
    alert("You did not enter a number. Try again.")
    return;
  }

  

});
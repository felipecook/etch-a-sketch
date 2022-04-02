const body = document.querySelector('body');
const drawScreenButton = document.querySelector('#drawScreenButton')
const outerContainer = document.querySelector("#outerContainer");



let flag = false;





// have this function draw a user defined grid of boxes.
function drawScreen(size) {

  

  removeAllChildNodes(outerContainer);


  for (let index = 0; index < size; index++) {



    //this creates the rows
    let innerContainer = document.createElement('div');
    innerContainer.id = 'container';
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

function removeEffects(e) {
  e.target.classList.remove('hovered');
}

// drawScreen();



drawScreenButton.addEventListener('click', () => {

  let size = parseInt(prompt('Please enter the size of the grid you want, must be a number', 4))

  if (Number.isInteger(size) && size < 101) {

    drawScreen(size);
    
    
  }


  const boxes = document.querySelectorAll('.box');


  
  boxes.forEach(box => {
    console.log(box);
    box.addEventListener('mouseover', addEffects);
    

  });



});



function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}
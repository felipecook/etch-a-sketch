const container = document.querySelector(".container");

console.log(container);




// have this function draw a 4x4 grid of boxes.
function drawScreen () {
  for (let index = 0; index < 4; index++) {

    //This creates the row of divs, need a second for loop to create the columns at same length.
    let rowDiv = document.createElement('div'); 
    rowDiv.classList.add('row');
    rowDiv.classList.add('etches');
    container.appendChild(rowDiv);

    for (let innerIndex = 0; innerIndex < 4; innerIndex++) {
      let columnDiv = document.createElement('div');
      columnDiv.classList.add('column');
      columnDiv.classList.add('etches');
      rowDiv.appendChild(columnDiv);
    }
    // console.log(index);
  }
  
}


function addEffects (e) {
  
  console.log(e);
  e.target.style.background = 'orange';
  //attempting to use classList to add color and remove, but unsure why it is not working
  e.target.classList.add('hovered')

  setTimeout(function() {
    e.target.style.background = 'lightgrey';
  }, 500);
}

drawScreen();

const divs = document.querySelectorAll('.etches');
console.log(divs);

divs.forEach(div => {
console.log(div);
div.addEventListener('mouseover', addEffects);
});
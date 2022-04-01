const outerContainer = document.querySelector("#outerContainer");

console.log(outerContainer);




// have this function draw a 4x4 grid of boxes.
function drawScreen() {
  for (let index = 0; index < 4; index++) {

    //this creates the rows
    let innerContainer = document.createElement('div');
    innerContainer.classList.add('container');
    outerContainer.appendChild(innerContainer);

    for (let innerIndex = 0; innerIndex < 4; innerIndex++) {
      //This creates the columns
      let columnDiv = document.createElement('div');
      columnDiv.classList.add('column');
      columnDiv.classList.add('etches');
      innerContainer.appendChild(columnDiv);

    }



    // for (let innerIndex = 0; innerIndex < 4; innerIndex++) {
    //   let columnDiv = document.createElement('div');
    //   columnDiv.classList.add('column');
    //   columnDiv.classList.add('etches');
    //   columnDiv.appendChild(columnDiv);
    // }
    // console.log(index);
  }

}


function addEffects(e) {

  console.log(e);
  e.target.style.background = 'orange';
  //attempting to use classList to add color and remove, but unsure why it is not working
  // e.target.classList.add('hovered')

  setTimeout(function () {
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
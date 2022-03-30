const container = document.querySelector(".container");

console.log(container);




// have this function draw a 4x4 grid of boxes.
function drawScreen () {
  for (let index = 0; index < 4; index++) {
    let singleDiv = document.createElement('div'); 
    singleDiv.style.flex = '1';
    singleDiv.style.width = '200px';
    singleDiv.style.height = '200px';
    singleDiv.style.background = 'lightgrey';
    singleDiv.classList.add('etches')
    container.appendChild(singleDiv);
    console.log(index);
  }
  
}


function addEffects (e) {
  // e.classList.add('hovered');
  console.log(e);
  e.target.style.background = 'orange';

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
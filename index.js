console.log(`Hello`);
console.log("Mother");

//window.alert(`This is an alert!`);
//window.alert(`Porsche`);

//document.getElementById("myH1").textContent = `Hello`;
//document.getElementById("myP").textContent = `I like Porsche`;


// comment
/* java like comments 
   a;lksdjf;alskd
   a;dlskfja;klfj
*/


let username;

document.getElementById("mySubmit").onclick = function(){
   username = document.getElementById("myText").value;
   document.getElementById("myH1").textContent = `Hello ${username}`;
}

const ROWS = 6;
const COLUMNS = 5;


document.getElementById("increment").onclick = function (){
   number = parseInt(document.getElementById("numCount").textContent);
   number += 1
   document.getElementById("numCount").textContent = number;
}

gridContainer = document.getElementById("wordleGrid");
for (let r = 0; r < ROWS; r++) {
  for (let c = 0; c < COLUMNS; c++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.id = `cell-${r}-${c}`; // Optional ID for referencing later
    gridContainer.appendChild(cell);
  }
}

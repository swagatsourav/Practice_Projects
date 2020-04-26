var b = document.getElementById('b')

var td = document.querySelectorAll('td')


function clearCells() {

  for (var i of td) {
    i.textContent = '';
  }

}

// function fillCells() {
//   if (td1js.textContent === '') {
//     td1js.textContent = 'X';
//   } else if (td1js.textContent === 'X') {
//     td1js.textContent = 'O';
//   } else {
//     td1js.textContent = '';
//   }
// }

// this keyword ensures that whenever this function gets
// called , it will take the reference of that element
function fillCells() {
  if (this.textContent === '') {
    this.textContent = 'X';
  } else if (this.textContent === 'X') {
    this.textContent = 'O';
  } else {
    this.textContent = '';
  }
}
// var td1js = document.querySelector('#td1')
// td1js.addEventListener('click', fillCells);

// var td1 = document.getElementById('td1')

for (var j of td) {
  j.addEventListener('click', fillCells);
}

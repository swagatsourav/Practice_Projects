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




// When calling a function on an event, always call with blank parameter and if you wish to pass any parameter pass it in an
//intermediate function like below. And if you want to manipiulate some proporties of the same object use this keyword only inside the intermediate function.
// Remember : This keyword don't work inside the last called function. Also this keyword won't work in the intermediate function if you pass the parameters.

var p1 = 5;
var p2 = 7;

document.getElementById("myBtn").addEventListener("click", function() {
  this.innerHTML = 'Clicked';
  myFunction(p1, p2);
});

function myFunction(a, b) {
  var result = a * b;
  document.getElementById("demo").innerHTML = result;
  
}


// The above is simillar to :

var p1 = 5;
var p2 = 7;

document.getElementById("myBtn").addEventListener("click",myfun);

function myfun() {
  this.innerHTML = 'Clicked';
  myFunction(p1, p2);
}

function myFunction(a, b) {
  var result = a * b;
  document.getElementById("demo").innerHTML = result;
  
}


//Also if we want to call a function on an event when we can put the object which generated the event as a parameter , then we can do this in below way as well.

<!DOCTYPE html>
<html>
<head>
<script>
function myFunction(x) {
  x.style.background = "yellow";
}
</script>
</head>
<body>

Enter your name: <input type="text" onfocus="myFunction(this)">

<p>When the input field gets focus, a function is triggered which changes the background-color.</p>

</body>
</html>


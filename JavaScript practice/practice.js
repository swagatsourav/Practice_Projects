alert("Thanks! for replying!!! Have a great day!");
prompt("How is your mood today?");
console.log("Hello There!!!");

//
// for (var variable in object) {
//   if (object.hasOwnProperty(variable)) {
//
//   }
// }

// To print an object with it's details
// console.dir();

// Below is an example of an object method

obj = {
  name: "Swagat",
  age: 28,
  sex: "male",
  // Below is the method inside the object
  education: function() {
    alert(this.name + " studied till Mtech.")
  }

}

// Calling the method inside the object
obj.education();


document.getElementsByName('name')

//Below gives the view in object view.

// console.dir(<put the object here >)

console.dir(document)


//Below displays html part inside the object

document



// To select a child element "h1" from object.children is an array in which the index 0 contains the h1 element

document.body.children[0]

//Below selects the element body by its name
document.getElementsByTagName('body')

//Below selects the element body by its id
document.getElementById('id')

//Below selects the element body by its class_name
document.getElementsByClassName('class_name')


//Below selects the element based on its selectors(CSS selector)
//selector can be any css selector used to identify the getElementsByTagName


document.querySelector('selector')
document.querySelector('body h1.h1class.h2class')
// The above selects the h1 element under body element with the class h1class and also h2class)
document.querySelector('body img')

// Below selects the src value of the element img under body tag.
document.querySelector('body img').src

// Below one also selects the src value of the element img under body tag.
// But it gives the relative path of src
document.querySelector('body img').getAttribute('src')


// Below sets the src value of the element img under body tag.

document.querySelector('body img').src = "<Absolute value of img>"

// Below one also sets the src value of the element img under body tag.
// But it gives the relative path of src
document.querySelector('body img').setAttribute('src', '<path of img>')
//


// The DOM contains the html elements and css in each tag in hierarchy.


//Select the texts inside the element.
document.body.textContent

//Also can change the value here as well
document.body.textContent = "value to change"

//Select the inner HTML part along with the text
document.body.children[0].innerHTML


//Also can change the value of html here as well
document.body.children[2].innerHTML = '<a href="https://facebook.com">Click Me</a>'
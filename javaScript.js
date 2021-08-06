/*Document */
// console.log(document);
// Finding HTML Objects
// document.anchors	// Returns all <a> elements that have a name attribute
// document.applets	// Deprecated
// document.baseURI	// Returns the absolute base URI of the document
// document.body	// Returns the <body> element
// document.cookie	//Returns the document's cookie
// document.doctype	//Returns the document's doctype
// document.documentElement	//Returns the <html> element
// document.documentMode	//Returns the mode used by the browser
// document.documentURI	//Returns the URI of the document
// document.domain	//Returns the domain name of the document server
// document.domConfig	//Obsolete.
// document.embeds	//Returns all <embed> elements
// document.forms	//Returns all <form> elements
// document.head	//Returns the <head> element
// document.images	//Returns all <img> elements
// document.implementation	//Returns the DOM implementation
// document.inputEncoding	//Returns the document's encoding (character set)
// document.lastModified	//Returns the date and time the document was updated
// document.links	//Returns all <area> and <a> elements that have a href attribute
// document.readyState	//Returns the (loading) status of the document
// document.referrer	//Returns the URI of the referrer (the linking document)
// document.scripts	//Returns all <script> elements
// document.strictErrorChecking	//Returns if error checking is enforced
// document.title	//Returns the <title> element
// document.URL	//Returns the complete URL of the document

// Finding Elements
// document.getElementById(id)	//Find an element by element id
// document.getElementsByClassName(name)	//Find elements by class name
// document.getElementsByTagName(name)	//Find elements by tag name

// console.log(document.getElementById('paraTitle'));
// console.log(document.getElementsByClassName('lead'));
// console.log(document.getElementsByTagName('p'));
// console.log(document.getElementsByTagName('h4'));

// Changing Elements
// element.innerHTML =  new html content	// Change the inner HTML of an element
// element.attribute = new value	// Change the attribute value of an HTML element
// element.style.property = new style	// Change the style of an HTML element
// element.setAttribute(attribute, value)	// Change the attribute value of an HTML element

// document.getElementById('paraTitle').innerHTML = 'Head Text';
// document.getElementById('paraTitle').textContent = 'Content Text';
// document.getElementById('paraTitle').style.color = 'red';
// document.getElementById('paraTitle').style.margin = '3rem';
// document.getElementById('paraTitle').setAttribute('class', 'userList');
// console.log(document.getElementById('paraTitle'));

// QuerySelector
// document.querySelector('#paraTitle').innerHTML = 'Query Selector';
// document.querySelector('#paraTitle').textContent = 'Query Selector Content';
// document.querySelector('#paraTitle').style.color = 'yellow';
// document.querySelector('#paraTitle').style.margin = '5rem';
// document.querySelector('#paraTitle').setAttribute('class', 'paraList');

// document.querySelector('.lead').innerHTML = 'Query Selector';
// document.querySelector('.lead').textContent = 'Query Selector Content';
// document.querySelector('.lead').style.color = 'red';
// document.querySelector('.lead').style.margin = '5rem';
// document.querySelector('.lead').setAttribute('class', 'paraList');

// QuerSelectorAll
// const pOdd = document.querySelectorAll('p:nth-child(odd)');
// pOdd.forEach(function (p) {
//   p.style.color = 'red';
//   p.textContent = 'Odd Sentence';
// });

// const pEven = document.querySelectorAll('p:nth-child(even)');
// pEven.forEach(function (p) {
//   p.style.background = 'green';
//   p.textContent = 'Even Sentence';
// });

/* Navigating Between Nodes */
// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling
// children

// const paraDiv = document.querySelector('div.para');
// const text = document.querySelector('p.lead.first-child');

// console.log(paraDiv.childNodes);
// console.log(paraDiv.children);

// console.log(paraDiv.firstChild);
// console.log(paraDiv.firstElementChild);

// console.log(paraDiv.lastChild);
// console.log(paraDiv.lastElementChild);

// console.log(paraDiv.previousSibling);
// console.log(paraDiv.previousElementSibling);

// console.log(paraDiv.nextSibling);
// console.log(paraDiv.nextElementSibling);

// console.log(paraDiv.parentNode);
// console.log(paraDiv.parentElement);

/* Adding and Deleting Elements */
// document.createElement(element)	// Create an HTML element
// document.removeChild(element)	// Remove an HTML element
// document.appendChild(element)	// Add an HTML element
// document.replaceChild(new, old)	// Replace an HTML element
// document.write(text)	// Write into the HTML output stream

// // Create Elements
// const p = document.createElement('p');
// p.className = 'lead';
// p.appendChild(document.createTextNode('Created Paragraph'));

// const paraDiv = document.querySelector('div.para');
// paraDiv.appendChild(p);

// // Remove Element
// const paraDiv = document.querySelector('div.para');
// const para = document.querySelectorAll('p');

// paraDiv.removeChild(para[2]);

// Replace Element
// document.replaceChild(new, old);
// const newTitle = document.createElement('h4');
// newTitle.id = 'paraTitle';
// newTitle.appendChild(document.createTextNode('New Paragraph Title!'));

// const oldTitle = document.getElementById('paraTitle');

// const mainDiv = document.querySelector('.container');

// mainDiv.replaceChild(newTitle, oldTitle);

/* Events */
//AddEventListener() method
// document.querySelector('.addMore').addEventListener('click', function (e) {
//   console.log('Clicked!');
// });

// const addMore = document.querySelector('.addMore');

// addMore.addEventListener('click', onClick);

// function onClick(e) {
//   console.log('Asgin Clicked!');
// }

// document.querySelector('.addMore').addEventListener('click', function (e) {
//   // Event Target Element
//   // console.log(e.target);
//   // console.log(e.target.className);
//   // console.log(e.target.id);
//   // console.log(e.target.classList);
//   console.log(e.timeStamp);
// });

// Mouse Events
// click
// dblclick
// mousedown
// mouseup
// mouseenter
// mouseleave
// mouseover
// mouseout
// mousemove

// document.querySelector('.addMore').addEventListener('click', function (e) {
//   console.log('Clicked!');
// });

// document.querySelector('.addMore').addEventListener('dblclick', function (e) {
//   console.log('Double Clicked!');
// });

// document.querySelector('.addMore').addEventListener('mousedown', function (e) {
//   console.log('Mouse down!');
// });

// document.querySelector('.addMore').addEventListener('mouseup', function (e) {
//   console.log('Mouse up!');
// });

// document.querySelector('.addMore').addEventListener('mouseenter', function (e) {
//   console.log('Mouse enter!');
// });

// document.querySelector('.addMore').addEventListener('mouseleave', function (e) {
//   console.log('Mouse leave!');
// });

// document.querySelector('.addMore').addEventListener('mouseover', function (e) {
//   console.log('Mouse over!');
// });

// document.querySelector('.addMore').addEventListener('mouseout', function (e) {
//   console.log('Mouse out!');
// });

// document.querySelector('.addMore').addEventListener('mousemove', function (e) {
//   console.log('Mouse move!');
// });

// Keyboard Events
// keydown
// keyup
// keypress
// focus
// blur
// cut
// paste
// input
// change

// document.querySelector('#name').value = '';

// // document.querySelector('#name').addEventListener('keydown', function (e) {
// //   console.log(`${e.type}`);
// // });

// // document.querySelector('#name').addEventListener('keypress', function (e) {
// //   console.log(`${e.type}`);
// // });

// document.querySelector('#name').addEventListener('input', function (e) {
//   console.log(`${e.type}`);
// });

// // Event Delgation
// document.body.addEventListener('click', function (e) {
//   if (e.target.classList.contains('btn-delete')) {
//     // console.log('Delete Button Clicked!');
//     e.target.parentElement.remove();
//   }
// });

// Local Stroage
// localStorage.setItem('keyword', 'value')
// localStorage.getItem('keyword')
// localStorage.removeItem('keyword')
// localStorage.clear()

// localStorage.setItem('name', 'Steven');
// // const getName = localStorage.getItem('name');
// // console.log(getName);
// // localStorage.removeItem('name');
// localStorage.clear();

// document.querySelector('form').addEventListener('submit', function (e) {
//   const User = document.getElementById('name').value;

//   let Users;

//   if (localStorage.getItem('Users') === null) {
//     Users = [];
//   } else {
//     Users = JSON.parse(localStorage.getItem('Users'));
//   }

//   Users.push(User);

//   localStorage.setItem('Users', JSON.stringify(Users));
// });

// const Users = JSON.parse(localStorage.getItem('Users'));

// Users.forEach(function (user) {
//   console.log(user);
// });

// /* Constructor */
// class Person {
//   constructor(firstName, lastName, email, dob) {
//     (this.firstName = firstName),
//       (this.lastName = lastName),
//       (this.email = email);
//     this.brithday = new Date(dob);
//   }

//   greeting() {
//     return `Email of ${this.firstName} ${this.lastName} is ${this.email}`;
//   }

//   calculateAge = function () {
//     const diff = Date.now() - this.brithday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   };

//   static addNumber(a, b) {
//     return a + b;
//   }
// }

// const steven = new Person('Steven', 'Smith', 'steven@gmail.com', '9-9-99');
// const sara = new Person('Sara', 'Johnson', 'sara@gmail.com', '9-2-2000');

// console.log(sara.greeting());
// console.log(sara.calculateAge());

// console.log(steven.addNumber(5, 5));
// console.log(Person.addNumber(5, 5));

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   greeting() {
//     return `Hello ${this.firstName} ${this.lastName}`;
//   }
// }

// class User extends Person {
//   constructor(firstName, lastName, email, role) {
//     super(firstName, lastName);

//     this.email = email;
//     this.role = role;
//   }

//   greetingUser() {
//     return `Hello ${this.firstName} ${this.lastName}`;
//   }
// }

// const steven = new Person('Steven', 'Smith', 'steven@gmail.com', 'admin');
// // const steven = new User('Steven', 'Smith', 'steven@gmail.com', 'admin');

// // console.log(steven);
// // console.log(steven.greeting());
// console.log(steven.greetingUser());

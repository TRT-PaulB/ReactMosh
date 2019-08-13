//import { Teacher } from "./teacher";  // named export
//import { promote } from "./teacher";  // named export
//import Teacher from "./teacher"; // no brackets needed because of the default keyword in Teacher

import Teacher, { promote } from "./teacher"; // mix default and named exports!

function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  // note that if you use var tyope for i, i is now 5, even though it is out of scope - javascriopt quirk
  // so use let
  // console.log(i);
}

//sayHello();

const person = {
  // assign a constant to an object
  name: "me",
  walk() {
    console.log(this); // returns a ref to curr object (ie. here to the person object)
  }, // functions within an object (ie. methods) and no need for function keyword
  talk() {}
};

person["name"] = "James";

person.walk(); // this will return the person object when called this way

// person.walk is a function object with its own members, eg bind function
// eg. bind to bind a function to an object
const walk = person.walk.bind(person); // creates new instance of walk function, and sets this to point to the person object
console.log(walk); // walk constant is set as a function

walk(); // calling the walk constant function....
// notice that this is undefined here (unless the walk function object is explicitly bound to the person object),
// because it is called from the Window object in javascript (in strict mode)

//const targetProp = "name";
//person[targetProp.value] = "John";

///////////////////////////////////////////
// Arrow Functions
const square = function(number) {
  return number * number;
};

const squareArrow = number => {
  // if there are no parameters, use ()
  return number * number;
};

// if an arrow function is only a single line, it can be shortened like this:
const shortSquare = number => number * number; // no reutnr keyword or curly braces

console.log(square(5));
console.log(squareArrow(5));
console.log(shortSquare(5));

// AN EXAMPLE OF HOW ARROW FUNCIONS MIGHT BE USED:
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
];

// filter jobs to include only active jobs
const activeJobs = jobs.filter(function(job) {
  return job.isActive;
});

const activeJobsArrowFunction = jobs.filter(job => job.isActive);
console.log(activeJobsArrowFunction); // inactive job 3 is omitted

//////////////////////////////////////
// ARROW FUNCTIONS DO NOT REBIND THE THIS KEYWORD

const person2 = {
  talk() {
    console.log("this2", this);
  }
};
person2.talk(); // in console this displays 'this', pointing to a reference to the person2 object

const person3 = {
  talk() {
    // setTimeout(function() {}, 1000);   this is a javascript function
    setTimeout(function() {
      console.log("this3", this); // this timeout function executes body after 1 second
    }, 1000);
    //console.log("this", this);
  }
};
person3.talk(); // when logged inside of this callback function, the Window object is displayed
// callback function is not part of any objects here....
// it is standalone, not like the talk method in the person object

// how can we have a reference to the person object, inside the callback function?

const person4 = {
  talk() {
    setTimeout(() => {
      // in an arrow function this inherits context in which this code is defined
      console.log("this4", this); // this timeout function executes body after 1 second
    }, 1000);
  } // arrow functions do not rebind the this keyword
};
person4.talk();

////////////////////////////////////////
// Array.map method:

const colours = ["red", "green", "blue"];
const htmlColours = colours.map(function(colour) {
  return "<li>" + colour + "</li>";
});
console.log(htmlColours);

// notice this is a candidate for an arrow function
const htmlColours2 = colours.map(colour => "<li>" + colour + "</li>");

// refine this more using a template literal! can be used with EC6 apparently
const htmlColours3 = colours.map(colour => `<li>{colour}</li>`);

console.log("useOfTemplateLiteral", htmlColours3);

////////////////////////////////////////

// Object Desructuring
const { name } = person; // store the property name in a constant called name
const { name: nme } = person; // store the property name in a constant (alias) called nme

////////////////////////////////////////
// SPREAD OPERATOR
// create a new array with the content of a previous array
const first = [1, 2, 3];
const second = [6, 7, 8];

const combinedOld = first.concat(second);
const combinedWithSpreadOperator = [...first, ...second];
const combinedCheeky = [...first, "a", ...second, "b"];
console.log("cheeky", combinedCheeky);

// clone an array
const clone = [...first];

// spread operator on objects
const firstObj = { name: "Mosh" };
const secondObj = { job: "Instructor" };
const clone2 = { ...first };

// combine 2 single objects, and add another property whilst we are at it....
const combineObjs = {
  ...firstObj,
  ...secondObj,
  location: "Australia"
};
console.log("combinbed objects", combineObjs);

/////////////////////////
// CLASSES

class Personx {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("do something");
  }
}

const personA = new Personx("Mosh");
personA.walk();

//  inheritance
class Teacherx extends Personx {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("do some teaching");
  }
}

const teacher = new Teacherx("Meng");
console.log("My teacher name = " + teacher.name);

const teacherB = new Teacherx("Meng", "BA");
console.log(
  "My teacher name = " + teacherB.name + " - with degree: " + teacherB.degree
);

// see separate modules....!
const zTeacher = new Teacher("Meng", "MSc");
console.log(
  "My teacher in own modules = " +
    zTeacher.name +
    " - with degree: " +
    zTeacher.degree
);

zTeacher.teach(); // now check this object in console
/////////////////////////

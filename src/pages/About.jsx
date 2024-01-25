import React from "react";
import Header from "../components/Header";

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let userOne = new User("Jack");
// let userTwo = new User("John");
// let userThree = new User("Joe");

// console.log(userOne);
// console.log(userThree);
// console.log(userTwo);

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let hannah = new User("Hannah");


/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/


const About = () => {
  

  return (
    <>
      <Header />
      <h1>About Page</h1>
      <button onClick={()=>hannah.sayHi()}>Hi</button>
      
    </>
  );
};

export default About;

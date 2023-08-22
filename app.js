const box = document.querySelector('.box');

const names = [
  "Dr. Slice",
  "Dr. Pressure",
  "Prof. Possibility",
  "Prof. Prism",
  "Dr. Impulse",
  "Prof. Spark",
  "Dr. Wire",
  "Prof. Goose"
];

const occupations = [
  "gardener",
  "programmer",
  "teacher",
  "gardner"
];

const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];
//create table??

//make column headers

//create columns to add properties of one object at a time
//create variable to calculate average as new entries populate list

//add freelancers to list one at a time
// let count = 0;
// const list = [];
// const n = setInterval(function(){
//   const newName = freelancers[count];
//   list.push(newName);
//   count++;
//   console.log(list);
//   if (list.length === freelancers.length){
//     clearInterval(n);
//   }
  
// }, 3000);
// function render(){
  
//   box.innerHTML = n;
//   return n;
// }
// render();

//create running average as prices populate list

//how should freelancers' information be displayed on the page
// written and called a function to render the initial freelancer data
//written a function to generate a new random freelancer
//Is this function being called in an interval
//Have you written a function to calculate the average starting price of your freelancers' array?
//When should this function be called to update the displayed message?
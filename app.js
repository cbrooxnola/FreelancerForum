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
const colors = ['red', 'blue', 'green', 'yellow'];
const sizes = ['sm', 'md', 'lg', 'xl'];
const types = ['square', 'circle'];

function randomShape(){
  const colorIdx = Math.floor(Math.random()*colors.length);
  const sizeIdx = Math.floor(Math.random()*sizes.length);
  const typeIdx = Math.floor(Math.random()*types.length);
  const shape = {
    color: colors[colorIdx],
    size: sizes[sizeIdx],
    type: types[typeIdx]
  };
  return shape;
}

const shapes = [
  randomShape(),
  randomShape()
];

function render(){
  const html = shapes.map(function(shape, idx){
    return `<div class='${shape.color} ${shape.size} ${shape.type}'>${idx}</div>`;
  });
  box.innerHTML = html.join('');
}

render();
const i = setInterval(function(){
  const newShape = randomShape();
  shapes.push(newShape);
  render();
  if (shapes.length > 20){
    clearInterval(i);
  }
}, 2000);
// able to spread arrays
// const first = [1,2,3];
// const second= [4,5,6];

// // const combined = first.concat(second);
// // const combined = [...first, ...second]

// const clone = [...first];
// console.log(first);


// able to spread objects

// able to add more elements
const first = {name : 'Bobby'};
const second = {job : "Programmer"};

const combined = {...first, ...second, location : 'NFAL'}

console.log(combined)
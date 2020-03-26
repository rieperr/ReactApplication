import Teacher, { promote } from "./teacher";

//Default ->import ... from '';
//Named -> import {....} from '';

const teacher = new Teacher("Mosh", "Msc");
teacher.teach();
// const person = new Person("Cihat");
// person.walk();

//let -> block
//const -> block

// const square = function (number) {
//   return number * number;
// }

// const first = {
//   name: 'rieper'
// };
// const second = {
//   job: 'developer'
// };

// const combined = {
//   ...first,
//   ...second,
//   location: 'australia'
// };
// console.log(combined);

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // const combined = first.concat(second);
// // const combined = [...first, 'a', ...second, 'b'];
// const clone = [...first];

// console.log(first);
// console.log(clone);

// const address = {
//   street: '',
//   city: '',
//   country: ''
// };

// const {
//   street: st
// } = address;

// const colors = ['red', 'green', 'blue'];
// const items = colors.map(color => `<li>${color}</li>`);
// console.log(items);

// const person = {
//   talk() {
//     setTimeout(() => {
//       console.log('this', this);
//     }, 1000);
//   }
// };

// person.talk();

// forEach
// const arr = [1, 2, 3, 4, 5];
// arr forEach = (function(item) {
//     consol.log(item);
// });

// map
const arr2 = [1, 2, 3, 4, 5];
const doubled = arr2.map((item) => {
    return item * 2;
});

console.log(doubled);

// filter
const arr3 = [1, 2, 3, 4, 5];
const evenNumber = arr3.filter(function(item) {
    return item % 2 === 0;
});

console.log(evenNumber);

// reduce
const arr4 = [1, 2, 3, 4, 5];
const sum = arr4.reduce(function (total, item) {
    return total + item;
},0);

console.log(sum);
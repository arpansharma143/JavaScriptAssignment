var array1 = [1, 3, 6, 2, 4];
var array2 = [2, 0, 4, 1, 2];

var array3 = [];

//adding
for (let i = 0; i < array1.length; i++) {
  array3.push(array1[i] + array2[i]);
}

// removing

const arr4 = [];
array3.forEach((a) => {
  arr4.includes(a) ? null : arr4.push(a);
});

var array3 = arr4;

console.log(array3);

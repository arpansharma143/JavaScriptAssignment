var fruitsDb = [
  "apple",
  "banana",
  "orange",
  "pineapple",
  "grapes",
  "avacaso",
  "strawbeery",
];

var mixFruitsArr = [
  "grapes",
  "tomato",
  "cabbage",
  "pineapple",
  "orange",
  "banana",
  "banana",
];
function filterFruits(arr) {
  const filterArr = [];
  // compararing
  for (let i = 0; i < fruitsDb.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (fruitsDb[i] === arr[j]) {
        // here we checking that any element is not existing already in filter array
        let alreadyExist = false;

        for (let k = 0; k < filterArr.length; k++) {
          if (filterArr[k] === arr[j]) {
            alreadyExist = true;
          }
        }

        alreadyExist ? null : filterArr.push(arr[j]);
      }
    }
  }

  return filterArr;
}

console.log(filterFruits(mixFruitsArr));

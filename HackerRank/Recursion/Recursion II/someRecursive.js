// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// function someRecursive(arr, callback) {
//   // add whatever parameters you deem necessary - good luck!
//   for (var i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       return true;
//     }
//   }
//   return false;
// }

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1),callback);
}

someRecursive([1, 2, 3, 4], isOdd); // true
someRecursive([4, 6, 8, 9], isOdd); // true
someRecursive([4, 6, 8], isOdd); // false
someRecursive([4, 6, 8], val => val > 10); // false

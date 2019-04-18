// New Array
function reverseArray(arr) {
    var newArr = [];
    for(var i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i]);
    }
    
    console.log(newArr);
    return newArr;
      
  }
  
  reverseArray(["First","Second","Third","Fourth"]);


// In Place
function reverseArrayInPlace(arr) {
    for(var i = 0; i < arr.length/2; i++) {
      var temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
    
    console.log(arr);
    return arr;
      
  }
  
  reverseArrayInPlace(["First","Second","Third","Fourth"]);

// Recursive Reverse In Place
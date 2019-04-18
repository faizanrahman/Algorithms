function binarySearch(arr, value){
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== value && start <= end){
        console.log(start, middle, end);
        if(value < arr[middle]){
            end = middle - 1;
        }
        else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    console.log(start, middle, end);
    // Ternary operator
    // return arr[middle] === value ? middle : -1;
    if(arr[middle] === value){
        return middle;
    } 
    return -1;   
}

binarySearch([2,5,6,9,13,15,28,30], 15);
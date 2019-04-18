function linearSearch(arr, value){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
  }
  
  linearSearch([10,15,20,25,30],15);

  // As array grows, Big 0 is O(N)(Linear).
  
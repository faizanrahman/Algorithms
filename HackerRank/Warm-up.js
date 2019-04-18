function sockMerchant(n, ar) {
    let frequencyCounter = {};
    var totalPairs;
    for (var i = 0; i < ar.length; i++) {
        var num = ar[i];
        if (frequencyCounter[num]) {
            frequencyCounter[num]++;
        } else {
            frequencyCounter[num] = 1;
        }

    }
    console.log(frequencyCounter);
    for (var key in frequencyCounter) { 
        console.log(key, frequencyCounter[key]);
      if(frequencyCounter[key] % 2 === 0){
        totalPairs = frequencyCounter[key]/2;
      } else {
        totalPairs += Math.floor(frequencyCounter[key]/2);
      }
    }
  console.log(totalPairs);
  return totalPairs;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

// This problem is passing some cases, but failing others.
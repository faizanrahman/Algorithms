function fib(num){
    // add whatever parameters you deem necessary - good luck!
    if(num <= 2){
        return 1;
    }
    return fib(num - 1) + fib(num - 2);
  }
  
console.log(fib(4));

// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
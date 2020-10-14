function fib(n) {
    const result = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      const a = result[i - 1];
      const b = result[i - 2];
  
      result.push(a + b);
    }
  
    return result[n];
  }
  
  function rFib(n) {
    if (n < 2) {
      return n;
    }
  
    return rFib(n - 1) + rFib(n - 2);
  }
  console.log(rFib(10))
  console.log(fib(10))
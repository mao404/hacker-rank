function getTotalX(a: number[], b: number[]): number {
  // Helper function to calculate the GCD of two numbers
  function gcd(x: number, y: number): number {
    while (y !== 0) {
      const temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  }

  // Helper function to calculate the LCM of two numbers
  function lcm(x: number, y: number): number {
    return (x * y) / gcd(x, y);
  }

  // Calculate the LCM of all numbers in array a
  let lcmA = a[0];
  for (let i = 1; i < a.length; i++) {
    lcmA = lcm(lcmA, a[i]);
  }

  // Calculate the GCD of all numbers in array b
  let gcdB = b[0];
  for (let i = 1; i < b.length; i++) {
    gcdB = gcd(gcdB, b[i]);
  }

  // Now find all multiples of lcmA that divide gcdB
  let count = 0;
  for (let x = lcmA; x <= gcdB; x += lcmA) {
    if (gcdB % x === 0) {
      count++;
    }
  }

  return count;
}

function compareTriplets(a: number[], b: number[]): number[] {
  let resA = 0;
  let resB = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      resA++;
    } else if (a[i] < b[i]) {
      resB++;
    }
  }
  return [resA, resB];
}

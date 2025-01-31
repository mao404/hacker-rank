function plusMinus(arr: number[]): void {
  let size = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let i = 0; i < size; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  let totalPos = (positive / size).toFixed(6);
  let totalNeg = (negative / size).toFixed(6);
  let totalZer = (zero / size).toFixed(6);
  console.log(totalPos);
  console.log(totalNeg);
  console.log(totalZer);
}

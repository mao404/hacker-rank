function birthdayCakeCandles(candles: number[]): number {
  let max: number = 0;
  let counter: number = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > max) {
      max = candles[i];
      counter = 1;
    } else if (candles[i] === max) {
      counter++;
    }
  }

  return counter;
}

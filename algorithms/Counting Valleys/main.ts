function countingValleys(steps: number, path: string): number {
  let stepUp: number = 0;
  let stepDown: number = 0;
  let valley: number = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      stepUp++;
    } else {
      stepDown++;
    }
    if (stepUp == stepDown && path[i] == "U") {
      valley++;
    }
  }

  return valley;
}

function breakingRecords(scores: number[]): number[] {
  let highRecord = scores[0];
  let lowRecord = scores[0];
  let highCount = 0;
  let lowCount = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highRecord) {
      highRecord = scores[i];
      highCount++;
    } else if (scores[i] < lowRecord) {
      lowRecord = scores[i];
      lowCount++;
    }
  }

  return [highCount, lowCount];
}

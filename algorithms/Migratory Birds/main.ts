function migratoryBirds(arr: number[]): number {
  const frequency: { [key: number]: number } = {};

  for (let bird of arr) {
    if (frequency[bird]) {
      frequency[bird]++;
    } else {
      frequency[bird] = 1;
    }
  }

  let maxFrequency = 0;
  let mostFrequentBird = Infinity;

  for (let bird in frequency) {
    let count = frequency[bird];
    // Ensure that bird is treated as a number for comparison
    if (
      count > maxFrequency ||
      (count === maxFrequency && Number(bird) < mostFrequentBird)
    ) {
      maxFrequency = count;
      mostFrequentBird = Number(bird); // Convert bird to number
    }
  }

  return mostFrequentBird;
}

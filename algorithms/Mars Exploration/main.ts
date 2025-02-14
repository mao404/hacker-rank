function marsExploration(s: string): number {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    // Check which character of "SOS" should be at this position
    const expectedChar = "SOS"[i % 3]; // 'S' for indices 0, 3, 6..., 'O' for 1, 4, 7..., 'S' for 2, 5, 8...

    // If the character doesn't match the expected pattern, increment the count
    if (s[i] !== expectedChar) {
      count++;
    }
  }

  return count;
}

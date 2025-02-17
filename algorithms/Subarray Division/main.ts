function birthday(s: number[], d: number, m: number): number {
  let counter = 0;

  for (let i = 0; i <= s.length - m; i++) {
    const segment = s.slice(i, i + m);
    const segmentSum = segment.reduce((sum, num) => sum + num, 0);

    if (segmentSum === d) {
      counter++;
    }
  }

  return counter;
}

function gemstones(arr: string[]): number {
  // sort stones by length
  let stones = arr.sort((a, b) => a.length - b.length);
  // take the smallest stone, get collection of gems inside it
  let smallestStone = stones.shift();
  if (!smallestStone) return 0;
  let gems = Array.from(new Set<string>(smallestStone.split("")));
  // the rest of stones should have gems to be count as gemstone.
  return gems.filter((gem) => stones.every((stone) => stone.includes(gem)))
    .length;
}

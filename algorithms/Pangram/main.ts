function pangrams(s: string): string {
  const letters = s.toLowerCase().replace(/[^a-z]/g, "");
  const paragram = new Set(letters).size === 26;

  if (!paragram) {
    return "not pangram";
  } else {
    return "pangram";
  }
}

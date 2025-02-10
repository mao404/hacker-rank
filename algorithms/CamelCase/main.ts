function camelcase(s: string): number {
  // Match all capital letters (A-Z)
  const matches = s.match(/[A-Z]/g);

  if (matches) {
    return matches.length + 1;
  } else {
    //if no capital letters found, return "1" word
    return 1;
  }
}

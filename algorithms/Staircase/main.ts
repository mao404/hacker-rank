function staircase(n: number): void {
  for (let i = 1; i <= n; i++) {
    // Generate spaces: (n - i) spaces
    let spaces = " ".repeat(n - i);
    // Generate hashes: i hashes
    let hashes = "#".repeat(i);
    // Print the row
    console.log(spaces + hashes);
  }
}

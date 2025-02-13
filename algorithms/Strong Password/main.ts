function minimumNumber(n: number, password: string): number {
  let hasDigit = /[0-9]/.test(password);
  let hasLower = /[a-z]/.test(password);
  let hasUpper = /[A-Z]/.test(password);
  let hasSpecial = /[!@#$%^&*()\-\+]/.test(password);

  let missingTypes = 0;
  if (!hasDigit) missingTypes++;
  if (!hasLower) missingTypes++;
  if (!hasUpper) missingTypes++;
  if (!hasSpecial) missingTypes++;

  let lengthDeficit = Math.max(0, 6 - n);

  return Math.max(missingTypes, lengthDeficit);
}

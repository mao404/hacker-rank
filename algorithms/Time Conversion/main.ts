function timeConversion(s: string): string {
  let [_, hours, minutes, seconds, modifier] =
    s.match(/(\d{2}):(\d{2}):(\d{2})(AM|PM)/i) || [];

  if (!hours || !minutes || !seconds || !modifier) {
    throw new Error("Invalid time format");
  }

  // Convert hours to 24-hour format based on AM/PM
  if (modifier.toUpperCase() === "AM") {
    if (hours === "12") {
      hours = "00"; // Midnight case
    }
  } else if (modifier.toUpperCase() === "PM") {
    if (hours !== "12") {
      hours = (parseInt(hours) + 12).toString(); // PM hours conversion
    }
  }

  return `${hours}:${minutes}:${seconds}`;
}

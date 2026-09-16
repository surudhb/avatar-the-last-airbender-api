const MAX_NAME_LENGTH = 100

// Allows multi-word names and hyphenated names (e.g. "Ba Sing Se", "Fire-Nation")
export const isAlphabetical = (s) =>
  s.length <= MAX_NAME_LENGTH && /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/.test(s)

// Episode IDs are at most 3 digits (e.g. 321 for Book 3, Episode 21)
export const isNumeric = (s) =>
  s.length <= 10 && /^\d+$/.test(s)

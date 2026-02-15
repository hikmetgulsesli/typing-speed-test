/**
 * WPM Calculator Utility
 * Calculates Words Per Minute based on typing input
 */

/**
 * Calculates Words Per Minute (WPM)
 * Formula: (characters typed / 5) / (time in minutes)
 * 
 * @param charsTyped - Number of characters typed
 * @param timeMs - Time elapsed in milliseconds
 * @returns WPM rounded to integer, or 0 for edge cases
 */
export function calculateWPM(charsTyped: number, timeMs: number): number {
  // Handle edge cases: zero time or zero/negative characters
  if (timeMs <= 0 || charsTyped <= 0) {
    return 0;
  }

  // Convert time from milliseconds to minutes
  const timeInMinutes = timeMs / 60000;

  // Handle edge case: time too small to produce meaningful result
  if (timeInMinutes <= 0) {
    return 0;
  }

  // Calculate words (standard: 5 characters = 1 word)
  const words = charsTyped / 5;

  // Calculate WPM
  const wpm = words / timeInMinutes;

  // Round to nearest integer
  return Math.round(wpm);
}

export default calculateWPM;

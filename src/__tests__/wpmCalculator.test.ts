/**
 * Tests for WPM Calculator Utility
 */

import { describe, it, expect } from 'vitest';
import { calculateWPM } from '../utils/wpmCalculator';

describe('calculateWPM', () => {
  // AC1: calculateWPM(250 chars, 60000ms) returns 50 WPM
  it('should return 50 WPM for 250 characters typed in 60 seconds', () => {
    const result = calculateWPM(250, 60000);
    expect(result).toBe(50);
  });

  // AC2: calculateWPM(0, 60000ms) returns 0
  it('should return 0 when no characters are typed', () => {
    const result = calculateWPM(0, 60000);
    expect(result).toBe(0);
  });

  // AC3: calculateWPM(250, 0ms) returns 0
  it('should return 0 when time is zero', () => {
    const result = calculateWPM(250, 0);
    expect(result).toBe(0);
  });

  // AC4: Result rounded to integer
  it('should round result to nearest integer', () => {
    // 251 chars in 60s = 50.2 WPM should round to 50
    expect(calculateWPM(251, 60000)).toBe(50);
    // 253 chars in 60s = 50.6 WPM should round to 51
    expect(calculateWPM(253, 60000)).toBe(51);
    // 255 chars in 60s = 51 WPM should be 51
    expect(calculateWPM(255, 60000)).toBe(51);
  });

  // Additional edge cases
  it('should return 0 for negative characters typed', () => {
    expect(calculateWPM(-10, 60000)).toBe(0);
  });

  it('should return 0 for negative time', () => {
    expect(calculateWPM(250, -1000)).toBe(0);
  });

  it('should calculate correct WPM for various inputs', () => {
    // 125 chars in 30s = 50 WPM
    expect(calculateWPM(125, 30000)).toBe(50);
    // 500 chars in 60s = 100 WPM
    expect(calculateWPM(500, 60000)).toBe(100);
    // 100 chars in 60s = 20 WPM
    expect(calculateWPM(100, 60000)).toBe(20);
  });

  it('should handle very small time values', () => {
    // 250 chars / 5 = 50 words, in 1ms (1/60000 min) = 3,000,000 WPM
    expect(calculateWPM(250, 1)).toBe(3000000);
  });

  it('should handle fractional minutes correctly', () => {
    // 125 chars in 30 seconds (0.5 min) = 50 WPM
    expect(calculateWPM(125, 30000)).toBe(50);
    // 62.5 chars in 30 seconds = 25 WPM (but chars must be int, so 63 chars)
    expect(calculateWPM(63, 30000)).toBe(25);
  });
});

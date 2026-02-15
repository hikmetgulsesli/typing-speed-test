/**
 * Tests for textGenerator utility
 */

import { describe, it, expect } from "vitest";
import { generateText, TEXT_LENGTHS } from "./textGenerator";

describe("generateText", () => {
  it("should generate exactly 30 words when passed 30", () => {
    const text = generateText(30);
    const wordCount = text.split(" ").length;
    expect(wordCount).toBe(30);
  });

  it("should generate exactly 60 words when passed 60", () => {
    const text = generateText(60);
    const wordCount = text.split(" ").length;
    expect(wordCount).toBe(60);
  });

  it("should generate exactly 100 words when passed 100", () => {
    const text = generateText(100);
    const wordCount = text.split(" ").length;
    expect(wordCount).toBe(100);
  });

  it("should return empty string when wordCount is 0", () => {
    const text = generateText(0);
    expect(text).toBe("");
  });

  it("should return empty string when wordCount is negative", () => {
    const text = generateText(-5);
    expect(text).toBe("");
  });

  it("should contain only valid English words and spaces", () => {
    const text = generateText(50);
    // Should only contain lowercase letters and spaces
    expect(text).toMatch(/^[a-z\s]+$/);
  });

  it("should not have leading or trailing spaces", () => {
    const text = generateText(30);
    expect(text).not.toMatch(/^\s/);
    expect(text).not.toMatch(/\s$/);
  });

  it("should not have multiple consecutive spaces", () => {
    const text = generateText(50);
    expect(text).not.toMatch(/\s{2,}/);
  });

  it("should generate different texts on multiple calls", () => {
    const text1 = generateText(30);
    const text2 = generateText(30);
    // There's a very small chance these could be identical, but highly unlikely
    expect(text1).not.toBe(text2);
  });

  it("should use TEXT_LENGTHS constants correctly", () => {
    expect(TEXT_LENGTHS.SHORT).toBe(30);
    expect(TEXT_LENGTHS.MEDIUM).toBe(60);
    expect(TEXT_LENGTHS.LONG).toBe(100);
  });

  it("should generate consistent length using TEXT_LENGTHS constants", () => {
    const shortText = generateText(TEXT_LENGTHS.SHORT);
    const mediumText = generateText(TEXT_LENGTHS.MEDIUM);
    const longText = generateText(TEXT_LENGTHS.LONG);

    expect(shortText.split(" ").length).toBe(30);
    expect(mediumText.split(" ").length).toBe(60);
    expect(longText.split(" ").length).toBe(100);
  });
});

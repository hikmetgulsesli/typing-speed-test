/**
 * Text Generator Utility
 * Generates random typing test passages from a word bank
 */

// Word bank with 100+ common English words
const WORD_BANK = [
  // Common nouns
  "time", "person", "year", "way", "day", "thing", "man", "world", "life", "hand",
  "part", "child", "eye", "woman", "place", "work", "week", "case", "point", "government",
  "company", "number", "group", "problem", "fact", "be", "have", "do", "say", "get",
  "make", "go", "know", "take", "see", "come", "think", "look", "want", "give",
  "use", "find", "tell", "ask", "work", "seem", "feel", "try", "leave", "call",
  // Common adjectives
  "good", "new", "first", "last", "long", "great", "little", "own", "other", "old",
  "right", "big", "high", "different", "small", "large", "next", "early", "young", "important",
  "few", "public", "bad", "same", "able", "happy", "sure", "clear", "full", "early",
  // Common adverbs
  "so", "up", "out", "if", "about", "into", "just", "also", "back", "only",
  "know", "take", "year", "good", "some", "come", "make", "them", "well", "very",
  // Common prepositions
  "to", "of", "in", "for", "on", "with", "at", "by", "from", "as",
  "into", "through", "during", "before", "after", "above", "below", "between", "under",
  // Common conjunctions and pronouns
  "and", "that", "have", "not", "are", "were", "been", "their", "said", "each",
  "which", "she", "will", "there", "can", "you", "all", "any", "had", "her",
  "was", "one", "our", "out", "day", "get", "has", "him", "his", "how",
  // Additional common words
  "water", "food", "home", "house", "room", "door", "window", "table", "chair", "book",
  "page", "word", "story", "news", "paper", "name", "friend", "family", "mother", "father",
  "sister", "brother", "school", "student", "teacher", "lesson", "class", "question", "answer", "idea"
];

/**
 * Generates a random text passage for typing tests
 * @param wordCount - Number of words to generate (e.g., 30, 60, 100)
 * @returns A string containing the generated text
 */
export function generateText(wordCount: number): string {
  if (wordCount <= 0) {
    return "";
  }

  const words: string[] = [];
  
  for (let i = 0; i < wordCount; i++) {
    const randomIndex = Math.floor(Math.random() * WORD_BANK.length);
    words.push(WORD_BANK[randomIndex]);
  }

  return words.join(" ");
}

/**
 * Predefined text lengths for typing tests
 */
export const TEXT_LENGTHS = {
  SHORT: 30,
  MEDIUM: 60,
  LONG: 100,
} as const;

export default generateText;

import { describe, it, expect, beforeEach } from 'vitest';

/**
 * Design Tokens Test Suite
 * Verifies CSS custom properties are properly defined and accessible
 */
describe('Design Tokens', () => {
  beforeEach(() => {
    // Ensure styles are loaded
    document.documentElement.style.cssText = '';
  });

  describe('Font Families', () => {
    it('should have --font-display defined', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--font-display');
      expect(value.trim()).toBe("'Space Grotesk', sans-serif");
    });

    it('should have --font-body defined', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--font-body');
      expect(value.trim()).toBe("'DM Sans', sans-serif");
    });
  });

  describe('Colors - Background', () => {
    it('should have --color-bg-primary defined', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--color-bg-primary');
      expect(value.trim()).toBe('#0d1117');
    });

    it('should have --color-bg-secondary defined', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--color-bg-secondary');
      expect(value.trim()).toBe('#161b22');
    });

    it('should have --color-bg-tertiary defined', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--color-bg-tertiary');
      expect(value.trim()).toBe('#21262d');
    });
  });

  describe('Colors - Text', () => {
    it('should have --color-text-primary defined', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--color-text-primary');
      expect(value.trim()).toBe('#f0f6fc');
    });

    it('should have --color-text-secondary defined', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--color-text-secondary');
      expect(value.trim()).toBe('#8b949e');
    });
  });

  describe('Colors - Accent (DevTool Palette)', () => {
    it('should have --color-accent-cyan defined', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--color-accent-cyan');
      expect(value.trim()).toBe('#00d4aa');
    });

    it('should have --color-accent-cyan-light defined', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--color-accent-cyan-light');
      expect(value.trim()).toBe('#4df2c9');
    });

    it('should have --color-accent-lime defined', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--color-accent-lime');
      expect(value.trim()).toBe('#a3e635');
    });

    it('should have --color-accent-lime-light defined', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--color-accent-lime-light');
      expect(value.trim()).toBe('#bef264');
    });
  });

  describe('Colors - Semantic', () => {
    it('should have --color-success referencing lime', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--color-success');
      expect(value.trim()).toBe('var(--color-accent-lime)');
    });

    it('should have --color-error defined', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--color-error');
      expect(value.trim()).toBe('#f85149');
    });

    it('should have --color-warning defined', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--color-warning');
      expect(value.trim()).toBe('#f0883e');
    });

    it('should have --color-info referencing cyan', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--color-info');
      expect(value.trim()).toBe('var(--color-accent-cyan)');
    });
  });

  describe('Spacing Scale', () => {
    it('should have --space-1 defined as 0.25rem', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--space-1');
      expect(value.trim()).toBe('0.25rem');
    });

    it('should have --space-4 defined as 1rem', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--space-4');
      expect(value.trim()).toBe('1rem');
    });

    it('should have --space-8 defined as 2rem', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--space-8');
      expect(value.trim()).toBe('2rem');
    });
  });

  describe('Font Sizes', () => {
    it('should have --text-base defined as 1rem', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--text-base');
      expect(value.trim()).toBe('1rem');
    });

    it('should have --text-2xl defined as 1.5rem', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--text-2xl');
      expect(value.trim()).toBe('1.5rem');
    });
  });

  describe('Border Radius', () => {
    it('should have --radius-sm defined', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--radius-sm');
      expect(value.trim()).toBe('0.25rem');
    });

    it('should have --radius-lg defined', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--radius-lg');
      expect(value.trim()).toBe('0.5rem');
    });

    it('should have --radius-full defined', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--radius-full');
      expect(value.trim()).toBe('9999px');
    });
  });

  describe('Transitions', () => {
    it('should have --transition-fast defined', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--transition-fast');
      expect(value.trim()).toBe('150ms ease');
    });

    it('should have --transition-base defined', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--transition-base');
      expect(value.trim()).toBe('200ms ease');
    });
  });

  describe('Z-Index Scale', () => {
    it('should have --z-base defined as 0', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--z-base');
      expect(value.trim()).toBe('0');
    });

    it('should have --z-modal defined as 500', () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--z-modal');
      expect(value.trim()).toBe('500');
    });
  });
});

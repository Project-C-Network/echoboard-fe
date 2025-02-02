import { renderHook, act } from '@testing-library/react';
import { useDarkMode } from '../useDarkMode';

describe('useDarkMode', () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.classList.remove('darkModeEnabled', 'lightModeEnabled');
  });

  it('should initialize with light mode by default', () => {
    const { result } = renderHook(() => useDarkMode());
    expect(result.current.isDarkMode).toBe(false);
    expect(document.body.classList.contains('lightModeEnabled')).toBe(true);
    expect(document.body.classList.contains('darkModeEnabled')).toBe(false);
  });

  it('should initialize with dark mode if localStorage has "dark"', () => {
    localStorage.setItem('darkMode', 'dark');
    const { result } = renderHook(() => useDarkMode());
    expect(result.current.isDarkMode).toBe(true);
    expect(document.body.classList.contains('darkModeEnabled')).toBe(true);
    expect(document.body.classList.contains('lightModeEnabled')).toBe(false);
  });

  it('should toggle dark mode on and off', () => {
    const { result } = renderHook(() => useDarkMode());
    expect(result.current.isDarkMode).toBe(false);
    expect(document.body.classList.contains('lightModeEnabled')).toBe(true);
    expect(document.body.classList.contains('darkModeEnabled')).toBe(false);
    act(() => {
      result.current.toggleDarkMode();
    });
    expect(result.current.isDarkMode).toBe(true);
    expect(document.body.classList.contains('lightModeEnabled')).toBe(false);
    expect(document.body.classList.contains('darkModeEnabled')).toBe(true);
    act(() => {
      result.current.toggleDarkMode();
    });
    expect(result.current.isDarkMode).toBe(false);
    expect(document.body.classList.contains('lightModeEnabled')).toBe(true);
    expect(document.body.classList.contains('darkModeEnabled')).toBe(false);
  });
});

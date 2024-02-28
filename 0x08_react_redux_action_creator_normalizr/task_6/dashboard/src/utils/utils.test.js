import { getFullYear } from './utils';
import { getFooterCopy } from './utils';
import { getLatestNotification } from './utils';

describe('getFullYear function', () => {
  it('returns the correct year', () => {
    const year = new Date().getFullYear();
    expect(getFullYear()).toBe(year);
  });
});

describe('getFooterCopy function', () => {
  it('returns the correct message when argument is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  it('returns the correct message when argument is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
});

describe('getLatestNotification function', () => {
  it('returns the correct string', () => {
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expectedString);
  });
});

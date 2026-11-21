function formatColorName(name) {
  if (!name || typeof name !== 'string') return '';
  return name.trim().replace(/\s+/g, ' ');
}

function isValidColorName(name) {
  const cleaned = formatColorName(name);
  return cleaned.length > 0 && cleaned.length <= 50;
}

describe('color helpers', () => {
  test('formats and validates a color name', () => {
    expect(formatColorName('  Sanford Teal  ')).toBe('Sanford Teal');
    expect(isValidColorName('Sanford Teal')).toBe(true);
  });

  test('rejects empty or too-long names', () => {
    expect(isValidColorName('   ')).toBe(false);
    expect(isValidColorName('')).toBe(false);
    expect(isValidColorName('a'.repeat(51))).toBe(false);
  });
});

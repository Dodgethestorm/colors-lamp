describe('API response shapes', () => {
  test('login success shape', () => {
    const response = {
      id: 1,
      firstName: 'Rick',
      lastName: 'Leinecker',
      error: ''
    };

    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('firstName');
    expect(response).toHaveProperty('lastName');
    expect(response).toHaveProperty('error');
    expect(typeof response.id).toBe('number');
    expect(response.error).toBe('');
  });

  test('search colors result shape', () => {
    const response = {
      results: ['SanfordTeal', 'Blue'],
      error: ''
    };

    expect(Array.isArray(response.results)).toBe(true);
    expect(response.results.length).toBeGreaterThan(0);
    expect(response).toHaveProperty('error');
  });

  test('error response shape', () => {
    const response = { error: 'User/Password combination incorrect' };
    expect(response).toHaveProperty('error');
    expect(typeof response.error).toBe('string');
    expect(response.error.length).toBeGreaterThan(0);
  });
});

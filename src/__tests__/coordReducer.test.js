import coordReducer from '../redux/actions';

describe('test coord reducer', () => {
  test('first test', () => {
    expect(coordReducer('test1', [])).toBe('test1');
  });
  test('second test', () => {
    expect(coordReducer('test2', [])).toBe('test2');
  });
  test('third test', () => {
    expect(coordReducer('test3', [])).toBe('test3');
  });
  test('fourth test', () => {
    expect(coordReducer('test4', [])).toBe('test4');
  });
});

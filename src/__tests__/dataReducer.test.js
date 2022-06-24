import dataReducer from '../redux/actions';

describe('test data reducer', () => {
  test('first test', () => {
    expect(dataReducer('test1', [])).toBe('test1');
  });
  test('second test', () => {
    expect(dataReducer('test2', [])).toBe('test2');
  });
  test('third test', () => {
    expect(dataReducer('test3', [])).toBe('test3');
  });
  test('fourth test', () => {
    expect(dataReducer('test4', [])).toBe('test4');
  });
});

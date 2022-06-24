import city from '../__mocks__/city'

describe('display missions component', () => {

  test('snapshot renders properly', () => {
    expect(city).toMatchSnapshot();
  });
});
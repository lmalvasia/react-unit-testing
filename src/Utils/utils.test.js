import { summ } from './utils';

describe('Sum function tests', () => {
  it('should return 5', () => {
    const result = summ(3, 2);
    expect(result).toBe(5);
  })
  it('should return an error if a param is not a numb', () => {
    expect(() => {
      summ('test', 5);
    }).toThrow();
  })
  it('should return an error if a param is not a numb', () => {
    expect(() => {
      summ();
    }).toThrow();
  })
});
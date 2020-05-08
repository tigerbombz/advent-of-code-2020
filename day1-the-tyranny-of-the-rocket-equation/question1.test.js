const calculateFuel = require("./question1");
const calculateExtraFuel = require("./question1");

describe('Part One Tests', () => {
  test('Fuel should be 2 when input is 12', () => {
    let input = [12];
    expect(calculateFuel(input)).toBe(2);
  });

  test('Fuel should be 2 when input is 14', () => {
    let input = [14];
    expect(calculateFuel(input)).toBe(2);
  });
})


describe('Part Two Tests', () => {
  test('Fuel should be 2 when input is 14', () => {
    let input = [14];
    expect(calculateExtraFuel(input)).toBe(2);
  });

  test('Fuel should be 966 when input is 1969', () => {
    let input = [1969];
    expect(calculateExtraFuel(input)).toBe(966);
  });

  test('Fuel should be 50346 when input is 100756', () => {
    let input = [100756];
    expect(calculateExtraFuel(input)).toBe(50346);
  });
});





const passwordOptions = require("./question4");
const strictPasswordOptions = require("./question4");

describe("Part One Tests", () => {

  test("input should be 1154", () => {
    let input = "240920-789857";
    expect(passwordOptions(input).total).toBe(1154);
  })

})


describe("Part Two Tests", () => {

  test("input should be 750", () => {
    let input = "240920-789857";
    expect(strictPasswordOptions(input)).toBe(750);
  })

})
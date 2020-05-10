const monitorStation = require("./question10");

describe("PART ONE TEST", () => {
  test("input should provide", () => {
    let input = `.#..#..###
                  ####.###.#
                  ....###.#.
                  ..###.##.#
                  ##.##.#.#.
                  ....###..#
                  ..#.#..#.#
                  #..#.#.###
                  .##...##.#
                  .....#.#..`

  })
  expects(monitorStation(input).toBe(46));
})
let asteroidsString = `..............#.#...............#....#....
#.##.......#....#.#..##........#...#......
..#.....#....#..#.#....#.....#.#.##..#..#.
...........##...#...##....#.#.#....#.##..#
....##....#...........#..#....#......#.###
.#...#......#.#.#.#...#....#.##.##......##
#.##....#.....#.....#...####........###...
.####....#.......#...##..#..#......#...#..
...............#...........#..#.#.#.......
........#.........##...#..........#..##...
...#..................#....#....##..#.....
.............#..#.#.........#........#.##.
...#.#....................##..##..........
.....#.#...##..............#...........#..
......#..###.#........#.....#.##.#......#.
#......#.#.....#...........##.#.....#..#.#
.#.............#..#.....##.....###..#..#..
.#...#.....#.....##.#......##....##....#..
.........#.#..##............#..#...#......
..#..##...#.#..#....#..#.#.......#.##.....
#.......#.#....#.#..##.#...#.......#..###.
.#..........#...##.#....#...#.#.........#.
..#.#.......##..#.##..#.......#.###.......
...#....###...#......#..#.....####........
.............#.#..........#....#......#...
#................#..................#.###.
..###.........##...##..##.................
.#.........#.#####..#...##....#...##......
........#.#...#......#.................##.
.##.....#..##.##.#....#....#......#.#....#
.....#...........#.............#.....#....
........#.##.#...#.###.###....#.#......#..
..#...#.......###..#...#.##.....###.....#.
....#.....#..#.....#...#......###...###...
#..##.###...##.....#.....#....#...###..#..
........######.#...............#...#.#...#
...#.....####.##.....##...##..............
###..#......#...............#......#...#..
#..#...#.#........#.#.#...#..#....#.#.####
#..#...#..........##.#.....##........#.#..
........#....#..###..##....#.#.......##..#
.................##............#.......#..`;


//PART 1
const monitorStation = (input) => {
  const asteroids = new Map();
  input.split('\n').forEach((row, y) => {
    row.split('').forEach((point, x) => {
      if (point === '#') {
        asteroids.set({ x, y }, 0);
      }
    });
  });

  let best = 0;

  const points = [...asteroids.keys()];

  points.forEach((a) => {
    const above = new Set();
    const below = new Set();
    points.forEach((b) => {
      if (a === b) {
        return;
      }
      const slope = (b.y - a.y) / (b.x - a.x);
      if (b.y < a.y || (b.y === a.y && b.x < a.x)) {
        if (above.has(slope)) {
          return;
        }
        above.add(slope);
      } else {
        if (below.has(slope)) {
          return;
        }
        below.add(slope);
      }
      asteroids.set(a, asteroids.get(a) + 1);
    });
  });

  let result =[...asteroids.values()].sort((a, b) => a - b).pop();

  return result;
}

// monitorStation(asteroidsString);
module.exports = monitorStation;


//PART 2

const points = [...asteroids.keys()];
const station = points.reduce((a, b) => asteroids.get(a) > asteroids.get(b) ? a : b);
const toVaporize = points.filter(p => p !== station);

const sortDist = (a, b) => {
  return (
    Math.abs(station.x - a.x) +
    Math.abs(station.y - a.y) -
    (Math.abs(station.x - b.x) + Math.abs(station.y - b.y))
  );
};

// for each asteroid to vaporize compute its angle relative to the station
const anglesToPoints = new Map();
toVaporize.forEach(point => {
  const angle = (180 / Math.PI) * Math.atan2(point.x - station.x, point.y - station.y);
  if (anglesToPoints.has(angle)) {
    anglesToPoints.set(
      angle,
      anglesToPoints
        .get(angle)
        .concat([point])
        .sort(sortDist)
    );
  } else {
    anglesToPoints.set(angle, [point]);
  }
});

const sortedAngles = [...anglesToPoints.keys()].sort((a, b) => a - b);
// NOTE this only works if there are asteroids already at an angle of 180
let i = sortedAngles.indexOf(180);
let destroyed = 0;

while (true) {
  const angleOfAttack = sortedAngles[i];
  const target = anglesToPoints.get(angleOfAttack).shift();
  if (target) {
    destroyed++;
  }
  if (destroyed === 200) {
    return target.x * 100 + target.y;
  }
  i--;
  if (i === -1) {
    i = sortedAngles.length - 1;
  }
}
//PART 1
// const arr = [12, 14, 1969, 100756];

const calculateFuel = (input) => {
  let fuel = input.reduce((acc, value) => {
    return Math.floor(value/3) + acc -2;
  }, 0);
  return fuel;
};

module.exports = calculateFuel;


//PART 2
const calculateExtraFuel = (input) => {
  let extraFuel = input.reduce((acc, value) => {
    let moduleFuel = Math.floor(value/3) - 2;
    let extraFuel = Math.floor(moduleFuel/3) - 2;

    while(extraFuel > 0) {
      moduleFuel+=extraFuel;
      extraFuel = Math.floor(extraFuel/3) - 2;
    }
    return acc + moduleFuel;
  }, 0);
  return extraFuel;
};
module.exports = calculateExtraFuel;
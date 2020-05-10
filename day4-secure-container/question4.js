let range = "240920-789857";

const passwordOptions = (input) => {
  let range = input.split('-').map(x => parseInt(x));
  let validOptions = {
    "total": 0,
    "validPasswords": []
  };
  
  // 168630 <= x <= 718098
  iterateThroughOptions: 
  for (let i = range[0]; i <= range[1]; i++) {
    let digits = i.toString().split("").map(x => parseInt(x));

    // --> never decrease
    for (let j = 0; j < digits.length - 1; j++) {
      if (digits[j] > digits[j + 1]) {
        continue iterateThroughOptions;
      }
    }

    //two adjacent digits are the same
    for (let k = 0; k < digits.length - 1; k++) {
    
      if (digits[k] === digits[k + 1]) {
        validOptions["total"] += 1;
        validOptions["validPasswords"].push(digits);
        continue iterateThroughOptions;
      }
    }
  }
  
  return validOptions;
}
module.exports = passwordOptions;
// passwordOptions(range);

const strictPasswordOptions = (input) => {
  const validPasswords = passwordOptions(input).validPasswords;

  let digitCounts = validPasswords
    .map(x => {
      let counts = {};

      for (let i = 0; i < x.length; i++) {
        const digit = x[i];
        counts[digit] = counts[digit] ? counts[digit] + 1 : 1;
      }
      return counts;
    })
    .reduce((sums, currentSum) => {
      let twinCount = Object.keys(currentSum)
        .filter(key => currentSum[key] === 2);

      if (twinCount.length >= 1) {``
        return sums + 1;
      }
      return sums;
    }, 0);

  return digitCounts;
}

module.exports = strictPasswordOptions;
// strictPasswordOptions(range);
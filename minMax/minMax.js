var app = {
  findMinMax: function(numbers) {
    maximum = numbers[0];
    minimum = numbers[0];
    for (i = 0; i <= numbers.length - 1; i++) {
      if (maximum < numbers[i]) {
        maximum = numbers[i];
      }

      // return large;
    }
    for (i = 0; i <= numbers.length - 1; i++) {
      if (minimum > numbers[i]) {
        minimum = numbers[i];
      }
      //  return smallest;

    }
    if (minimum == maximum) {
      return [minimum];
    }

    return [minimum, maximum];

  }
}
module.exports = app

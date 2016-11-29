var app = {
  wordCount: function(value) {
    var words = value.split(' ');

    var x = function(counts, word) {
      counts[word] = (counts[word] || 0) + 1;
      return counts;
    };

    return words.reduce(x, {});
  }
}
module.exports = app

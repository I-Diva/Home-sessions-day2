var app = {
  wordCount: function(value) {
    var words = value.replace(/[.]/g, '').split(/\s+/);

    var x = function(counts, word) {
      counts[word] = (counts[word] || 0) + 1;
      return counts;
    };

    return words.reduce(x, {});
  }
}
module.exports = app

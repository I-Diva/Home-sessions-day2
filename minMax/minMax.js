function wordCount(value) {
  var words = value.split(" ");

  var x = function(counts, word) {
    counts[word] = (counts[word] || 0) + 1;
    return counts;
  };

  return words.reduce(x, {});
}
wordCount("olly olly in come free");

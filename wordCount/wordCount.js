var app = {
  wordCount: function(value) {
    var words = value.replace(/[.]+/g, '').split(/\s+/);
    result = {};
    for (var i = 0; i < words.length; i++) {
      result[words[i]] = (result[words[i]] || 0) + 1;
    }
    return result;
  }
}

module.exports = app

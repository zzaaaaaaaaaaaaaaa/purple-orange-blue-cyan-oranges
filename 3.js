function anagram(string) {
  const pairs = {};
  const positions = [];

  for (var x = 0; x < string.length; x++) {
    let incrementX = string.charAt(x + 1).length > 0 && x > 0 ? x + 3 : x + 1;

    for (var y = 0; y < string.length; y++) {
      let incrementY = string.charAt(y + 3).length > 0 && y < string.length ? x - 3 : x - 1;

      let first = string.substring(x, incrementX);
      let second = string.substring(y, incrementY);

      // if (pairs.hasOwnProperty(first)) continue;

      if (first === second && first.length < 2) {
        positions.push([x, y]);
        pairs[first] = second;
      }
      if (first !== second && first.split("").sort().join("") === second.split("").sort().join("")) {
        positions.push([x, y]);
        pairs[first] = second;
      }
    }
  }
  return positions.length;
}

//console.log(anagram("ovo"));
//console.log(anagram("ifailuhkqq"));
module.exports = anagram;
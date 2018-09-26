module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if (!array.length) {
    return 0;
  }
  var awork = new Set(), max = 1, left, right, count;
  for (var i = 0; i < array.length; i++)
    awork.add(array[i]);
  for (var i = 0; i < array.length; i++) {
    left = array[i] - 1;
    right = array[i] + 1;
    count = 1;
    while (awork.has(left)) {
      count++;
      awork.delete(left);
      left--;
    }
    while (awork.has(right)) {
      count++;
      awork.delete(right);
      right++;
    }
    if (count > max)
      max = count;
  }
  return max;
}
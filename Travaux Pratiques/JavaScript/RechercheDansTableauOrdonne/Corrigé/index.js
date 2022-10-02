class FindItemResult {
  constructor(isFound, position) {
    this.isFound = isFound;
    this.position = position;
  }
}

function findItem(sortedArray, itemToFind) {
  var isFound = false;
  var position = -1;

  if (null == sortedArray || sortedArray.length == 0)
    return new FindItemResult(isFound, position);

  return findItemInRange(0, sortedArray.length - 1);

  function findItemInRange(minIndex, maxIndex)
  {
    switch(maxIndex - minIndex)
    {
      case 0:
        if (itemToFind === sortedArray[minIndex])
          return new FindItemResult(true, minIndex);
        return new FindItemResult(false, -1);
      case 1:
        if (itemToFind  === sortedArray[minIndex])
          return new FindItemResult(true, minIndex);
        if (itemToFind.Equals(sortedArray[maxIndex]))
          return new FindItemResult(true, maxIndex);
        return new FindItemResult(false, -1);
      default:
        var newIndex = (minIndex + maxIndex) / 2;
        if (itemToFind  === sortedArray[newIndex])
          return new FindItemResult(true, newIndex);
        if (itemToFind < sortedArray[newIndex])
          return findItemInRange(minIndex, newIndex - 1);

        return findItemInRange(newIndex + 1, maxIndex);
    }
  }
}


module.exports = { FindItemResult, findItem };
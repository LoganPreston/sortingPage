function quickSortRun(delay, callback) {
  var blocks = document.querySelectorAll(".block");
  quickSort(blocks, delay);
}

async function quickSort(array, delay) {
  if (array.length <= 1) {
    return array;
  } else {
    var leftArr = [];
    var rightArr = [];
    var newArr = [];
    //pivot on last element in list and split list by that value
    var pivot = array.pop();
    let pivotVal = Number(pivot.childNodes[0].innerHTML);
    var length = array.length;
    for (var i = 0; i < length; i++) {
      arrayVal = Number(array[i].childNodes[0].innerHTML);

      //LTE pivot :left, GT pivot : right
      if (arrayVal <= pivotVal) {
        leftArr.push(array[i]);
      } else {
        rightArr.push(array[i]);
      }
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
    }
    return newArr.concat(
      quickSort(leftArr, delay),
      pivot,
      quickSort(rightArr, delay)
    );
  }
}

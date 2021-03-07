async function quickSortRun(heightAdjust, delay, callback) {
  var blocks = document.querySelectorAll(".block");
  var block_label = document.getElementsByClassName("block_id");
  //put into array and recursively quicksort. Track steps in steps array
  var valAry = [];
  var steps = [];
  for (let i = 0; i < blocks.length; i++) {
    valAry.push(Number(blocks[i].childNodes[0].innerHTML));
  }
  valAry = await quickSort(valAry, steps);
  //animate steps
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.height = `${valAry[i] * heightAdjust}px`;
    block_label[i].innerText = valAry[i];
  }
  callback();
}

function quickSort(array, steps) {
  if (array.length <= 1) {
    return array;
  } else {
    var leftArr = [];
    var rightArr = [];
    var newArr = [];
    //pivot on last element in list and split list by that value
    var pivot = array.pop();
    var length = array.length;
    for (let i = 0; i < length; i++) {
      //LTE pivot :left, GT pivot : right
      if (array[i] <= pivot) {
        leftArr.push(array[i]);
      } else {
        rightArr.push(array[i]);
      }
    }
    return newArr.concat(
      quickSort(leftArr, steps),
      pivot,
      quickSort(rightArr, steps)
    );
  }
}

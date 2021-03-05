async function mergeSortRun(delay, callback) {
  var blocks = document.querySelectorAll(".block");
  var block_label = document.getElementsByClassName("block_id");
  var valAry = [];
  var steps = [];
  for (let i = 0; i < blocks.length; i++) {
    valAry.push(Number(blocks[i].childNodes[0].innerHTML));
  }
  valAry = await mergeSort(valAry, steps);
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.height = `${valAry[i] * 5}px`;
    block_label[i].innerText = valAry[i];
  }
  callback();
}

function mergeSort(array, steps) {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  var left = []; //array.splice(0, half);
  var right = [];
  for (let i = 0; i < array.length; i++) {
    if (i < half) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length > 0 && right.length > 0) {
    arr.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return arr.concat(left.length ? left : right);
}

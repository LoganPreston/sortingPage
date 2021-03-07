async function mergeSortRun(heightAdjust, delay, callback) {
  var blocks = document.querySelectorAll(".block");
  var block_label = document.getElementsByClassName("block_id");
  var valAry = [];
  var steps = [];
  for (let i = 0; i < blocks.length; i++) {
    valAry.push(Number(blocks[i].childNodes[0].innerHTML));
  }
  valAry = await mergeSort(valAry, steps);
  console.log(steps);
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.height = `${valAry[i] * heightAdjust}px`;
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

      steps.push({
        type: "split",
        value: left[left.length - 1],
        side: "left",
      });
    } else {
      right.push(array[i]);

      steps.push({
        type: "split",
        value: right[right.length - 1],
        side: "right",
      });
    }
  }
  return merge(mergeSort(left, steps), mergeSort(right, steps), steps);
}

function merge(left, right, steps) {
  var arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
      steps.push({ type: "merge", value: arr[arr.length - 1], side: "left" });
    } else {
      arr.push(right.shift());
      steps.push({ type: "merge", value: arr[arr.length - 1], side: "right" });
    }
  }
  //get last value then pass back
  return arr.concat(left.length ? left : right);
}

function mergeSortRun(delay, callback) {
  var blocks = document.querySelectorAll(".block");
  mergeSort(blocks, delay);
}

async function mergeSort(array, delay) {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  var left = []; //array.splice(0, half);
  var right = [];
  for (let i = 0; i < array.length; i++) {
    array[i].style.backgroundColor = "#8ac4d0";
    if (i < half) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
    // To wait for .1 sec

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    array[i].style.backgroundColor = "#28527a";
  }
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var arr = [];
  // Break out of loop if any one of the array gets empty
  var leftVal, rightVal;
  while (left.length > 0 && right.length > 0) {
    leftVal = Number(left[0].childNodes[0].innerHTML);
    rightVal = Number(right[0].childNodes[0].innerHTML);
    arr.push(leftVal < rightVal ? left.shift() : right.shift());
  }
  return arr.concat(left.length ? left : right);
}

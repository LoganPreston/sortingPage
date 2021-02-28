// Asynchronous CountingSort function
async function countingSort(delay, callback) {
  var blocks = document.querySelectorAll(".block");

  // To store frequency of every block
  for (var i = 0; i < blocks.length; i += 1) {
    //To highlight the current traversed block
    blocks[i].style.backgroundColor = "#8ac4d0";

    //Extracting the value of current block
    var value = Number(blocks[i].childNodes[0].innerHTML);

    var freq_array = document.getElementsByClassName("block_id3");

    freq_array[value - 1].innerText++;

    // To wait for .1 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );

    //Changing to previous color
    blocks[i].style.backgroundColor = "#28527a";
  }

  //Sorting by using frequency array
  var idx = 0;
  for (var i = 0; i < blocks.length; i += 1) {
    var freq = document.getElementsByClassName("block_id3");

    var temp = Number(freq[i].innerText);

    var freq_block = document.getElementsByClassName("block2");

    //changing color of freq block
    freq_block[i].style.backgroundColor = "#f4d160";

    // To wait for .1 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 2 * delay)
    );

    if (temp == 0) {
      //changing color of freq block to previous one
      freq_block[i].style.backgroundColor = "darkgray";
      continue;
    }

    var block_label = document.getElementsByClassName("block_id");

    //sorting the block array
    for (var j = 0; j < temp; j++) {
      blocks[idx].style.height = `${(i + 1) * 13}px`;
      block_label[idx].innerText = i + 1;
      idx++;
    }

    //changing color of freq block to previous one
    freq_block[i].style.backgroundColor = "darkgray";

    // To wait for .1 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 2 * delay)
    );
  }
  callback();
}

// Asynchronous CountingSort function
async function bubbleSort(delay, callback) {
  var blocks = document.querySelectorAll(".block");

  // To store frequency of every block
  let stillSorting = true;
  let blocksEnd = blocks.length;
  while (stillSorting) {
    stillSorting = false;
    for (var i = 0; i < blocksEnd - 1; i++) {
      //To highlight the current traversed block
      blocks[i].style.backgroundColor = "#8ac4d0";
      blocks[i + 1].style.backgroundColor = "#8ac4d0";

      //extract vals
      var leftVal = Number(blocks[i].childNodes[0].innerHTML);
      var rightVal = Number(blocks[i + 1].childNodes[0].innerHTML);

      var block_label = document.getElementsByClassName("block_id");

      if (leftVal > rightVal) {
        stillSorting = true;
        tmp = rightVal;
        blocks[i + 1].style.height = `${leftVal * 5}px`;
        block_label[i + 1].innerText = leftVal;
        blocks[i].style.height = `${tmp * 5}px`;
        block_label[i].innerText = tmp;
      }

      // To wait for .1 sec
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      //Changing to previous color
      blocks[i].style.backgroundColor = "#28527a";
    }
    blocks[blocksEnd - 1].style.backgroundColor = "#28527a";
    blocksEnd--;
  }
  callback();
}

//shaker/cocktail sort, bubble sort that goes up and down
async function shakerSort(delay, callback) {
  var blocks = document.querySelectorAll(".block");

  // To store frequency of every block
  let blocksStart = 0;
  let blocksEnd = blocks.length - 1;
  var block_label = document.getElementsByClassName("block_id");
  while (blocksStart < blocksEnd) {
    var i;
    //bring the highest value up to the top of the list
    for (i = blocksStart; i < blocksEnd; i++) {
      blocks[i].style.backgroundColor = "#8ac4d0";
      blocks[i + 1].style.backgroundColor = "#8ac4d0";

      //extract vals, compare and swap if needed
      let leftVal = Number(blocks[i].childNodes[0].innerHTML);
      let rightVal = Number(blocks[i + 1].childNodes[0].innerHTML);
      if (leftVal > rightVal) {
        tmp = rightVal;
        blocks[i + 1].style.height = `${leftVal * 5}px`;
        block_label[i + 1].innerText = leftVal;
        blocks[i].style.height = `${tmp * 5}px`;
        block_label[i].innerText = tmp;
      }

      // To wait for .1 sec
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      //recolor
      blocks[i].style.backgroundColor = "#28527a";
      blocks[i + 1].style.backgroundColor = "#28527a";
    }
    blocksEnd--;

    //bring the lowest value down to the bottom of the list
    for (i = blocksEnd; i > blocksStart; i--) {
      blocks[i].style.backgroundColor = "#8ac4d0";
      blocks[i - 1].style.backgroundColor = "#8ac4d0";

      //extract vals, compare and swap if needed
      var leftVal = Number(blocks[i].childNodes[0].innerHTML);
      var rightVal = Number(blocks[i - 1].childNodes[0].innerHTML);
      if (leftVal < rightVal) {
        tmp = rightVal;
        blocks[i - 1].style.height = `${leftVal * 5}px`;
        block_label[i - 1].innerText = leftVal;
        blocks[i].style.height = `${tmp * 5}px`;
        block_label[i].innerText = tmp;
      }

      // To wait for .1 sec
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      //recolor
      blocks[i].style.backgroundColor = "#28527a";
      blocks[i - 1].style.backgroundColor = "#28527a";
    }
    blocksStart++;
  }
  callback();
}

async function heapSort(delay, callback) {
  var blocks = document.querySelectorAll(".block");
  var block_label = document.getElementsByClassName("block_id");
  var heap = [];
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.backgroundColor = "#8ac4d0";
    let value = Number(blocks[i].childNodes[0].innerHTML);
    insertToHeap(heap, value);
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    blocks[i].style.backgroundColor = "#28527a";
  }

  for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.backgroundColor = "#8ac4d0";
    let topOfHeap = removeFromHeap(heap);

    blocks[i].style.height = `${topOfHeap * 5}px`;
    block_label[i].innerText = topOfHeap;
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    blocks[i].style.backgroundColor = "#28527a";
  }
  callback();
}

function insertToHeap(ary, value) {
  let i = ary.length;
  ary.push(value);
  let parentIdx = Math.floor((i + 1) / 2 - 1);
  if (parentIdx < 0) parentIdx = 0;
  let parentVal = ary[parentIdx];
  while (i > 0 && parentVal > value) {
    parentIdx = Math.floor((i + 1) / 2 - 1);
    let tmp = ary[parentIdx];
    ary[parentIdx] = ary[i];
    ary[i] = tmp;
    i = parentIdx;
    parentVal = ary[Math.floor((i + 1) / 2 - 1)];
  }
}

function removeFromHeap(ary) {
  if (ary.length <= 1) return ary.pop();
  const retVal = ary[0];

  ary[0] = ary.pop();
  let i = 0;
  while (true) {
    let rightChildIdx = (i + 1) * 2;
    let leftChildIdx = (i + 1) * 2 - 1;
    let lowestChildIdx = rightChildIdx;
    //no children
    if (leftChildIdx >= ary.length && rightChildIdx >= ary.length) {
      break;
    }
    //right child only
    if (leftChildIdx >= ary.length) lowestChildIdx = rightChildIdx;
    //left child only
    if (rightChildIdx >= ary.length) lowestChildIdx = leftChildIdx;
    //both children
    else {
      lowestChildIdx =
        ary[leftChildIdx] > ary[rightChildIdx] ? rightChildIdx : leftChildIdx;
    }
    //trickle down
    if (ary[i] > ary[lowestChildIdx]) {
      let tmp = ary[lowestChildIdx];
      ary[lowestChildIdx] = ary[i];
      ary[i] = tmp;
      i = lowestChildIdx;
    } else {
      break;
    }
  }
  return retVal;
}

async function insertionSort(delay, callback) {
  var blocks = document.querySelectorAll(".block");
  var block_label = document.getElementsByClassName("block_id");

  //iterate through numAry (value of each block, orig order)
  for (let i = 1; i < blocks.length; i++) {
    let curVal = Number(blocks[i].childNodes[0].innerHTML);
    let j = i - 1;
    let compareVal = Number(blocks[j].childNodes[0].innerHTML);

    blocks[i].style.backgroundColor = "#8ac4d0";
    while (j > -1 && curVal < compareVal) {
      blocks[j].style.backgroundColor = "#8ac4d0";

      blocks[j + 1].style.height = `${compareVal * 5}px`;
      block_label[j + 1].innerText = compareVal;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      blocks[j].style.backgroundColor = "#28527a";
      j--;
      if (j > -1) {
        compareVal = Number(blocks[j].childNodes[0].innerHTML);
      }
    }
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    blocks[j + 1].style.height = `${curVal * 5}px`;
    block_label[j + 1].innerText = curVal;
  }
  blocks[blocks.length - 1].style.backgroundColor = "#28527a";

  /* alternative inner for loop.
    //evaluate every entry already in list to see if newly inserted value should preceed it
    for (let j = i; j > 0; j--) {
      let leftVal = Number(blocks[j - 1].childNodes[0].innerHTML);
      let rightVal = Number(blocks[j].childNodes[0].innerHTML);

      blocks[j - 1].style.backgroundColor = "#8ac4d0";
      blocks[j].style.backgroundColor = "#8ac4d0";

      if (leftVal > rightVal) {
        let tmp = leftVal;
        leftVal = rightVal;
        rightVal = tmp;

        blocks[j].style.height = `${rightVal * 5}px`;
        block_label[j].innerText = rightVal;

        blocks[j - 1].style.height = `${leftVal * 5}px`;
        block_label[j - 1].innerText = leftVal;
      }
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      blocks[j - 1].style.backgroundColor = "#28527a";
      blocks[j].style.backgroundColor = "#28527a";
    }
  }*/
  callback();
}

async function selectionSort(delay, callback) {
  var blocks = document.querySelectorAll(".block");
  var block_label = document.getElementsByClassName("block_id");

  let compareVal, min, minVal;
  for (let i = 0; i < blocks.length; i++) {
    //always color the min
    min = i;
    minVal = Number(blocks[i].childNodes[0].innerHTML);
    blocks[min].style.backgroundColor = "#8ac4d0";

    // Finding the smallest number in the subarray
    for (let j = i + 1; j < blocks.length; j++) {
      compareVal = Number(blocks[j].childNodes[0].innerHTML);
      blocks[j].style.backgroundColor = "#8ac4d0";
      if (compareVal < minVal) {
        //uncolor old min, then recolor new min. make sure i is colored for swap
        blocks[min].style.backgroundColor = "#28527a";
        min = j;
        minVal = Number(blocks[min].childNodes[0].innerHTML);
        blocks[min].style.backgroundColor = "#8ac4d0";
        blocks[i].style.backgroundColor = "#8ac4d0";
      }
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      //uncolor j, but keep the min colored for swap
      blocks[j].style.backgroundColor = "#28527a";
      blocks[min].style.backgroundColor = "#8ac4d0";
    }
    //swap if needed
    if (min != i) {
      let tmp = Number(blocks[i].childNodes[0].innerHTML);

      blocks[i].style.height = `${minVal * 5}px`;
      block_label[i].innerText = minVal;

      blocks[min].style.height = `${tmp * 5}px`;
      block_label[min].innerText = tmp;
    }
    //uncolor for next comparison
    blocks[i].style.backgroundColor = "#28527a";
    blocks[min].style.backgroundColor = "#28527a";
  }
  callback();
}

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

async function shellSort(delay, callback) {
  var blocks = document.querySelectorAll(".block");
  var block_label = document.getElementsByClassName("block_id");

  //Reduce the interval in each cycle
  let increment = Math.floor(blocks.length / 2);
  while (increment > 0) {
    //Sort the element using insertion sort in each cycle.
    for (let i = increment; i < blocks.length; i++) {
      blocks[i].style.backgroundColor = "#8ac4d0";

      let j = i;
      let tmpVal = Number(blocks[i].childNodes[0].innerHTML);
      let compareVal = Number(blocks[j - increment].childNodes[0].innerHTML);
      blocks[j - increment].style.backgroundColor = "#8ac4d0";

      while (j >= increment && compareVal > tmpVal) {
        //swap down
        blocks[j].style.backgroundColor = "#8ac4d0";
        blocks[j].style.height = `${compareVal * 5}px`;
        block_label[j].innerText = compareVal;

        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
        //revert coloring and retain i being highlighted
        blocks[j].style.backgroundColor = "#28527a";
        blocks[i].style.backgroundColor = "#8ac4d0";
        blocks[j - increment].style.backgroundColor = "#28527a";

        //prepare for next iteration and color accordingly
        j -= increment;
        if (j >= increment) {
          compareVal = Number(blocks[j - increment].childNodes[0].innerHTML);
          blocks[j - increment].style.backgroundColor = "#8ac4d0";
        }
      }
      //recolor if needed
      if (j >= increment) {
        blocks[j - increment].style.backgroundColor = "#28527a";
      }

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      //update
      blocks[j].style.backgroundColor = "#8ac4d0";
      blocks[j].style.height = `${tmpVal * 5}px`;
      block_label[j].innerText = tmpVal;
      //reset colors
      blocks[i].style.backgroundColor = "#28527a";
      blocks[j].style.backgroundColor = "#28527a";
    }
    //next shell increment
    increment = Math.floor(increment / 2);
  }
  callback();
}

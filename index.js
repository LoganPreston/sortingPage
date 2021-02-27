var container = document.getElementById("array");
let numRange = 25;
// Function to generate the array of blocks
function generatearray() {
  for (var i = 0; i < numRange; i++) {
    // Return a value from 1 to 100 (both inclusive)

    var value = Math.ceil(Math.random() * numRange);

    // Creating element div
    var array_ele = document.createElement("div");

    // Adding class 'block' to div
    array_ele.classList.add("block");

    // Adding style to div
    let heightAdjust = 5;
    let transformAdjust = 30;
    array_ele.style.height = `${value * heightAdjust}px`;
    array_ele.style.transform = `translate(${i * transformAdjust}px)`;

    // Creating label element for displaying
    // size of particular block
    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;

    // Appending created elements to index.html
    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
  }
}

// Function to generate the frequency array
var count_container = document.getElementById("count");
function generate_freq() {
  let transformAdjust = 30;
  for (let i = 0; i < numRange; i++) {
    // Creating element div
    let array_ele2 = document.createElement("div");

    // Adding class 'block2' to div
    array_ele2.classList.add("block2");

    // Adding style to div
    array_ele2.style.height = `${numRange}px`;
    array_ele2.style.transform = `translate(${i * transformAdjust}px)`;

    // index of freq array
    var array_ele_idx = document.createElement("label");
    array_ele_idx.classList.add("block_id2");
    array_ele_idx.innerText = i + 1;

    //giving initial freq to all blocks as 0
    var array_ele_label2 = document.createElement("label");
    array_ele_label2.classList.add("block_id3");
    array_ele_label2.innerText = 0;

    // Appending created elements to index.html
    array_ele2.appendChild(array_ele_label2);
    array_ele2.appendChild(array_ele_idx);
    count_container.appendChild(array_ele2);
  }
}

// Asynchronous CountingSort function
async function CountingSort(delay = 100) {
  let header = document.querySelector(".header");
  header.innerText = "Counting Sort";
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
}

// Asynchronous CountingSort function
async function bubbleSort(delay = 100) {
  let header = document.querySelector(".header");
  header.innerText = "Bubble Sort";

  let status = document.querySelector(".sortStatus");
  status.innerText = "Sort In Progress";

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

  status.innerText = "Sort Complete!";
}

async function shakerSort(delay = 100) {
  let header = document.querySelector(".header");
  header.innerText = "Shaker Sort";

  let status = document.querySelector(".sortStatus");
  status.innerText = "Sort In Progress";

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
  status.innerText = "Sort Complete!";
}

async function heapSort(delay = 100) {
  let header = document.querySelector(".header");
  header.innerText = "Heap Sort";

  let status = document.querySelector(".sortStatus");
  status.innerText = "Sort In Progress";

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

function mergeSortSetup() {
  let header = document.querySelector(".header");
  header.innerText = "Merge Sort";
  var blocks = document.querySelectorAll(".block");
  mergeSort(blocks);
}

async function mergeSort(array, delay = 150) {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  let left = []; //array.splice(0, half);
  let right = [];
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
  let arr = [];
  // Break out of loop if any one of the array gets empty
  let leftVal, rightVal;
  while (left.length > 0 && right.length > 0) {
    leftVal = Number(left[0].childNodes[0].innerHTML);
    rightVal = Number(right[0].childNodes[0].innerHTML);
    arr.push(leftVal < rightVal ? left.shift() : right.shift());
  }
  return arr.concat(left.length ? left : right);
}

//async function runSort(functionCall) {
// Calling generatearray function
generatearray();

// Calling generate_freq function
//generate_freq();

// Calling CountingSort function
heapSort();

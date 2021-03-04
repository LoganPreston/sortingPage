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

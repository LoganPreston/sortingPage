async function bubbleSort(heightAdjust, delay, callback) {
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
        blocks[i + 1].style.height = `${leftVal * heightAdjust}px`;
        block_label[i + 1].innerText = leftVal;
        blocks[i].style.height = `${tmp * heightAdjust}px`;
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

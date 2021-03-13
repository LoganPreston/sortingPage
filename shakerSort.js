//shaker/cocktail sort, bubble sort that goes up and down
async function shakerSort(heightAdjust, delay, callback) {
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
        blocks[i - 1].style.height = `${leftVal * heightAdjust}px`;
        block_label[i - 1].innerText = leftVal;
        blocks[i].style.height = `${tmp * heightAdjust}px`;
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

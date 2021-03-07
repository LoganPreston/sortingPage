async function selectionSort(heightAdjust, delay, callback) {
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

      blocks[i].style.height = `${minVal * heightAdjust}px`;
      block_label[i].innerText = minVal;

      blocks[min].style.height = `${tmp * heightAdjust}px`;
      block_label[min].innerText = tmp;
    }
    //uncolor for next comparison
    blocks[i].style.backgroundColor = "#28527a";
    blocks[min].style.backgroundColor = "#28527a";
  }
  callback();
}

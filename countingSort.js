// Asynchronous CountingSort function
async function countingSort(heightAdjust, delay, callback) {
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
      blocks[idx].style.height = `${(i + 1) * heightAdjust}px`;
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

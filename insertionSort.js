async function insertionSort(heightAdjust, delay, callback) {
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

      blocks[j + 1].style.height = `${compareVal * heightAdjust}px`;
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

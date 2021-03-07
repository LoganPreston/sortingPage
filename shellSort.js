async function shellSort(heightAdjust, delay, callback) {
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
        blocks[j].style.height = `${compareVal * heightAdjust}px`;
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
      blocks[j].style.height = `${tmpVal * heightAdjust}px`;
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

async function bogoSort(delay, callback) {
  var blocks = document.querySelectorAll(".block");
  var block_label = document.getElementsByClassName("block_id");
  let ary = new Array(blocks.length);
  for (let i = 0; i < blocks.length; i++) {
    ary[i] = Number(blocks[i].childNodes[0].innerHTML);
  }
  while (true) {
    shuffle(ary);
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].style.height = `${ary[i] * 5}px`;
      block_label[i].innerText = ary[i];
    }
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay * 2)
    );
    if (isOrdered(blocks)) break;
  }
  callback();
}

//Fisher-Yates random. Not truly Random
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function isOrdered(blocks) {
  for (let i = 1; i < blocks.length; i++) {
    let leftVal = Number(blocks[i - 1].childNodes[0].innerHTML);
    let rightVal = Number(blocks[i].childNodes[0].innerHTML);
    blocks[i - 1].style.backgroundColor = "#8ac4d0";
    blocks[i].style.backgroundColor = "#8ac4d0";
    if (leftVal > rightVal) {
      blocks[i - 1].style.backgroundColor = "#28527a";
      blocks[i].style.backgroundColor = "#28527a";
      return false;
    }

    blocks[i - 1].style.backgroundColor = "#28527a";
    blocks[i].style.backgroundColor = "#28527a";
  }
  return true;
}

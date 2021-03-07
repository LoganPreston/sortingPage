// Function to generate the array of blocks
function generatearray() {
  var container = document.getElementById("array");

  const slider = document.getElementById("blockCount");
  const numRange = parseInt(slider.value);
  let nums = Array.from(new Array(numRange), (x, i) => i + 1);
  shuffle(nums);

  //div size constants
  const heightAdjust = numRange < 50 ? 5 : 2.5;
  const widthAdjust = 750 / numRange - 2; //(-14 / 25) * numRange + 42; //25 col looks good with 28 width
  const transformAdjust = 750 / numRange; //(-15 / 25) * numRange + 45; //25 col looks good with transform 30

  for (var i = 0; i < numRange; i++) {
    // Return a value from 1 to 100 (both inclusive)

    var value = nums[i]; //Math.ceil(Math.random() * numRange);

    // Creating element div
    var array_ele = document.createElement("div");

    // Adding class 'block' to div
    array_ele.classList.add("block");

    // Adding style to div

    array_ele.style.width = `${widthAdjust}px`;
    array_ele.style.height = `${value * heightAdjust}px`;
    array_ele.style.transform = `translate(${i * transformAdjust}px)`;

    // Creating label element for displaying
    // size of particular block

    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;
    if (numRange > 30) {
      array_ele_label.style.opacity = 0;
    }

    // Appending created elements to index.html
    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
  }
}

//Fisher-Yates random. Not truly Random
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
    //[array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to generate the frequency array

function generate_freq() {
  var count_container = document.getElementById("count");
  let slider = document.getElementById("blockCount");
  let numRange = slider.value; //25;
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

//wipe out children of a particular document element
function cleanUpArray(name, callback) {
  var container = document.getElementById(name);

  while (container.lastChild) {
    container.removeChild(container.lastChild);
  }
  callback();
}

//Generates the array for input and enables buttons
function runGenerateArray() {
  //cleanup array first then generate. prevents multiple sets from being made
  cleanUpArray("array", () => {
    generatearray();
  });

  //update top header to give next instruction to user
  let header = document.querySelector(".header");
  header.innerText = "Choose a sort!";

  //enable the buttons so they can actually select a sort
  const buttons = document.getElementsByClassName("sort");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }

  //display sort status
  let status = document.querySelector(".sortStatus");
  status.innerText = "Ready to Sort!";
}

//when user clicks any sort button, fall into here. Disables/Enables buttons, runs sort.
function runSort(sort, name) {
  //display name of sort and show in prog flag
  let header = document.querySelector(".header");
  header.innerText = name;

  let status = document.querySelector(".sortStatus");
  status.innerText = "Sort In Progress";

  //disable input buttons to prevent user from messing around
  const buttons = document.getElementsByClassName("sort");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
  const genButton = document.getElementById("generate");
  genButton.disabled = true;

  const sliders = document.getElementsByClassName("slider");
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].disabled = true;
  }

  //start timer - get millisec since unix epoch
  let startTime = new Date().getTime();

  //get height adjustment FROM GEN ARRAY NOT WHERE SLIDER IS
  const blocks = document.querySelectorAll(".block");
  let heightAdjust = blocks.length < 50 ? 5 : 2.5;

  // Calling sort function, reactivate generate button when done
  const delaySlider = document.getElementById("delayTime");
  let delay = parseInt(delaySlider.value);
  sort(heightAdjust, delay, () => {
    let status = document.querySelector(".sortStatus");
    let endTime = new Date().getTime();
    status.innerText =
      "Sort Completed after " +
      Math.round((endTime - startTime) / 1000) +
      " seconds!";
    document.getElementById("generate").disabled = false;
    const sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
      sliders[i].disabled = false;
    }
  });
}

function updateSliderVal(sliderId, labelId) {
  let slider = document.getElementById(sliderId);
  let label = document.getElementById(labelId);
  label.innerHTML = slider.value;
}

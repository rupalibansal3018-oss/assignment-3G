const outputSection = document.getElementById("output");
const fruitInput = document.getElementById("fruitInput");
const pushBtn = document.getElementById("pushBtn");
const popBtn = document.getElementById("popBtn");
const resetBtn = document.getElementById("resetBtn");

// 1. Create an array of 5 fruits
const initialFruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
let fruits = [...initialFruits];
let lastActionMessage = "Initialized array with 5 fruits.";

function displayFruits(actionText) {
  if (actionText) {
    lastActionMessage = actionText;
  }

  // Display final array in Console
  console.log("--- Fruits Array Status ---");
  console.log("Latest Action:", lastActionMessage);
  console.log("Final Fruits Array:", fruits);
  console.log("Total Fruits:", fruits.length);

  // Build HTML list items for clean display on webpage
  const listItems = fruits
    .map((fruit, index) => `<li><strong>#${index + 1}:</strong> ${fruit}</li>`)
    .join("");

  // Display final array on Webpage using only HTML + JS
  outputSection.innerHTML = `
    <h2>Final Fruits List</h2>
    <p><strong>Latest Action:</strong> ${lastActionMessage}</p>
    <p><strong>Total Fruits in Array:</strong> ${fruits.length}</p>
    <ul>
      ${listItems || "<li><em>No fruits in the array.</em></li>"}
    </ul>
    <p><strong>Array Format:</strong> <code>[${fruits.map((f) => `"${f}"`).join(", ")}]</code></p>
  `;
}

// 2. Add one fruit using push()
function addFruitWithPush() {
  const newFruit = fruitInput.value.trim();

  if (newFruit === "") {
    alert("Please enter a fruit name before clicking Add Fruit (push)!");
    console.log("push() skipped: empty input.");
    return;
  }

  fruits.push(newFruit); // Adds newFruit to the end of the array
  fruitInput.value = "";
  fruitInput.focus();

  displayFruits(`Added "${newFruit}" to the end using push().`);
}

// 3. Remove one fruit using pop()
function removeFruitWithPop() {
  if (fruits.length === 0) {
    alert("Array is already empty! Nothing to remove with pop().");
    console.log("pop() skipped: array is empty.");
    return;
  }

  const removedFruit = fruits.pop(); // Removes and returns the last element
  displayFruits(`Removed "${removedFruit}" from the end using pop().`);
}

// Reset back to the original 5 fruits
function resetFruits() {
  fruits = [...initialFruits];
  fruitInput.value = "";
  displayFruits("Reset array back to the initial 5 fruits.");
}

// Event listeners for buttons
pushBtn.addEventListener("click", addFruitWithPush);
popBtn.addEventListener("click", removeFruitWithPop);
resetBtn.addEventListener("click", resetFruits);

// Run initial display on page load
displayFruits("Initial array of 5 fruits created.");
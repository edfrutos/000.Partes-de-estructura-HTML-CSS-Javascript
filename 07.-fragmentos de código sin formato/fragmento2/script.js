const copyBtn = document.getElementById("copy-btn");
const codeInput = document.getElementById("code-input");

copyBtn.addEventListener("click", () => {
  const codeInputValue = codeInput.innerText;
  navigator.clipboard.writeText(codeInputValue);
});
const codeWindow = document.getElementById("code-window");

// Function to adjust the height of code-window to the height of code-input
function adjustCodeWindowHeight() {
  codeWindow.style.height = `${codeInput.offsetHeight + 50}px`;
}

// Call the function on load and on any changes to the code-input
window.addEventListener("load", adjustCodeWindowHeight);
codeInput.addEventListener("input", adjustCodeWindowHeight);


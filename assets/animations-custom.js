// Function to rotate text headings
function rotateTextHeadings() {
  const headings = ["Unleash nature's secret for a radiant smile!<br> Dive into hemp & Dead Sea minerals", "Experience oral care reimagined <br>Where hemp meets Dead Sea magic", "Elevate every smile with the power of<br> hemp & Dead Sea's healing touch", "Nature's ultimate duo for pristine oral health awaits. <br>  Dive into the hemp & Dead Sea revolution!", "Embrace the extraordinary<br> blend of hemp & Dead Sea minerals"];  // Add your headings here
  let index = 0;
  
  // Locate the placeholder div
  const placeholder = document.getElementById("rotating-text-placeholder");
  
  // Initial display
  placeholder.innerText = headings[0];

  // Rotate text every 3 seconds
  setInterval(() => {
    index = (index + 1) % headings.length;
    placeholder.innerText = headings[index];
  }, 3000);
}

// Initialize the function when the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  rotateTextHeadings();
});

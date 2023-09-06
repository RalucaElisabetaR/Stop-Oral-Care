



// Function to rotate text headings with fade-in and fade-out effect
function rotateTextHeadings() {
  const headings = ["Unleash nature's secret for a radiant smile!<br> Dive into hemp & Dead Sea minerals", "Experience oral care reimagined <br> Where hemp meets Dead Sea magic", "Elevate every smile with the power of <br> hemp & Dead Sea's healing touch", "Nature's ultimate duo for pristine oral health awaits. <br>  Dive into the hemp & Dead Sea revolution!", "Embrace the extraordinary<br> blend of hemp & Dead Sea minerals"];
  let index = 0;

  // Locate the placeholder div
  const placeholder = document.getElementById("rotating-text-placeholder");

  // Function to perform the rotation
  function performRotation() {
    index = (index + 1) % headings.length;
    placeholder.innerHTML = headings[index];
    placeholder.style.opacity = "1";
  }

  // Initial display
  placeholder.innerHTML = headings[0];
  placeholder.style.opacity = "1";

  // Rotate text every 5 seconds (to account for fading time)
  setInterval(() => {
    placeholder.style.opacity = "0";
    setTimeout(performRotation, 1000); // Wait 1 second (1000 milliseconds) for the fade-out to complete
  }, 5000);
}

// Initialize the function when the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  rotateTextHeadings();
});
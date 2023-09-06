// Function to rotate text headings
function rotateTextHeadings() {
  const headings = ["Heading 1", "Heading 2", "Heading 3", "Heading 4"];  // Add your headings here
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

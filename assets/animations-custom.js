



// Function to rotate text headings with fade-in and fade-out effect
function rotateTextHeadings() {
  const headings = ["STOP Searching, Start Smiling !", "Experience Oral Care Reimagined"
                   ];
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
  }, 2000);
}

// Initialize the function when the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  rotateTextHeadings();
});


document.addEventListener("DOMContentLoaded", function() {
  const section = document.getElementById('shopify-section-template--20797124903185__8d9855b4-8ddd-4bf0-b7ed-d4df004a1f43');
  if (section) {
    section.classList.add('custom-section');
  }
});

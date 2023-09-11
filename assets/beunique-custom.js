// CUSTOM ICON WITH TEXT



  function updateLayout() {
    const ulElement = document.getElementById('custom-icon-list');
    if (ulElement.offsetWidth <= 700) {
      ulElement.classList.add('column-layout');
    } else {
      ulElement.classList.remove('column-layout');
    }
  }
  
  updateLayout();
  
  window.addEventListener('resize', function() {
    updateLayout();
  });

// CUSTOM ICON WITH TEXT END

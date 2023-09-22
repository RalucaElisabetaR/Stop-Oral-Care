const SCROLL_ANIMATION_TRIGGER_CLASSNAME = 'scroll-trigger';
const SCROLL_ANIMATION_OFFSCREEN_CLASSNAME = 'scroll-trigger--offscreen';
const SCROLL_ZOOM_IN_TRIGGER_CLASSNAME = 'animate--zoom-in';
const SCROLL_ANIMATION_CANCEL_CLASSNAME = 'scroll-trigger--cancel';

// Scroll in animation logic
function onIntersection(elements, observer) {
  elements.forEach((element, index) => {
    if (element.isIntersecting) {
      const elementTarget = element.target;
      if (elementTarget.classList.contains(SCROLL_ANIMATION_OFFSCREEN_CLASSNAME)) {
        elementTarget.classList.remove(SCROLL_ANIMATION_OFFSCREEN_CLASSNAME);
        if (elementTarget.hasAttribute('data-cascade'))
          elementTarget.setAttribute('style', `--animation-order: ${index};`);
      }
      observer.unobserve(elementTarget);
    } else {
      element.target.classList.add(SCROLL_ANIMATION_OFFSCREEN_CLASSNAME);
      element.target.classList.remove(SCROLL_ANIMATION_CANCEL_CLASSNAME);
    }
  });
}

function initializeScrollAnimationTrigger(rootEl = document, isDesignModeEvent = false) {
  const animationTriggerElements = Array.from(rootEl.getElementsByClassName(SCROLL_ANIMATION_TRIGGER_CLASSNAME));
  if (animationTriggerElements.length === 0) return;

  if (isDesignModeEvent) {
    animationTriggerElements.forEach((element) => {
      element.classList.add('scroll-trigger--design-mode');
    });
    return;
  }

  const observer = new IntersectionObserver(onIntersection, {
    rootMargin: '0px 0px -50px 0px',
  });
  animationTriggerElements.forEach((element) => observer.observe(element));
}

// Zoom in animation logic
function initializeScrollZoomAnimationTrigger() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const animationTriggerElements = Array.from(document.getElementsByClassName(SCROLL_ZOOM_IN_TRIGGER_CLASSNAME));

  if (animationTriggerElements.length === 0) return;

  const scaleAmount = 0.2 / 100;

  animationTriggerElements.forEach((element) => {
    let elementIsVisible = false;
    const observer = new IntersectionObserver((elements) => {
      elements.forEach((entry) => {
        elementIsVisible = entry.isIntersecting;
      });
    });
    observer.observe(element);

    element.style.setProperty('--zoom-in-ratio', 1 + scaleAmount * percentageSeen(element));

    window.addEventListener(
      'scroll',
      throttle(() => {
        if (!elementIsVisible) return;

        element.style.setProperty('--zoom-in-ratio', 1 + scaleAmount * percentageSeen(element));
      }),
      { passive: true }
    );
  });
}

function percentageSeen(element) {
  const viewportHeight = window.innerHeight;
  const scrollY = window.scrollY;
  const elementPositionY = element.getBoundingClientRect().top + scrollY;
  const elementHeight = element.offsetHeight;

  if (elementPositionY > scrollY + viewportHeight) {
    // If we haven't reached the image yet
    return 0;
  } else if (elementPositionY + elementHeight < scrollY) {
    // If we've completely scrolled past the image
    return 100;
  }

  // When the image is in the viewport
  const distance = scrollY + viewportHeight - elementPositionY;
  let percentage = distance / ((viewportHeight + elementHeight) / 100);
  return Math.round(percentage);
}

window.addEventListener('DOMContentLoaded', () => {
  initializeScrollAnimationTrigger();
  initializeScrollZoomAnimationTrigger();
});

if (Shopify.designMode) {
  document.addEventListener('shopify:section:load', (event) => initializeScrollAnimationTrigger(event.target, true));
  document.addEventListener('shopify:section:reorder', () => initializeScrollAnimationTrigger(document, true));
}

// CUSTOM SLIDES


  
  
  // ... (Your existing JavaScript code)

  // Query your slideshow component by the class 'custom-slideshow'
  const slideshowComponent = document.querySelector('.custom-slideshow');
  // Query each slide by the class 'custom-slide'
  const customSlides = document.querySelectorAll('.custom-slide');

  // Auto-rotate attribute from your Liquid file
  const autoRotate = slideshowComponent.getAttribute('data-autoplay') === 'true';

  // Integrate new script for auto-rotate
  if (autoRotate) {
    let index = 0;

    const nextSlide = () => {
      customSlides[index].classList.remove('active');
      index = (index + 1) % customSlides.length;
      customSlides[index].classList.add('active');
    };

    customSlides.forEach((slide) => {
      slide.style.transition = 'all 1s linear';
    });

    const rotateInterval = setInterval(nextSlide, 3000); // 5000ms = 5s

    slideshowComponent.addEventListener('transitionend', () => {
      if (customSlides[index].classList.contains('last-slide')) {
        customSlides.forEach((slide) => {
          slide.style.transition = 'none';
        });
        index = 0;
        customSlides[index].classList.add('active');
        customSlides.forEach((slide) => {
          slide.style.transition = 'all 5s linear';
        });
      }
    });
  }
   const scaleStyles = () => {
    const slides = document.querySelectorAll('.custom-banner-content');
    
    slides.forEach((slide) => {
      const contentContainers = slide.querySelectorAll('.custom-banner-box');
      contentContainers.forEach((container) => {
        const originalPadding = window.getComputedStyle(container).padding;
        const originalMargin = window.getComputedStyle(container).margin;

        // Convert the original px values to vw (viewport width) for responsiveness
        const paddingInVw = parseFloat(originalPadding) / window.innerWidth * 100;
        const marginInVw = parseFloat(originalMargin) / window.innerWidth * 100;

        // Apply the new responsive styles to the container
        container.style.padding = `${paddingInVw}vw`;
        container.style.margin = `${marginInVw}vw`;
      });
    });
  };

  // Run the function initially
  scaleStyles();

  // Run the function whenever the window is resized
  window.addEventListener('resize', scaleStyles);



// DRAGGING FUNCTION FOR SLIDESHOW


document.addEventListener("DOMContentLoaded", function() {
  const slideshowComponents = document.querySelectorAll('.custom-slideshow');

  slideshowComponents.forEach(slideshowComponent => {
    let isDragging = false;
    let startPos = 0;
    let currentScrollLeft;

    slideshowComponent.addEventListener('mousedown', (e) => {
      isDragging = true;
      slideshowComponent.style.cursor = 'grabbing';  // Change cursor to hand when dragging
      startPos = e.pageX - slideshowComponent.getBoundingClientRect().left;
      currentScrollLeft = slideshowComponent.scrollLeft;
    });

    slideshowComponent.addEventListener('mouseleave', () => {
      isDragging = false;
      slideshowComponent.style.cursor = 'auto';  // Revert cursor back to auto when not dragging
    });

    slideshowComponent.addEventListener('mouseup', () => {
      isDragging = false;
      slideshowComponent.style.cursor = 'auto';  // Revert cursor back to auto when not dragging
    });

    slideshowComponent.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - slideshowComponent.getBoundingClientRect().left;
      const walk = x - startPos;
      slideshowComponent.scrollLeft = currentScrollLeft - walk;
    });
  });
});



// CONTINUOUS SCROLL FEATURE




// Custom Slideshow JavaScript

// Existing functionalities
    this.sliderControlWrapper = this.querySelector('.slider-buttons');
    this.enableSliderLooping = true;

    if (!this.sliderControlWrapper) return;

    this.sliderFirstItemNode = this.slider.querySelector('.slideshow__slide');
    if (this.sliderItemsToShow.length > 0) this.currentPage = 1;

    this.announcementBarSlider = this.querySelector('.announcement-bar-slider');
    // Value below should match --duration-announcement-bar CSS value
    this.announcerBarAnimationDelay = this.announcementBarSlider ? 250 : 0;

// Custom functionalities for new slideshow
document.addEventListener('DOMContentLoaded', function() {
  const customSlideshow = document.querySelector('.custom-slideshow.banner');
  if (!customSlideshow) return;

  // Your existing slideshow logic adapted for the custom slideshow can be placed here
  // ...
});

document.getElementById('slider-range').addEventListener('input', function(e) {
  const sliderValue = e.target.value;
  const overlayWidth = 100 - sliderValue;
  const overlay = document.querySelector('.media-slider__left');
  overlay.style.width = `${overlayWidth}%`;
});



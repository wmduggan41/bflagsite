document.getElementById('slider-range').addEventListener('input', function(e) {
  const sliderValue = e.target.value;
  const overlay = document.querySelector('.img-overlay');
  overlay.style.width = `${sliderValue}%`;
});

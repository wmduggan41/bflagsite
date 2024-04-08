document.getElementById('slider-range').addEventListener('input', function(e) {
    const sliderValue = e.target.value;
    const overlay = document.querySelector('.media-slider__left');
    overlay.style.width = `${sliderValue}%`;
    const splitter = document.querySelector('.media-slider__splitter');
    splitter.style.left = `${sliderValue}%`;
});





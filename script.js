// Get elements
const playButton = document.getElementById('playButton');
const audio = document.getElementById('audio');
const speedSlider = document.getElementById('speedSlider');
const speedValue = document.getElementById('speedValue');
const mouth = document.getElementById('mouth');

// Play button click event
playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.textContent = 'Pause';
  } else {
    audio.pause();
    playButton.textContent = 'Play';
  }
});

// Speed slider event
speedSlider.addEventListener('input', () => {
  const speed = parseFloat(speedSlider.value);
  audio.playbackRate = speed;  // Change playback speed
  speedValue.textContent = speed.toFixed(2); // Update the speed value display
  
  // Animate the mouth based on speed value
  const mouthSize = 50 + Math.abs(speed) * 50;  // Mouth grows/shrinks based on speed
  mouth.style.height = `${mouthSize}px`;
});

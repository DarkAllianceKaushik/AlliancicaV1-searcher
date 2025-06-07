// Adds a "pulse" effect on page load
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.05)';
  });
  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });
});

// Optional: Add a particle effect background (uncomment if wanted)
// document.body.innerHTML += '<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>';
// particlesJS.load('particles-js', 'particles.json', function() {});
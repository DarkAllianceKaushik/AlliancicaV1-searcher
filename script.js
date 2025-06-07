// Superpower Effects on Click
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create a "superpower" effect
    const effect = document.createElement('div');
    effect.className = 'superpower-effect';
    document.body.appendChild(effect);
    
    // Position effect at button
    const rect = btn.getBoundingClientRect();
    effect.style.left = `${rect.left + rect.width/2}px`;
    effect.style.top = `${rect.top + rect.height/2}px`;
    
    // Redirect after animation
    setTimeout(() => {
      window.location.href = btn.href;
    }, 500);
  });
});

// Bubble Background Animation
const bubbles = document.querySelector('.bubbles');
for (let i = 0; i < 50; i++) {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.style.left = `${Math.random() * 100}vw`;
  bubble.style.top = `${Math.random() * 100}vh`;
  bubble.style.width = `${Math.random() * 20 + 5}px`;
  bubble.style.height = bubble.style.width;
  bubble.style.animationDelay = `${Math.random() * 5}s`;
  bubbles.appendChild(bubble);
}
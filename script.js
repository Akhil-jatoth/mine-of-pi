document.getElementById('blastButton').addEventListener('click', () => {
  const container = document.getElementById('coin-container');

  for (let i = 0; i < 50; i++) { // More coins
    const coin = document.createElement('div');
    coin.classList.add('coin');

    // Bitcoin image (change URL for other coins)
    coin.style.backgroundImage = 'url("pi coin.png")';

    // Random angle & distance for wider spread
    const angle = Math.random() * Math.PI * 2;
    const distance = 200 + Math.random() * 200; // Larger spread
    const x = Math.cos(angle) * distance + 'px';
    const y = Math.sin(angle) * distance + 'px';

    coin.style.setProperty('--x', x);
    coin.style.setProperty('--y', y);

    // Position at button center
    const btnRect = blastButton.getBoundingClientRect();
    coin.style.left = btnRect.left + btnRect.width / 2 + 'px';
    coin.style.top = btnRect.top + btnRect.height / 2 + 'px';

    container.appendChild(coin);

    // Remove after animation
    setTimeout(() => {
      coin.remove();
    }, 1300);
  }
});

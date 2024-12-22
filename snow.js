// JavaScript to create random falling snowflakes
const snowContainer = document.querySelector('.snow-container');

// Function to create snowflakes
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  
  // Randomize snowflake position
  const startPositionX = Math.random() * window.innerWidth;
  snowflake.style.left = `${startPositionX}px`;
  
  // Randomize speed and animation duration
  const speed = Math.random() * 3 + 2; // Speed between 2s and 5s
  snowflake.style.animationDuration = `${speed}s`;
  
  // Randomize snowflake size
  const size = Math.random() * 5 + 5; // Size between 5px and 10px
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;
  
  // Append snowflake to the container
  snowContainer.appendChild(snowflake);
  
  // Remove snowflake after it falls off the screen
  setTimeout(() => {
    snowflake.remove();
  }, speed * 1000);
}

// Create a snowflake every 100 milliseconds
setInterval(createSnowflake, 100);

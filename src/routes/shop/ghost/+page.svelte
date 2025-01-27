<script>
  let currentIndex = 0;
  let isDragging = false;
  let startX = 0;

  export let images = []; // Array of image URLs

  // Function to show the current image
  function showImage(index) {
    currentIndex = (index + images.length) % images.length;
  }

  // Event handlers for dragging/swiping
  function handleMouseDown(event) {
    isDragging = true;
    startX = event.clientX;
  }

  function handleMouseMove(event) {
    if (!isDragging) return;

    const dx = event.clientX - startX;
    if (Math.abs(dx) > 30) {
      startX = event.clientX;
      showImage(currentIndex + (dx > 0 ? 1 : -1));
    }
  }

  function handleMouseUp() {
    isDragging = false;
  }

  function handleTouchStart(event) {
    isDragging = true;
    startX = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    if (!isDragging) return;

    const dx = event.touches[0].clientX - startX;
    if (Math.abs(dx) > 30) {
      startX = event.touches[0].clientX;
      showImage(currentIndex + (dx > 0 ? 1 : -1));
    }
  }

  function handleTouchEnd() {
    isDragging = false;
  }
</script>

<style>
  .rotator {
    position: relative;
    width: 300px; /* Adjust as needed */
    height: 400px; /* Adjust as needed */
    overflow: hidden;
  }

  .rotator img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .rotator img.active {
    opacity: 1;
  }
</style>

<div
  class="rotator"
  on:mousedown={handleMouseDown}
  on:mousemove={handleMouseMove}
  on:mouseup={handleMouseUp}
  on:mouseleave={handleMouseUp}
  on:touchstart={handleTouchStart}
  on:touchmove={handleTouchMove}
  on:touchend={handleTouchEnd}
>
  {#each images as image, index}
    <img
      src={image}
      alt={`Image ${index}`}
      class:active={index === currentIndex}
    />
  {/each}
</div>

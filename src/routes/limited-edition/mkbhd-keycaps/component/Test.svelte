



<div
  class="relative w-full h-[500px] overflow-hidden bg-black"
  bind:this={videoRef}
>
  {#each data as video, index}
    <div
      class="absolute inset-0 w-full h-full transition-transform"
      style="transform: translateX({index === currentIndex ? 0 : 100}%);"
    >
      <video
        src={video.video}
        muted
        autoplay
        loop
        playsinline
        class="w-full h-full object-cover"
      ></video>
    </div>
  {/each}
</div>

<div class="absolute bottom-4 left-0 right-0 flex justify-between px-6">
  <button
    on:click={slidePrev}
    class="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-200"
  >
    ❮
  </button>
  <button
    on:click={slideNext}
    class="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-200"
  >
    ❯
  </button>
</div>

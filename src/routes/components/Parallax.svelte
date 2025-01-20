<script>
  import { onMount } from 'svelte';
  let scrollY = 0;

  const handleScroll = () => {
    scrollY = window.scrollY;
  };

  onMount(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // Array for section data
  const sections = [
    { name: 'Africa', color: '#FF5733' },
    { name: 'Antarctica', color: '#33C4FF' },
    { name: 'Asia', color: '#33FF57' },
    { name: 'Australia', color: '#FFC433' },
    { name: 'Europe', color: '#C433FF' },
    { name: 'North America', color: '#FF33A8' },
    { name: 'South America', color: '#33FF94' },
    { name: 'Atlantis', color: '#5C33FF' },
    { name: 'Pacific', color: '#33FFF5' },
    { name: 'Amazon', color: '#FF8C33' },
    { name: 'Arctic', color: '#338FFF' },
    { name: 'Sahara', color: '#FFC133' },
  ];
</script>

<style>


  .parallax-container {
    height: 100vh;
    overflow: h idden;
    position: relative;
  }

  .section {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    z-index: 1;
  }

  .section-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    will-change: transform; /* Optimizes scrolling performance */
  }
</style>

<div class="parallax-container">
  {#each sections as { name, color }, index}
    <div class="section">
      <div
        class="section-bg"
        style="background-color: {color}; transform: translateY({scrollY * (0.1 + index * 0.05)}px);"
      ></div>
      {name}
    </div>
  {/each}
</div>

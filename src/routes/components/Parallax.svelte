<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    // Apply parallax effect to sections with the class "parallax"
    gsap.utils.toArray(".parallax").forEach((section, i) => {
      section.bg = section.querySelector(".bg");

      // Assign random images for backgrounds
      section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;

      // Apply parallax effect
      if (i) {
        section.bg.style.backgroundPosition = `50% ${innerHeight / 2}px`;

        gsap.to(section.bg, {
          backgroundPosition: `50% ${-innerHeight / 2}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            scrub: true,
          },
        });
      }
    });
  });
</script>

<header>
 
</header>

<section>
  <div class="bg"></div>
  <h1>Regular section</h1>
</section>
<section class="parallax">
  <div class="bg"></div>
  <h1>Hey look, a title</h1>
</section>
<section class="parallax">
  <div class="bg"></div>
  <h1>They just keep coming</h1>
</section>
<section class="parallax">
  <div class="bg"></div>
  <h1>So smooth though</h1>
</section>
<section class="parallax">
  <div class="bg"></div>
  <h1>Nice, right?</h1>
</section>


<style>
  section {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

  h1 {
    color: white;
    text-shadow: 1px 1px 3px black;
    z-index: 1;
    font-size: 3em;
    font-weight: 400;
  }
</style>

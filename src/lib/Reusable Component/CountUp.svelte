<script>
  import { onMount } from "svelte";

  export let value = 0;
  export let duration = 2000; 

  let displayValue = 0;
  let observer;
  let element;

  const startCountUp = () => {
    let startTime;
    displayValue = 0;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      displayValue = Math.floor(progress * value);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        displayValue = value;
      }
    };
    requestAnimationFrame(step);
  };

  onMount(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCountUp(); 
          }
        });
      },
      { threshold: 0.6 } 
    );
    observer.observe(element);
  });
</script>

<span bind:this={element}>{displayValue}</span>

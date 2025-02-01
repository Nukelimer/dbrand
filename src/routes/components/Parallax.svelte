 <script>
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	gsap.registerPlugin(ScrollTrigger);

	export let sections = [];

	onMount(() => {
		gsap.utils.toArray('.parallax').forEach((section, i) => {
			section.bg = section.querySelector('.bg');

			// Set background image
			const bgImage = sections[i]?.image || '';
			section.bg.style.backgroundImage = `url(${bgImage})`;

			// Parallax effect
			section.bg.style.backgroundPosition = `50% ${innerHeight / 2}px`;
			gsap.to(section.bg, {
				backgroundPosition: `50% ${-innerHeight / 2}px`,
				ease: 'none',
				scrollTrigger: {
					trigger: section,
					scrub: true
				}
			});

			// Fade out when 50% off screen
			gsap.to(section, {
				opacity: 0,
				ease: 'none',
				scrollTrigger: {
					trigger: section,
					start: 'top+=100 top',
					end: 'bottom top-=600',
					scrub: true
				}
			});

			
		});
	});
</script>

{#each sections as { text, image }, i}
	<section class="parallax font-helvetica">
		<div class="bg !w-full !object-scale-down"></div>
		<div class="content absolute bottom-0 flex w-full flex-col items-center justify-between bg-white px-12 !text-left sm:flex-row">
			<div class="">
				<h1 class="text-center font-helvetica text-4xl !font-bold uppercase !text-black sm:text-start sm:text-6xl">{text[0]}</h1>
				<h3 class="pb-10 text-center text-xl sm:text-start sm:text-3xl">{text[1]}</h3>
			</div>
			<button class="mb-8 rounded bg-black px-8 py-6 text-2xl uppercase text-white sm:mb-0">{text[2]}</button>
		</div>
	</section>
{/each}

<style>
	section {
		position: relative;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	.bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background-size: 200vh;
		background-position: center;
		background-attachment: fixed;
		background-repeat: no-repeat;
		
	}

	.content {
		text-align: center;
		z-index: 1;
	}

	h1 {
		font-weight: 400;
		margin: 0.5em 0;
	}
</style> 


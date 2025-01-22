<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
	<section class="parallax">
		<div class="bg"></div>
		<div class="content">
			{#each text as line}
				<h1>{line}</h1>
			{/each}
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
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		background-repeat: no-repeat;
	}

	.content {
		text-align: center;
		z-index: 1;
	}

	h1 {
		color: white;
		text-shadow: 1px 1px 3px black;
		font-size: 2.5em;
		font-weight: 400;
		margin: 0.5em 0;
	}
</style>

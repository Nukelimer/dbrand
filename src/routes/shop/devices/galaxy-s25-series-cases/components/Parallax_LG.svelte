<script>
	import { onMount } from 'svelte';

	export let sections = [];

	let windowHeight;
	let headerOffset = 0;

	onMount(() => {
		windowHeight = window.innerHeight;

		function updateOffset() {
			const header = document.querySelector('.header'); // Adjust class to match your header element
			headerOffset = header ? header.offsetHeight : 0; // Get the height of the top element
			document.documentElement.style.setProperty('--offset-top', `${headerOffset}px`); // Set CSS variable
		}

		function updateTransforms() {
			const scrollTop = window.scrollY;

			document.querySelectorAll('.section').forEach((section, i) => {
				const wrap = section.querySelector('.section__wrap');
				const content = section.querySelector('.section__content');

				const wrapTransform = `translate3d(0px, ${windowHeight * i - scrollTop + headerOffset}px, 0px)`;
				const contentTransform = `translate3d(0px, ${scrollTop - windowHeight * i - headerOffset}px, 0px)`;

				wrap.style.transform = wrapTransform;
				content.style.transform = contentTransform;
			});
		}

		updateOffset();
		updateTransforms();

		window.addEventListener('scroll', updateTransforms);
		window.addEventListener('resize', () => {
			windowHeight = window.innerHeight;
			updateOffset();
			updateTransforms();
		});

		return () => {
			window.removeEventListener('scroll', updateTransforms);
			window.removeEventListener('resize', updateTransforms);
		};
	});
</script>

{#each sections as section, index}
	<section class="section -z-50 !flex " data-section={index}>
		<div class="my-auto flex h-screen w-1/2 max-w-[50%] flex-col items-center justify-center bg-black text-white">
			{#if section.url}
				<div class="w-[80%] section__content">
					<h1 class="text-start font-helvetica text-7xl font-bold uppercase">{section.text[0]}</h1>
					<p class="my-6 mr-auto text-start font-helvetica text-2xl">{section.text[1]}</p>
					<a href={section.text[3]}>
						<button class="rounded bg-black px-8 py-6 font-helvetica text-2xl font-semibold uppercase text-white">{section.text[2]}</button>
					</a>
				</div>
			{:else}
				<div class="full w-[100%]">
					<p class="text-start font-helvetica  font-bold uppercase">{@html section.text[0]}</p>
				</div>
			{/if}
		</div>

		<div class="section__wrap bottom-0 max-h-[100vh] first:!top-[130px] !h-screen max-w-[50%]">
			<img src={section.image} class="h-screen section__content m-0 group-first-of-type:opacity-0  !w-full !bg-cover !bottom-0 !bg-center p-0 " alt="dbrand product" />
		</div>
	</section>
{/each}

<style>
	:root {
		--offset-top: 0px; /* Default to 0 */
	}

	section {
		position: relative;
		width: 100%;
		height: 100vh;
		display: flex;
	}

	.section {
		width: 100%;
		height: 100vh;
		overflow: hidden;
	}

	.section__wrap {
		position: fixed;
		top: var(--offset-top, 0);
		right: 0;
		bottom: 0;
		height: calc(100vh - var(--offset-top, 0));
		width: 100%;
		clip: rect(auto, auto, auto, auto);
	}

	img {
		object-fit: cover;
		display: block;
		vertical-align: middle;
		max-width: 100%;
		min-height: 100vh;

	}
</style>

<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	export let data = [];

	let selectedVideo = data[0];
	let videoContainer;

	function prevVideo() {
		const currentIndex = data.findIndex((item) => item.name === selectedVideo.name);
		const nextIndex = (currentIndex - 1 + data.length) % data.length;
		selectedVideo = data[nextIndex];

		gsap.to(videoContainer, {
			x: '100%',
			opacity: 0,
			duration: 0.5,
			ease: 'power2.out',
			onComplete: () => {
				selectedVideo = data[nextIndex];

				gsap.fromTo(videoContainer, { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 0.5, ease: 'power2.out' });
			}
		});

		console.log(';;;;;;');
	}

	function nextVideo() {
		const currentIndex = data.findIndex((item) => item.name === selectedVideo.name);
		const nextIndex = (currentIndex + 1) % data.length;
		selectedVideo = data[nextIndex];

		gsap.to(videoContainer, {
			x: '-100%',
			opacity: 0,
			duration: 0.5,
			ease: 'power2.out',
			onComplete: () => {
				selectedVideo = data[nextIndex];

				gsap.fromTo(videoContainer, { x: '100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 0.5, ease: 'power2.out' });
			}
		});
	}

	function controlShownVideo(video) {
		gsap.to(videoContainer, {
			x: '-100%',
			opacity: 0,
			duration: 0.5,
			ease: 'power2.out',
			onComplete: () => {
				selectedVideo = { ...video };
				gsap.fromTo(videoContainer, { x: '100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 0.5, ease: 'power2.out' });
			}
		});
	}
</script>

<div class="item -center justify -center absolute bottom-0 top-16 flex h-[calc(100vh-72px)] max-h-screen w-full flex-col overflow-hidden bg-black">
	<img src="/images/limited-edition/mkbhd-keycaps/grid.png" alt="..." class="absolute bottom-0 scale-[9] overflow-hidden object-cover backdrop-brightness-150 md:h-1/6 md:scale-[4]" />
	<h3 class="z-10 mb-5 mt-6 text-center uppercase text-white md:hidden">MKBHD KEYCAPS</h3>

	<h1 class="z-10 text-center font-helvetica text-5xl font-semibold uppercase text-white md:mt-14 md:text-7xl">
		{selectedVideo.name}
	</h1>
	<div class="w-full justify-evenly md:flex">
		<button on:click={prevVideo} class="hidden cursor-pointer text-green-400 md:block"><img src="/images/limited-edition/mkbhd-keycaps/button.webp" alt="" class="rounded border-[2px] border-zinc-900/95" /></button>
		<div bind:this={videoContainer} class="video-container z-10">
			{#key selectedVideo.video}
				<video autoplay muted loop playsinline webkit-playsinline disableremoteplayback class="z-10 mx-auto h-[400px] w-[400px] object-cover md:h-[550px] md:w-[550px]">
					<source src={selectedVideo.video} type="video/webm" />
				</video>
			{/key}
		</div>

		<button on:click={nextVideo} class="hidden cursor-pointer text-green-400 md:block"><img src="/images/limited-edition/mkbhd-keycaps/button.webp" alt="" class="rotate-180 rounded border-[2px] border-zinc-900/95" /></button>
	</div>

	<p class="z-10 px-4 text-white md:hidden">Select Color:</p>
	<div class="mt-4 flex w-full justify-between px-4 md:hidden">
		{#each data as item}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<img src={item.img} alt={item.name} class="z-10 h-16 w-16 cursor-pointer rounded-full border-2 border-transparent object-cover transition-transform hover:scale-105" on:click={() => controlShownVideo(item)} />
		{/each}
	</div>

	<div class=" z-10">
		<div class="hidden justify-between items-center px-4 pb-6 text-white md:flex">
			<div>
				<p class="text-sm font-semibold mt-2 uppercase font-helvetica ">Profile: Cherry</p>

				<p class="text-sm font-semibold mt-2 uppercase font-helvetica ">Shape: CYL</p>

				<p class="text-sm font-semibold mt-2 uppercase font-helvetica ">Size: 1u</p>
			</div>
			<button class="w- full bg-[#E5202B] py-4 px-12 font-semibold text-lg uppercase text-white ">Buy Now - ${data[3].price}</button>

                        <div class="font-helvetica">
				{#each Object.entries(data[3].mdData) as [key, value]}
					<p class="mt-2 text-sm">
						<span class="font-semibold uppercase">{key}:</span> <span class="font-semibold uppercase">{value}</span>
					</p>
				{/each}
			</div>
		</div>

		<div class="mt-6 flex flex-row-reverse justify-between px-4 pb-6 text-white md:hidden">
			<p class="mt-2 place-self-end font-helvetica text-base font-semibold">Price: ${data[3].price}</p>

			<div class="font-helvetica">
				{#each Object.entries(data[3].moreInfo) as [key, value]}
					<p class="mt-2 text-sm">
						<span class="font-semibold uppercase">{key}:</span> <span class="font-semibold uppercase">{value}</span>
					</p>
				{/each}
			</div>
		</div>
		<div class=" px-4">
			<button class="w-full bg-[#E5202B] py-3 text-lg uppercase text-white md:hidden">Buy Now</button>
		</div>
	</div>
</div>

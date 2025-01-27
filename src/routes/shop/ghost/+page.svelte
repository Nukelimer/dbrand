<script>
	const images = [
		'/images/ghost/S25_Ultra/1.webp',
		'/images/ghost/S25_Ultra/2.webp',
		'/images/ghost/S25_Ultra/3.webp',
		'/images/ghost/S25_Ultra/4.webp',
		'/images/ghost/S25_Ultra/5.webp',
		'/images/ghost/S25_Ultra/6.webp',
		'/images/ghost/S25_Ultra/7.webp',
		'/images/ghost/S25_Ultra/8.webp',
		'/images/ghost/S25_Ultra/9.webp',
		'/images/ghost/S25_Ultra/10.webp',
		'/images/ghost/S25_Ultra/11.webp',
		'/images/ghost/S25_Ultra/12.webp',
		'/images/ghost/S25_Ultra/13.webp',
		'/images/ghost/S25_Ultra/14.webp',
		'/images/ghost/S25_Ultra/15.webp',
		'/images/ghost/S25_Ultra/16.webp',
		'/images/ghost/S25_Ultra/17.webp',
		'/images/ghost/S25_Ultra/18.webp',
		'/images/ghost/S25_Ultra/19.webp',
		'/images/ghost/S25_Ultra/20.webp',
		'/images/ghost/S25_Ultra/21.webp',
		'/images/ghost/S25_Ultra/22.webp',
		'/images/ghost/S25_Ultra/23.webp',
		'/images/ghost/S25_Ultra/24.webp',
		'/images/ghost/S25_Ultra/25.webp',
		'/images/ghost/S25_Ultra/26.webp',
		'/images/ghost/S25_Ultra/27.webp',
		'/images/ghost/S25_Ultra/28.webp',
		'/images/ghost/S25_Ultra/29.webp',
		'/images/ghost/S25_Ultra/30.webp',
		'/images/ghost/S25_Ultra/31.webp',
		'/images/ghost/S25_Ultra/32.webp',
		'/images/ghost/S25_Ultra/33.webp',
		'/images/ghost/S25_Ultra/34.webp',
		'/images/ghost/S25_Ultra/35.webp',
		'/images/ghost/S25_Ultra/36.webp',
		'/images/ghost/S25_Ultra/37.webp',
		'/images/ghost/S25_Ultra/38.webp',
		'/images/ghost/S25_Ultra/39.webp',
		'/images/ghost/S25_Ultra/40.webp',
		'/images/ghost/S25_Ultra/41.webp',
		'/images/ghost/S25_Ultra/42.webp',
		'/images/ghost/S25_Ultra/43.webp',
		'/images/ghost/S25_Ultra/44.webp',
		'/images/ghost/S25_Ultra/45.webp',
		'/images/ghost/S25_Ultra/46.webp',
		'/images/ghost/S25_Ultra/47.webp',
		'/images/ghost/S25_Ultra/48.webp',
		'/images/ghost/S25_Ultra/49.webp',
		'/images/ghost/S25_Ultra/50.webp',
		'/images/ghost/S25_Ultra/51.webp',
		'/images/ghost/S25_Ultra/52.webp',
		'/images/ghost/S25_Ultra/53.webp',
		'/images/ghost/S25_Ultra/54.webp',
		'/images/ghost/S25_Ultra/55.webp',
		'/images/ghost/S25_Ultra/56.webp',
		'/images/ghost/S25_Ultra/57.webp',
		'/images/ghost/S25_Ultra/58.webp',
		'/images/ghost/S25_Ultra/59.webp',
		'/images/ghost/S25_Ultra/60.webp',
		'/images/ghost/S25_Ultra/61.webp',
		'/images/ghost/S25_Ultra/62.webp',
		'/images/ghost/S25_Ultra/63.webp',
		'/images/ghost/S25_Ultra/64.webp',
		'/images/ghost/S25_Ultra/65.webp',
		'/images/ghost/S25_Ultra/66.webp',
		'/images/ghost/S25_Ultra/67.webp',
		'/images/ghost/S25_Ultra/68.webp',
		'/images/ghost/S25_Ultra/69.webp',
		'/images/ghost/S25_Ultra/70.webp',
		'/images/ghost/S25_Ultra/71.webp',
		'/images/ghost/S25_Ultra/72.webp',
		'/images/ghost/S25_Ultra/73.webp',
		'/images/ghost/S25_Ultra/74.webp',
		'/images/ghost/S25_Ultra/75.webp',
		'/images/ghost/S25_Ultra/76.webp',
		'/images/ghost/S25_Ultra/77.webp',
		'/images/ghost/S25_Ultra/78.webp',
		'/images/ghost/S25_Ultra/79.webp',
		'/images/ghost/S25_Ultra/80.webp',
		'/images/ghost/S25_Ultra/81.webp',
		'/images/ghost/S25_Ultra/82.webp',
		'/images/ghost/S25_Ultra/83.webp',
		'/images/ghost/S25_Ultra/84.webp',
		'/images/ghost/S25_Ultra/85.webp',
		'/images/ghost/S25_Ultra/86.webp',
		'/images/ghost/S25_Ultra/87.webp',
		'/images/ghost/S25_Ultra/88.webp',
		'/images/ghost/S25_Ultra/89.webp',
		'/images/ghost/S25_Ultra/90.webp',
		'/images/ghost/S25_Ultra/91.webp',
		'/images/ghost/S25_Ultra/92.webp',
		'/images/ghost/S25_Ultra/93.webp',
		'/images/ghost/S25_Ultra/94.webp',
		'/images/ghost/S25_Ultra/95.webp',
		'/images/ghost/S25_Ultra/96.webp',
		'/images/ghost/S25_Ultra/97.webp',
		'/images/ghost/S25_Ultra/98.webp',
		'/images/ghost/S25_Ultra/99.webp',
		'/images/ghost/S25_Ultra/100.webp',
		'/images/ghost/S25_Ultra/101.webp',
		'/images/ghost/S25_Ultra/102.webp',
		'/images/ghost/S25_Ultra/103.webp',
		'/images/ghost/S25_Ultra/104.webp',
		'/images/ghost/S25_Ultra/105.webp',
		'/images/ghost/S25_Ultra/106.webp',
		'/images/ghost/S25_Ultra/107.webp',
		'/images/ghost/S25_Ultra/108.webp',
		'/images/ghost/S25_Ultra/109.webp',
		'/images/ghost/S25_Ultra/110.webp',
		'/images/ghost/S25_Ultra/111.webp',
		'/images/ghost/S25_Ultra/112.webp',
		'/images/ghost/S25_Ultra/113.webp',
		'/images/ghost/S25_Ultra/114.webp',
		'/images/ghost/S25_Ultra/115.webp',
		'/images/ghost/S25_Ultra/116.webp',
		'/images/ghost/S25_Ultra/117.webp',
		'/images/ghost/S25_Ultra/118.webp'
	];

	let index = 0;
	let reset = false;
	$: {
		if (index >= images.length - 1) {
			
			reset = true;
			console.log('reset', reset);
		}
	}
</script>

<div class="border-4 h-[calc(100vh-72px)] !bg-emerald-950">
	<div class=" max-w-[40%] mx-auto">
		<img src={images[index]} alt="Samsung Galaxy S25 Ultra" class="object-cover w-full " />
	</div>
	<input step={1} type="range" min={0} max={images.length - 1} bind:value={index} class="mx-auto" />
</div>


<style>
	input[type='range'] {
		-webkit-appearance: none;
		appearance: none;
                cursor: grab;
		height: 2px;
		background: #000000;
		border-radius: 4px;
		outline: none;
		transition: background 0.2s;
                width: 100%;
                max-width: 400px;
                margin: 2em auto;
                display: flex;
             
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 16px;
		height: 16px;
		background: #050505;
		border-radius: 50%;
		transition: background 0.2s ease-in-out;
	}

	input[type='range']::-webkit-slider-thumb:hover {
		background: #444;
	}
</style>
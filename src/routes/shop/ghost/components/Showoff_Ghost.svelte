<script>
	export let heading_text = '';
	export let video_src = '';
	export let tagline = '';
	export let text = '';
        export let overide_position = '';
</script>

<div class="md:hidden">
	<h2 class="mb-8 w-[80%] px-8 font-helvetica text-6xl font-medium sm:w-2/3">{heading_text}</h2>
	<video autoplay muted loop playsinline webkit-playsinline disableremoteplayback class="z-10 mx-auto max-h-[600px] min-h-[400px] w-full min-w-[400px] object-cover px-8">
		<source src={video_src} type="video/mp4" />
	</video>

	<h3 class="my-8 px-12 font-helvetica text-sm uppercase tracking-wider">{tagline}</h3>
	<p class="mb-24 px-12 text-start text-lg opacity-90">{text}</p>
</div>

<div class="hidden w-full flex-col md:flex my-24 max-w-[1300px] mx-auto">
	<div class="flex {overide_position}">
		<video autoplay muted loop playsinline webkit-playsinline disableremoteplayback class="z-10 mx-auto  min-h-[400px] w-1/2 h-fit object-cover aspect-square px-8">
			<source src={video_src} type="video/mp4" />
		</video>
		<div class="flex-1 w-1/2">
			<h2 class="mb-8 w-[90%] px-8 font-helvetica text-6xl font-medium ">{heading_text}</h2>

			<h3 class="my-8 px-12 font-helvetica text-sm uppercase tracking-wider">{tagline}</h3>
			<p class="mb-24 px-12 text-start text-lg opacity-90">{text}</p>
		</div>
	</div>
</div>

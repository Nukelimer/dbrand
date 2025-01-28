<script>
	export let heading_text = '';
	export let video_src = '';
        export let tagline = '';
        export let text = '';   
</script>

<div class="">
	<h2 class="text-4xl font-semibold">{heading_text}</h2>
	<video autoplay muted loop playsinline webkit-playsinline disableremoteplayback class="z-10 mx-auto h-[400px] w-[400px] object-cover md:h-[550px] md:w-[550px]">
		<source src={video_src} type="video/webm" />
	</video>

        <h3>{tagline}</h3>
        <p>{text}</p>
</div>

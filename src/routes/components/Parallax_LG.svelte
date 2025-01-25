<script>
	import { onMount } from 'svelte';

	export let sections = [];

	let windowHeight;

	onMount(() => {
		windowHeight = window.innerHeight;

		function updateTransforms() {
			const scrollTop = window.scrollY;

			document.querySelectorAll('.section').forEach((section, i) => {
				const wrap = section.querySelector('.section__wrap');
				const content = section.querySelector('.section__content');

				const wrapTransform = `translate3d(0px, ${windowHeight * i - scrollTop}px, 0px)`;
				const contentTransform = `translate3d(0px, ${scrollTop - windowHeight * i}px, 0px)`;

				wrap.style.transform = wrapTransform;
				content.style.transform = contentTransform;
			});
		}

		updateTransforms();

		window.addEventListener('scroll', updateTransforms);
		window.addEventListener('resize', () => {
			windowHeight = window.innerHeight;
			updateTransforms();
		});

		return () => {
			window.removeEventListener('scroll', updateTransforms);
			window.removeEventListener('resize', updateTransforms);
		};
	});
</script>

{#each sections as section, index}
	<section class="section -z-50 !flex !h-screen !w-screen" data-section={index}>
		<div class=" flex flex-col -translate-y-14 justify-center items-center  !h-full w-1/2 max-w-[40%] ">
	{#if section.url}
<div class=" w-[80%]">
      <h1 class="text-7xl font-bold font-helvetica text-start uppercase">{section.text[0]}</h1>
    <p class="text-2xl text-start mr-auto my-6 font-helvetica">{section.text[1]}</p>
   <a href="{section.text[3]}">
     <button class="text-white text-2xl uppercase font-helvetica font-semibold bg-black py-6 px-8 rounded">{section.text[2]}</button>
   </a>
    </div> 

  {:else}
	<div class=" w-[80%]">
      <h1 class="text-7xl font-bold font-helvetica text-start uppercase">{section.text[0]}</h1>
    <p class="text-2xl text-start mr-auto my-6 font-helvetica">{section.text[1]}</p>
    <button class="text-white text-2xl uppercase font-helvetica font-semibold bg-black py-6 px-8 rounded">{section.text[2]}</button>
    </div>    
  {/if}
		</div>

		<div class="section__wrap max-w-[60%] top-0 bottom-0  ">
			<img src={section.image} class="section__content p-0 m-0 !h-full !w-full !bg-cover !bg-center" alt="dbrand product" />
		</div>
	</section>
{/each}

<style>
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
		top: 0;
		right: 0;
		bottom: 0;
		height: 100vh;
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

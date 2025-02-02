<script>
	export let section = [];

          import { onMount } from "svelte";
export let style = ''
  let scrollY = 0;

  const handleScroll = () => {
    scrollY = window.scrollY;
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

{#each section as { text, image }, i}
	<section class=" font-helvetica  ">
		<img src={image} alt="Parallax Background" class=" top-0 block box-border w-full object-cover transition-all sticky {style}" />

		
		<div class=" h-full py-16 top -0 block box-border w-full bg-black text-white sticky">
			<div class="w-full py-10 px-6 bg-black ">
				<p class="text-center font-helvetica  lg:text-lg">
					{@html text[0]}
				</p>
				<h3 class=" text-center text-xl sm:text-start sm:text-xl">{text[1]}</h3>
			</div>
		</div>
	</section>
{/each}

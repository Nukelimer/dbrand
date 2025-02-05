<script>
	export let productData = [];

	export let product = '';
	export let style = ''
</script>

<div class="h-full min-h-[100vh] bg-black text-white">
	<div class="mx-auto px-6 pt-12 2xl:w-[1300px]">
		<p class="px-4 text-lg text-[#FBBB29]">dbrand for the</p>
		<h1 class="px-4 font-helvetica text-6xl font-bold text-[#FBBB29] md:text-8xl">{product}</h1>

		<div class=" mt-12 h-full w-full flex-col flex-wrap sm:flex sm:flex-row sm:gap-6 md:flex-nowrap">
			{#each productData as { img, name, perk, url }}
				<div class=" mx-auto mt-12 max-h-[676px] max-w-[405px] h-full overflow-hidden rounded-b-md rounded-t-md hover:rounded-t-md sm:my-0">
					<div class="overflow-hidden rounded-t-md hover:rounded-t-md">
						<img src={img} alt={name} class="h-full min-h-[500px] cursor-pointer rounded-t-md object-cover transition-transform delay-200 hover:scale-110 hover:rounded-t-md" />
					</div>
					<div class=" bg-[#292929] p-6">
						<h3 class="pb-4 font-helvetica text-xl font-semibold">{name}</h3>
						<h4 class="uppercase text-nowrap">{perk}</h4>
					</div>
					<a href={url} class="flex w-full justify-center rounded-b-md bg-[#FBBB29] p-2 text-center font-semibold uppercase text-black">Shop {name.split(' ').pop()}</a>
				</div>
			{/each}
		</div>
	</div>
</div>

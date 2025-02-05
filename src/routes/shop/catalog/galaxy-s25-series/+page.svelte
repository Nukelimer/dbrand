<script>
	const S25Series = [
		{
			img: '/images/catalog/S25_S_Skins.webp',
			name: 'Galaxy S25 series skins',
			perk: 'Ultimate customization',
			url: '/shop/devices/galaxy-s25-series-skins'
		},
		{
			img: '/images/catalog/S25_S_Cases.webp',
			name: 'Galaxy S25 series cases',
			perk: 'Revulutionary grip',
			url: '/shop/devices/galaxy-s25-series-cases'
		},
		{
			img: '/images/catalog/S25_S_Glass.webp',
			name: 'Galaxy S25 series glass',
			perk: 'save your screen',
			url: '/shop/devices/samsung-galaxy-tempered-glass-screen-protectors'
		}
	];


</script>

<div class="h-full min-h-[100vh] bg-black text-white">
	<div class="mx-auto px-6 pt-12 2xl:w-[1300px]">
		<p class="text-lg text-[#FBBB29]">dbrand for the</p>
		<h1 class="font-helvetica text-6xl font-bold text-[#FBBB29] md:text-8xl ">Galaxy S25 Series</h1>

		<div class=" w-full py-16 sm:gap-6 flex-col sm:flex sm:flex-row flex-wrap ">
			{#each S25Series as { img, name, perk, url }}
				<div class=" mx-auto my-12 sm:my-0 max-w-[485px] max-h-[676px] overflow-hidden hover:rounded-t-md rounded-t-md rounded-b-md  ">
					
                                       <div class="overflow-hidden hover:rounded-t-md rounded-t-md ">

                                         <img src={img} alt={name} class="rounded-t-md hover:rounded-t-md object-cover hover:scale-125 cursor-pointer delay-200 transition-transform min-h-[500px]" />
                                       </div>
					<div class=" bg-[#292929] p-6">
						<h3 class="pb-4 font-helvetica text-2xl font-semibold">{name}</h3>
						<h4 class="uppercase">{perk}</h4>
					</div>
					<a href={url} class="flex w-full justify-center rounded-b-md bg-[#FBBB29] p-2 text-center font-semibold uppercase text-black">Shop {name.split(' ').pop()}</a>
				</div>
			{/each}
		</div>
	</div>
</div>

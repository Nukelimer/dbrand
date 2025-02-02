<script>


       export let productData = [
		
	];

        export let product=''

</script>



<div class="h-full min-h-[100vh] bg-black text-white">
	<div class="mx-auto px-6 pt-12 2xl:w-[1300px]">
		<p class="text-lg text-[#FBBB29] px-4">dbrand for the</p>
		<h1 class="font-helvetica text-6xl font-bold text-[#FBBB29] md:text-8xl px-4 ">{product}</h1>

		<div class=" w-full mt-12                                                                                sm:gap-6 flex-col sm:flex sm:flex-row flex-wrap ">
			{#each productData as { img, name, perk, url }}
				<div class=" mx-auto my-12 sm:my-0 max-w-[485px] max-h-[576px] overflow-hidden hover:rounded-t-md rounded-t-md rounded-b-md  ">
					
                                       <div class="overflow-hidden hover:rounded-t-md rounded-t-md  ">

                                         <img src={img} alt={name} class="rounded-t-md hover:rounded-t-md object-cover  hover:scale-110 cursor-pointer delay-200 h-full  transition-transform" />
                                       </div>
					<div class=" bg-[#292929] p-6">
						<h3 class="pb-4 font-helvetica text-xl font-semibold ">{name}</h3>
						<h4 class="uppercase">{perk}</h4>
					</div>
					<a href={url} class="flex w-full justify-center rounded-b-md bg-[#FBBB29] p-2 text-center font-semibold uppercase text-black">Shop {name.split(' ').pop()}</a>
				</div>
			{/each}
		</div>
	</div>
</div>
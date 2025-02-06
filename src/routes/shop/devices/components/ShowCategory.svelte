<script>
	import ShowCategoryParallax from "./ShowCategoryParallax.svelte";


        export let override =''
	export let  PhoneData = [];
	export let text_lg = ''

	export let phoneName = ''
	export let brand = ''
	export let first_paragraph = ''
	console.log('Abc' , PhoneData);
	
</script>

<div class="bg-black text-white">
	<div class="mx-auto w-full max-w-[1300px]">
		<h1 class="font -helvetica mb-16 px-6 text-center text-4xl font-extralight sm:ml-12 sm:text-start sm:text-5xl md:text-6xl lg:text-7xl bg-black pt-6">{phoneName}</h1>

		<div class=" mx-auto flex w-full flex-col sm:max-w-[660px] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 md:max-w-full md:flex-wrap">
			{#each PhoneData as data}
				<a href={data.link} class="">
					<div class="m mx-auto my-2 flex w-[14em] min-w-[7.25rem] flex-col items-center justify-center rounded bg-[#292929] sm:my-6">
						<img src={data.img} alt={data.name} class="my-8 aspect-square h-[171px] w-[87px]" />
						<p class="font-helvetica text-white/55">{brand}</p>
						<h2 class="mb-6 font-semibold transition-colors delay-75 hover:text-[#FFBB00]">{data.name}</h2>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<div class="bg-[#141414] py-16">
		<h4 class="text px-12 text-center font-helvetica text-xl leading-8">
			{@html first_paragraph}
		</h4>
	</div>

	<div class="hidden md:flex flex-row-reverse h-screen {override}">
		<div class="flex-1">
			<img src="/images/devices/S25 Series/ruler.webp" alt="ruler picture_" class="object-cover w-full h-full" />
		</div>

		<div class="flex flex-1 justify-center items-center">
			<p class="px-16 text-lg tracking-wide  font-helvetica">
				{@html text_lg}
			</p>
		</div>
	</div>

      
</div>


  <div class="md:hidden {override} ">

                <ShowCategoryParallax section={[{
			text: ['Achieving a clean, custom look for your iPhone has never been easier thanks to our ultra-thin <a href="--" class="text-[#ffbb00]">iPhone 16 Pro skins</a> . At just 0.25mm, our <a href="--" class="text-[#ffbb00]">Phone 16 Pro skins</a> enable factory-fit customization without any added bulk. Just pick a design, buy a <a href="--" class="text-[#ffbb00]">Phone 16 skins</a>, and leave the rest to us.'],
			image: '/images/devices/S25 Series/ruler.webp'
		}]}/>
        </div>

     
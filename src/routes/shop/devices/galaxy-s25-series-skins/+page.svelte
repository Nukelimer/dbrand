<script>
	import ParallaxS25 from "./components/Parallax_S25.svelte";


        
	const S25Data = [
		{ name: 'Galaxy S25 Ultra', link: 'shop/skins/galaxy-s25-ultra-skins', img: '/images/devices/S25 Series/S25 Ultra.webp' },
		{ name: 'Galaxy S25 Plus', link: 'shop/skins/galaxy-s25-plus-skins', img: '/images/devices/S25 Series/S25+.webp' },
		{ name: 'Galaxy S25', link: 'shop/skins/galaxy-s25-skins', img: '/images/devices/S25 Series/S25.webp' }
	];
</script>

<div class="bg-black text-white">
	<div class="mx-auto w-full max-w-[1300px]">
		<h1 class="font -helvetica mb-16 pr-6 text-center text-4xl font-extralight sm:ml-12 sm:text-start sm:text-5xl md:text-6xl lg:text-7xl">Galaxy S25 Series Skins & Wraps</h1>

		<div class=" mx-auto flex w-full flex-col sm:max-w-[660px] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 md:max-w-full md:flex-wrap">
			{#each S25Data as data}
				<a href={data.link} class="">
					<div class="m mx-auto my-2 flex w-[14em] min-w-[7.25rem] flex-col items-center justify-center rounded bg-[#292929] sm:my-0">
						<img src={data.img} alt={data.name} class="my-8 aspect-square h-[171px] w-[87px]" />
						<p class="font-helvetica text-white/55">Samsung</p>
						<h2 class="mb-6 font-semibold transition-colors delay-75 hover:text-[#FFBB00]">{data.name}</h2>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<div class="bg-[#141414] py-16">
		<h4 class="text px-12 text-center font-helvetica text-xl leading-8">
			Samsung overlooked one fatal flaw when designing the Galaxy S25 series: those glass backs are inevitably going to get covered in your disgusting fingerprints. Thankfully, dbrand has the best <a href="fix-me" class="text-[#ffbb00]">Galaxy S25 Ultra skins</a> and
			<a href="fix-me" class="text-[#ffbb00]">Galaxy S25 Plus skins</a>
			on the planet. Pick from dozens of unique designs, add your <a href="fix-me" class="text-[#ffbb00]">Galaxy S25 skins</a> to your cart, and let us handle the rest.
		</h4>
	</div>

	<div class="hidden md:flex flex-row-reverse h-screen">
		<div class="flex-1">
			<img src="/images/devices/S25 Series/ruler.webp" alt="ruler picture_" class="object-cover w-full h-full" />
		</div>

		<div class="flex flex-1 justify-center items-center">
			<p class="px-16 text-lg tracking-wide  font-helvetica">
				Achieving a clean, custom look for your Galaxy has never been easier thanks to our ultra-thin <a href="--" class="text-[#ffbb00]">Galaxy S24 Ultra skins</a> . At just 0.25mm, our <a href="--" class="text-[#ffbb00]">Galaxy S24 Ultra skins</a> enable factory-fit customization without any added
				bulk. Just pick a design, buy a <a href="--" class="text-[#ffbb00]">Galaxy S24 skins</a>, and leave the rest to us.
			</p>
		</div>
	</div>

      
</div>


  <div class="md:hidden">

                <ParallaxS25 section={[{
			text: ['Achieving a clean, custom look for your Galaxy has never been easier thanks to our ultra-thin <a href="--" class="text-[#ffbb00]">Galaxy S24 Ultra skins</a> . At just 0.25mm, our <a href="--" class="text-[#ffbb00]">Galaxy S24 Ultra skins</a> enable factory-fit customization without any added bulk. Just pick a design, buy a <a href="--" class="text-[#ffbb00]">Galaxy S24 skins</a>, and leave the rest to us.'],
			image: '/images/devices/S25 Series/ruler.webp'
		}]}/>
        </div>

     
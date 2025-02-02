<script>
	import ParallaxS25 from '../galaxy-s25-series-skins/components/Parallax_S25.svelte';
	import ParallaxSm from './components/Parallax_SM.svelte';
	import Parallax_LG from './components/Parallax_LG.svelte';
	const S25Data = [
		{ name: 'Galaxy S25 Ultra', link: 'shop/skins/galaxy-s25-ultra-cases', img: '/images/devices/S25 Series/S25_Ultra_case.webp' },
		{ name: 'Galaxy S25 Plus', link: 'shop/skins/galaxy-s25-plus-cases', img: '/images/devices/S25 Series/S25+_case.webp' },
		{ name: 'Galaxy S25', link: 'shop/skins/galaxy-s25-cases', img: '/images/devices/S25 Series/S25_case.webp' }
	];

	
</script>

<div class="bg-black text-white">
	<div class="mx-auto w-full max-w-[1300px]">
		<h1 class="font -helvetica mb-16 pr-6 text-center text-4xl font-extralight sm:ml-12 sm:text-start sm:text-5xl md:text-6xl lg:text-7xl">Galaxy S25 Series Cases</h1>

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

	<div class="mt-8 bg-[#141414] py-16">
		<h4 class="text px-12 text-center font-helvetica text-xl leading-8">
			Combining military-grade impact protection with a striking minimalist design, the dbrand Grip™ is the most advanced Galaxy case in the world. Buy a <a href="fix-me" class="text-[#ffbb00]">Galaxy S25 case</a>,
			<a href="fix-me" class="text-[#ffbb00]">Galaxy S25 Plus case</a>
			or <a href="fix-me" class="text-[#ffbb00]">Galaxy S25 Ultra case</a>
			today. The best part? You can customize it with your choice of skin. What are you waiting for? Get buying.
		</h4>
	</div>

	<div class="hidden h-screen flex-row-reverse">
		<div class="flex-1">
			<img src="/images/devices/S25 Series/ruler.webp" alt="ruler picture_" class="h-full w-full object-cover" />
		</div>

		<div class="flex flex-1 items-center justify-center">
			<p class="px-16 font-helvetica text-lg tracking-wide">
				Achieving a clean, custom look for your Galaxy has never been easier thanks to our ultra-thin <a href="--" class="text-[#ffbb00]">Galaxy S24 Ultra skins</a> . At just 0.25mm, our <a href="--" class="text-[#ffbb00]">Galaxy S24 Ultra skins</a> enable factory-fit customization without any added
				bulk. Just pick a design, buy a <a href="--" class="text-[#ffbb00]">Galaxy S24 skins</a>, and leave the rest to us.
			</p>
		</div>
	</div>
</div>
<div class="">
	<ParallaxS25
		style="h-[450px]"
		section={[
			{
				text: ['Every year, the US Military burns through $700,000,000,000. On what? Nobody knows. For only 0.0000000057% of the annual defense budget, you can do the same. But with a <a href="--" class="text-[#ffbb00]">Galaxy S24 Ultra case</a>. Checkmate, Eisenhower.'],
				image: '/images/devices/S25 Series/every_year.webp'
			}
		]}
	/>

	<ParallaxS25
		style="h-[450px]"
		section={[
			{
				text: [
					'Samsung spent a tremendous sum of money making the click on your Galaxy S24 buttons feel immaculate. We spent far less, yet somehow managed to make them feel even better with our <a href="--" class="text-[#ffbb00]">Galaxy S24 cases</a> Impossible, you say? Our button scientists disagree.'
				],
				image: '/images/devices/S25 Series/samsung.webp'
			}
		]}
	/>

	<ParallaxS25
		style="h-[450px]"
		section={[
			{
				text: [
					'See those microscopic ridges? Each is a textured dot, invisible to the naked eye. There are literally thousands of them spanning the surface of the Grip, creating a tremendous number of grippy contact points for your butterfingers. The result? You’ll never drop your <a href="--" class="text-[#ffbb00]">Galaxy S24 plus cases</a> again.'
				],
				image: '/images/devices/S25 Series/microscope.webp'
			}
		]}
	/>
</div>

<div class="hidden">
	<Parallax_LG
		sections={[
			{
			text: ['Ghost 2.0 ', 'The next-gen clear case.', 'Buy Now'],
			image: '/images/landing_page/ghost.2.0.webp'
		},
		{
			text: ['iPhone 16 Series', 'Now featuring a Camera Control button.', 'Make us Rich'],
			image: '/images/landing_page/iphone_16_series.webp'
		},
		{
			text: ['Circuit Board', 'Yes - it glows in the dark.', 'Glow Now'],
			image: '/images/landing_page/circuit_board.webp'
		},
		{
			text: ['Prism 2.0', 'The Idiot-proof Screen Protector.™', 'Shop now'],
			image: '/images/landing_page/prism.webp'
		},
		]}
	/>
</div>


<script>
	import ShowCategory from '../components/ShowCategory.svelte';
	import ParallaxS25 from '../galaxy-s25-series-skins/components/Parallax_S25.svelte';
</script>

<ShowCategory
override='!hidden'
brand="Apple"
first_paragraph={`Combining military-grade impact protection with a striking minimalist design, the dbrand Grip™ is the most advanced iPhone case in the world. Buy an <a class="text-[#ffbb00]" href="/shop/grip/iphone-16-cases">iPhone 16 case</a>, <a class="text-[#ffbb00]" href="/shop/grip/iphone-16-plus-cases">iPhone 16 Plus case</a>, <a class="text-[#ffbb00]" href="/shop/grip/iphone-16-pro-cases">iPhone 16 Pro case</a>, or <a class="text-[#ffbb00]" href="/shop/grip/iphone-16-pro-max-cases">iPhone 16 Pro Max case</a> today. The best part? You can customize it with your choice of skin. What are you waiting for? Get buying.`}
	phoneName="iPhone 16 Series Cases //"
	PhoneData={[
		{ name: 'iPhone 16 Pro Max', link: 'shop/skins/iphone-16-pro-max-cases', img: '/images/devices/Iphone 16 Series/16PM.webp' },
		{ name: 'Phone 16 Pro', link: 'shop/skins/iphone-16-pro-cases', img: '/images/devices/Iphone 16 Series/16P.webp' },
		{ name: 'Phone 16 Plus', link: 'shop/skins/iphone-16-plus-cases', img: '/images/devices/Iphone 16 Series/16Plus.webp' },
		{ name: 'Phone 16', link: 'shop/skins/iphone-16-cases', img: '/images/devices/Iphone 16 Series/16.webp' }
	]}

        
/>

<div class="bg-black">
	<ParallaxS25
		style="h-[550px]"
		section={[
			{
				text: ['Every year, the US Military burns through $700,000,000,000. On what? Nobody knows. For only 0.0000000057% of the annual defense budget, you can do the same. But with a <a href="--" class="text-[#ffbb00]">iPhone 16 Pro Max case</a>. Checkmate, Eisenhower.'],
				image: '/images/devices/S25 Series/every_year.webp'
			}
		]}
	/>

	<ParallaxS25
		style="h-[550px]"
		section={[
			{
				text: [
					'Samsung spent a tremendous sum of money making the click on your Galaxy S24 buttons feel immaculate. We spent far less, yet somehow managed to make them feel even better with our <a href="--" class="text-[#ffbb00]">iPhone 16 Pro case</a> Impossible, you say? Our button scientists disagree.'
				],
				image: '/images/devices/S25 Series/samsung.webp'
			}
		]}
	/>

	<ParallaxS25
		style="h-[550px]"
		section={[
			{
				text: [
					'See those microscopic ridges? Each is a textured dot, invisible to the naked eye. There are literally thousands of them spanning the surface of the Grip, creating a tremendous number of grippy contact points for your butterfingers. The result? You’ll never drop your <a href="--" class="text-[#ffbb00]">iPhone 16 case</a> again.'
				],
				image: '/images/devices/S25 Series/microscope.webp'
			}
		]}
	/>
</div>



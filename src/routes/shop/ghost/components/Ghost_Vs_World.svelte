<script>
	import { Check, X } from 'lucide-svelte';

	const benefits = [
		{ heading: 'Grip', details: ['Ultra-Grippy', `Includes 300+ built-in ridges for maximum grip, ensuring you won't drop your phone.`, 'Slippery', `Smooth, polished, thoughtless design. You're gambling with your phone's life.`] },

		{
			heading: ' Anti-Yellowing',
			details: [
				'Forever Clear',
				`Guaranteed to never yellow. Thanks to our two-tone design, it's literally impossible.`,
				`Guaranteed Yellowing
`,
				`They claim it won't turn yellow. They're lying to you. It absolutely will.`
			]
		},

		{
			heading: ' Protection',
			details: [
				'Protection Confirmed',
				`Provides impact protection up to twelve feet, thanks to shock-absorbing corner bumpers.`,
				`Drop Protection?
`,
				`Maybe. They make claims, but we haven't tested them. Do you want to risk it?`
			]
		},

		{
			heading: ' Thinness',
			details: [
				'Super Thin',
				`Much like a real ghost, you'll barely even notice that the Ghost Case is there.`,
				`Carelessly Thick
`,
				`Every time you hold your phone, you'll know that thinness wasn't a design priority.`
			]
		},

		{
			heading: 'Weight',
			details: [
				'Imperceptibly Light',
				`Painstakingly engineered to add the least possible weight to your phone.`,
				`Weighs You Down
`,
				`Somewhere between "heavier than a Ghost Case" and "lighter than a brick".`
			]
		},

		{
			heading: 'Buttons',
			details: [
				'Extra-Clicky Buttons',
				`Includes button relief slits for a clicky, tactile, satisfying bump with every single press.`,
				`Mushy Buttons
`,
				`Soft, unresponsive, included as an afterthought. A miserable button experience.`
			]
		},

		{
			heading: 'Fit',
			details: [
				'Fits Perfectly',
				`Meticulously designed and tested to guarantee that the Ghost Case is a perfect fit.`,
				`Fits "Perfectly"
`,
				`We're sure other cases have an acceptable fit. Emphasis on "acceptable".`
			]
		},

		{
			heading: 'Quality',
			details: [
				'A Trusted Name',
				`Since 2011, we've shipped millions of orders around the globe to customers just like you.`,
				`Dubious Quality
`,
				`You might as well be buying your case at a mall kiosk.`
			]
		},

		{
			heading: 'Anti-Scratch',
			details: [
				'Invisible Polymer Coating',
				`The world’s first application of this optically clear, zero-yellowing, scratch-resistant polymer in a phone case.`,
				`Yellowing UV Coating
`,
				`Uses an anti-scratch coating that turns yellow when exposed to UV radiation. That's why you're here, buying a Ghost.`
			]
		},

		{
			heading: 'Design',
			details: [
				'Next-Generation Design',
				`Have you seen the Ghost Case? Scroll back up and look at it.`,
				`Unimaginative Clones
`,
				`Carelessly mass-produced, generic designs. You can do better.`
			]
		}
	];

	let selectedIndex = 0;

	function toggleDetails(index) {
		selectedIndex = index;
	}
</script>

<div class=" item-center mt-36 flex w-full flex-col justify-center">
	<h2 class="mx-auto mb-16 w-1/2 text-center text-6xl"><span class="flex justify-center">Ghost vs.</span> <span class="flex justify-center">the world</span></h2>

	<div class="relative mx-auto mt-6 flex max-w-[850px] flex-wrap items-center justify-center gap-2 text-sm px-2">
		{#each benefits as { heading }, index}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			{#if heading === 'Grip' || heading === ' Anti-Yellowing' || heading === ' Protection' || heading === ' Thinness'}
				<div
					class="cursor-pointer text-nowrap rounded-full border border-black px-6 py-4 text-center font-helvetica uppercase transition-all duration-300
			{selectedIndex === index ? 'bg-[#101829] text-white' : ''}"
					on:click={() => toggleDetails(index)}
					aria-expanded={selectedIndex === index}
				>
					{heading}
				</div>
			{:else if heading === 'Weight' || heading === 'Buttons' || heading === 'Fit'}
				<div
					class="cursor-pointer text-nowrap rounded-full border border-black px-6 py-4 text-center uppercase transition-all duration-300
			{selectedIndex === index ? 'bg-black text-white' : ''}"
					on:click={() => toggleDetails(index)}
					aria-expanded={selectedIndex === index}
				>
					{heading}
				</div>
			{:else}
				<div
					class="cursor-pointer text-nowrap rounded-full border border-black px-6 py-4 text-center uppercase transition-all duration-300
			{selectedIndex === index ? 'bg-black text-white' : ''}"
					on:click={() => toggleDetails(index)}
					aria-expanded={selectedIndex === index}
				>
					{heading}
				</div>
			{/if}
		{/each}
	</div>

	<div class="mx-auto mt-6 max-w-[850px] p-6 font-helvetica md:flex">
		{#if benefits[selectedIndex]}
			<div class="bg-[#F5F5F5] py-24 pl-6 pr-12 flex gap-6 min-h-[400px] max-w-[425px] md:w-1/2 ">
				<Check class='mt-4' size='60'/>
				<div class="">
					<p class="text-sm uppercase text-gray-500">Ghost Case</p>
					<h3 class="my-4 text-xl">{benefits[selectedIndex].details[0]}</h3>
					<p class="text-gray-700">{benefits[selectedIndex].details[1]}</p>
				</div>
			</div>
			<div class="mt-4 flex gap-6 bg-white p-6 py-24 pl-6 pr-12 min-h-[400px] md:w-1/2 max-w-[425px]">
				<X size='60' class='mt-4'/>
				<div class="">
					<p class="text-sm uppercase text-gray-500">Other Case</p>
					<h3 class="my-4 text-xl">{benefits[selectedIndex].details[2] || 'Alternative Quality'}</h3>
					<p class="text-gray-700">{benefits[selectedIndex].details[3] || 'Lack of innovation and quality.'}</p>
				</div>
			</div>
		{/if}
	</div>
</div>

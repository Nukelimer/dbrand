<script>
	// @ts-nocheck

	import Tooltip from '$lib/Reusable Component/Tooltip.svelte';
	import { ChevronDown, ChevronRight, ChevronLeft } from 'lucide-svelte';
	// @ts-ignore

	// @ts-ignore
	import FaShoppingCart from 'svelte-icons/fa/FaShoppingCart.svelte';
	// @ts-ignore
	import GoThreeBars from 'svelte-icons/go/GoThreeBars.svelte';

	let isHovered = false;
	let isMenuHovered = false;
	let isHoveredLogo = false;
	// @ts-ignore
	let isClicked = false;

	let activeItem = null;
	let activeSubmenu = null;

	function toggleItem(name) {
		if (activeItem === name) {
			activeItem = null;
			activeSubmenu = null;
		} else {
			activeItem = name;
		}
	}

	function toggleSubmenu(name) {
		if (activeSubmenu === name) {
			activeSubmenu = null;
		} else {
			activeSubmenu = name;
		}
	}

	const navData = [
		{
			name: 'Ghost',
			children: [
				{
					name: 'Pixel',

					children: [
						{ name: 'Pixel 9 Pro XL', url: '/' },

						{ name: 'Pixel 9 Pro', url: '/' },

						{ name: 'Pixel 9', url: '/' },

						{ name: 'Pixel 8 Pro', url: '/' },

						{ name: 'Pixel 8', url: '/' },

						{ name: 'Pixel Fold', url: '/' },

						{ name: 'Pixel 7a', url: '/' },

						{ name: 'Pixel 7 Pro', url: '/' }
					]
				},

				{
					name: 'Apple',

					children: [
						{ name: 'iPhone 16 Pro Max', url: '/' },

						{ name: 'iPhone 16', url: '/' },

						{ name: 'iPhone 15 Pro Max', url: '/' },

						{ name: 'iPhone 15', url: '/' },

						{ name: 'iPhone 14 Pro Max', url: '/' },

						{ name: 'iPhone 14', url: '/' }
					]
				},
				{
					name: 'Samsung',
					children: [
						{
							name: 'S25 Ultra',
							url: '/'
						},
						{
							name: 'S24 Ultra',
							url: '/'
						},
						{
							name: 'S23 Ultra',
							url: '/'
						},
						{
							name: 'S22 Ultra',
							url: '/'
						}
					]
				}
			]
		},

		{ name: 'Limited Edition', url: '/' },

		{
			name: 'Skins',

			children: [
				{ name: 'iPhone 16 series', url: '/' },
				{ name: 'Pixel 9 series', url: '/' },
				{ name: 'MacBook Pro M4', url: '/' },
				{ name: 'iPad mini 7 (A17 Pro)', url: '/' },
				{ name: 'iPad & Magic Keyboard', url: '/' },
				{ name: 'Z Fold 6 / Z Flip 6', url: '/' },
				{ name: 'iPad Pro M4 / Air M2', url: '/' },
				{ name: 'Beat Solo 4', url: '/' },
				{ name: 'XPS 2024', url: '/' },
				{ name: 'Galaxy  S24 Series', url: '/' },

				{
					name: 'Phones',
					children: [
						{ name: 'Apple', url: '/' },
						{ name: 'Google', url: '/' },
						{ name: 'Samsung', url: '/' },
						{ name: 'Microsoft', url: '/' },
						{ name: 'One Plus', url: '/' },
						{ name: 'Shop All', url: '/' }
					]
				},

				{
					name: 'Laptops',
					children: [
						{ name: 'MacBook', url: '/' },
						{ name: 'Razer', url: '/' },
						{ name: 'Surface', url: '/' },
						{ name: 'XPS', url: '/' },
						{ name: 'Lenovo', url: '/' },
						{ name: 'Framework', url: '/' },
						{ name: 'Shop All', url: '/' }
					]
				},

				{
					name: 'Gaming',

					children: [
						{ name: 'Lego', url: '/' },
						{ name: 'Steam Deck & OLED', url: '/' },
						{ name: 'PlayStation 5', url: '/' },
						{ name: 'Nintendo Switch', url: '/' },
						{ name: 'Nintendo Switch OLED', url: '/' },
						{ name: 'Xbox  Series X', url: '/' },
						{ name: 'Xbox Series S', url: '/' },
						{ name: 'Shop All', url: '/' },
						{ name: 'SteelSeries Arctis', url: '/' }
					]
				}
			]
		},

		{
			name: 'Cases',

			children: [
				{ name: 'iPhone 16 series', url: '/' },
				{ name: 'Pixel 9 series', url: '/' },
				{ name: 'Galaxy S25 Series', url: '/' },
				{ name: 'ROG Ally & ROG Ally X', url: '/' },
				{ name: 'iPad & Magic Keyboard', url: '/' },
				{ name: 'Pixel Fold', url: '/' },
				{ name: 'Steam Deck & OLED', url: '/' },
				{ name: 'Playstation 5', url: '/' },
				{
					name: 'Apple',
					children: [
						{ name: '16 Pro Max', url: '/' },
						{ name: '16 Pro', url: '/' },
						{ name: '16 Plus', url: '/' },
						{ name: '16', url: '/' },
						{ name: 'AirPods Pro 2', url: '/' },
						{ name: 'AirPods Pro', url: '/' },
						{ name: 'AirPods 4', url: '/' },
						{ name: 'Shop All Apple', url: '/' }
					]
				},

				{
					name: 'Google Pixel',

					children: [
						{ name: 'Pixel 9 Pro XL', url: '/' },

						{ name: 'Pixel 9 Pro', url: '/' },

						{ name: 'Pixel 9', url: '/' },

						{ name: 'Pixel 8a', url: '/' },
						{ name: 'Pixel 8 Pro', url: '/' },

						{ name: 'Pixel 8', url: '/' },

						{ name: 'Pixel Fold', url: '/' },

						{ name: 'Shop All Pixel', url: '/' }
					]
				},

				{
					name: 'Samsung',

					children: [
						{ name: 'S25 Ultra', url: '/' },

						{ name: 'S25 Plus', url: '/' },

						{ name: 'S25', url: '/' },

						{ name: 'S24 Ultra', url: '/' },
						{ name: 'Z Fold 6', url: '/' },

						{ name: 'Z Flip 6', url: '/' },

						{ name: 'Z Series', url: '/' },

						{ name: 'Shop All All Samsung', url: '/' }
					]
				},

				{
					name: 'Gaming',

					children: [
						{ name: 'Steam Deck', url: '/' },

						{ name: 'Steam Deck OLED', url: '/' },

						{ name: 'Legion Go S', url: '/' },

						{ name: 'Ninetendo Switch 2', url: '/' },
						{ name: 'ROG Ally X', url: '/' },

						{ name: 'ROG Ally ', url: '/' },

						{ name: 'PS5', url: '/' },

						{ name: 'PS5 Slim', url: '/' }
					]
				}
			]
		},
		{
			name: 'Screen Protector',

			children: [
				{
					name: 'Galaxy',

					children: [
						{ name: 'S25 Ultra', url: '/' },

						{ name: 'S25 Plus', url: '/' },

						{ name: 'S25', url: '/' },

						{ name: 'Z Fold 6', url: '/' },

						{ name: 'Z Flip 6', url: '/' },

						{ name: 'S24 Ultra', url: '/' },

						{ name: 'S24 Plus', url: '/' },

						{ name: 'Shop All All Galaxy', url: '/' }
					]
				},

				{
					name: 'iPhone',
					children: [
						{ name: 'iPhone 16 Series', url: '/' },
						{ name: 'iPhone 15 Series', url: '/' },
						{ name: 'iPhone 14 Series', url: '/' },
						{ name: 'iPhone 13 Series', url: '/' },
						{ name: 'Shop All iPhone', url: '/' }
					]
				},

				{
					name: 'Pixel',

					children: [
						{ name: 'Pixel 9 Pro XL', url: '/' },

						{ name: 'Pixel 9 Pro', url: '/' },

						{ name: 'Pixel 9', url: '/' },

						{ name: 'Pixel 9 Pro Fold', url: '/' },

						{ name: 'Pixel 8 pro', url: '/' },

						{ name: 'Pixel Fold', url: '/' },

						{ name: 'Shop All Pixel', url: '/' }
					]
				},

				{
					name: 'Samsung',

					children: [
						{ name: 'Steam Deck', url: '/' },

						{ name: 'Steam Deck OLED', url: '/' },

						{ name: 'Legion Go S', url: '/' },

						{ name: 'Ninetendo Switch 2', url: '/' },
						{ name: 'ROG Ally X', url: '/' },

						{ name: 'ROG Ally ', url: '/' },

						{ name: 'PS5', url: '/' },

						{ name: 'PS5 Slim', url: '/' }
					]
				},
				{
					name: 'Gaming',

					children: [
						{ name: 'Steam Deck OLED', url: '/' },
						{ name: 'ROG Ally X', url: '/' },
						{ name: 'ROG Ally ', url: '/' },

						{ name: 'Legion Go S', url: '/' },
						{ name: 'Legion Go', url: '/' },

						{ name: ' Switch OLED', url: '/' },

						{ name: 'Switch', url: '/' },

						{ name: 'PS Portal', url: '/' }
					]
				}
			]
		},
		{
			name: 'Gaming',

			children: [
				{
					name: 'Valve',

					children: [{ name: 'Steam Deck & OLED', url: '/' }]
				},

				{
					name: 'Sony',
					children: [
						{ name: 'PS5 Slim Disc Edition ', url: '/' },
						{ name: 'PS5 Slim Digital Edition', url: '/' },
						{ name: 'PS5 Disc Edition', url: '/' },
						{ name: 'PS5 Digital Edition', url: '/' },
						{ name: 'Arachnoplates', url: '/' },
						{ name: 'Retro Darkplates', url: '/' },
						{ name: 'PS Portal', url: '/' }
					]
				},

				{
					name: 'Nintendo',

					children: [
						{ name: 'Switch 2', url: '/' },

						{ name: 'Switch OLED', url: '/' },

						{ name: 'Switch', url: '/' },

						{ name: 'Switch Lite', url: '/' },

						{ name: 'Switch Pro  Controller', url: '/' }
					]
				},

				{
					name: 'XBox ',

					children: [
						{ name: 'Series X', url: '/' },

						{ name: 'Series S', url: '/' }
					]
				},
				{
					name: 'Asus',

					children: [
						{ name: 'ROG Ally X', url: '/' },
						{ name: 'ROG Ally ', url: '/' }
					]
				},
				{
					name: 'Asus',

					children: [
						{ name: 'Legion Go S', url: '/' },
						{ name: 'Legion Go ', url: '/' }
					]
				},
				{
					name: 'MSI',

					children: [{ name: 'Claw A1M', url: '/' }]
				}
			]
		},
		{ name: 'Artifacts', url: '/' },
		{ name: 'Timeline', url: '/' },

		{
			name: 'Help',

			children: [
				{ name: 'Order Lookup', url: '/' },

				{ name: 'Global Status', url: '/' },

				{ name: 'Shipping', url: '/' },

				{ name: 'Installation', url: '/' },

				{ name: 'Contact', url: '/' },

				{ name: 'I need a job', url: '/' }
			]
		},

		{ name: 'Account', url: '/' }
	];
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<nav class="">
	<div class=" fixed top-0 z-20 flex w-full items-center justify-between border-b border-zinc-500 bg-[#000000] px-6 py-6">
		<div class="flex h-6 w-6 gap-96 text-white hover:text-[#FFBB00]" on:mouseenter={() => (isMenuHovered = true)} on:mouseleave={() => (isMenuHovered = false)}>
			<GoThreeBars size="10" />

			<Tooltip content={'Menu'} visible={isMenuHovered} position="left" />
		</div>

		<div class="" on:mouseleave={() => (isHoveredLogo = false)} on:mouseenter={() => (isHoveredLogo = true)}>
			{#if isHoveredLogo}
				<img src="/images/logo_inverted.svg" alt="logo" class="hover: h-4 max-h-8 w-[140px] max-w-[200px] cursor-pointer" />
			{:else}
				<img src="/images/logo.png" alt="logo" class="hover: h-4 max-h-8 w-[140px] max-w-[200px] cursor-pointer invert" />
			{/if}
		</div>

		<div class="relative inline-block">
			<button class="flex h-6 w-6 gap-96 text-white hover:text-[#FFBB00]" on:mouseenter={() => (isHovered = true)} on:mouseleave={() => (isHovered = false)}>
				<FaShoppingCart size="10" />
			</button>

			<Tooltip content={'Cart'} visible={isHovered} />
		</div>
	</div>

	<ul class=" fixed bottom-0 z-10 hidden h-[calc(100vh-72px)] w-full overflow-y-scroll bg-black text-xl !font-light">
		{#each navData as data}
			{#if data.url === undefined}
				<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<li class="mx-6 flex flex-col border-t border-zinc-500 bg-black py-10 text-white" on:click={() => toggleItem(data.name)}>
					<div class="flex cursor-pointer items-center justify-between">
						<p>{data.name}</p>

						<ChevronRight color="white" />
					</div>

					{#if activeItem === data.name && data.children}
						<ul class=" border-6 fixed bottom-0 left-0 z-10 h-[calc(100vh-72px)] w-full overflow-y-scroll border-green-500 bg-black px-6">
							<li class="item-center flex border-b border-zinc-500 py-10">
								<ChevronLeft class="my-auto mr-6" />
								{data.name}
							</li>
							{#each data.children as child}
								{#if child.children?.name == undefined}
									<li>
										<p class="  mx -6 flex flex-col border-b border-zinc-500 py-8 text-white first-of-type:border-b last-of-type:border-b">
											{child.name}---
										</p>
									</li>
								{:else}
									{#each child as data}
										<li class="item-center flex flex justify-between border-b border-zinc-500 py-10">
											{data}
											<ChevronRight class="my-auto mr-6" />
										</li>
									{/each}
								{/if}
							{/each}
						</ul>
					{/if}
				</li>
			{:else}
				<li class="mx-6 border-t border-zinc-500 py-8 text-white">{data.name}llll</li>
			{/if}
		{/each}
	</ul>

	<ul class=" fixed bottom-0 z-10 h-[calc(100vh-72px)] w-full overflow-y-scroll bg-black text-xl !font-light text-white">
		{#each navData as data}
			<li class="mx-6 flex flex-col border-t border-zinc-500 bg-black py-8">
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<div class="flex cursor-pointer items-center justify-between" on:click={() => toggleItem(data.name)}>
					<span>{data.name}</span>
					{#if data.children}
						<ChevronRight />
					{/if}
				</div>

				{#if activeItem === data.name && data.children}
					<ul class="submenu-list fixed bottom-0 left-0 z-10 h-[calc(100vh-72px)] w-full overflow-y-scroll border-zinc-50 bg-black px-6 pl-4">
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<span
							class="flex items-center space-x-6 border-b border-zinc-500 py-8"
							on:click={() => {
								toggleItem(data.name);
								console.log('hiiii');
							}}><ChevronLeft class="my-auto" />{data.name}</span
						>
						{#each data.children as child}
							<li class="submenu-item border-b border-zinc-500 py-8">
								<!-- svelte-ignore a11y_click_events_have_key_events -->
								<div class="flex cursor-pointer items-center justify-between" on:click={() => {toggleSubmenu(child.name)}}>
									<span> {child.name}</span>
									{#if child.children}
										<ChevronRight />
									{/if}
								</div>

								{#if activeSubmenu === child.name && child.children}
									<ul class="sub-submenu-list fixed bottom-0 left-0 z-10 h-[calc(100vh-72px)] w-full overflow-y-scroll border-zinc-500 bg-black px-6 pl-8">
										<!-- svelte-ignore a11y_click_events_have_key_events -->
										<span
											class="flex items-center space-x-6 border-b border-zinc-500 py-8"
											on:click={() => {
												toggleSubmenu(child.name);
												
											}}><ChevronLeft class="my-auto" />{child.name}</span
										>
										{#each child.children as subChild}
											<li class="sub-submenu-item py-8 border-b border-zinc-500 ">
												<a href={subChild.url || '#'}>{subChild.name}</a>
											</li>
										{/each}
									</ul>
								{/if}
							</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
</nav>

<!-- <ul class="ml-4 mt-2 space-y-1">
	{#each child?.children as subChild}
		<li class="text-xs text-gray-400 hover:text-white">{subChild.name}</li>
	{/each}
</ul> -->

<style>
	/* width */
	::-webkit-scrollbar {
		width: 4px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: transparent;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #888;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
</style>

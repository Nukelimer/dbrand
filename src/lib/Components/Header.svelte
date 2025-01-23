<script>
	// @ts-nocheck

	import Tooltip from '$lib/Reusable Component/Tooltip.svelte';
	import { ChevronDown, ChevronRight, ChevronLeft, ChevronDownCircle, User } from 'lucide-svelte';

	// @ts-ignore

	// @ts-ignore
	import FaShoppingCart from 'svelte-icons/fa/FaShoppingCart.svelte';
	// @ts-ignore
	import GoThreeBars from 'svelte-icons/go/GoThreeBars.svelte';
	import GoPerson from 'svelte-icons/go/GoPerson.svelte';

	let isHovered = false;
	let isHovered_Lg = false;
	let isMenuHovered = false;
	let isHoveredLogo = false;
	let isHoveredCart_Lg = false;
	let hoveredItem = null;
	let submenuVisible = false;
	let hideTimeout;

	let isHoveredAccount = false;
	// @ts-ignore
	let isClicked = false;
	let isOpen = false;
	let activeItem = null;
	let activeSubmenu = null;

	function showSubmenu(name) {
		clearTimeout(hideTimeout);
		hoveredItem = name;
		submenuVisible = true;
	}

	function hideSubmenu() {
		hideTimeout = setTimeout(() => {
			submenuVisible = false;
			hoveredItem = null;
		}, 1000);
	}
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
			name: 'Screen Protectors',

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
<nav class="md:hidden">
	<div class=" fixed top-0 z-20 flex w-full items-center justify-between border-b border-zinc-500 bg-[#000000] px-6 py-6">
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div
			class="flex h-6 w-6 gap-96 text-white hover:text-[#FFBB00]"
			on:mouseenter={() => (isMenuHovered = true)}
			on:mouseleave={() => (isMenuHovered = false)}
			on:click={() => {
				isOpen = !isOpen;
			}}
		>
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

	{#if isOpen}
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
									<div
										class="flex cursor-pointer items-center justify-between"
										on:click={() => {
											toggleSubmenu(child.name);
										}}
									>
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
												<li class="sub-submenu-item border-b border-zinc-500 py-8">
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
	{/if}
</nav>

<nav class="hidden md:block">
	<li class=" !z-50 flex items-center justify-around bg-[#000000]">
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="" on:mouseleave={() => (isHoveredCart_Lg = false)} on:mouseenter={() => (isHoveredCart_Lg = true)}>
			{#if isHoveredCart_Lg}
				<img src="/images/logo_inverted_lg.svg" alt="logo" class="my-auto mb-1 h-3 w-8 cursor-pointer" on:mouseleave={() => (isHoveredCart_Lg = false)} on:mouseenter={() => (isHoveredCart_Lg = true)} />
			{:else}
				<img src="/images/lg_logo.png" alt="logo" class=" my-auto mb-1 h-3 w-8 cursor-pointer invert" />
			{/if}
		</div>
		{#each navData as data}
			{#if data.name === 'Account'}
				<img src="/images/account_avatar.png" alt="logo" class="h-4 w-4 cursor-pointer invert" on:mouseleave={() => (isHoveredAccount = false)} on:mouseenter={() => (isHoveredAccount = true)} />

				<Tooltip content={'Account'} position={'almost_ending_right'} visible={isHoveredAccount} />
			{:else}
				<ul class="delay-50 cursor-pointer list-none text-wrap border-b-4 border-[#FFBB00] border-transparent py-6 text-white transition-all hover:border-b-4 hover:border-[#FFBB00] hover:text-[#FFBB00]" on:mouseenter={() => showSubmenu(data.name)} on:mouseleave={hideSubmenu}>
					<span class="">{data.name}</span>
				</ul>
			{/if}
		{/each}

		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<span on:mouseenter={() => (isHovered_Lg = true)} on:mouseleave={() => (isHovered_Lg = false)} class="h-4 w-4 cursor-pointer text-white hover:text-[#FFBB00]"><FaShoppingCart size="10" /></span>
		<Tooltip content={'Cart'} position={'ending_right'} visible={isHovered_Lg} />
	</li>

	{#each navData as data}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		{#if data.url == undefined}
			<!-- Overlay -->
			{#if submenuVisible}
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<div class="fixed inset-0 top-20 z-10 bg-zinc-200 bg-opacity-50" on:click={hideSubmenu}></div>
			{/if}

			<!-- Main Menu -->
			<div class="submenu relative {submenuVisible ? 'visible' : ''} z-20" on:mouseenter={() => (submenuVisible = true)} on:mouseleave={hideSubmenu}>
				{#if hoveredItem === data.name && data.url == undefined}
					<div class="absolute left-0 top-0 w-full border-t border-zinc-500 bg-black py-4 text-white" on:mouseenter={() => showSubmenu(data.name)} on:mouseleave={hideSubmenu}>
						<!-- Main Item Header -->
						<div class="mx-auto flex w-[85%] items-center justify-between py-6">
							<h2 class="text-2xl">{data.name == 'Ghost' ? 'Clear Cases' : data.name}</h2>
							{#if data.name != 'Gaming'}
								<button class="cursor-pointer rounded-md bg-[#FFBB00] px-6 py-3 uppercase text-black">
									{data.name == 'Ghost' ? 'Buy Now' : data.name == 'Skins' ? 'Shop All' : data.name == 'Cases' ? 'Shop All' : data.name == 'Screen Protectors' ? 'Shop All' : data.name == 'Help' ? 'Email Us' : null}
								</button>
							{/if}
						</div>

						<!-- Nested Children -->
						<div class="mx-auto flex w-[85%] justify-between border-t border-zinc-500 pt-6 text-white">
							{#each data.children as child}
								{#if child.children}
									<div class="pb-4">
										<!-- Render Child Name -->
										<h3 class="text-sm font-bold uppercase">{child.name}</h3>

										<!-- Render Further Nested Children -->
										{#if child.children}
											<ul class="pl-4">
												{#each child.children as subChild}
													<li class="py-2">
														<a href={subChild.url} class="text-sm text-zinc-600 hover:text-[#FFBB00]">
															{subChild.name}
														</a>
													</li>
												{/each}
											</ul>
										{/if}
									</div>
								{/if}
							{/each}
						</div>
					</div>
				{/if}
			</div>
		{/if}
	{/each}
</nav>

<style>
	::-webkit-scrollbar {
		width: 4px;
	}

	::-webkit-scrollbar-track {
		background: transparent;
	}

	::-webkit-scrollbar-thumb {
		background: #888;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}

	.submenu {
		top: 0%;
		left: 0;
		width: 100%;
		z-index: 1000;
		opacity: 0;
		visibility: hidden;
		transform: translateY(-10px);
		transition:
			opacity 0.3s ease-in-out,
			visibility 0.3s ease-in-out,
			transform 0.3s ease-in-out;
	}

	.submenu.visible {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}
</style>

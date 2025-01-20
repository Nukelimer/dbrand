<script>
	import Tooltip from '$lib/Reusable Component/Tooltip.svelte';

	import FaShoppingCart from 'svelte-icons/fa/FaShoppingCart.svelte';
	import GoThreeBars from 'svelte-icons/go/GoThreeBars.svelte';

	let isHovered = false;
	let isMenuHovered = false;
	let isHoveredLogo = false;
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<nav class="flex items-center justify-between bg-[#000000] px-6 py-6">
	<div
		class="flex h-6 w-6 gap-96 text-white hover:text-[#FFBB00]"
		on:mouseenter={() => (isMenuHovered = true)}
		on:mouseleave={() => (isMenuHovered = false)}
	>
		<GoThreeBars size="10" />

		<Tooltip content={'Menu'} visible={isMenuHovered} position='left'/>
	</div>

	<div
		class=""
		on:mouseleave={() => (isHoveredLogo = false)}
		on:mouseenter={() => (isHoveredLogo = true)}
	>
		{#if isHoveredLogo}
			<img
				src="/images/logo_inverted.svg"
				alt="logo"
				class="hover: h-4 max-h-8 w-[140px] max-w-[200px] cursor-pointer"
			/>
		{:else}
			<img
				src="/images/logo.png"
				alt="logo"
				class="hover: h-4 max-h-8 w-[140px] max-w-[200px] cursor-pointer invert"
			/>
		{/if}
	</div>

	<div class="relative inline-block">
		<button
			class="flex h-6 w-6 gap-96 text-white hover:text-[#FFBB00]"
			on:mouseenter={() => (isHovered = true)}
			on:mouseleave={() => (isHovered = false)}
		>
			<FaShoppingCart size="10" />
		</button>

		<Tooltip content={'Cart'} visible={isHovered} />
	</div>
</nav>

<script>
	export let content = '';
	export let visible = false;
	export let position = '';

	
</script>

<div
	class={`tooltip-container top-10  ${visible ? 'visible' : ''} ${position == 'left' ? '!left-10 !top-16': position == 'ending_right'? '!left-[97.6%]  !top-16' :position == 'almost_ending_right' ? '!left-[92.7%] !top-16': ''}`}
>
	<div class="tooltip-arrow"></div>
	{content}
</div>

<style>
	.tooltip-container {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		padding: 4px 6px;
		background-color: #ffbb00;
		color: black;
		border-radius: 4px;
		white-space: nowrap;
		pointer-events: none;
		z-index: 10;
		opacity: 0;
		transition:
			opacity 0.4s,
			transform 0.4s;
		transform: translate(-50%, 40px);
	}

	.tooltip-container.visible {
		opacity: 1;
		transform: translate(-50%, 0);
	}

	.tooltip-arrow {
		position: absolute;
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 0;
		border-left: 9px solid transparent;
		border-right: 9px solid transparent;
		border-bottom: 6px solid #ffbb00;
	}
</style>

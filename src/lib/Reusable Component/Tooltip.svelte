<script>
	export let content = '';
	export let visible = false;
	export let position = '';

	const nav = [
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
		}

                ,
		{
			name: 'Gaming',

			children: [
				{
					name: 'Valve',

					children: [
						{ name: 'Steam Deck & OLED', url: '/' },

						
					]
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

						{ name: 'Switch Pro  Controller', url: '/' },

						
					]
				},

				{
					name: 'XBox ',

					children: [
						{ name: 'Series X', url: '/' },

						{ name: 'Series S', url: '/' },

						
					]
				},
                                {
					name: 'Asus',

					children: [
						

						{ name: 'ROG Ally X', url: '/' },
						{ name: 'ROG Ally ', url: '/' },

						
					]
				},
                                 {
					name: 'Asus',

					children: [
						

						{ name: 'Legion Go S', url: '/' },
						{ name: 'Legion Go ', url: '/' },

						
					]
				},
                                 {
					name: 'MSI',

					children: [
						

						{ name: 'Claw A1M', url: '/' },
						

						
					]
				}
			]
		},
                { name: 'Artifacts', url: '/' },
                { name: 'Timeline', url: '/' },



                ,
		{
			name: 'Help',

			
					

					children: [
						{ name: 'Order Lookup', url: '/' },

						{ name: 'Global Status', url: '/' },

						{ name: 'Shipping', url: '/' },

						{ name: 'Installation', url: '/' },

						{ name: 'Contact', url: '/' },

						{ name: 'I need a job', url: '/' },

						
					]
				},

				
             { name: 'Account', url: '/' },     

	];
</script>

<div
	class={`tooltip-container top-10  ${visible ? 'visible' : ''} ${position == 'left' ? '!left-10 !top-16' : ''}`}
>
	<div class="tooltip-arrow"></div>
	{content}
</div>

<style>
	.tooltip-container {
		position: absolute;
		left: 50%;

		transform: translateX(-50%);
		padding: 8px 16px;
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

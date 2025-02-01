<script >
	import Parallax from './components/Parallax.svelte';
	import Parallax_LG from './components/Parallax_LG.svelte';

	const sections = [
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
		{
			text: ['Fold 6 & Flip 6 Cases', 'Better late than never.', 'Available Now'],
			image: '/images/landing_page/fold_flip_cases.webp'
		},
		{
			text: ['Darkplates 2.0', 'Now available for the PS5 Slim.', 'Checkmate, Lawyer'],
			image: '/images/landing_page/darkplates.webp'
		},
		{
			text: ['Area 51', 'Our first 3D-printed skin.', 'Thanks Aliens'],
			image: '/images/landing_page/area_51.webp'
		},
		{
			text: ['Pixel 9 Series', 'Skins, cases, and glass: available now.', 'Take a Look'],
			image: '/images/landing_page/pixel_9.webp'
		},
		{
			text: ['Project Killswitch', 'The ultimate case for the Steam Deck, ROG Ally, and ROG Ally X.', 'Get Yours'],
			image: '/images/landing_page/killswitch.webp'
		},
		{
			text: ['X-ray', 'Medical debt not included.', 'But one, get both'],
			image: '/images/landing_page/xray.webp'
		},
		{
			text: ['Hydrodip', 'Now available portfolio-wide.', 'Have a nice trip.'],
			image: '/images/landing_page/hydrodip.webp'
		},
		{
			text: ['Case Hardened', 'Digital weapon skins, but in real life.', 'Unlock'],
			image: '/images/landing_page/case_hardened.webp'
		},
		{
			text: ['iPad Skins', 'Including the new Pros and Airs.', 'Thanks, Tim'],
			image: '/images/landing_page/ipad_skin.webp'
		},
		{
			text: ['Carnage', 'With great power comes zero responsibility.', 'Unleash carnage'],
			image: '/images/landing_page/carnage.webp'
		},
		{
			text: ['MKBHD Keycaps', 'Yes, they come in matte black.', 'Shop Now', '/limited-edition/mkbhd-keycaps'],
			image: '/images/landing_page/mkbhd_keycaps.webp'
		},
		{
			text: ['MacBook Air M3', 'Always judge a book by its cover.', 'Shop Now'],
			image: '/images/landing_page/mackbook_m3.webp'
		},
		{
			text: ['Galaxy S24 Series', 'Now with MagSafe. Checkmate, Tim.', 'Get Yours'],
			image: '/images/landing_page/S24.webp'
		},
		{
			text: ['OnePlus 12 Skins', "We're as shocked as you are.", 'Shop Now'],
			image: '/images/landing_page/oneplus_12.webp'
		},
		{
			text: ['Beats Skins', 'Overpriced stickers for overpriced headphones.', 'Shop Beats'],
			image: '/images/landing_page/beats_skins.webp'
		},
		{
			text: ['Tempered Glass', "It's either this or a screen replacement.", 'Shop Now'],
			image: '/images/landing_page/t_glass.webp'
		},
		{
			text: ['Teardown', 'Time to see what your money gets you.', 'See inside'],
			image: '/images/landing_page/tear_down.webp'
		},
		{
			text: ['Grip', "The world's grippiest phone case.™", 'Get a grip'],
			image: '/images/landing_page/grip_.webp'
		},
		{
			text: ['AirPods Pro 2', 'Goodbye dental floss.', 'Hello Grip Case'],
			image: '/images/landing_page/airpod_.webp'
		},
		{
			text: ['Something', "It's better than nothing.", 'Go Dark'],
			image: '/images/landing_page/something.webp'
		},
		// {
		// 	text: ['Rabbit R1', 'The device may be a scam...', "...But our skins aren't"],
		// 	image: '/images/landing_page/rabbit_r1.webp'
		// },
		{
			text: ['Arachno Plates', 'Thanks for dropping the ball, [MEGACORP].', 'Buy Now'],
			image: '/images/landing_page/arachno.webp'
		},
		{
			text: ['Fold & Flip', 'We know you can afford this.', 'Prove us right'],
			image: '/images/landing_page/fold_flip.webp'
		},
		{
			text: ['Pixel Fold', 'Skins, cases, and screen protectors.', 'Buy now'],
			image: '/images/landing_page/pixel_fold.webp'
		},
		{
			text: ['Damascus', 'Real-life DLC.', 'Pay to win'],
			image: '/images/landing_page/damascus.webp'
		},
		{
			text: ['Leather', 'Cows died for this.', 'Moo'],
			image: '/images/landing_page/leather.webp'
		},
		{
			text: ['Palettes', 'We know you can afford this.', 'Prove us right'],
			image: '/images/landing_page/palettes.webp'
		},
		{
			text: ['ICONS', 'The MKBHD Collection.', 'Buy Icons'],
			image: '/images/landing_page/icons.webp'
		},
		{
			text: ['Robot City', "You're going to hate it here.", 'Take a trip'],
			image: '/images/landing_page/robot_city.webp'
		},
		{
			text: ['The Verge', 'An unexpected collaboration.', 'Bribe Journalists'],
			image: '/images/landing_page/the_verge.webp'
		},
		{
			text: ['SwitchDeck', 'Switch emulation on your Steam Deck.', 'Try this at home.'],
			image: '/images/landing_page/switch_deck.webp'
		},
		{
			text: ['Skins', 'The future of customization.', 'Shop Skins'],
			image: '/images/landing_page/skins.webp'
		},
		{
			text: ['Verified Stickers', 'Only $8. Checkmate, Elon.', 'Verify anything'],
			image: '/images/landing_page/verified.webp'
		},
		{
			text: ['Gift Cards', 'Like money, but better.', 'Defeat inflation'],
			image: '/images/landing_page/giftcards.webp'
		},
		{
			text: ['Work for us', "We probably won't kill you.", 'Roll the Dice'],
			image: '/images/landing_page/work_4_us.webp'
		}
	];
</script>

<div class="lg:hidden">
	<Parallax {sections} />
</div>

<div class="hidden lg:flex flex-col">
	<Parallax_LG {sections} />
</div>

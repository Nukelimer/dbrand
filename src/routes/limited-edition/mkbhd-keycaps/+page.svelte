<script>
	import MkbhdKeycaps from './component/MKBHD_Keycaps.svelte';

	const data = [
		{
			name: 'The Classic',
			img: '/images/limited-edition/mkbhd-keycaps/classic.webp',
			video: '/video/limited-edition/mkbhd-keycaps/classic.webm',
			moreInfo: { material: 'Aluminum', profile: 'cherry', shape: 'Cyl', size: '1u' },
			price: 29.95,
			mdData: {
				Chassis: 'RED ANODIZED',

				Legend: 'BLACK ENAMEL',

				MATERIAL: 'ALUMINUM'
			}
		},
		{
			name: 'Double Black',
			img: '/images/limited-edition/mkbhd-keycaps/double_b.webp',
			video: '/video/limited-edition/mkbhd-keycaps/double_b.webm',
			moreInfo: { material: 'Aluminum', profile: 'cherry', shape: 'Cyl', size: '1u' },
			price: 29.95,
			mdData: {
				Chassis: 'Black ANODIZED',

				Legend: 'BLACK ENAMEL',

				MATERIAL: 'ALUMINUM'
			}
		},
		{
			name: 'Monochrome',
			img: '/images/limited-edition/mkbhd-keycaps/monochrome.webp',
			video: '/video/limited-edition/mkbhd-keycaps/monochrome.webm',
			moreInfo: { material: 'Aluminum', profile: 'cherry', shape: 'Cyl', size: '1u' },
			price: 29.95,
			mdData: {
				Chassis: 'BLACK ANODIZED',

				Legend: 'WHITE ENAMEL',

				MATERIAL: 'ALUMINUM'
			}
		},
		{
			name: 'Light Mode',
			img: '/images/limited-edition/mkbhd-keycaps/light_mode.webp',
			video: '/video/limited-edition/mkbhd-keycaps/light_mode.webm',
			moreInfo: { material: 'Aluminum', profile: 'cherry', shape: 'Cyl', size: '1u' },
			price: 29.95,
			mdData: {
				Chassis: 'BARE ALUMINUM',

				Legend: 'BLACK ENAMEL',

				MATERIAL: 'ALUMINUM'
			}
		}
	];
	const mdData = [];
</script>

<MkbhdKeycaps {data} />

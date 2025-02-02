<script>
	import RouteHome from '../../../components/Route_Home.svelte';
	const S25Data = [
		{
			img: '/images/catalog/16_skins.webp',
			name: 'iPhone 16 Series Skins',
			perk: 'Ultimate customization',
			url: '/shop/devices/iphone-16-series-skins'
                       
		},
		{
			img: '/images/catalog/16_cases.webp',
			name: 'iPhone 16 Series Cases',
			perk: 'Revulutionary grip',
			url: '/shop/devices/iphone-16-series-phone-cases'
                      
		},
		{
			img: '/images/catalog/16_glass.webp',
			name: 'iPhone 16 Series Glass',
			perk: 'save your screen',
			url: '/shop/devices/iphone-16-series-tempered-glass-screen-protectors'
		}
	];
</script>

<RouteHome productData={S25Data} product={'iPhone 16 Series'} />


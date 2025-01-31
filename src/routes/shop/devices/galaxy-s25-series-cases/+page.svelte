<script>
	import ParallaxS25 from '../galaxy-s25-series-skins/components/Parallax_S25.svelte';
	import ParallaxSm from './components/Parallax_SM.svelte';
	import Parallax_LG from './components/Parallax_LG.svelte';
	const S25Data = [
		{ name: 'Galaxy S25 Ultra', link: 'shop/skins/galaxy-s25-ultra-cases', img: '/images/devices/S25 Series/S25_Ultra_case.webp' },
		{ name: 'Galaxy S25 Plus', link: 'shop/skins/galaxy-s25-plus-cases', img: '/images/devices/S25 Series/S25+_case.webp' },
		{ name: 'Galaxy S25', link: 'shop/skins/galaxy-s25-cases', img: '/images/devices/S25 Series/S25_case.webp' }
	];

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

<div class="bg-black text-white">
	<div class="mx-auto w-full max-w-[1300px]">
		<h1 class="font -helvetica mb-16 pr-6 text-center text-4xl font-extralight sm:ml-12 sm:text-start sm:text-5xl md:text-6xl lg:text-7xl">Galaxy S25 Series Cases</h1>

		<div class=" mx-auto flex w-full flex-col sm:max-w-[660px] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 md:max-w-full md:flex-wrap">
			{#each S25Data as data}
				<a href={data.link} class="">
					<div class="m mx-auto my-2 flex w-[14em] min-w-[7.25rem] flex-col items-center justify-center rounded bg-[#292929] sm:my-0">
						<img src={data.img} alt={data.name} class="my-8 aspect-square h-[171px] w-[87px]" />
						<p class="font-helvetica text-white/55">Samsung</p>
						<h2 class="mb-6 font-semibold transition-colors delay-75 hover:text-[#FFBB00]">{data.name}</h2>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<div class="mt-8 bg-[#141414] py-16">
		<h4 class="text px-12 text-center font-helvetica text-xl leading-8">
			Combining military-grade impact protection with a striking minimalist design, the dbrand Grip™ is the most advanced Galaxy case in the world. Buy a <a href="fix-me" class="text-[#ffbb00]">Galaxy S25 case</a>,
			<a href="fix-me" class="text-[#ffbb00]">Galaxy S25 Plus case</a>
			or <a href="fix-me" class="text-[#ffbb00]">Galaxy S25 Ultra case</a>
			today. The best part? You can customize it with your choice of skin. What are you waiting for? Get buying.
		</h4>
	</div>

	<div class="hidden h-screen flex-row-reverse">
		<div class="flex-1">
			<img src="/images/devices/S25 Series/ruler.webp" alt="ruler picture_" class="h-full w-full object-cover" />
		</div>

		<div class="flex flex-1 items-center justify-center">
			<p class="px-16 font-helvetica text-lg tracking-wide">
				Achieving a clean, custom look for your Galaxy has never been easier thanks to our ultra-thin <a href="--" class="text-[#ffbb00]">Galaxy S24 Ultra skins</a> . At just 0.25mm, our <a href="--" class="text-[#ffbb00]">Galaxy S24 Ultra skins</a> enable factory-fit customization without any added
				bulk. Just pick a design, buy a <a href="--" class="text-[#ffbb00]">Galaxy S24 skins</a>, and leave the rest to us.
			</p>
		</div>
	</div>
</div>
<div class="">
	<ParallaxS25
		style="h-[450px]"
		section={[
			{
				text: ['Every year, the US Military burns through $700,000,000,000. On what? Nobody knows. For only 0.0000000057% of the annual defense budget, you can do the same. But with a <a href="--" class="text-[#ffbb00]">Galaxy S24 Ultra case</a>. Checkmate, Eisenhower.'],
				image: '/images/devices/S25 Series/every_year.webp'
			}
		]}
	/>

	<ParallaxS25
		style="h-[450px]"
		section={[
			{
				text: [
					'Samsung spent a tremendous sum of money making the click on your Galaxy S24 buttons feel immaculate. We spent far less, yet somehow managed to make them feel even better with our <a href="--" class="text-[#ffbb00]">Galaxy S24 cases</a> Impossible, you say? Our button scientists disagree.'
				],
				image: '/images/devices/S25 Series/samsung.webp'
			}
		]}
	/>

	<ParallaxS25
		style="h-[450px]"
		section={[
			{
				text: [
					'See those microscopic ridges? Each is a textured dot, invisible to the naked eye. There are literally thousands of them spanning the surface of the Grip, creating a tremendous number of grippy contact points for your butterfingers. The result? You’ll never drop your <a href="--" class="text-[#ffbb00]">Galaxy S24 plus cases</a> again.'
				],
				image: '/images/devices/S25 Series/microscope.webp'
			}
		]}
	/>
</div>

<div class="hidden">
	<Parallax_LG
		sections={[
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
		]}
	/>
</div>

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum iure nisi ut suscipit corrupti vero corporis asperiores modi similique consequuntur assumenda debitis dolores, nobis eveniet exercitationem architecto tempora in esse, ipsum error. Mollitia doloremque quidem blanditiis aliquid aspernatur natus amet corrupti vero expedita. Laborum sapiente nesciunt, ipsam quidem aliquam tempore soluta maxime nulla facilis at rem expedita corrupti itaque suscipit accusantium id provident est fuga. Cupiditate labore unde vitae, corporis aliquam eum non quod iure possimus consequuntur? Est quo maxime doloremque, dolorem placeat quae expedita similique, soluta alias aperiam sit eveniet quos numquam delectus eaque? Distinctio quas quidem veniam minus dolor laboriosam eveniet pariatur? Iusto aperiam quia beatae, distinctio alias ipsa voluptates facilis sint inventore nemo sapiente dolorem vero! Excepturi, iure. Esse exercitationem dicta dolor modi architecto rerum quasi nihil magnam possimus! Tenetur id culpa officia repudiandae provident eum eos laudantium nemo, maiores consequatur deserunt distinctio sint delectus! Beatae, ducimus impedit! Nulla quas, recusandae officia in illum ullam repudiandae eos deserunt aut nesciunt rerum asperiores quisquam error reiciendis quia alias debitis sint mollitia, rem voluptas! Expedita enim sed, impedit modi autem recusandae ex amet sapiente fugiat laudantium, nemo hic earum consequuntur. Eum totam veritatis aliquam voluptatem obcaecati ut temporibus, deleniti, sed non, vero est quo in illum! Distinctio non fuga delectus accusamus, placeat impedit optio ipsam vitae inventore, quis, similique sapiente. Ipsa molestiae porro veritatis numquam cumque neque animi praesentium illo similique quos incidunt illum natus officiis minima maiores dolore corrupti deserunt ipsam placeat modi, velit tempore quia itaque! Ipsam ipsum, quasi asperiores sequi vel dicta odio. Consequatur atque, accusantium a illo mollitia, necessitatibus accusamus alias nisi maxime recusandae sequi voluptatum? Consequuntur omnis laborum ipsum, aliquid nesciunt delectus voluptatem, quo quaerat sequi sunt quasi optio unde ut doloribus quisquam tempora perspiciatis sed eveniet provident blanditiis aliquam repellendus non nulla. Magni temporibus necessitatibus ex quaerat quo tempora dolor est, consectetur ea quod itaque, eligendi ut fuga suscipit expedita dicta delectus fugiat soluta ipsam hic corrupti. Quasi amet quis quidem aut consectetur reiciendis libero adipisci quos necessitatibus. Vel deserunt fugiat laboriosam eveniet ex possimus tempora explicabo officia nisi saepe ipsam officiis, aliquid consectetur odit eligendi excepturi. Cum dolore at odio reiciendis, itaque velit laudantium nostrum, blanditiis explicabo neque quia ex architecto ad corrupti tempora asperiores, necessitatibus iusto harum. Ratione numquam neque porro officiis ipsam hic saepe blanditiis, facere sunt distinctio qui eligendi minus dolorum inventore iusto corporis exercitationem laboriosam! Ipsum doloremque quis earum voluptates obcaecati explicabo voluptatum velit, temporibus aliquam, deserunt, sunt odit alias fugit omnis porro amet repellendus reiciendis quasi necessitatibus consequuntur odio tempora. Repellendus autem qui sit repudiandae provident! Et accusantium nesciunt corporis, facere at minus beatae dolorum quam ipsam molestias eos iure dolor id voluptas officia eveniet. Omnis mollitia molestiae nisi cupiditate facere alias, accusantium, architecto ipsum, doloremque autem fugiat similique dicta aspernatur suscipit vitae qui amet dolor excepturi accusamus hic ipsa repellat! Quis optio culpa perspiciatis hic. Asperiores provident quis rem reiciendis illum incidunt dicta nostrum nesciunt dolorem quasi corporis tenetur animi aspernatur ad placeat porro, debitis laudantium sit veritatis. Unde itaque sint, deserunt cumque distinctio placeat laborum pariatur esse nam nulla quo vero eos. Accusantium possimus commodi suscipit? Ea, obcaecati earum voluptas omnis quidem dignissimos fugiat autem dicta. Vero fugit sed, tempore numquam iure quaerat animi blanditiis libero impedit qui aspernatur ipsa architecto magni, quisquam repellendus ullam porro necessitatibus. Consectetur dolorum temporibus, sapiente eligendi at provident repellendus voluptas cumque, esse nihil iure perferendis qui ratione iusto nesciunt odio? Velit architecto natus deleniti iste eius, at molestias, neque odit eligendi vitae aperiam mollitia. Architecto repellendus consequatur quasi, nisi incidunt ipsam nostrum neque praesentium iste officiis earum eligendi. Non quis blanditiis repudiandae distinctio quos ipsa quaerat rem tenetur ducimus animi? Commodi dolorum ducimus suscipit alias mollitia voluptates eligendi consectetur saepe, rerum officia a iste, maiores ab ullam! Adipisci, voluptatibus! Reiciendis sit eum optio fuga officiis porro, praesentium consectetur ratione vel. Nobis accusamus, maxime cupiditate voluptas fugit velit nisi repellat deserunt, error ducimus veritatis quos assumenda vero rem beatae quia veniam reiciendis facere. Rem nesciunt omnis neque consequatur nam, quos earum architecto id a dolor sit. Eius aliquam pariatur temporibus a doloribus beatae veniam porro maxime, placeat nihil accusamus vitae necessitatibus obcaecati laborum, iste voluptatum ut, asperiores fugit amet sunt. Obcaecati similique magni omnis ipsa corrupti repellat accusantium nesciunt deserunt error minus temporibus laborum sit quidem vero nostrum ducimus, tempore tempora atque nihil sapiente, vitae animi. At, dolorum est accusamus nobis voluptatibus, numquam dolorem nam soluta obcaecati architecto tempora cumque quisquam eligendi consectetur adipisci reiciendis nesciunt molestiae culpa quasi ad et? Adipisci iusto eius qui, cumque velit magnam repellat? Quidem ea illo repudiandae unde sit! Neque molestiae qui animi temporibus tenetur corporis quo quisquam nostrum esse, mollitia placeat aut minus magnam id minima suscipit iusto, facere ipsum explicabo voluptatem, eos magni voluptate! Illum sapiente cumque ratione beatae iste neque! Officiis illo voluptas enim quaerat. Perspiciatis saepe illo enim delectus quasi? Accusantium voluptas excepturi delectus repellendus dolore consectetur dolores ratione obcaecati fuga assumenda! Quos nihil autem, nobis voluptatum quod natus sunt omnis explicabo magni, aspernatur debitis porro provident reprehenderit eligendi odio perferendis quae pariatur, adipisci minus amet nemo. Laudantium magnam tenetur voluptatibus et. Modi excepturi voluptas quasi, velit, id impedit ullam commodi, quam quaerat rem quis repellendus quisquam reprehenderit qui illum perferendis porro? Saepe dolorem adipisci quidem. Laborum voluptates possimus mollitia quisquam modi ea natus earum voluptatem rerum qui maiores, laudantium eveniet labore dolore culpa nulla rem nisi explicabo obcaecati! Labore nesciunt veritatis sequi eum delectus ea optio et voluptates debitis dignissimos cum necessitatibus inventore, vel quibusdam deleniti adipisci fuga tempora ipsa, voluptate ipsam asperiores consectetur error. Provident, temporibus modi! Architecto enim nam, odit earum ipsam eveniet corporis in, exercitationem nisi voluptate officia eius vel saepe reiciendis fugit maiores et repellendus illum accusantium voluptatibus optio. Inventore nobis praesentium, fugiat provident obcaecati nisi laborum iusto vero pariatur veritatis, molestiae dolor laboriosam libero rerum expedita. Sint minus ipsa nostrum laborum aliquam, atque maxime, qui praesentium ipsum quidem neque dicta accusantium aliquid dolores consequuntur, modi earum sequi eaque illo eligendi ullam cupiditate. Temporibus voluptatibus expedita, similique iure eius culpa quo! Eveniet iure facere quas quibusdam maxime accusantium omnis nihil possimus sit. Earum accusantium maxime nesciunt maiores harum ducimus atque molestias, saepe minima quis quibusdam sed iste obcaecati ex praesentium illo id, suscipit in non? Exercitationem dolor sunt expedita quo temporibus explicabo facilis debitis quidem ea. Sit mollitia sapiente fugit itaque repellendus, ducimus quidem reprehenderit alias cupiditate dolores officia sed quisquam magnam ipsam. Earum aliquam obcaecati id est quibusdam excepturi praesentium numquam laboriosam cupiditate, ab dolorum natus sit dolores maiores facere laborum assumenda vero porro tempore deserunt eos aliquid! Culpa, delectus debitis! Ut necessitatibus accusantium ex blanditiis, dolore itaque at porro? Natus eveniet a perspiciatis, saepe odio sequi, in ab laborum cupiditate doloremque excepturi culpa harum ut autem recusandae delectus vitae vel assumenda provident. Necessitatibus nulla fugit consequatur error explicabo, eos quidem quae autem delectus deserunt sapiente possimus, unde facilis voluptas rerum aliquid consequuntur iure aperiam odio nemo sunt amet! Odit, rerum alias? Excepturi fugit ipsum omnis illum voluptatem, obcaecati earum ipsa, officia debitis sint ducimus qui culpa quasi suscipit, placeat iusto minus necessitatibus cupiditate alias esse laboriosam ex? Ab consectetur dolorum laudantium fugiat quidem doloribus, nam est alias soluta fugit rem? Esse ad magnam sit eum necessitatibus illo omnis laboriosam ipsa quisquam ducimus corporis fugiat minima aspernatur quasi, repellendus doloremque eveniet quidem natus facere aut repellat dolor consequuntur. Quisquam at praesentium ipsam, deleniti doloremque fuga in nemo quod. Tempore ab officia doloribus commodi animi et accusamus? Vero vitae a itaque quasi mollitia laboriosam harum officia dicta optio reiciendis sapiente exercitationem nam excepturi amet, blanditiis molestias. Delectus, quae libero illum eaque quo sapiente repudiandae reprehenderit alias ratione accusantium vero. Quis magnam accusantium optio accusamus placeat nam nesciunt unde voluptas beatae, alias molestiae voluptatum voluptate consectetur nemo officia, sequi eaque quam temporibus! Quis assumenda porro, esse ducimus debitis quisquam laborum voluptatum consequatur laboriosam, possimus enim expedita illum labore obcaecati vero aperiam amet incidunt harum vel? Necessitatibus quibusdam fugiat repellat id minus debitis quos aliquid molestias delectus aliquam, tenetur suscipit quis adipisci voluptatum, beatae explicabo nemo quae minima omnis rerum! Explicabo adipisci in voluptatum laudantium enim molestiae distinctio necessitatibus consequuntur amet, maiores iste, ea beatae aut, facilis architecto laborum ex odio fugiat quisquam odit doloribus nemo repellendus unde atque? Rem aut beatae dolorum, quos quaerat quam harum non, aspernatur neque odio dolores nesciunt architecto iure. Sunt eligendi tenetur inventore, cum ex minima quidem quam consequatur rem laudantium nobis aperiam. Totam fugit repellendus fuga nam qui in sapiente explicabo et nemo accusamus, quisquam perferendis modi aspernatur error voluptatibus! Minima error nobis inventore. Quibusdam perferendis odit nemo officiis minus deleniti, eveniet distinctio magni, nulla amet nihil. Voluptatum ratione provident repellat ipsa dolor adipisci. Ducimus et autem voluptatem rerum ab consequatur a, tenetur ipsa iusto dicta error, vel placeat eligendi similique rem quibusdam harum eius commodi sit reiciendis officia. Dolores numquam placeat cum ipsa nobis sapiente culpa eos est, fugit amet dicta, aperiam itaque molestias inventore officia, ab ad tempora sint rem maxime ipsum quam aliquam. Nemo quaerat minus iste non incidunt minima voluptas nulla accusantium? Soluta, ea. Vitae alias eius ea sit. Nostrum harum dolore cupiditate praesentium, debitis necessitatibus quibusdam repudiandae aperiam ipsa, sapiente unde dolor molestiae sequi nam, quas inventore placeat eligendi error. Inventore iure delectus eveniet quisquam aut ea possimus alias sit, magni sunt dolor quae animi quis reiciendis accusamus vero. Culpa laudantium tempore impedit in officia odio ipsa. Nobis magnam eligendi odio suscipit praesentium, laborum nam dolorum voluptates quisquam alias illum perferendis tempore necessitatibus omnis laboriosam beatae ut repellendus natus! Laborum accusantium magnam animi consequatur, quo vero aliquam distinctio voluptas eveniet. Explicabo vel, nemo deserunt quod numquam laudantium natus sequi eos accusantium officiis. Voluptates nostrum fuga deserunt quo autem, sint soluta praesentium asperiores at neque voluptatum in, excepturi tempora corrupti nam, odit dolores aliquid dolore! Nemo aliquid, aliquam, facere officia laboriosam neque repellendus, culpa ea ut eos cupiditate magnam. Sequi, odio, illo, necessitatibus placeat animi delectus minus alias perferendis velit eum dolor! Tempore eligendi consequatur rem atque. Officia assumenda nihil expedita et atque sed nobis accusamus perferendis rerum quidem ullam cupiditate impedit suscipit, ipsa alias, reprehenderit eligendi consequuntur? Quaerat laborum harum voluptates! Aperiam possimus optio officia repudiandae animi dolorum earum repellendus minima necessitatibus accusamus harum alias iste dolor dignissimos quasi mollitia cumque saepe maxime, a modi eum enim blanditiis quibusdam illo! Rerum delectus quidem nobis laboriosam voluptatum, saepe, culpa ad sint deleniti recusandae debitis. Ab ratione maxime velit natus animi exercitationem aspernatur non veniam ex. Voluptatem aliquam ab vero enim, cumque quae fuga optio quidem non voluptates, exercitationem suscipit vel voluptatibus odio consequatur adipisci ipsa totam dolor mollitia accusamus veniam. Minima, quidem expedita pariatur fugit necessitatibus odit eum facilis ullam blanditiis, fugiat eligendi quos harum quod? Quis, eaque eveniet cumque laboriosam quas velit provident libero iste autem? Eaque temporibus ullam illo laudantium nostrum explicabo perferendis! Accusamus expedita alias praesentium at delectus officiis itaque odio molestias nisi sunt magnam, magni, saepe eum nostrum quia sequi quod fugiat libero amet quam mollitia! A assumenda quasi ipsam repellendus doloribus veritatis consequuntur ut expedita architecto natus, molestiae ea nihil non provident, obcaecati incidunt est nostrum. Dolorum assumenda provident tempore cumque tenetur, reprehenderit mollitia, dicta consectetur ipsum suscipit veniam, nihil quaerat asperiores cum maiores natus! Ad, ipsa. Quibusdam nobis dolor ipsa facere neque provident? Quae, animi! Vitae in illum adipisci at libero qui impedit. Qui fugiat saepe dolorem iusto officiis vero repellendus mollitia in est dolores, non dicta a eius, praesentium harum. Repellat dolores quia voluptate delectus ea harum? Atque totam distinctio corporis similique provident suscipit fugiat consequuntur esse magni ipsam, asperiores pariatur beatae deserunt illum minima modi eaque voluptatem iste accusantium aliquid veritatis id. Minus, beatae sequi optio voluptatem nemo explicabo enim expedita voluptatibus temporibus cum, consectetur ipsam eos facilis excepturi hic sunt suscipit officia facere similique accusamus repudiandae cupiditate soluta. Dolores fuga ipsum atque tenetur, praesentium exercitationem distinctio numquam accusamus, facere quos doloremque id blanditiis pariatur labore cumque sequi cupiditate deserunt illo ducimus inventore recusandae! Dolorem inventore quaerat asperiores quae nam beatae ducimus et ratione delectus aliquam. Culpa, magni?
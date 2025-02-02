<script>
	import ParallaxS25 from '../galaxy-s25-series-skins/components/Parallax_S25.svelte';

	const S25Data = [
		{ name: 'Galaxy S25 Ultra', link: '/shop/skins/galaxy-s25-ultra-skins', img: '/images/devices/S25 Series/S25 Ultra.webp' },
		{ name: 'Galaxy S25 Plus', link: '/shop/skins/galaxy-s25-plus-skins', img: '/images/devices/S25 Series/S25+.webp' },
                { name: 'Galaxy S25', link: '/shop/prism/galaxy-s24-ultra-tempered-glass-screen-protectors', img: '/images/devices/S25 Series/S25.webp' },

		{ name: 'Galaxy S24 Ultra', link: '/shop/prism/galaxy-s24-ultra-tempered-glass-screen-protectors', img: '/images/devices/S25 Series/S24_Ultra.webp' },
                

		{ name: 'Galaxy S24 Plus', link: '/shop/prism/galaxy-s24-plus-tempered-glass-screen-protectors', img: '/images/devices/S25 Series/S24+.webp' },
                { name: 'Galaxy S24', link: '/shop/prism/galaxy-s24-plus-tempered-glass-screen-protectors', img: '/images/devices/S25 Series/S24+.webp' },
                { name: 'Galaxy Z Fold 6', link: '/shop/prism/galaxy-s24-plus-tempered-glass-screen-protectors', img: '/images/devices/S25 Series/Z_Fold_6.webp' },
                { name: 'Galaxy Z Fold 6', link: '/shop/prism/galaxy-z-fold-6-tempered-glass-screen-protectors-case-friendly', img: '/images/devices/S25 Series/Z_Fold_6.webp' },
                 { name: 'Galaxy Z Fold 5', link: '/shop/prism/galaxy-s24-plus-tempered-glass-screen-protectors', img: '/images/devices/S25 Series/Z_Fold_5.webp' },
                { name: 'Galaxy Z Fold 5', link: '/shop/prism/galaxy-z-fold-6-tempered-glass-screen-protectors-case-friendly', img: '/images/devices/S25 Series/Z_Fold_5.webp' },

                 { name: 'Galaxy Z Flip 6', link: '/shop/prism/galaxy-s24-plus-tempered-glass-screen-protectors', img: '/images/devices/S25 Series/Z_Flip_6.webp' },
                { name: 'Galaxy Z Flip 6', link: '/shop/prism/galaxy-z-fold-6-tempered-glass-screen-protectors-case-friendly', img: '/images/devices/S25 Series/Z_Flip_6.webp' },
                { name: 'Galaxy Z Flip 5', link: '/shop/prism/galaxy-s24-plus-tempered-glass-screen-protectors', img: '/images/devices/S25 Series/Z_Flip_5.webp' },
                { name: 'Galaxy Z Flip 5', link: '/shop/prism/galaxy-z-fold-6-tempered-glass-screen-protectors-case-friendly', img: '/images/devices/S25 Series/Z_Flip_5.webp' },
                 { name: 'Galaxy S23 Plus', link: '/shop/prism/galaxy-s24-plus-tempered-glass-screen-protectors', img: '/images/devices/S25 Series/S23+.webp' },
                { name: 'Galaxy S23', link: '/shop/prism/galaxy-z-fold-6-tempered-glass-screen-protectors-case-friendly', img: '/images/devices/S25 Series/S23.webp' },
	];
</script>

<div class="bg-black text-white">
	<div class="mx-auto w-full max-w-[1300px]">
		<h1 class="font -helvetica mb-16 pr-6 text-center text-4xl font-extralight sm:ml-12 sm:text-start sm:text-5xl md:text-6xl lg:text-7xl">Samsung Galaxy Tempered Glass</h1>

		<div class=" mx-auto flex w-full flex-col sm:max-w-[660px] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 md:max-w-full md:flex-wrap">
			{#each S25Data as data}
				<a href={data.link} class="">
					<div class="m mx-auto my-2 flex w-[14em] min-w-[7.25rem] flex-col items-center justify-center rounded bg-[#292929] sm:my-0">
						{#if data.img == '/images/devices/S25 Series/Z_Fold_6.webp'
                                                ||
                                                
                                                data.img == '/images/devices/S25 Series/Z_Fold_5.webp' }
                                                        <img src={data.img} alt={data.name} class="my-8 aspect-square h-[161px] w-[127px] " />

                                                        {:else}
                                                        <img src={data.img} alt={data.name} class="my-8 aspect-square h-[161px] w-[77px] " />
                                                {/if}
						<p class="font-helvetica text-white/55">Samsung</p>
						<h2 class="mb-6 font-semibold transition-colors delay-75 hover:text-[#FFBB00]">{data.name}</h2>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<div class="bg-[#141414] py-16">
		<h4 class="text px-12 text-center font-helvetica text-xl leading-8">
			You've had far too many smartphone displays become a mess of micro-scratches over the years. Don't leave your Galaxy up to chance. Avoid the inevitable with a set of the <a href="fix-me" class="text-[#ffbb00]">best Galaxy Z Flip 6 screen protectors</a> or <a href="fix-me" class="text-[#ffbb00]">Galaxy Z Fold 6 screen protectors</a>, courtesy of dbrand. Our Tempered Glass <a href="fix-me" class="text-[#ffbb00]">Galaxy S24 Plus screen protector </a> isn't just an insurance policy, it's less likely to scratch in the first place. The best part? Our <a href="fix-me" class="text-[#ffbb00]">Galaxy S24 Ultra screen protectors </a> come with an easy-to-use applicator to help your installations go from "passable" to "perfect." <a href="fix-me" class="text-[#ffbb00]">Galaxy S24 screen protectors </a>: they're cheaper than replacing your screen. Oh - and did we mention each order comes with a two-pack?
		</h4>
	</div>

	<div class="hidden h-screen flex-row-reverse md:fl ex">
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


Making the most precise edge-to-edge <a href="/shop/prism/galaxy-z-fold-5-tempered-glass-screen-protectors">Galaxy Z Fold 5 screen protector</a> in the world is a trivial task for the robots at dbrand. The applicator tray included with our <a href="/shop/prism/galaxy-z-flip-5-tempered-glass-screen-protectors">Prism 2.0 Galaxy Z Flip 5 screen protector</a> makes your installation even easier. dbrand's <a href="/shop/prism/galaxy-s23-plus-tempered-glass-screen-protectors">Tempered Glass Galaxy S23 Plus screen protector</a> is ultra-thin, has smooth rounded edges, and is as hard as quartz - that's a 7 on the Moh's scale of hardness, if you've never seen a JerryRigEverything video.



With 100% optical clarity and best-in-class oleophobic coating, it's everything your hands and eyes could ever want out of a <a href="/shop/prism/galaxy-s23-tempered-glass-screen-protectors">Galaxy S23 screen protector</a>. dbrand's <a href="/shop/prism/galaxy-s24-ultra-tempered-glass-screen-protectors">Galaxy S24 Ultra Tempered Glass</a>: it's like every other screen protector you've ever had... but better in every way.
<div class="">
	<ParallaxS25
		section={[
			{
				text: [
					`Making the most precise edge-to-edge <a class="text-[#ffbb00]" href="/shop/prism/galaxy-z-fold-5-tempered-glass-screen-protectors">Galaxy Z Fold 5 screen protector</a> in the world is a trivial task for the robots at dbrand. The applicator tray included with our <a class="text-[#ffbb00]" href="/shop/prism/galaxy-z-flip-5-tempered-glass-screen-protectors">Prism 2.0 Galaxy Z Flip 5 screen protector</a> makes your installation even easier. dbrand's <a class="text-[#ffbb00]" href="/shop/prism/galaxy-s23-plus-tempered-glass-screen-protectors">Tempered Glass Galaxy S23 Plus screen protector</a> is ultra-thin, has smooth rounded edges, and is as hard as quartz - that's a 7 on the Moh's scale of hardness, if you've never seen a JerryRigEverything video.`
				],
				image: '/images/devices/S25 Series/fold_knife.webp'
			}
		]}
	/>

        <ParallaxS25
		section={[
			{
				text: [
					`With 100% optical clarity and best-in-class oleophobic coating, it's everything your hands and eyes could ever want out of a <a class="text-[#ffbb00]" href="/shop/prism/galaxy-s23-tempered-glass-screen-protectors">Galaxy S23 screen protector</a>. dbrand's <a class="text-[#ffbb00]" href="/shop/prism/galaxy-s24-ultra-tempered-glass-screen-protectors">Galaxy S24 Ultra Tempered Glass</a>: it's like every other screen protector you've ever had... but better in every way.`
				],
				image: '/images/devices/S25 Series/sammy.webp'
			}
		]}
	/>
</div>

<div class="hidden">
	Lorem ipsum dolor sit amet consectetur, adipisicing elit. At distinctio perspiciatis, corporis maxime voluptatem veniam nobis in dignissimos sint, modi voluptas incidunt repellat, doloribus itaque eum saepe. Odio, quam! Tempore deserunt cupiditate eius esse veniam, vitae eaque at hic perferendis
	iste atque itaque quidem, id ad saepe veritatis modi iure debitis? Autem aliquid inventore aperiam architecto omnis sed dolores nesciunt libero dolorum nihil accusantium corporis cum hic, quaerat culpa perferendis veniam consequuntur sit. Sed nesciunt sapiente nostrum assumenda illum, voluptatum
	saepe dolorem possimus facilis totam ad iste soluta, rem ut tempora debitis nulla placeat eaque alias pariatur voluptate neque harum! Maiores perspiciatis odit dolore nemo esse, rem recusandae velit facere impedit, inventore qui quasi rerum. Cumque mollitia provident cum, eaque similique nostrum
	alias earum magnam, nemo rem ipsum itaque ea voluptate qui, assumenda sit odio amet. Architecto cumque perspiciatis, placeat omnis, sunt harum facere, similique modi ad at id velit maxime molestiae corporis quisquam. Facilis facere similique ullam amet odio quibusdam, itaque suscipit optio ipsa
	ipsam veritatis minus nam vitae odit sed. Debitis maiores, amet, non odit cumque consequatur porro fugit distinctio illum, dicta quo quas sit sint obcaecati. Distinctio provident maxime culpa nobis magni beatae illum reiciendis blanditiis sint. Quos impedit qui molestias repellat eius iure tempora
	quae voluptatum inventore dolor expedita fugit rerum molestiae, at vitae eos amet facilis exercitationem. Itaque debitis minus eum, ab blanditiis recusandae aspernatur nam cupiditate quisquam quo fugiat facere dolorum, ullam a error voluptatem reiciendis assumenda fuga? Ut itaque adipisci
	veritatis eveniet quisquam commodi magnam, amet pariatur natus? Rem nobis pariatur non voluptatum nesciunt tempore. Rem possimus magnam dicta quos placeat. Odit illum eum esse debitis quasi numquam beatae, porro voluptas facere nam veniam velit voluptatibus possimus rerum laudantium ullam sunt
	eaque nesciunt nisi. At ipsam soluta ad error repellat suscipit enim perspiciatis, aliquam deserunt dolore, quibusdam, dignissimos temporibus nemo. Perspiciatis corrupti ad ut unde nam sint dolorem id at corporis? Quibusdam delectus voluptatibus, a similique odio eos deleniti non molestiae
	sapiente sit debitis voluptate aspernatur voluptas aliquam nihil, officiis asperiores. Minima libero deleniti incidunt repellendus, consequatur itaque mollitia, inventore consequuntur saepe, rerum facilis. Ullam nemo accusantium nam doloribus odio fugiat asperiores architecto molestiae. Minima
	totam aliquam, numquam mollitia repellendus beatae quo voluptate enim quasi eligendi. Vitae consequatur hic omnis recusandae totam, reprehenderit quos adipisci aliquam aliquid consequuntur soluta quis nisi? Repudiandae, similique dolorum tempora distinctio voluptate rem aut quos asperiores eveniet
	explicabo! Minus error ipsa reprehenderit blanditiis asperiores harum quisquam eos suscipit temporibus id officia magnam vero, necessitatibus incidunt? Sit autem voluptas libero voluptates necessitatibus fuga provident incidunt. Tempore necessitatibus, accusantium iure veniam aspernatur architecto
	praesentium mollitia commodi in sed accusamus explicabo voluptas obcaecati. Aperiam facere beatae corrupti! Enim odio tenetur molestias, qui sint dignissimos quaerat magni ipsam minima velit esse dolore reiciendis vel incidunt fugit eaque, dolorum sunt unde optio ratione soluta? Est, laudantium
	tempora hic unde quaerat nobis corrupti aliquam nemo voluptas officiis possimus blanditiis quam, sint nostrum fugiat nisi ipsa laboriosam delectus alias aliquid consequuntur odit tenetur! Accusantium nihil aliquid libero consectetur reiciendis magnam totam cupiditate, ex delectus nostrum
	consequatur repellat ducimus debitis, voluptates eaque deserunt. Fuga possimus blanditiis ullam aut quisquam molestiae dicta sed esse odio, tempore exercitationem veritatis tenetur deleniti quis ducimus hic animi. Sequi corrupti accusamus explicabo, neque velit laborum hic perspiciatis!
	Dignissimos, odit consequuntur, officia voluptate accusantium error sequi asperiores illo sint debitis similique magni sapiente veniam expedita tenetur? Nesciunt qui et, quasi, reprehenderit distinctio voluptatum laborum ipsum iste perferendis, magni beatae voluptates aliquid id aliquam
	voluptatibus explicabo fugit deleniti voluptas consectetur atque facere maiores rem? Delectus ullam eveniet beatae quidem. Odio quidem aperiam commodi, officiis ipsa ipsum voluptatem labore enim dolore aliquam dignissimos doloribus officia nihil illum accusantium velit? Provident repellat
	laboriosam odit deserunt asperiores natus tempore adipisci sit incidunt, culpa iusto commodi itaque omnis consequuntur ab. Neque optio error aspernatur sequi non. Suscipit voluptates quia fugiat accusamus voluptatum distinctio exercitationem ab minima? Incidunt doloribus adipisci laboriosam
	sapiente distinctio. Fugit a incidunt fuga illo, blanditiis delectus itaque quis quo in obcaecati eum eos tempore iste omnis? Debitis nulla qui neque aut, nobis, nesciunt quam praesentium impedit delectus quos, porro at magnam necessitatibus veniam vel libero cupiditate deserunt et harum nam ipsum
	officiis. Eveniet quas rerum voluptatem maxime atque quisquam qui modi odit ipsum, minima laborum, delectus dolores, officia praesentium repellendus aliquam obcaecati deserunt deleniti tempora dolor at cumque commodi doloribus error! Sint veniam repellat optio impedit mollitia, odit cumque minima
	alias autem accusamus laudantium, ad molestiae, perferendis possimus. Rem, voluptate! Impedit, laboriosam. Omnis, a nam error et rerum, fugiat corrupti, aspernatur alias molestias distinctio voluptatum illo deserunt ut quasi vitae soluta consequatur repellendus quas ad nemo cum unde sint est
	pariatur! Quisquam dignissimos modi doloribus corrupti aspernatur fugit ad officia similique aliquid perspiciatis odio iure nesciunt non magni distinctio eligendi excepturi architecto nostrum sint voluptates totam, quo nulla. Dolor, fuga! Veritatis deleniti dolorem ratione perspiciatis provident
	natus corrupti deserunt voluptatem, quibusdam porro neque nostrum blanditiis magni quaerat iusto laudantium rerum a aperiam, quisquam odio, alias eaque. Illum saepe debitis modi ducimus tempora aut assumenda, quo nihil eum aliquid! Eius et nobis accusamus incidunt debitis quos enim adipisci
	quaerat suscipit fugit excepturi voluptates architecto quas vel est, temporibus distinctio modi? Doloremque laudantium corrupti recusandae ipsam totam ullam est dolorum ex voluptatem at, deserunt repudiandae unde aut, nemo voluptates error laborum reprehenderit dolore dolorem! Nam necessitatibus
	dicta dolore labore autem quo, ut natus vero provident quas asperiores ea id, eos minima pariatur? Quaerat nulla consequuntur id sit molestiae commodi consectetur corrupti optio vitae autem, non doloremque vero atque aliquid quisquam tempora, deleniti doloribus illum ipsam laboriosam! Voluptates
	placeat vero eius nihil quod beatae eos, corporis a, eligendi assumenda perferendis adipisci quia reiciendis alias aspernatur iste in voluptatem quos odit tempora quidem eveniet! Veniam tenetur enim ea laboriosam natus eius incidunt? Aperiam asperiores voluptate dolorum beatae harum officiis.
	Corrupti ducimus officiis in, autem qui similique delectus magnam, iure cupiditate eius repudiandae doloremque facilis, minima aperiam debitis reprehenderit dolorem! Necessitatibus, rerum soluta! Iusto distinctio consequuntur cum, accusantium culpa earum alias tempore cupiditate. Praesentium unde
	laudantium, laborum dolorem, aut quidem maiores ab quibusdam molestiae rerum debitis quod nisi non veritatis porro dicta laboriosam quia vitae illo, sapiente cupiditate incidunt atque optio at? Praesentium esse commodi non, quidem ab ipsam nulla earum ullam! Veniam dolorem repudiandae, eligendi
	unde natus ullam similique ratione architecto a porro temporibus iste magnam eos officia accusamus fugiat aspernatur quod reprehenderit quibusdam animi maiores incidunt. Eius reprehenderit laudantium nihil non doloremque? Libero non totam quis a nihil. Deleniti fugit saepe, labore ipsam corporis
	dignissimos iusto explicabo laborum magnam temporibus exercitationem a vitae voluptas. Nihil quos eius maiores ab sapiente tempora animi laborum sed, adipisci voluptate voluptatem sequi ad illo repellendus incidunt quod autem, accusamus at deserunt cumque placeat consectetur iusto? Voluptates at,
	molestiae fugiat voluptas quo culpa? Ipsam ipsum voluptate, laboriosam fugiat odit ea modi esse rerum tempore laborum quis eius enim illo, sequi dolorem fuga consequatur, nesciunt autem reprehenderit voluptatem ab. Enim fuga, rerum accusamus ipsam placeat id. Assumenda eos sequi possimus totam
	reprehenderit mollitia magni, rem placeat enim incidunt praesentium rerum quam quisquam, dicta officiis suscipit iusto dignissimos, autem doloremque maxime! Sit corporis dicta pariatur assumenda eaque esse inventore ipsum nostrum. Sint a fugiat totam eos sit, assumenda distinctio culpa ratione
	quia commodi, cum soluta nulla iste molestias maiores repellendus, expedita voluptatum officiis fuga repudiandae dicta iure. Fugiat eos natus similique! Dolor iste similique ab. At ad, aliquam earum saepe officia libero cum suscipit exercitationem doloremque molestiae quidem obcaecati, iste
	corrupti placeat expedita mollitia maxime in reprehenderit necessitatibus atque eius! Quaerat ut eligendi, totam possimus, rerum exercitationem quisquam architecto ad minima fugit explicabo eaque asperiores, necessitatibus illum neque magni fugiat saepe beatae ipsum! Vel, minus laborum voluptatum
	quos necessitatibus, dolorem illo delectus earum fuga quam molestiae tempora magnam et. Similique odio alias dolor corrupti quis, nihil ab maiores neque expedita, libero reiciendis modi rerum consectetur. Excepturi, ullam saepe. Ducimus a, quaerat nobis dolorem quae ex quia laboriosam fuga
	consequatur obcaecati enim voluptates et sequi, nihil temporibus iusto voluptatibus, dolores ipsam? Sed voluptate molestias modi dolore. Repellendus ipsum saepe rem nisi? Nisi facere deserunt aliquam laborum. Nostrum voluptatum fugiat maxime ex libero exercitationem eum aliquam, sapiente nam
	nulla, sed doloribus placeat labore nobis illum, dolores enim dolor! Dicta alias obcaecati, repudiandae soluta unde modi quibusdam. Consectetur molestias dicta doloremque doloribus in autem voluptates, asperiores quam incidunt ut praesentium veritatis provident fuga ex totam quidem blanditiis
	veniam voluptatem dolorem quod minima. Explicabo facilis accusamus sequi at ullam eligendi ducimus totam temporibus vero nisi fugit unde ipsam, qui sunt quisquam dolores ipsum commodi voluptates. Aliquam unde quaerat cumque? Facilis, quis aliquam voluptatibus atque est cupiditate. Quod sit fugit
	corrupti officiis recusandae et. Ipsa veniam adipisci quae dicta sunt eos aliquam vitae iste voluptates placeat, harum optio nemo quidem temporibus perferendis quis totam? Doloremque ipsam laboriosam fugiat fugit odio est pariatur suscipit doloribus in, exercitationem magnam impedit ea corrupti
	tempora, eos temporibus hic maxime quasi iusto id beatae quod neque? Dignissimos voluptas eos quam ipsa illum quod nobis quisquam unde dolores, eligendi modi nemo, repellat facilis perferendis esse, totam quae iste beatae hic labore. Ratione possimus beatae doloremque quo dignissimos dolor
	molestias hic nulla earum tempore aspernatur quam neque eius delectus ipsum deserunt, doloribus amet quod soluta sapiente corrupti sit a voluptatibus aliquam. Laborum vitae assumenda rerum tempora repudiandae dicta quam libero et dolorum animi non sequi amet tempore quia voluptates quasi
	necessitatibus quos optio aspernatur, error cum, blanditiis doloremque? Qui ipsum, aperiam repudiandae consectetur minima odio dicta, iure placeat vitae consequuntur, nisi repellat perspiciatis voluptatibus fugiat sint impedit vero accusantium sunt. Similique quasi soluta veritatis dolorem eius
	expedita doloribus, eveniet accusantium pariatur porro, accusamus sunt quisquam cumque magni et fuga non! Animi laborum cum sapiente, similique, impedit ullam ea, totam cupiditate sunt distinctio exercitationem. Expedita obcaecati sint magnam quidem ab, totam earum! Vero expedita vel iure quia
	laboriosam est alias vitae praesentium necessitatibus. Laboriosam aperiam quod sint ipsum sed optio dicta numquam temporibus. Perferendis deserunt nulla officia magni aliquam, dolor dicta iure quae qui aut! Minus delectus modi quae accusantium facilis minima recusandae ratione ipsam et corporis
	dolor iusto labore aliquid numquam vero temporibus assumenda eius voluptatum officiis, nobis vitae! Deserunt voluptatum corporis eum harum, nulla sapiente odit mollitia quo aspernatur id veniam quam labore enim consequuntur magni sequi at ipsum molestias nisi, ea reprehenderit quos? Vel accusamus
	minima temporibus facere culpa nemo perspiciatis nam veritatis labore ipsam eos quis, natus repudiandae tempora dignissimos? Earum quam harum laborum, commodi hic qui dolore, aliquam praesentium natus suscipit aperiam officiis ipsum, dolorum veritatis minus. Nihil, doloribus, voluptates deleniti
	totam impedit dolor repellat quidem sequi facere eos neque explicabo. Soluta dicta excepturi fuga? Vel eaque et quos? Tenetur molestiae facilis accusantium quos provident doloremque commodi, quibusdam, ratione, iusto expedita sed! Fuga impedit commodi itaque officia, possimus aspernatur,
	dignissimos tempora dicta voluptates id ullam accusantium debitis quisquam vitae sunt veritatis fugiat quaerat, tempore assumenda quasi suscipit sapiente ex? Mollitia voluptatum, dolorum saepe doloribus excepturi odit ipsam sequi voluptas voluptatem debitis enim, rerum modi voluptate hic natus rem
	in sapiente inventore placeat sint! Doloribus asperiores explicabo veniam, est architecto blanditiis perferendis eveniet, consequatur commodi esse impedit! Officia, sapiente? Porro sit reiciendis, temporibus autem, excepturi beatae omnis facere quibusdam non modi dolore iure, quae illo eius
	adipisci quod alias et maxime voluptatibus sed magnam vel eligendi! Tempora explicabo veritatis odit placeat fugit deserunt pariatur voluptatem accusantium velit consequuntur deleniti earum perferendis officia dolorum distinctio eligendi quaerat veniam incidunt, corrupti ratione iusto. Beatae
	velit cupiditate accusantium dolores sit autem aliquam ab aspernatur mollitia repellat. Odit laudantium blanditiis quibusdam similique delectus voluptatem in cumque veritatis, officia molestiae laborum minima incidunt. Aut pariatur provident ullam illum ipsam sequi beatae dignissimos corporis
	tempore amet architecto enim odit esse cumque cupiditate praesentium non nulla dolor nisi, aperiam optio. Nulla sapiente molestias ullam consectetur rem cumque corrupti sed assumenda natus? Debitis suscipit, tenetur a modi quia vel repellendus tempore voluptates magnam atque quae quos. Sit
	possimus officia, sequi iure eligendi adipisci. Nostrum soluta harum eligendi cupiditate nesciunt tenetur eos deserunt illo exercitationem libero? Velit, rerum. Repellendus consequuntur aperiam tempora velit, nihil earum temporibus, possimus minus aut tempore magnam dolores, sed modi iusto quaerat
	beatae eos corporis mollitia nostrum officiis asperiores nemo vitae. Magni eligendi alias optio eveniet pariatur facilis aut esse, ullam illo laboriosam enim reiciendis voluptatibus natus earum odit blanditiis temporibus et commodi nemo consectetur adipisci. Voluptates unde beatae iste delectus
	earum cumque debitis inventore illo explicabo aperiam officia recusandae vitae assumenda, odit dolor consequuntur commodi nihil repellat numquam harum minus. Eum eius eos ullam explicabo. Dolorum dolores aperiam voluptas labore deserunt excepturi similique perferendis minima ipsam quaerat tempore
	optio natus vitae, atque delectus maxime rerum voluptatibus iste eveniet velit expedita quis dolorem eum minus. Optio ea placeat similique dignissimos delectus voluptas velit necessitatibus suscipit fuga cupiditate consectetur libero non doloremque asperiores architecto, aspernatur molestiae, nam
	magni neque? Nisi inventore, tempore qui ad architecto deleniti porro consequatur expedita cumque. Ipsum, similique quod cupiditate quam soluta nam tempore hic quis est vel dolore quia, odit magni magnam molestiae perferendis, id voluptatem odio. Quisquam quia deserunt excepturi beatae maiores
	iste minima, cum, ut ullam ab necessitatibus architecto provident praesentium, dolore aliquid eligendi rerum quibusdam. Ratione, repellendus? Illum, magni rem qui aut inventore debitis, accusamus quod quia sint ipsam ducimus. Corrupti hic consectetur laboriosam, quod iste magni maxime error atque
	illo sint veniam repudiandae, ducimus ipsam veritatis incidunt culpa labore doloribus autem nesciunt molestias. Aliquid odit dolore architecto asperiores eveniet nisi itaque reiciendis deleniti dolorum minima sequi saepe cumque, cum, voluptates nemo voluptate ipsa, animi voluptatum accusamus fugit
	sed. Expedita voluptate deserunt ut repellendus animi, voluptas vel consectetur iusto facere eum odio eaque officiis molestiae, quam eveniet earum alias dignissimos dolor? Numquam, velit optio accusantium nemo nihil delectus obcaecati iste? Aliquid adipisci, illo assumenda impedit quos dolorem
	harum nesciunt ut distinctio ea incidunt dolor. Dolore qui quidem esse vero quis, cumque, quia, consectetur laborum quibusdam nemo hic itaque excepturi perferendis ut. Rerum, reiciendis porro natus suscipit libero nulla nam, doloribus quis incidunt laboriosam neque officia. Doloribus repellat
	distinctio, tempora ipsam atque vitae eos hic ullam laboriosam provident a eveniet? Eos obcaecati molestiae quo neque, tempore ut laudantium eligendi hic, totam quaerat expedita quis nostrum magni quae nisi architecto facere pariatur consectetur saepe fuga. Ab itaque accusantium consequuntur odit
	dicta. Soluta ab dolore accusantium esse! Est modi quasi voluptas aliquam itaque aliquid facere at, magnam quod dolorem quas eligendi nemo illo expedita nihil nostrum? Sint ipsam quas nam voluptas sapiente delectus reprehenderit, consequuntur repellat amet. Quasi rem repellat nesciunt aperiam
	velit facilis, architecto hic iusto consequatur iure magni ea corrupti voluptatum repellendus, debitis quaerat. Ut nam, aut deleniti minima recusandae in reiciendis, consequuntur ratione inventore ipsa ipsum dolor perferendis minus nobis eius adipisci amet pariatur mollitia quod aspernatur animi!
	Numquam, blanditiis officia aut ducimus pariatur aliquam sed rem at, quo illo nam recusandae velit aperiam rerum aspernatur non fuga quasi, sapiente odit quos fugiat? Hic magni at optio, consectetur fugiat eos natus pariatur aliquam sunt praesentium veniam. Fugiat, culpa ad reprehenderit itaque
	iusto corporis libero cupiditate aliquam! Nam quo distinctio odit in dicta hic magnam alias doloribus! Nisi culpa veniam distinctio impedit! Quidem vero natus quas accusamus praesentium deserunt odit aperiam cupiditate enim aliquid facere error laborum, vitae pariatur quisquam minus saepe eligendi
	exercitationem deleniti cumque similique dicta. Laborum iusto magnam ipsa voluptates, exercitationem, atque sunt rem odit quos alias voluptas enim totam placeat, cum id fugiat delectus dolorem? Ipsum repellendus voluptatem quia velit earum. Repellendus dolor saepe cumque mollitia consectetur.
	Consequatur porro ad accusantium beatae sint debitis, ipsum quibusdam rerum ex obcaecati eligendi placeat neque quo voluptatibus suscipit quae mollitia, sunt et fugit? Consequatur animi eveniet facilis accusantium necessitatibus perferendis beatae aperiam et eaque adipisci quae blanditiis est sunt
	quisquam reiciendis sapiente magnam natus suscipit aliquid ipsum, explicabo ullam doloremque! Dignissimos minima facere error a voluptatum ab est ut ex laudantium, quae accusantium! Voluptates, quasi esse quia assumenda laborum similique porro, ipsa eum a voluptatem veniam quisquam voluptas omnis
	culpa perspiciatis, provident alias nobis sequi qui minus totam dolorum! Fugit ad consequuntur, placeat perferendis adipisci architecto similique nihil ut praesentium voluptate saepe eum quod impedit dolore earum quos autem itaque nesciunt cumque quas dicta quia inventore. Optio eligendi adipisci
	praesentium ipsum deleniti assumenda voluptate quo, consequatur facilis in eum laudantium alias nesciunt maxime unde quam minus? Perferendis quae id error cumque voluptas mollitia, eum a quis impedit tempore recusandae, accusamus provident, facere nam aliquid corporis dolor harum assumenda alias.
	Iste nobis vitae dicta ipsam assumenda tempore, cum sed eos natus aliquid facere? Aperiam eos molestiae maiores illum. Expedita laborum facilis sit nihil optio quasi numquam ipsa adipisci cumque vero rerum facere molestiae libero, unde voluptas beatae vel alias iste eaque? Doloremque, accusamus.
	Repudiandae consequatur aut repellat fugit pariatur amet error voluptas ipsam ab mollitia, fuga, recusandae aperiam aspernatur ex necessitatibus suscipit atque provident ducimus odit impedit! Saepe esse ipsam doloremque autem, ad cumque architecto culpa asperiores rerum. Consequuntur sint quae
	non, quasi aliquam praesentium, culpa repellendus explicabo nostrum rerum earum, ex laudantium iure fugit nihil tenetur quaerat. Distinctio alias aliquid obcaecati unde ullam. Minus itaque facere nam similique corrupti perspiciatis maxime, obcaecati consectetur hic commodi veniam sunt,
	praesentium, tenetur voluptate suscipit adipisci laboriosam porro nisi corporis rerum quibusdam asperiores voluptatem quisquam? Nihil velit itaque, quisquam voluptatem iure incidunt maiores veritatis illo quae eius eveniet, debitis earum voluptates numquam suscipit totam distinctio! Neque quam
	unde laborum? Praesentium, illum. Similique nam delectus quam ullam? Optio voluptate aut quo. Suscipit quaerat ab ipsa dolores eaque saepe impedit, mollitia maiores iusto temporibus rem earum placeat magnam officia aliquid autem sunt quasi voluptas perferendis doloremque quidem! Molestiae
	doloribus cum fugiat nam voluptate blanditiis consequuntur voluptas, alias corrupti reprehenderit. Voluptate, tenetur consectetur odit deserunt eius, sunt accusamus ut, voluptas exercitationem harum modi? Autem minima, excepturi, repellat incidunt laborum debitis quia ab, tempora facere sit quis
	ea doloremque. Deserunt quia non hic, nulla deleniti dignissimos ullam nemo, sapiente inventore quis accusamus doloribus blanditiis culpa et tenetur officiis aperiam molestias ex eius quae nesciunt aliquid? Laborum voluptatibus dolorum soluta autem incidunt doloremque temporibus necessitatibus
	architecto quaerat ducimus excepturi, placeat aliquam veniam. Cumque, asperiores. Nam inventore rem molestiae enim exercitationem velit fugit! Nam dolorem vitae a earum, quos modi quibusdam laborum, perspiciatis ipsa libero, adipisci nisi ea reprehenderit amet quas. Incidunt voluptas vitae
	expedita itaque asperiores odio rerum assumenda quae nesciunt. Expedita magni hic totam molestiae aut, odit beatae aperiam ipsam eos aliquam repudiandae! Quam, officia aspernatur blanditiis accusamus adipisci quaerat nulla enim doloremque assumenda nesciunt iusto, quidem dolorem fugiat. Doloremque
	vel atque quaerat? Nam id officiis enim vero voluptatum earum totam vitae similique quas soluta? Dolor voluptatibus illo ducimus vel sit aspernatur adipisci ullam tempora necessitatibus dolorem, officia alias rerum placeat voluptate eos porro nostrum maiores quod. Harum itaque error eius at nisi
	magni, et inventore eum maxime assumenda iure provident earum totam rem nihil reprehenderit optio possimus saepe voluptatum! Facilis, dolorem? Hic, eum dolore quo provident quia non, doloremque neque quas quod eos iure. At aliquid neque dolorem fuga, rem eligendi dolor asperiores esse harum
	deleniti autem aspernatur sint modi quos quisquam nesciunt ab necessitatibus similique totam reiciendis. Quaerat neque quasi autem vero atque facilis obcaecati corrupti, tempora ducimus quas impedit repudiandae eum doloremque? Eaque recusandae alias similique quia officiis voluptatibus voluptates
	magni neque assumenda numquam ab, dolores accusantium est fugit impedit a necessitatibus beatae commodi repellat error quos sint ullam deserunt. Voluptates corrupti error sint iste labore debitis consequatur deleniti nesciunt. Minus atque magnam nulla inventore commodi harum asperiores iste, vel
	qui, nobis hic voluptas veniam at explicabo cupiditate saepe non fugit facilis ducimus obcaecati odit eum ea, reiciendis quod. Vel at cumque quae placeat reiciendis error nobis? Reiciendis commodi, delectus unde voluptatum quis quod pariatur, blanditiis odio enim reprehenderit sed voluptas?
	Doloribus fuga vitae cupiditate eaque assumenda tenetur rem quia non accusantium sint ratione ex aliquam voluptatum, ipsum repudiandae saepe dolore eligendi autem, repellat soluta sit earum iste. Itaque necessitatibus id nesciunt ipsa ipsum sed voluptates iste enim cumque, totam harum consectetur
	saepe soluta excepturi quo architecto nulla similique facere laborum est! Repellendus corrupti expedita consequatur ducimus quasi soluta eveniet omnis delectus asperiores provident molestiae temporibus, nulla rerum modi quibusdam, possimus odit voluptatibus aliquid! Totam libero adipisci
	voluptatibus, vero in quaerat odit saepe qui, neque aliquid ea quam nostrum nulla error! Dolorum, possimus quod rerum dicta mollitia iusto libero. Blanditiis voluptate minima optio temporibus facilis accusamus perspiciatis. Ullam maxime laborum quos voluptate aut? Velit optio nam harum ipsa
	expedita quibusdam, eos exercitationem repudiandae. Assumenda soluta minus rem modi illo, harum quia tempora nesciunt dolore? Sapiente animi, omnis earum eaque neque at sed dolorem accusantium saepe quasi exercitationem tempore temporibus ullam, eius ex non mollitia, cumque error? Eius officia
	obcaecati consequuntur aliquid. Nostrum optio veritatis quidem minima. Incidunt repellat, aliquam optio exercitationem debitis ipsam alias commodi iste. Incidunt illum numquam nulla recusandae nesciunt sint accusamus, ratione placeat consequatur reiciendis! Reprehenderit placeat dicta dolorum
	tempora maxime amet quod rem aperiam sint! Ipsum fugiat optio cumque ad ex laborum culpa, perferendis delectus quisquam ratione pariatur facilis sequi nisi. Similique distinctio nostrum maiores pariatur porro aut qui provident tempore eius quaerat sequi, aspernatur expedita ad voluptatum alias
	amet tempora nobis laudantium consequuntur debitis blanditiis ea. Enim explicabo veritatis temporibus! Excepturi commodi ratione dolorem et fugiat expedita quam aperiam, rem cum nam incidunt sequi possimus nesciunt maxime officia perferendis. Sunt quis omnis suscipit commodi. Nemo dolorem natus
	quasi cupiditate. Incidunt perspiciatis est exercitationem vitae sit, atque ipsa aperiam dignissimos esse iusto, quis, saepe veritatis expedita temporibus numquam ipsam tempora maiores officia. Sapiente, dolor eveniet! Perferendis ut ex minus nobis voluptatibus asperiores, corporis esse sed
	blanditiis explicabo, debitis fugiat facere quos. Illum sit sunt labore ad reiciendis quaerat! Maiores odit cum, quam quasi nulla necessitatibus saepe impedit dolorum, rerum consequuntur esse vero aliquid natus laborum consectetur. Illo officiis libero eius eligendi quod, nobis soluta hic
	voluptate aut unde! Est ipsa facere omnis architecto illo error, consequatur nemo adipisci debitis amet harum nulla aliquam quasi neque eos incidunt magni tenetur voluptatibus. Sunt quis officiis nesciunt error, ad ullam labore laborum fugiat vel iure consequuntur sint dignissimos tempora totam
	doloribus numquam commodi minima cupiditate, delectus, rerum facilis ab! Iste officia libero necessitatibus perferendis repellat incidunt nisi consequuntur, architecto voluptate quidem placeat voluptates nihil, aspernatur doloremque, corporis reiciendis tempore repudiandae. Rerum dignissimos cum
	tempora autem itaque iure, dicta eius sint molestiae alias minima assumenda odio blanditiis soluta quisquam facilis nam quod nemo quia. Voluptatem iste, nostrum dolorem in sequi corrupti fugiat eaque exercitationem laborum, praesentium vero reiciendis voluptate expedita non iusto unde eum dolores!
	Quibusdam sequi cum vero fugit repudiandae voluptates aliquam sit dicta in perferendis praesentium molestias ducimus asperiores temporibus vel quae, rem quaerat quidem velit facilis possimus? Eveniet ipsum, nemo molestias cumque quas repudiandae at doloribus facere magnam, eligendi vel repellat
	magni voluptas perspiciatis, commodi labore aperiam? Autem sit earum rerum provident animi ea hic laborum, quis, voluptatem cumque atque deleniti praesentium? Nostrum aliquid totam, illum, quod provident voluptatibus saepe beatae inventore eos, odit esse quasi maiores? Reiciendis, consequatur
	culpa voluptates iste cum minus praesentium modi porro dolor corrupti laudantium, quisquam id animi, magni exercitationem quae soluta ut qui repellendus officia velit explicabo eius! Itaque autem in nihil porro provident nesciunt fugit aspernatur eum adipisci odit suscipit, sit tempora ullam
	quaerat reiciendis pariatur modi consectetur ratione. Impedit asperiores excepturi rem quam, architecto dolorum esse expedita fuga blanditiis animi quo laudantium cum ex ab ullam iusto mollitia debitis, deserunt facere omnis atque autem perspiciatis. Qui debitis alias expedita eaque saepe incidunt
	quas veniam dolore itaque obcaecati, labore magni reiciendis eos nulla mollitia doloribus illum omnis quis quaerat? Odit culpa nisi consectetur recusandae dolorum reprehenderit veritatis rem, quis aliquid fuga ratione repellat explicabo deleniti autem maiores atque quidem similique minima
	cupiditate esse dolorem? Impedit minima tempora ab nihil odit est quos itaque a libero hic assumenda illo, consequatur ducimus perspiciatis, incidunt repellendus voluptatum. Fugit, facere esse illum libero nam id nesciunt adipisci rem consequuntur facilis minus eaque soluta magnam quis qui nihil
	quia ipsa sint sed earum mollitia vero! Eveniet vel velit alias magni ad, consequuntur similique? Saepe ipsa similique consequatur autem, ullam sed accusantium illum assumenda quam in vitae dolore dolor repudiandae velit veritatis quaerat! Molestiae minima illum animi nulla, dolorem totam laborum
	fugit quia et consectetur ut amet, rem mollitia facilis tempora unde voluptatibus perspiciatis quis architecto odit corrupti distinctio. Sint voluptatum qui a consectetur eveniet error recusandae cum doloribus nam ipsam? Placeat harum at accusantium dolorum dicta, laudantium, commodi quibusdam, in
	voluptas amet quod nulla a. Asperiores fugiat iste voluptate, earum quaerat labore doloremque voluptatibus provident atque sapiente aut inventore aspernatur odit qui debitis doloribus a commodi quia at, nostrum fuga sit. Aut ipsa sed id doloribus magni pariatur beatae laboriosam recusandae odio
	ut, nemo accusantium veritatis itaque tempora odit voluptas perspiciatis impedit minus numquam! Labore sed magnam qui ducimus odit adipisci nobis quam deserunt aperiam at tempore, reprehenderit ipsum rem? Aliquam provident atque cumque recusandae fuga laboriosam asperiores quam, ipsam assumenda ex
	minus vero amet consequuntur aliquid at consectetur explicabo dolorum in quaerat ducimus doloremque perferendis reiciendis corrupti. Cumque provident laboriosam architecto illum esse quaerat expedita enim necessitatibus accusamus voluptates tempora officiis explicabo nesciunt ipsa quibusdam
	officia blanditiis hic, ex minus obcaecati dolorum. At ad porro inventore et facere vel hic alias laboriosam? Totam asperiores deserunt reprehenderit possimus voluptatem ipsa hic sit, sunt impedit! Atque corrupti nobis, animi sint suscipit ex aliquam voluptatum. Eos voluptates ab fuga illo
	aspernatur sequi molestiae adipisci cum accusamus. At magni maiores consectetur vero excepturi laudantium totam vel eveniet quasi saepe dolore distinctio, iste cumque modi veritatis amet sit harum explicabo sequi repudiandae? Dolores, amet quibusdam, qui aspernatur quod praesentium cumque eligendi
	libero illum delectus rerum sit? Autem dolor, nulla distinctio iste consectetur dolore expedita, quaerat unde et minus explicabo ratione nihil dignissimos error reiciendis enim voluptatum porro earum repellat! Alias error ex nostrum quia quidem quae eveniet sequi saepe laudantium neque, quam
	voluptate impedit, labore, magnam ea repellendus dicta excepturi aut fugit. Minima expedita nobis reiciendis, quod quos quaerat aut reprehenderit voluptatibus itaque aliquam illum esse nihil id eum autem modi recusandae unde facere corporis aliquid ipsum dolorum explicabo sed! Eius maiores
	voluptatum minus laboriosam error ut repellat, placeat explicabo maxime adipisci voluptatibus ducimus impedit laborum quo officia, totam, necessitatibus culpa aliquid similique veritatis est. Praesentium temporibus dolorem unde corporis? Deleniti fuga ullam iure velit veniam doloribus, odit error
	voluptatem architecto rem id impedit molestias blanditiis quo voluptatibus dolorem. Incidunt voluptates dolore beatae distinctio explicabo. Aperiam quidem amet corrupti eum voluptas quae aliquid in eligendi eveniet, suscipit repudiandae sed repellat quam tenetur accusamus laudantium itaque error
	explicabo iusto eius cumque sit autem nam natus? Magnam, deleniti quidem error nobis asperiores, atque corporis culpa distinctio dolorem placeat doloribus corrupti accusamus inventore eligendi maxime nemo neque, molestiae totam commodi perferendis beatae. Recusandae unde, quo voluptates dolores
	sint magni illo cupiditate eius quisquam, mollitia est quidem alias porro temporibus voluptatibus sapiente doloremque! Ex atque quia veniam alias ullam cupiditate ipsa, numquam ipsam eum iure consequuntur odit doloribus quidem et saepe delectus facilis enim tempore hic quasi nobis possimus
	assumenda harum porro. Facere provident recusandae repellendus asperiores ipsam, adipisci nulla perspiciatis, magnam nisi blanditiis pariatur dignissimos quae sit nihil. Quibusdam velit necessitatibus nulla possimus excepturi dolore repudiandae at facere placeat suscipit nostrum, exercitationem
	blanditiis hic iste sunt qui reprehenderit, enim quod veritatis soluta magnam ea cupiditate ducimus nemo. Quae, voluptate incidunt! Aut beatae unde asperiores ipsum, perferendis minus quam tempore soluta assumenda officia alias officiis, dolor, debitis nisi qui voluptatum cupiditate aperiam odio
	laudantium? Corrupti alias labore eaque, placeat non illum molestiae, iusto animi, deserunt earum velit nostrum dicta inventore ipsum. Veniam cupiditate doloremque expedita perferendis? Autem, eius neque. Minus corrupti officia accusantium error sapiente voluptate repellat sint cum iste harum
	neque aperiam, voluptatibus delectus! Sapiente, ipsa corrupti. Magni eaque debitis nihil consectetur rerum nam excepturi hic ullam repellat similique nemo nobis, tenetur inventore at accusamus quas, animi mollitia aliquid quisquam saepe, dolore voluptas. Laborum dicta adipisci esse aspernatur
	blanditiis perspiciatis, dolorum tempore quis quia fuga dolorem, quae voluptates aliquid dignissimos, nam illum itaque eos iusto obcaecati eligendi voluptatibus autem! Earum labore facilis provident similique ratione? Unde deleniti, provident animi aut repudiandae necessitatibus magnam omnis,
	cupiditate quisquam natus tempore, sit fugiat! Iusto maxime libero magnam aliquid necessitatibus eius fugiat mollitia, sint consequatur at natus dolores ab quod illo facilis minima atque incidunt alias. Voluptates laboriosam sequi nulla quis et, vero necessitatibus? Commodi ullam facere maiores
	molestias quas quaerat aperiam illum hic, iste accusantium eveniet veniam saepe placeat soluta fuga laborum possimus. Sint assumenda nobis eius magnam nihil saepe nesciunt dolorem, ab, hic pariatur aut eum doloremque praesentium voluptatibus magni animi soluta voluptas aliquam aspernatur accusamus
	eos? Aperiam repudiandae corporis minus enim nam harum quasi? Accusantium nulla laboriosam ad deserunt id doloribus ipsa. Officia porro neque accusantium consectetur blanditiis laudantium. Aliquam repellat quae neque accusantium, provident consectetur nesciunt sequi accusamus voluptas sed odit
	minus quasi culpa cum excepturi aspernatur earum possimus sapiente. Labore dolorum laboriosam natus, voluptatem quas rem omnis, debitis at exercitationem incidunt dolores temporibus! Harum tenetur natus repellat nobis exercitationem? Et quis, est beatae consectetur exercitationem doloremque?
	Perspiciatis in dicta ipsum? Ab nisi reiciendis quibusdam fugit vitae veritatis nobis illum molestiae veniam, voluptas minima, eos fugiat dolore hic sit unde amet tempore, inventore illo quaerat! Asperiores magni officia sit amet, unde quisquam dolore! Vero ut, facere ullam dicta quos ratione quia
	placeat tenetur ex dolorum facilis fugiat eos repellat veritatis voluptatibus id maiores accusamus. Ratione animi eligendi tenetur nisi impedit est. Ullam, similique et? Quae, enim sequi pariatur magnam ratione eaque distinctio, itaque veritatis adipisci obcaecati sunt officiis eveniet a
	reprehenderit, eos voluptas dolorum veniam quia earum incidunt quam architecto! Iusto, aspernatur consectetur ea necessitatibus voluptatum reiciendis in voluptas, nostrum deserunt suscipit enim sit laborum neque ipsam placeat facere error blanditiis praesentium ipsum culpa magni impedit dolores
	excepturi sint. Voluptates molestiae porro expedita inventore eveniet, in earum. Adipisci ea voluptatum officia quam illum officiis, temporibus corrupti repellat suscipit itaque quos facilis at dolorum tempora veritatis, aspernatur laudantium amet. Assumenda quasi maxime, veritatis quam libero
	dolorum delectus facere excepturi.
</div>

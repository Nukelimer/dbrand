<script>
	import CountUp from '$lib/Reusable Component/CountUp.svelte';

	
	import { ArrowDownRight, ArrowUpRight, Cherry, ChevronRightCircle } from 'lucide-svelte';
	import ShowoffGhost from '../shop/ghost/components/Showoff_Ghost.svelte';

	export const S25_Ultra = [
		'/images/ghost/S25_Ultra/1.webp',
		'/images/ghost/S25_Ultra/2.webp',
		'/images/ghost/S25_Ultra/3.webp',
		'/images/ghost/S25_Ultra/4.webp',
		'/images/ghost/S25_Ultra/5.webp',
		'/images/ghost/S25_Ultra/6.webp',
		'/images/ghost/S25_Ultra/7.webp',
		'/images/ghost/S25_Ultra/8.webp',
		'/images/ghost/S25_Ultra/9.webp',
		'/images/ghost/S25_Ultra/10.webp',
		'/images/ghost/S25_Ultra/11.webp',
		'/images/ghost/S25_Ultra/12.webp',
		'/images/ghost/S25_Ultra/13.webp',
		'/images/ghost/S25_Ultra/14.webp',
		'/images/ghost/S25_Ultra/15.webp',
		'/images/ghost/S25_Ultra/16.webp',
		'/images/ghost/S25_Ultra/17.webp',
		'/images/ghost/S25_Ultra/18.webp',
		'/images/ghost/S25_Ultra/19.webp',
		'/images/ghost/S25_Ultra/20.webp',
		'/images/ghost/S25_Ultra/21.webp',
		'/images/ghost/S25_Ultra/22.webp',
		'/images/ghost/S25_Ultra/23.webp',
		'/images/ghost/S25_Ultra/24.webp',
		'/images/ghost/S25_Ultra/25.webp',
		'/images/ghost/S25_Ultra/26.webp',
		'/images/ghost/S25_Ultra/27.webp',
		'/images/ghost/S25_Ultra/28.webp',
		'/images/ghost/S25_Ultra/29.webp',
		'/images/ghost/S25_Ultra/30.webp',
		'/images/ghost/S25_Ultra/31.webp',
		'/images/ghost/S25_Ultra/32.webp',
		'/images/ghost/S25_Ultra/33.webp',
		'/images/ghost/S25_Ultra/34.webp',
		'/images/ghost/S25_Ultra/35.webp',
		'/images/ghost/S25_Ultra/36.webp',
		'/images/ghost/S25_Ultra/37.webp',
		'/images/ghost/S25_Ultra/38.webp',
		'/images/ghost/S25_Ultra/39.webp',
		'/images/ghost/S25_Ultra/40.webp',
		'/images/ghost/S25_Ultra/41.webp',
		'/images/ghost/S25_Ultra/42.webp',
		'/images/ghost/S25_Ultra/43.webp',
		'/images/ghost/S25_Ultra/44.webp',
		'/images/ghost/S25_Ultra/45.webp',
		'/images/ghost/S25_Ultra/46.webp',
		'/images/ghost/S25_Ultra/47.webp',
		'/images/ghost/S25_Ultra/48.webp',
		'/images/ghost/S25_Ultra/49.webp',
		'/images/ghost/S25_Ultra/50.webp',
		'/images/ghost/S25_Ultra/51.webp',
		'/images/ghost/S25_Ultra/52.webp',
		'/images/ghost/S25_Ultra/53.webp',
		'/images/ghost/S25_Ultra/54.webp',
		'/images/ghost/S25_Ultra/55.webp',
		'/images/ghost/S25_Ultra/56.webp',
		'/images/ghost/S25_Ultra/57.webp',
		'/images/ghost/S25_Ultra/58.webp',
		'/images/ghost/S25_Ultra/59.webp',
		'/images/ghost/S25_Ultra/60.webp',
		'/images/ghost/S25_Ultra/61.webp',
		'/images/ghost/S25_Ultra/62.webp',
		'/images/ghost/S25_Ultra/63.webp',
		'/images/ghost/S25_Ultra/64.webp',
		'/images/ghost/S25_Ultra/65.webp',
		'/images/ghost/S25_Ultra/66.webp',
		'/images/ghost/S25_Ultra/67.webp',
		'/images/ghost/S25_Ultra/68.webp',
		'/images/ghost/S25_Ultra/69.webp',
		'/images/ghost/S25_Ultra/70.webp',
		'/images/ghost/S25_Ultra/71.webp',
		'/images/ghost/S25_Ultra/72.webp',
		'/images/ghost/S25_Ultra/73.webp',
		'/images/ghost/S25_Ultra/74.webp',
		'/images/ghost/S25_Ultra/75.webp',
		'/images/ghost/S25_Ultra/76.webp',
		'/images/ghost/S25_Ultra/77.webp',
		'/images/ghost/S25_Ultra/78.webp',
		'/images/ghost/S25_Ultra/79.webp',
		'/images/ghost/S25_Ultra/80.webp',
		'/images/ghost/S25_Ultra/81.webp',
		'/images/ghost/S25_Ultra/82.webp',
		'/images/ghost/S25_Ultra/83.webp',
		'/images/ghost/S25_Ultra/84.webp',
		'/images/ghost/S25_Ultra/85.webp',
		'/images/ghost/S25_Ultra/86.webp',
		'/images/ghost/S25_Ultra/87.webp',
		'/images/ghost/S25_Ultra/88.webp',
		'/images/ghost/S25_Ultra/89.webp',
		'/images/ghost/S25_Ultra/90.webp',
		'/images/ghost/S25_Ultra/91.webp',
		'/images/ghost/S25_Ultra/92.webp',
		'/images/ghost/S25_Ultra/93.webp',
		'/images/ghost/S25_Ultra/94.webp',
		'/images/ghost/S25_Ultra/95.webp',
		'/images/ghost/S25_Ultra/96.webp',
		'/images/ghost/S25_Ultra/97.webp',
		'/images/ghost/S25_Ultra/98.webp',
		'/images/ghost/S25_Ultra/99.webp',
		'/images/ghost/S25_Ultra/100.webp',
		'/images/ghost/S25_Ultra/101.webp',
		'/images/ghost/S25_Ultra/102.webp',
		'/images/ghost/S25_Ultra/103.webp',
		'/images/ghost/S25_Ultra/104.webp',
		'/images/ghost/S25_Ultra/105.webp',
		'/images/ghost/S25_Ultra/106.webp',
		'/images/ghost/S25_Ultra/107.webp',
		'/images/ghost/S25_Ultra/108.webp',
		'/images/ghost/S25_Ultra/109.webp',
		'/images/ghost/S25_Ultra/110.webp',
		'/images/ghost/S25_Ultra/111.webp',
		'/images/ghost/S25_Ultra/112.webp',
		'/images/ghost/S25_Ultra/113.webp',
		'/images/ghost/S25_Ultra/114.webp',
		'/images/ghost/S25_Ultra/115.webp',
		'/images/ghost/S25_Ultra/116.webp',
		'/images/ghost/S25_Ultra/117.webp',
		'/images/ghost/S25_Ultra/118.webp'
	];

	export const I_16_P_Max = [
		'/images/ghost/I_16_P_Max/1.webp',
		'/images/ghost/I_16_P_Max/2.webp',
		'/images/ghost/I_16_P_Max/3.webp',
		'/images/ghost/I_16_P_Max/4.webp',
		'/images/ghost/I_16_P_Max/5.webp',
		'/images/ghost/I_16_P_Max/6.webp',
		'/images/ghost/I_16_P_Max/7.webp',
		'/images/ghost/I_16_P_Max/8.webp',
		'/images/ghost/I_16_P_Max/9.webp',
		'/images/ghost/I_16_P_Max/10.webp',
		'/images/ghost/I_16_P_Max/11.webp',
		'/images/ghost/I_16_P_Max/12.webp',
		'/images/ghost/I_16_P_Max/13.webp',
		'/images/ghost/I_16_P_Max/14.webp',
		'/images/ghost/I_16_P_Max/15.webp',
		'/images/ghost/I_16_P_Max/16.webp',
		'/images/ghost/I_16_P_Max/17.webp',
		'/images/ghost/I_16_P_Max/18.webp',
		'/images/ghost/I_16_P_Max/19.webp',
		'/images/ghost/I_16_P_Max/20.webp',
		'/images/ghost/I_16_P_Max/21.webp',
		'/images/ghost/I_16_P_Max/22.webp',
		'/images/ghost/I_16_P_Max/23.webp',
		'/images/ghost/I_16_P_Max/24.webp',
		'/images/ghost/I_16_P_Max/25.webp',
		'/images/ghost/I_16_P_Max/26.webp',
		'/images/ghost/I_16_P_Max/27.webp',
		'/images/ghost/I_16_P_Max/28.webp',
		'/images/ghost/I_16_P_Max/29.webp',
		'/images/ghost/I_16_P_Max/30.webp',
		'/images/ghost/I_16_P_Max/31.webp',
		'/images/ghost/I_16_P_Max/32.webp',
		'/images/ghost/I_16_P_Max/33.webp',
		'/images/ghost/I_16_P_Max/34.webp',
		'/images/ghost/I_16_P_Max/35.webp',
		'/images/ghost/I_16_P_Max/36.webp',
		'/images/ghost/I_16_P_Max/37.webp',
		'/images/ghost/I_16_P_Max/38.webp',
		'/images/ghost/I_16_P_Max/39.webp',
		'/images/ghost/I_16_P_Max/40.webp',
		'/images/ghost/I_16_P_Max/41.webp',
		'/images/ghost/I_16_P_Max/42.webp',
		'/images/ghost/I_16_P_Max/43.webp',
		'/images/ghost/I_16_P_Max/44.webp',
		'/images/ghost/I_16_P_Max/45.webp',
		'/images/ghost/I_16_P_Max/46.webp',
		'/images/ghost/I_16_P_Max/47.webp',
		'/images/ghost/I_16_P_Max/48.webp',
		'/images/ghost/I_16_P_Max/49.webp',
		'/images/ghost/I_16_P_Max/50.webp',
		'/images/ghost/I_16_P_Max/51.webp',
		'/images/ghost/I_16_P_Max/52.webp',
		'/images/ghost/I_16_P_Max/53.webp',
		'/images/ghost/I_16_P_Max/54.webp',
		'/images/ghost/I_16_P_Max/55.webp',
		'/images/ghost/I_16_P_Max/56.webp',
		'/images/ghost/I_16_P_Max/57.webp',
		'/images/ghost/I_16_P_Max/58.webp',
		'/images/ghost/I_16_P_Max/59.webp',
		'/images/ghost/I_16_P_Max/60.webp',
		'/images/ghost/I_16_P_Max/61.webp',
		'/images/ghost/I_16_P_Max/62.webp',
		'/images/ghost/I_16_P_Max/63.webp',
		'/images/ghost/I_16_P_Max/64.webp',
		'/images/ghost/I_16_P_Max/65.webp',
		'/images/ghost/I_16_P_Max/66.webp',
		'/images/ghost/I_16_P_Max/67.webp',
		'/images/ghost/I_16_P_Max/68.webp',
		'/images/ghost/I_16_P_Max/69.webp',
		'/images/ghost/I_16_P_Max/70.webp',
		'/images/ghost/I_16_P_Max/71.webp',
		'/images/ghost/I_16_P_Max/72.webp',
		'/images/ghost/I_16_P_Max/73.webp',
		'/images/ghost/I_16_P_Max/74.webp',
		'/images/ghost/I_16_P_Max/75.webp',
		'/images/ghost/I_16_P_Max/76.webp',
		'/images/ghost/I_16_P_Max/77.webp',
		'/images/ghost/I_16_P_Max/78.webp',
		'/images/ghost/I_16_P_Max/79.webp',
		'/images/ghost/I_16_P_Max/80.webp',
		'/images/ghost/I_16_P_Max/81.webp',
		'/images/ghost/I_16_P_Max/82.webp',
		'/images/ghost/I_16_P_Max/83.webp',
		'/images/ghost/I_16_P_Max/84.webp',
		'/images/ghost/I_16_P_Max/85.webp',
		'/images/ghost/I_16_P_Max/86.webp',
		'/images/ghost/I_16_P_Max/87.webp',
		'/images/ghost/I_16_P_Max/88.webp',
		'/images/ghost/I_16_P_Max/89.webp',
		'/images/ghost/I_16_P_Max/90.webp',
		'/images/ghost/I_16_P_Max/91.webp',
		'/images/ghost/I_16_P_Max/92.webp',
		'/images/ghost/I_16_P_Max/93.webp',
		'/images/ghost/I_16_P_Max/94.webp',
		'/images/ghost/I_16_P_Max/95.webp',
		'/images/ghost/I_16_P_Max/96.webp',
		'/images/ghost/I_16_P_Max/97.webp',
		'/images/ghost/I_16_P_Max/98.webp',
		'/images/ghost/I_16_P_Max/99.webp',
		'/images/ghost/I_16_P_Max/100.webp',
		'/images/ghost/I_16_P_Max/101.webp',
		'/images/ghost/I_16_P_Max/102.webp',
		'/images/ghost/I_16_P_Max/103.webp',
		'/images/ghost/I_16_P_Max/104.webp',
		'/images/ghost/I_16_P_Max/105.webp',
		'/images/ghost/I_16_P_Max/106.webp',
		'/images/ghost/I_16_P_Max/107.webp',
		'/images/ghost/I_16_P_Max/108.webp',
		'/images/ghost/I_16_P_Max/109.webp',
		'/images/ghost/I_16_P_Max/110.webp',
		'/images/ghost/I_16_P_Max/111.webp',
		'/images/ghost/I_16_P_Max/112.webp',
		'/images/ghost/I_16_P_Max/113.webp',
		'/images/ghost/I_16_P_Max/114.webp',
		'/images/ghost/I_16_P_Max/115.webp',
		'/images/ghost/I_16_P_Max/116.webp',
		'/images/ghost/I_16_P_Max/117.webp',
		'/images/ghost/I_16_P_Max/118.webp',
		'/images/ghost/I_16_P_Max/119.webp'
	];

	export const I_16_P = [
		'/images/ghost/I_16_P/1 (0).webp',
		'/images/ghost/I_16_P/1 (1).webp',
		'/images/ghost/I_16_P/1 (2).webp',
		'/images/ghost/I_16_P/1 (3).webp',
		'/images/ghost/I_16_P/1 (4).webp',
		'/images/ghost/I_16_P/1 (5).webp',
		'/images/ghost/I_16_P/1 (6).webp',
		'/images/ghost/I_16_P/1 (7).webp',
		'/images/ghost/I_16_P/1 (8).webp',
		'/images/ghost/I_16_P/1 (9).webp',
		'/images/ghost/I_16_P/1 (10).webp',
		'/images/ghost/I_16_P/1 (11).webp',
		'/images/ghost/I_16_P/1 (12).webp',
		'/images/ghost/I_16_P/1 (13).webp',
		'/images/ghost/I_16_P/1 (14).webp',
		'/images/ghost/I_16_P/1 (15).webp',
		'/images/ghost/I_16_P/1 (16).webp',
		'/images/ghost/I_16_P/1 (17).webp',
		'/images/ghost/I_16_P/1 (18).webp',
		'/images/ghost/I_16_P/1 (19).webp',
		'/images/ghost/I_16_P/1 (20).webp',
		'/images/ghost/I_16_P/1 (21).webp',
		'/images/ghost/I_16_P/1 (22).webp',
		'/images/ghost/I_16_P/1 (23).webp',
		'/images/ghost/I_16_P/1 (24).webp',
		'/images/ghost/I_16_P/1 (25).webp',
		'/images/ghost/I_16_P/1 (26).webp',
		'/images/ghost/I_16_P/1 (27).webp',
		'/images/ghost/I_16_P/1 (28).webp',
		'/images/ghost/I_16_P/1 (29).webp',
		'/images/ghost/I_16_P/1 (30).webp',
		'/images/ghost/I_16_P/1 (31).webp',
		'/images/ghost/I_16_P/1 (32).webp',
		'/images/ghost/I_16_P/1 (33).webp',
		'/images/ghost/I_16_P/1 (34).webp',
		'/images/ghost/I_16_P/1 (35).webp',
		'/images/ghost/I_16_P/1 (36).webp',
		'/images/ghost/I_16_P/1 (37).webp',
		'/images/ghost/I_16_P/1 (38).webp',
		'/images/ghost/I_16_P/1 (39).webp',
		'/images/ghost/I_16_P/1 (40).webp',
		'/images/ghost/I_16_P/1 (41).webp',
		'/images/ghost/I_16_P/1 (42).webp',
		'/images/ghost/I_16_P/1 (43).webp',
		'/images/ghost/I_16_P/1 (44).webp',
		'/images/ghost/I_16_P/1 (45).webp',
		'/images/ghost/I_16_P/1 (46).webp',
		'/images/ghost/I_16_P/1 (47).webp',
		'/images/ghost/I_16_P/1 (48).webp',
		'/images/ghost/I_16_P/1 (49).webp',
		'/images/ghost/I_16_P/1 (50).webp',
		'/images/ghost/I_16_P/1 (51).webp',
		'/images/ghost/I_16_P/1 (52).webp',
		'/images/ghost/I_16_P/1 (53).webp',
		'/images/ghost/I_16_P/1 (54).webp',
		'/images/ghost/I_16_P/1 (55).webp',
		'/images/ghost/I_16_P/1 (56).webp',
		'/images/ghost/I_16_P/1 (57).webp',
		'/images/ghost/I_16_P/1 (58).webp',
		'/images/ghost/I_16_P/1 (59).webp',
		'/images/ghost/I_16_P/1 (60).webp',
		'/images/ghost/I_16_P/1 (61).webp',
		'/images/ghost/I_16_P/1 (62).webp',
		'/images/ghost/I_16_P/1 (63).webp',
		'/images/ghost/I_16_P/1 (64).webp',
		'/images/ghost/I_16_P/1 (65).webp',
		'/images/ghost/I_16_P/1 (66).webp',
		'/images/ghost/I_16_P/1 (67).webp',
		'/images/ghost/I_16_P/1 (68).webp',
		'/images/ghost/I_16_P/1 (69).webp',
		'/images/ghost/I_16_P/1 (70).webp',
		'/images/ghost/I_16_P/1 (71).webp',
		'/images/ghost/I_16_P/1 (72).webp',
		'/images/ghost/I_16_P/1 (73).webp',
		'/images/ghost/I_16_P/1 (74).webp',
		'/images/ghost/I_16_P/1 (75).webp',
		'/images/ghost/I_16_P/1 (76).webp',
		'/images/ghost/I_16_P/1 (77).webp',
		'/images/ghost/I_16_P/1 (78).webp',
		'/images/ghost/I_16_P/1 (79).webp',
		'/images/ghost/I_16_P/1 (80).webp',
		'/images/ghost/I_16_P/1 (81).webp',
		'/images/ghost/I_16_P/1 (82).webp',
		'/images/ghost/I_16_P/1 (83).webp',
		'/images/ghost/I_16_P/1 (84).webp',
		'/images/ghost/I_16_P/1 (85).webp',
		'/images/ghost/I_16_P/1 (86).webp',
		'/images/ghost/I_16_P/1 (87).webp',
		'/images/ghost/I_16_P/1 (88).webp',
		'/images/ghost/I_16_P/1 (89).webp',
		'/images/ghost/I_16_P/1 (90).webp',
		'/images/ghost/I_16_P/1 (91).webp',
		'/images/ghost/I_16_P/1 (92).webp',
		'/images/ghost/I_16_P/1 (93).webp',
		'/images/ghost/I_16_P/1 (94).webp',
		'/images/ghost/I_16_P/1 (95).webp',
		'/images/ghost/I_16_P/1 (96).webp',
		'/images/ghost/I_16_P/1 (97).webp',
		'/images/ghost/I_16_P/1 (98).webp',
		'/images/ghost/I_16_P/1 (99).webp',
		'/images/ghost/I_16_P/1 (100).webp',

		'/images/ghost/I_16_P/1(101).webp',
		'/images/ghost/I_16_P/1(102).webp',
		'/images/ghost/I_16_P/1(103).webp',
		'/images/ghost/I_16_P/1(104).webp',
		'/images/ghost/I_16_P/1(105).webp',
		'/images/ghost/I_16_P/1(106).webp',
		'/images/ghost/I_16_P/1(107).webp',
		'/images/ghost/I_16_P/1(108).webp',
		'/images/ghost/I_16_P/1(109).webp',
		'/images/ghost/I_16_P/1(110).webp',
		'/images/ghost/I_16_P/1(111).webp',
		'/images/ghost/I_16_P/1(112).webp',
		'/images/ghost/I_16_P/1(113).webp',
		'/images/ghost/I_16_P/1(114).webp',
		'/images/ghost/I_16_P/1(115).webp',
		'/images/ghost/I_16_P/1(116).webp',
		'/images/ghost/I_16_P/1(117).webp'
	];

	const I_15_P_Max = [
		'/images/ghost/I_15_P_Max/1 (0).webp',
		'/images/ghost/I_15_P_Max/1 (1).webp',
		'/images/ghost/I_15_P_Max/1 (2).webp',
		'/images/ghost/I_15_P_Max/1 (3).webp',
		'/images/ghost/I_15_P_Max/1 (4).webp',
		'/images/ghost/I_15_P_Max/1 (5).webp',
		'/images/ghost/I_15_P_Max/1 (6).webp',
		'/images/ghost/I_15_P_Max/1 (7).webp',
		'/images/ghost/I_15_P_Max/1 (8).webp',
		'/images/ghost/I_15_P_Max/1 (9).webp',
		'/images/ghost/I_15_P_Max/1 (10).webp',
		'/images/ghost/I_15_P_Max/1 (11).webp',
		'/images/ghost/I_15_P_Max/1 (12).webp',
		'/images/ghost/I_15_P_Max/1 (13).webp',
		'/images/ghost/I_15_P_Max/1 (14).webp',
		'/images/ghost/I_15_P_Max/1 (15).webp',
		'/images/ghost/I_15_P_Max/1 (16).webp',
		'/images/ghost/I_15_P_Max/1 (17).webp',
		'/images/ghost/I_15_P_Max/1 (18).webp',
		'/images/ghost/I_15_P_Max/1 (19).webp',
		'/images/ghost/I_15_P_Max/1 (20).webp',
		'/images/ghost/I_15_P_Max/1 (21).webp',
		'/images/ghost/I_15_P_Max/1 (22).webp',
		'/images/ghost/I_15_P_Max/1 (23).webp',
		'/images/ghost/I_15_P_Max/1 (24).webp',
		'/images/ghost/I_15_P_Max/1 (25).webp',
		'/images/ghost/I_15_P_Max/1 (26).webp',
		'/images/ghost/I_15_P_Max/1 (27).webp',
		'/images/ghost/I_15_P_Max/1 (28).webp',
		'/images/ghost/I_15_P_Max/1 (29).webp',
		'/images/ghost/I_15_P_Max/1 (30).webp',
		'/images/ghost/I_15_P_Max/1 (31).webp',
		'/images/ghost/I_15_P_Max/1 (32).webp',
		'/images/ghost/I_15_P_Max/1 (33).webp',
		'/images/ghost/I_15_P_Max/1 (34).webp',
		'/images/ghost/I_15_P_Max/1 (35).webp',
		'/images/ghost/I_15_P_Max/1 (36).webp',
		'/images/ghost/I_15_P_Max/1 (37).webp',
		'/images/ghost/I_15_P_Max/1 (38).webp',
		'/images/ghost/I_15_P_Max/1 (39).webp',
		'/images/ghost/I_15_P_Max/1 (40).webp',
		'/images/ghost/I_15_P_Max/1 (41).webp',
		'/images/ghost/I_15_P_Max/1 (42).webp',
		'/images/ghost/I_15_P_Max/1 (43).webp',
		'/images/ghost/I_15_P_Max/1 (44).webp',
		'/images/ghost/I_15_P_Max/1 (45).webp',
		'/images/ghost/I_15_P_Max/1 (46).webp',
		'/images/ghost/I_15_P_Max/1 (47).webp',
		'/images/ghost/I_15_P_Max/1 (48).webp',
		'/images/ghost/I_15_P_Max/1 (49).webp',
		'/images/ghost/I_15_P_Max/1 (50).webp',
		'/images/ghost/I_15_P_Max/1 (51).webp',
		'/images/ghost/I_15_P_Max/1 (52).webp',
		'/images/ghost/I_15_P_Max/1 (53).webp',
		'/images/ghost/I_15_P_Max/1 (54).webp',
		'/images/ghost/I_15_P_Max/1 (55).webp',
		'/images/ghost/I_15_P_Max/1 (56).webp',
		'/images/ghost/I_15_P_Max/1 (57).webp',
		'/images/ghost/I_15_P_Max/1 (58).webp',
		'/images/ghost/I_15_P_Max/1 (59).webp',
		'/images/ghost/I_15_P_Max/1 (60).webp',
		'/images/ghost/I_15_P_Max/1 (61).webp',
		'/images/ghost/I_15_P_Max/1 (62).webp',
		'/images/ghost/I_15_P_Max/1 (63).webp',
		'/images/ghost/I_15_P_Max/1 (64).webp',
		'/images/ghost/I_15_P_Max/1 (65).webp',
		'/images/ghost/I_15_P_Max/1 (66).webp',
		'/images/ghost/I_15_P_Max/1 (67).webp',
		'/images/ghost/I_15_P_Max/1 (68).webp',
		'/images/ghost/I_15_P_Max/1 (69).webp',
		'/images/ghost/I_15_P_Max/1 (70).webp',
		'/images/ghost/I_15_P_Max/1 (71).webp',
		'/images/ghost/I_15_P_Max/1 (72).webp',
		'/images/ghost/I_15_P_Max/1 (73).webp',
		'/images/ghost/I_15_P_Max/1 (74).webp',
		'/images/ghost/I_15_P_Max/1 (75).webp',
		'/images/ghost/I_15_P_Max/1 (76).webp',
		'/images/ghost/I_15_P_Max/1 (77).webp',
		'/images/ghost/I_15_P_Max/1 (78).webp',
		'/images/ghost/I_15_P_Max/1 (79).webp',
		'/images/ghost/I_15_P_Max/1 (80).webp',
		'/images/ghost/I_15_P_Max/1 (81).webp',
		'/images/ghost/I_15_P_Max/1 (82).webp',
		'/images/ghost/I_15_P_Max/1 (83).webp',
		'/images/ghost/I_15_P_Max/1 (84).webp',
		'/images/ghost/I_15_P_Max/1 (85).webp',
		'/images/ghost/I_15_P_Max/1 (86).webp',
		'/images/ghost/I_15_P_Max/1 (87).webp',
		'/images/ghost/I_15_P_Max/1 (88).webp',
		'/images/ghost/I_15_P_Max/1 (89).webp',
		'/images/ghost/I_15_P_Max/1 (90).webp',
		'/images/ghost/I_15_P_Max/1 (91).webp',
		'/images/ghost/I_15_P_Max/1 (92).webp',
		'/images/ghost/I_15_P_Max/1 (93).webp',
		'/images/ghost/I_15_P_Max/1 (94).webp',
		'/images/ghost/I_15_P_Max/1 (95).webp',
		'/images/ghost/I_15_P_Max/1 (96).webp',
		'/images/ghost/I_15_P_Max/1 (97).webp',
		'/images/ghost/I_15_P_Max/1 (98).webp',
		'/images/ghost/I_15_P_Max/1 (99).webp',
		'/images/ghost/I_15_P_Max/1 (100).webp',

		'/images/ghost/I_15_P_Max/1 (101).webp',
		'/images/ghost/I_15_P_Max/1 (102).webp',
		'/images/ghost/I_15_P_Max/1 (103).webp',
		'/images/ghost/I_15_P_Max/1 (104).webp',
		'/images/ghost/I_15_P_Max/1 (105).webp',
		'/images/ghost/I_15_P_Max/1 (106).webp',
		'/images/ghost/I_15_P_Max/1 (107).webp',
		'/images/ghost/I_15_P_Max/1 (108).webp',
		'/images/ghost/I_15_P_Max/1 (109).webp',
		'/images/ghost/I_15_P_Max/1 (110).webp',
		'/images/ghost/I_15_P_Max/1 (111).webp',
		'/images/ghost/I_15_P_Max/1 (112).webp',
		'/images/ghost/I_15_P_Max/1 (113).webp',
		'/images/ghost/I_15_P_Max/1 (114).webp',
		'/images/ghost/I_15_P_Max/1 (115).webp',
		'/images/ghost/I_15_P_Max/1 (116).webp',
		'/images/ghost/I_15_P_Max/1 (117).webp'
	];

	const I_15_P = [
		'/images/ghost/I_15_P/1.webp',
		'/images/ghost/I_15_P/2.webp',
		'/images/ghost/I_15_P/3.webp',
		'/images/ghost/I_15_P/4.webp',
		'/images/ghost/I_15_P/5.webp',
		'/images/ghost/I_15_P/6.webp',
		'/images/ghost/I_15_P/7.webp',
		'/images/ghost/I_15_P/8.webp',
		'/images/ghost/I_15_P/9.webp',
		'/images/ghost/I_15_P/10.webp',
		'/images/ghost/I_15_P/11.webp',
		'/images/ghost/I_15_P/12.webp',
		'/images/ghost/I_15_P/13.webp',
		'/images/ghost/I_15_P/14.webp',
		'/images/ghost/I_15_P/15.webp',
		'/images/ghost/I_15_P/16.webp',
		'/images/ghost/I_15_P/17.webp',
		'/images/ghost/I_15_P/18.webp',
		'/images/ghost/I_15_P/18.webp',
		'/images/ghost/I_15_P/19.webp',
		'/images/ghost/I_15_P/20.webp',
		'/images/ghost/I_15_P/21.webp',
		'/images/ghost/I_15_P/22.webp',
		'/images/ghost/I_15_P/23.webp',
		'/images/ghost/I_15_P/24.webp',
		'/images/ghost/I_15_P/25.webp',
		'/images/ghost/I_15_P/26.webp',
		'/images/ghost/I_15_P/27.webp',
		'/images/ghost/I_15_P/28.webp',
		'/images/ghost/I_15_P/29.webp',
		'/images/ghost/I_15_P/30.webp',
		'/images/ghost/I_15_P/31.webp',
		'/images/ghost/I_15_P/32.webp',
		'/images/ghost/I_15_P/33.webp',
		'/images/ghost/I_15_P/34.webp',
		'/images/ghost/I_15_P/35.webp',
		'/images/ghost/I_15_P/36.webp',
		'/images/ghost/I_15_P/37.webp',
		'/images/ghost/I_15_P/38.webp',
		'/images/ghost/I_15_P/39.webp',
		'/images/ghost/I_15_P/40.webp',
		'/images/ghost/I_15_P/41.webp',
		'/images/ghost/I_15_P/42.webp',
		'/images/ghost/I_15_P/43.webp',
		'/images/ghost/I_15_P/44.webp',
		'/images/ghost/I_15_P/45.webp',
		'/images/ghost/I_15_P/46.webp',
		'/images/ghost/I_15_P/47.webp',
		'/images/ghost/I_15_P/48.webp',
		'/images/ghost/I_15_P/49.webp',
		'/images/ghost/I_15_P/50.webp',
		'/images/ghost/I_15_P/51.webp',
		'/images/ghost/I_15_P/52.webp',
		'/images/ghost/I_15_P/53.webp',
		'/images/ghost/I_15_P/54.webp',
		'/images/ghost/I_15_P/55.webp',
		'/images/ghost/I_15_P/56.webp',
		'/images/ghost/I_15_P/57.webp',
		'/images/ghost/I_15_P/58.webp',
		'/images/ghost/I_15_P/59.webp',
		'/images/ghost/I_15_P/60.webp',
		'/images/ghost/I_15_P/61.webp',
		'/images/ghost/I_15_P/62.webp',
		'/images/ghost/I_15_P/63.webp',
		'/images/ghost/I_15_P/64.webp',
		'/images/ghost/I_15_P/65.webp',
		'/images/ghost/I_15_P/66.webp',
		'/images/ghost/I_15_P/67.webp',
		'/images/ghost/I_15_P/68.webp',
		'/images/ghost/I_15_P/69.webp',
		'/images/ghost/I_15_P/70.webp',
		'/images/ghost/I_15_P/71.webp',
		'/images/ghost/I_15_P/72.webp',
		'/images/ghost/I_15_P/73.webp',
		'/images/ghost/I_15_P/74.webp',
		'/images/ghost/I_15_P/75.webp',
		'/images/ghost/I_15_P/76.webp',
		'/images/ghost/I_15_P/77.webp',
		'/images/ghost/I_15_P/78.webp',
		'/images/ghost/I_15_P/79.webp',
		'/images/ghost/I_15_P/80.webp',
		'/images/ghost/I_15_P/81.webp',
		'/images/ghost/I_15_P/82.webp',
		'/images/ghost/I_15_P/83.webp',
		'/images/ghost/I_15_P/84.webp',
		'/images/ghost/I_15_P/85.webp',
		'/images/ghost/I_15_P/86.webp',
		'/images/ghost/I_15_P/87.webp',
		'/images/ghost/I_15_P/88.webp',
		'/images/ghost/I_15_P/89.webp',
		'/images/ghost/I_15_P/90.webp',
		'/images/ghost/I_15_P/91.webp',
		'/images/ghost/I_15_P/92.webp',
		'/images/ghost/I_15_P/93.webp',
		'/images/ghost/I_15_P/94.webp',
		'/images/ghost/I_15_P/95.webp',
		'/images/ghost/I_15_P/96.webp',
		'/images/ghost/I_15_P/97.webp',
		'/images/ghost/I_15_P/98.webp',
		'/images/ghost/I_15_P/99.webp',
		'/images/ghost/I_15_P/100.webp',
		'/images/ghost/I_15_P/101.webp',
		'/images/ghost/I_15_P/102.webp',
		'/images/ghost/I_15_P/103.webp',
		'/images/ghost/I_15_P/104.webp',
		'/images/ghost/I_15_P/105.webp',
		'/images/ghost/I_15_P/106.webp',
		'/images/ghost/I_15_P/107.webp',
		'/images/ghost/I_15_P/108.webp',
		'/images/ghost/I_15_P/109.webp',
		'/images/ghost/I_15_P/110.webp',
		'/images/ghost/I_15_P/111.webp',
		'/images/ghost/I_15_P/112.webp',
		'/images/ghost/I_15_P/113.webp',
		'/images/ghost/I_15_P/114.webp',
		'/images/ghost/I_15_P/115.webp',
		'/images/ghost/I_15_P/116.webp',
		'/images/ghost/I_15_P/117.webp',
		'/images/ghost/I_15_P/118.webp',
		'/images/ghost/I_15_P/119.webp'
	];

	const I_14_P_Max = [
		'/images/ghost/I_14_P_Max/1.webp',
		'/images/ghost/I_14_P_Max/2.webp',
		'/images/ghost/I_14_P_Max/3.webp',
		'/images/ghost/I_14_P_Max/4.webp',
		'/images/ghost/I_14_P_Max/5.webp',
		'/images/ghost/I_14_P_Max/6.webp',
		'/images/ghost/I_14_P_Max/7.webp',
		'/images/ghost/I_14_P_Max/8.webp',
		'/images/ghost/I_14_P_Max/9.webp',
		'/images/ghost/I_14_P_Max/10.webp',
		'/images/ghost/I_14_P_Max/11.webp',
		'/images/ghost/I_14_P_Max/12.webp',
		'/images/ghost/I_14_P_Max/13.webp',
		'/images/ghost/I_14_P_Max/14.webp',
		'/images/ghost/I_14_P_Max/15.webp',
		'/images/ghost/I_14_P_Max/16.webp',
		'/images/ghost/I_14_P_Max/17.webp',
		'/images/ghost/I_14_P_Max/18.webp',
		'/images/ghost/I_14_P_Max/18.webp',
		'/images/ghost/I_14_P_Max/19.webp',
		'/images/ghost/I_14_P_Max/20.webp',
		'/images/ghost/I_14_P_Max/21.webp',
		'/images/ghost/I_14_P_Max/22.webp',
		'/images/ghost/I_14_P_Max/23.webp',
		'/images/ghost/I_14_P_Max/24.webp',
		'/images/ghost/I_14_P_Max/25.webp',
		'/images/ghost/I_14_P_Max/26.webp',
		'/images/ghost/I_14_P_Max/27.webp',
		'/images/ghost/I_14_P_Max/28.webp',
		'/images/ghost/I_14_P_Max/29.webp',
		'/images/ghost/I_14_P_Max/30.webp',
		'/images/ghost/I_14_P_Max/31.webp',
		'/images/ghost/I_14_P_Max/32.webp',
		'/images/ghost/I_14_P_Max/33.webp',
		'/images/ghost/I_14_P_Max/34.webp',
		'/images/ghost/I_14_P_Max/35.webp',
		'/images/ghost/I_14_P_Max/36.webp',
		'/images/ghost/I_14_P_Max/37.webp',
		'/images/ghost/I_14_P_Max/38.webp',
		'/images/ghost/I_14_P_Max/39.webp',
		'/images/ghost/I_14_P_Max/40.webp',
		'/images/ghost/I_14_P_Max/41.webp',
		'/images/ghost/I_14_P_Max/42.webp',
		'/images/ghost/I_14_P_Max/43.webp',
		'/images/ghost/I_14_P_Max/44.webp',
		'/images/ghost/I_14_P_Max/45.webp',
		'/images/ghost/I_14_P_Max/46.webp',
		'/images/ghost/I_14_P_Max/47.webp',
		'/images/ghost/I_14_P_Max/48.webp',
		'/images/ghost/I_14_P_Max/49.webp',
		'/images/ghost/I_14_P_Max/50.webp',
		'/images/ghost/I_14_P_Max/51.webp',
		'/images/ghost/I_14_P_Max/52.webp',
		'/images/ghost/I_14_P_Max/53.webp',
		'/images/ghost/I_14_P_Max/54.webp',
		'/images/ghost/I_14_P_Max/55.webp',
		'/images/ghost/I_14_P_Max/56.webp',
		'/images/ghost/I_14_P_Max/57.webp',
		'/images/ghost/I_14_P_Max/58.webp',
		'/images/ghost/I_14_P_Max/59.webp',
		'/images/ghost/I_14_P_Max/60.webp',
		'/images/ghost/I_14_P_Max/61.webp',
		'/images/ghost/I_14_P_Max/62.webp',
		'/images/ghost/I_14_P_Max/63.webp',
		'/images/ghost/I_14_P_Max/64.webp',
		'/images/ghost/I_14_P_Max/65.webp',
		'/images/ghost/I_14_P_Max/66.webp',
		'/images/ghost/I_14_P_Max/67.webp',
		'/images/ghost/I_14_P_Max/68.webp',
		'/images/ghost/I_14_P_Max/69.webp',
		'/images/ghost/I_14_P_Max/70.webp',
		'/images/ghost/I_14_P_Max/71.webp',
		'/images/ghost/I_14_P_Max/72.webp',
		'/images/ghost/I_14_P_Max/73.webp',
		'/images/ghost/I_14_P_Max/74.webp',
		'/images/ghost/I_14_P_Max/75.webp',
		'/images/ghost/I_14_P_Max/76.webp',
		'/images/ghost/I_14_P_Max/77.webp',
		'/images/ghost/I_14_P_Max/78.webp',
		'/images/ghost/I_14_P_Max/79.webp',
		'/images/ghost/I_14_P_Max/80.webp',
		'/images/ghost/I_14_P_Max/81.webp',
		'/images/ghost/I_14_P_Max/82.webp',
		'/images/ghost/I_14_P_Max/83.webp',
		'/images/ghost/I_14_P_Max/84.webp',
		'/images/ghost/I_14_P_Max/85.webp',
		'/images/ghost/I_14_P_Max/86.webp',
		'/images/ghost/I_14_P_Max/87.webp',
		'/images/ghost/I_14_P_Max/88.webp',
		'/images/ghost/I_14_P_Max/89.webp',
		'/images/ghost/I_14_P_Max/90.webp',
		'/images/ghost/I_14_P_Max/91.webp',
		'/images/ghost/I_14_P_Max/92.webp',
		'/images/ghost/I_14_P_Max/93.webp',
		'/images/ghost/I_14_P_Max/94.webp',
		'/images/ghost/I_14_P_Max/95.webp',
		'/images/ghost/I_14_P_Max/96.webp',
		'/images/ghost/I_14_P_Max/97.webp',
		'/images/ghost/I_14_P_Max/98.webp',
		'/images/ghost/I_14_P_Max/99.webp',
		'/images/ghost/I_14_P_Max/100.webp',
		'/images/ghost/I_14_P_Max/101.webp',
		'/images/ghost/I_14_P_Max/102.webp',
		'/images/ghost/I_14_P_Max/103.webp',
		'/images/ghost/I_14_P_Max/104.webp',
		'/images/ghost/I_14_P_Max/105.webp',
		'/images/ghost/I_14_P_Max/106.webp',
		'/images/ghost/I_14_P_Max/107.webp',
		'/images/ghost/I_14_P_Max/108.webp',
		'/images/ghost/I_14_P_Max/109.webp',
		'/images/ghost/I_14_P_Max/110.webp',
		'/images/ghost/I_14_P_Max/111.webp',
		'/images/ghost/I_14_P_Max/112.webp',
		'/images/ghost/I_14_P_Max/113.webp',
		'/images/ghost/I_14_P_Max/114.webp',
		'/images/ghost/I_14_P_Max/115.webp',
		'/images/ghost/I_14_P_Max/116.webp',
		'/images/ghost/I_14_P_Max/117.webp',
		'/images/ghost/I_14_P_Max/118.webp',
		'/images/ghost/I_14_P_Max/119.webp'
	];

	const modelImages = {
		I_14_P_Max,
		I_15_P,
		I_15_P_Max,
		I_16_P,
		I_16_P_Max,
		S25_Ultra
	};

	$: images = modelImages[model] || [];
	let index = 23;
	let model = 'S25_Ultra';
	let showScreenProtector = false;
	$: showScreenProtector = model === 'S25_Ultra' || model === 'I_16_P_Max';
</script>

<div class=" max-w-[1300px] mx-auto  flex flex-col items-center px-12 lg:px-0 md:flex-row  md:relative">
	<h1 class="md:absolute lg:left-4 z-10 max-w-96 md:max-w-52 font-helvetica text-7xl font-medium">Ghost Case <span class=" custom-outline bg-transparent bg-clip-text font-bold text-transparent"> 2.0 </span></h1>
	<div class=" mx-auto">
		{#if images.length > 0}
			<div class="relative">
				<img src="/images/ghost/rotate.svg " alt="rotate icon" class="absolute right-6 top-3 z-10 md:hidden" />
				<img src={images[index]} alt="Phone model _image" class="h-full min-h-[350px] w-full min-w-[100%] object-cover !grayscale" />
			</div>
		{/if}
	</div>

	<div class="md:absolute right-3 top-0 flex w-full md:w-fit    flex-col gap-3 !text-gray-700">
		<p class=" mt-2 md:w-[90%]  md:ml-auto text-lg">The next-gen clear case.</p>

		<div class="relative w-full md:w-[90%] md:ml-auto  ">
			<select class="appearance -none w-full rounded-3xl md:backdrop-blur-3xl border border-black bg-transparent px-4 py-3 !pl-10 uppercase text-gray-700" bind:value={model}>
				<option value="S25_Ultra">Samsung S25 Ultra</option>
				<option value="I_16_P_Max">iPhone 16 Pro Max</option>
				<option value="I_16_P">iPhone 16</option>
				<option value="I_15_P_Max">iPhone 15 Pro Max</option>
				<option value="I_15_P">iPhone 15 Pro</option>
				<option value="I_14_P_Max">iPhone 14 Pro Max</option>
			</select>

			<div class="pointer-events-none absolute inset-y-0 right-4 flex items-center">
				<ArrowDownRight size="20" />
			</div>
		</div>

		<div class="relative flex w-full flex-row-reverse items-center rounded-3xl border border-black px-4 md:w-[90%] md:ml-auto md:backdrop-blur-3xl ">
			<input id="mag" type="checkbox" class="h-5 w-5 min-w-5 appearance-none rounded-full border border-black checked:border-black checked:bg-black checked:text-white" />

			<label for="mag" class=" ml-6 flex w-full cursor-pointer select-none items-center justify-between bg-transparent py-3 uppercase transition"> Magsafe </label>
		</div>

		{#if showScreenProtector}
			<div class="flex w-full gap-4 md:w-[90%] md:ml-auto  ">
				<div class="relative flex w-full flex-row-reverse md:backdrop-blur-3xl items-center rounded-3xl border border-black px-4">
					<input id="protector" type="checkbox" class="h-5 w-5 min-w-5 appearance-none rounded-full border border-black checked:border-black checked:bg-black checked:text-white" />

					<label for="protector" class=" ml-6 flex w-full cursor-pointer select-none items-center justify-between bg-transparent py-3 uppercase transition"> 2X Screen protectors </label>
				</div>

				<div class=" flex h-full items-center justify-center md:hidden">
					<span class="font-b old my-auto flex h-12 w-12 items-center justify-center rounded-[100%] border border-black px-4 text-center text-xl">?</span>
				</div>
			</div>
		{/if}

		<div class="flex w-full md:w-[90%] md:ml-auto  gap-4">
			<div class="relative flex w-full flex-row-reverse md:backdrop-blur-3xl items-center rounded-3xl border border-black px-4">
				<input id="skin" type="checkbox" class="h-5 w-5 min-w-5 appearance-none rounded-full border border-black checked:border-black checked:bg-black checked:text-white" />

				<label for="skin" class=" ml-6 flex w-full cursor-pointer select-none items-center justify-between bg-transparent py-3 uppercase transition"> teardown skin </label>
			</div>

			<div class=" flex h-full items-center justify-center md:hidden">
				<span class="font-b old my-auto flex h-12 w-12 items-center justify-center rounded-[100%] border border-black px-4 text-center text-xl">?</span>
			</div>
		</div>

		<div class="bg-red- 500 flex w-full justify-between ">
			<div class=" ml-10 flex flex-col md:mt-2 md:mr-2">
				<span class="line-through opacity-35">${Number.parseFloat(33).toFixed(2)}</span>
				<span>${Number.parseFloat(43).toFixed(2)}</span>
			</div>
			<div class="">
				<button class="  flex items-center gap-4 rounded-full bg-[#101829] px-10 py-5 font-bold uppercase text-white">Add to Cart <ArrowUpRight size="20" /> </button>

				<div class="w- 1 /2 mt-3 flex justify-around">
					<p>Ships January</p>
					<span class="my-auto flex h-5 min-h-4 w-5 min-w-4 items-center justify-center rounded-full border-2 border-black text-center font-semibold">?</span>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="w-full hidden md:flex flex-col mt-48 ">
<label for="" class="text-center  flex mx-auto justify-center">Rotate</label>
	<input step={1} type="range" min={0} max={images.length - 1} bind:value={index} class="mx-auto " />
</div>




<div class="grid grid-cols-2 md:grid-cols-4 place-items-center gap-4 mt-12  max-w-[1300px] lg:mx-auto">
  <div class="w-full p-16 md:text-wrap flex flex-col justify-center items-center">
    <span class="text-3xl mb-2"><CountUp value={1.8} duration={1500} />mm</span>
    <p class="uppercase text-zinc-500 text-center">Thin</p>
  </div>

  <div class="w-full p-16 md:text-wrap flex flex-col justify-center items-center">
    <span class="text-3xl mb-2"><CountUp value={44} duration={1500} />g</span>
    <p class="uppercase text-zinc-500 text-center text-sm">Light</p>
  </div>

  <div class="w-full p-16 md:text-wrap flex flex-col justify-center items-center">
    <span class="text-3xl mb-2"><CountUp value={12} duration={1500} />ft</span>
    <p class="uppercase text-zinc-500 text-center text-sm">Drop Protection</p>
  </div>

  <div class="w-full p-16 md:text-wrap flex flex-col justify-center items-center">
    <span class="text-3xl mb-2 text-nowrap"><CountUp value={100} duration={1500} />pct</span>
    <p class="uppercase text-zinc-500 text-center text-sm">Anti-Yellowing</p>
  </div>
</div>









<ShowoffGhost />

















<style>
	input[type='checkbox']:checked {
		background-color: #023047;
	}
	input[type='checkbox']:checked:after {
		content: '\2713';
		color: white;
		position: relative;
		top: -4px;
	}
	input[type='checkbox'] {
		text-align: center;
		display: table-cell;
		vertical-align: middle;
		width: 20px !important;
		height: 20px !important;
		appearance: none;
		border-radius: 50%;
		font-size: 1em;
	}
	select {
		-o-appearance: none;
		-ms-appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		margin: 0 auto;
	}

	option {
		background-color: #111828;
		color: white;
		font-size: medium;
		cursor: progress !important;
	}
	option:checked {
		background-color: rgb(144, 210, 236);
	}
	option:hover {
		background-color: grey;
		cursor: progress;
	}
	option:focus {
		background-color: transparent;
		background-color: grey;
	}
	option:active {
		background-color: transparent;
		background-color: grey;
	}

	.custom-outline {
		-webkit-text-stroke: 2px black;
	}
	input[type='range'] {
		-webkit-appearance: none;
		appearance: none;
		cursor: grab;
		height: 1px;
		background: #000000;
		border-radius: 4px;
		outline: none;
		transition: background 0.2s;
		width: 100%;
		max-width: 300px;
		margin: 2em auto;
		
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 16px;
		height: 16px;
		background: #050505;
		border-radius: 50%;
		transition: background 0.2s ease-in-out;
	}

	input[type='range']::-webkit-slider-thumb:hover {
		background: #444;
	}
</style>

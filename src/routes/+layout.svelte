<script>
	import Header from '$lib/Components/Header.svelte';
import '../app.css';
	let { children } = $props();
</script>


<Header/>
{@render children()}

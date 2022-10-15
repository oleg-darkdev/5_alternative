<script>
	import '../app.css';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init();
	});


</script>


<slot />


<style>
	:global(.flex-align-center) {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>

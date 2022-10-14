<script>
	import '../app.css';
	import 'aos/dist/aos.css'; 
	import AOS from 'aos';
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init();
	});   
	 
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Header />
<slot />
<Footer />


<style>
	:global(.flex-align-center) {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>
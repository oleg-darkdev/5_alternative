<script>
	import '../app.css';
	import 'aos/dist/aos.css'; 

	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>
<Header />
<slot />
<Footer />

<script>
	import SocialMedia from './SocialMedia.svelte';
	import Map from '../layout/Map.svelte';
</script>

<div
	data-aos="fade-down"
	data-aos-delay="80"
	data-aos-duration="1000"
	data-aos-easing="ease-in-out"
	data-aos-mirror="true"
	data-aos-once="false"
	style=""
	class="lg:w-8/12  sm:w-12/12"
>
	<h2
		class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl text-center"
	>
		Skontaktuj się z nami
	</h2>
	<div
		style="max-width: 100%; display: flex; justify-content: center; flex-direction: column;"
		class="mb-4 max-w-sm bg-white shadow-md rounded-lg border border-gray-200  text-gray-500 p-6"
	>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
			5alternatyw@gmail.com 
		</h5>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
			Mazowiecka 26, 81-862 Sopot, Poland
		</h5>

		<Map />

		<SocialMedia />
	</div>

	
</div>


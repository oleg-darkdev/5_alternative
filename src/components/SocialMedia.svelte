<script>
	import SocialAvatars from './contact/Social.svelte';

	import socialData from '../data/social';
</script>

<div style=" display: flex; justify-content: center; flex-direction: column; align-content: center; align-items: center;">
	<h2
		class=" lg:w-6/12  sm:w-12/12 sm:p-1 lg:p-6  mt-6 mb-2 text-4xl font-bold tracking-tight text-gray-900 tracking-tight  leading-none text-center"
	>
		Jesteśmy  w 👇
	</h2>
	<div class="social-media-wrap flex flex-wrap justify-center flex-row md:p-6 rounded-3xl bg-gray-800 ">
		{#each socialData as social}
			<SocialAvatars {social} />
		{/each}
	</div>
</div>
<style>
	.social-media-wrap {
		background-image: url(/social/social.png);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		
	}
</style>

<script>
	import SocialAvatars from './contact/Social.svelte';

	import socialData from '../data/social';
</script>

<div class=" flex flex-wrap justify-center flex-row  sm:p-1 lg:p-6 md:p-6 rounded-3xl bg-gray-800 ">
	{#each socialData as social}
		<SocialAvatars {social} />
	{/each}
</div>

<style>
	div {
		background-image: url(/social/social.png);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>

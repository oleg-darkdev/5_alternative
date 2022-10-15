<script>
	import MemberCard from './team/MemberCard.svelte';
	import membersList from '../data/membersList';
</script>

<div class="flex-align-center m-4 lg:w-8/12  sm:w-12/12">
	{#each membersList as memberData}
		<MemberCard {memberData} />
	{/each}
</div>

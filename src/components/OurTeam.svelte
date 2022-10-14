<script>
    import MemberCard from "./team/MemberCard.svelte"; 
    import membersList from '../data/membersList';
 
</script>

<div class="flex-align-center m-4 w-8/12  ">
    {#each membersList as memberData}
        <MemberCard {memberData}/>
    {/each}
</div>
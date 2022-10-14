<script>
    import { Card } from "flowbite-svelte";

    export let memberData;
</script>

<div class="m-2">
<Card img={memberData.photo} >
    <div class="flex-align-center flex-col">
    <h5 class="text-center  mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{memberData.firstName} {memberData.surName}</h5>
    <p class="text-center mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
        {memberData.text}
    </p>
    <div class="flex-align-center row">
        {#each memberData.contacts as contact}
            <img class="m-1 shadow-xl " src={contact.logoImg}  alt={contact.altName}>
        {/each}
    </div>
    </div>
</Card>
</div>

<style>
    /* .column {
        flex-direction: column;
    } */


</style>
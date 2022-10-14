<script>
  import AOS from 'aos';
  import { onMount } from 'svelte';
  onMount(() => {
      AOS.init();
  });       

  import { Card, Button } from "flowbite-svelte";
</script>

<div class="bg-one-procent">
<div  data-aos="fade-right" 
    data-aos-delay="80"
    data-aos-duration="800"
    style="max-width: 100%; height: 180px;" class="flex max-w-sm flex-col bg-white dark:bg-gray-800 shadow-md text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Wspieraj nas 1%</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
    <Button class="w-fit" gradient color="pinkToOrange">
      Read more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
    </Button>
</div>

</div>


<style> 
.bg-one-procent {
  /* The image used */
  background-image: url("/one-procent.png");
  display: flex; 
  justify-content: center;
  align-items: center;
  /* Full height */
  height: 300px;
  width: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
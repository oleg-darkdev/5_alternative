<script>
  import AOS from 'aos';
  import { onMount } from 'svelte';
  onMount(() => {
      AOS.init();
  });       

	import Contact from './Contact.svelte';
</script>
<!-- width: 100%; min-width: 320px; max-width: 760px; -->

<div data-aos="fade-down"
    data-aos-delay="80"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false" 
    style="max-width: 100%; width: 720px; " class="flex max-w-sm flex-col bg-white dark:bg-gray-800 shadow-md text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Alternatywy 5  - Dom Sąsiedzki w Kamiennym Potoku</h5>
      <p class="font-normal text-gray-700  dark:text-gray-400 leading-tight mt-2 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <p class="font-normal text-gray-700  dark:text-gray-400 leading-tight mt-2 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <Contact />
</div>

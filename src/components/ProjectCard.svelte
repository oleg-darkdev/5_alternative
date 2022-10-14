<script>
  import { Button } from 'flowbite-svelte';
  export let align, title, img, description;
</script>

<div  data-aos="flip-left" style="display: flex; justify-content: flex-{align};" class=" lg:w-6/12 sm:w-8/12 mt-2 mb-2">
  <!-- <Card img={img} href="/" horizontal> -->
  <div class="flex sm:max-w-xl flex-col md:flex-row h-auto md:max-w-xl bg-white dark:bg-gray-800 shadow-md text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
    <!-- <img class="rounded-t-lg object-cover w-full h-auto md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://www.w3schools.com/howto/img_girl.jpg" alt=""> -->
    <div class="p-4 project-card rounded-lg">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      {description}
    </p>
    <Button gradient color="pinkToOrange" size="xl">More</Button>
    </div>
    </div>
  <!-- </Card> -->
</div>

<style>
  .project-card {
  background-image: url(/project_card.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
}
</style>
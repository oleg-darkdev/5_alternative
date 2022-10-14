<script>
  import { Avatar } from "flowbite-svelte";

  export let social;
</script>

<div
    data-aos="flip-left"
    data-aos-delay="50"
    data-aos-duration="1200"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false" 
    on:click={() => {window.open(social.link, '_blank').focus(); console.log('asd')}}> 
  <Avatar class="m-4 shadow-xl " src={social.logoImg}   rounded size="lg" />
</div>
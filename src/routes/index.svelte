<script>
	import AboutUs from '../components/AboutUs.svelte';
	import ProjectCard from '../components/ProjectCard.svelte';
	import OneProcent from '../components/OneProcent.svelte'
	import OutTeam from '../components/OurTeam.svelte';

	const projectsList = [
		{
			align: 'start',
			title: 'Warsztat stolarski 🪓',
			
			description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
		},
		{
			align: 'end',
			title: '44Hackerspace 💻',
			
			description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
		},
		{
			align: 'start',
			title: 'Warsztaty fotograficzne 📷',
			
			description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
		},
		{
			align: 'end',
			title: 'Turnieje ping-pongowe 🏓',
			
			description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
		},
		{
			align: 'start',
			title: 'Warsztat rowerowy 🚲',
			
			description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
		},
		{
			align: 'end',
			title: 'Turnieje szachowe ♟️',
			
			description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
		},
		{
			align: 'start',
			title: 'Warsztaty naprawiania elektronarzędzi 🛠',
			
			description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
		},
	];


</script>

<svelte:head>
    <title>Alternatywy 5 - Dom Sąsiedzki </title>
</svelte:head> 

<!-- workshops-section -->
<div class="bg"></div>	

<section class="mb-12 mt-12 lg:w-7/12 px-8 sm:w-8/12 h-auto sm:p-1 lg:p-10 md:p-8"> 
	<a name="about"></a> 
	<h2 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">O nas</h2>
	<AboutUs />
</section>

<section class="yellow-bg  mb-12 mt-12 lg:w-7/12 px-8 sm:w-12/12 h-auto p-10  "> 
	<a name="projects"></a> 
	<h2 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Nasze projekty</h2>
	{#each projectsList as project}
		<ProjectCard align = {project.align} title={project.title} img={project.img} description={project.description}/>
	{/each}
</section>
<section class="mt-12 lg:w-7/12  sm:w-8/12 h-auto p-10 "> 
	<a name="donate"></a> 

	<OneProcent />
</section>

<section class="turq-bg  mt-12 lg:w-7/12  sm:w-12/12 h-auto sm:p-1 lg:p-10 md:p-8"> 
	<a name="team"></a> 
	
	<h2 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">Nasza ekipa</h2>
	<OutTeam />
</section>

	

<section class="mt-12 lg:w-7/12  sm:w-8/12 h-auto p-4"> 
	<a name="team"></a> 
	
	<iframe class="bg-white shadow-md rounded-lg border border-gray-200 text-gray-500 p-2" width="100%" height="600px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=18.547909855842594%2C54.46001700833452%2C18.550592064857486%2C54.46113953783808&amp;layer=mapnik&amp;marker=54.46057827693473%2C18.549250960350037" ></iframe>
</section>




<style>
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.yellow-bg {
		background-color: #f3e600;
	}

	.turq-bg {
		background-color: #32B295;
	}


.bg {
  /* The image used */
  background-image: url("/banner.png");

  /* Full height */
  height: 100vh;
  width: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

	.boardgames-section {

	}

	.tools-section {

	}

	.faq-section {

	}

	.contact-section {

	}

	.community-section {

	}

:global(body, html) {
  height: 100%;
}
</style>
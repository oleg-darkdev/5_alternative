<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	import AboutUs from '../components/AboutUs.svelte';
	import ProjectCard from '../components/ProjectCard.svelte';
	import OneProcent from '../components/OneProcent.svelte';
	import OutTeam from '../components/OurTeam.svelte';
	import Contact from '../components/Contact.svelte';

	import projectsList from '../data/projectsList';
</script>

<svelte:head>
	<title>Alternatywy 5 - Dom Sąsiedzki</title>
</svelte:head>

<Header />

<!-- workshops-section -->
<div class="bg" />

<section class="mb-12 mt-12 lg:w-7/12 px-8 sm:w-8/12 h-auto sm:p-1 p-10p-10">
	<a name="about" />

	<AboutUs />
</section>

<section class="yellow-bg  mb-12 mt-12 lg:w-7/12 px-8 sm:w-12/12 h-auto p-10  ">
	<a name="projects" />
	<h2
		class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
	>
		Nasze projekty
	</h2>
	{#each projectsList as project}
		<ProjectCard {project} />
	{/each}
</section>
<section class="mt-12 lg:w-7/12  sm:w-8/12 h-auto p-10 ">
	<a name="donate" />

	<OneProcent />
</section>

<section class="turq-bg  mt-12 lg:w-7/12  sm:w-12/12 h-auto sm:p-1 p-10">
	<a name="team" />

	<h2
		class="mt-6 mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl "
	>
		Nasza ekipa
	</h2>
	<OutTeam />
</section>

<section class="mt-12 lg:w-7/12 mb-12 mt-12 sm:w-8/12 h-auto p-4">
	<a name="contact" />
	<Contact />
</section>
<Footer />

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
		background-color: #32b295;
	}

	.bg {
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	@media (min-width: 1024px) {
		.bg {
			background-image: url('/banner.png');
			height: 100vh;
			width: 100%;
		}
	}

	@media (min-device-width: 568px) and (max-device-width: 1024px) {
		.bg {
			background-image: url('/banner_md.png');
			height: 480px;
		}
	}

	@media (min-device-width: 320px) and (max-device-width: 568px) {
		.bg {
			background-image: url('/banner_sm.png');
			min-height: 320px;
		}
	}
</style>

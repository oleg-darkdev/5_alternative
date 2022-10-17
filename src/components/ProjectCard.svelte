<script>
	import { Button } from 'flowbite-svelte';
	export let project;
</script>

<div
	data-aos="flip-left"
	style="display: flex; justify-content: flex-{project.align};"
	class=" lg:w-6/12 sm:w-8/12 mt-2 mb-2"
>
	<a name={project.anchor} />
	<div
		class="flex sm:max-w-xl flex-col md:flex-row h-auto md:max-w-xl bg-white  shadow-md text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
	>
		<!-- <img class="rounded-t-lg object-cover w-full h-auto md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://www.w3schools.com/howto/img_girl.jpg" alt=""> -->
		<div class="p-4 project-card rounded-lg">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
				{project.title}
			</h5>
			<p class="mb-2 font-normal text-gray-700 dark:text-gray-400 leading-tight">
				{project.description}
			</p>
			{#if project.showMoreInfo}
				<div class="column mt-3">
					{#each project.moreInfo.text as text}
						<p class="mb-2 font-normal text-gray-700 dark:text-gray-400 leading-tight">
							{text}
						</p>
					{/each}

					<h2 class="mt-10 mb-1 text-sm font-semibold text-gray-900 uppercase ">Organizatorzy</h2>
					<div class="orgs-logos-wrap p-0 m-0">
						{#each project.moreInfo.orgs as org}
							<div class="column p-1 m-1">
								<div
									class="partners-logos rounded-lg border border-gray-300 "
									style="background-image: url({org.logoImg}); width: 220px; height: 110px;"
								/>
								<h4 class="text-center"><a href={org.link} target="_blank">{org.title}</a></h4>
							</div>
						{/each}
					</div>
				</div>
			{/if}
			{#if !project.showMoreInfo}
				<Button
					gradient
					color="pinkToOrange"
					on:click={() => (project.showMoreInfo = true)}
					size="xl">More</Button
				>
			{/if}
		</div>
	</div>
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

	.orgs-logos-wrap {
		display: flex;
		flex-direction: row;
		/* justify-content: space-between; */

		/* max-width: 50vw; */
		width: auto;
		height: auto;
		flex-wrap: wrap;
	}

	.partners-logos {
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>

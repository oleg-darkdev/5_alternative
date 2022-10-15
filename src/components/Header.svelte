<script>
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu, Button } from 'flowbite-svelte';
	import { Avatar } from 'flowbite-svelte';
	import * as Icon from 'svelte-heros-v2';
	import projectsList from '../data/projectsList';
	import partnersList from '../data/partnersList';
	import social from '../data/social';

	let showMenuProjects = false,
		showMenuPartners = false,
		showContacts = false;
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img
			src="https://flowbite.com/docs/images/logo.svg"
			class="mr-3 h-6 sm:h-9"
			alt="Alternatywy 5 Logo"
		/>
	</NavBrand>
	<div class="flex md:order-2">
		<Button gradient color="pinkToOrange" size="xl">Wspieraj nas 1%</Button>
		<NavHamburger on:click={toggle} />
	</div>
	<NavUl {hidden} class="order-1">
		<NavLi href="#about">O nas</NavLi>
		<NavLi style="width: auto; display: flex;flex-direction: row; align-items: center; align-content: center;" on:click={() => {showMenuProjects = !showMenuProjects; showMenuPartners = false; showContacts = false;}}>
			Nasze projekty <Icon.ChevronDown class="ml-2" size="15" />
		</NavLi>
		<NavLi href="#donate">Wspieraj nas</NavLi>
		<NavLi href="#team">Nasza ekipa</NavLi>
		<NavLi href="#partners">Partnerzy</NavLi>		
		<NavLi style="width: auto; display: flex;flex-direction: row; align-items: center; align-content: center;" on:click={() => {showMenuPartners = !showMenuPartners; showMenuProjects = false; showContacts = false;}}>
			Partnerzy <Icon.ChevronDown class="ml-2" size="15" />
		</NavLi>
		<!-- href="#contact" -->
		<NavLi style="width: auto; display: flex;flex-direction: row; align-items: center; align-content: center;" on:click={() => {showContacts = !showContacts; showMenuProjects = false; showMenuPartners = false;}}>
			Contact <Icon.ChevronDown class="ml-2" size="15" />
		</NavLi>
	</NavUl>
</Navbar>

{#if showMenuProjects}
	<div style="position: absolute;" class="menu-wrap w-full"> 
		<div  class="lg:w-7/12  sm:w-12/12" style="flex-direction: row; flex-wrap: wrap;">
		<MegaMenu full items={projectsList} let:item>
			<a href="#{item.anchor}" class="block p-3 rounded-lg hover:bg-gray-200  h-full">
				<h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{item.title}</h2>
				<span class="text-sm font-light text-gray-500 dark:text-gray-400">{item.description}</span>
			</a>
		</MegaMenu>
		</div>
	</div>
{/if}

{#if showMenuPartners}
	<div style="position: absolute;" class="menu-wrap w-full"> 
		<div  class="lg:w-8/12  sm:w-12/12 flex-align-center row flex-wrap" style="">
		<MegaMenu full items={partnersList} let:item>
			<a style="max-width: 180px;" href={item.link} class="mr-1 ml-1 block p-2 rounded-lg hover:bg-gray-200  h-full ">
				<!-- <span class="text-sm font-light text-gray-500 dark:text-gray-400">{item.description}</span> -->
				<div
					class="partners-logos rounded-lg border border-gray-300 "
					style="background-image: url({item.logoImg});"
				/>
				<span class="font-semibold">{item.title}</span>

			</a>
		</MegaMenu>
		</div>
	</div>
{/if}

{#if showContacts}
	<div style="position: absolute;" class="menu-wrap w-full"> 
		<div  class="lg:w-7/12  sm:w-12/12" style="flex-direction: row; flex-wrap: wrap;">
		<MegaMenu full items={social} let:item>
			<a href="#{item.anchor}" class="block p-3 rounded-lg hover:bg-gray-200  h-full">
				<Avatar on:click={() => window.open(social.link, '_blank').focus()} class="shadow-xl " src={item.logoImg} rounded size="lg" />
				<!-- <span class="text-sm font-light text-gray-500 dark:text-gray-400">{item.name}</span> -->
			</a>
		</MegaMenu>
		</div>
	</div>
{/if}


<style>
	.menu-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>

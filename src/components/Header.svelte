<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
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
		<NavLi href="#projects">Nasze projekty</NavLi>
		<NavLi href="#donate">Wspieraj nas</NavLi>
		<NavLi href="#team">Nasza ekipa</NavLi>
		<NavLi href="#contact">Contact</NavLi>
	</NavUl>
</Navbar>

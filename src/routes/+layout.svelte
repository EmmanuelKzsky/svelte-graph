<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode } from 'flowbite-svelte'
    import "../styles/tailwind.css"
</script>
<header >
    <Navbar let:hidden let:toggle class="border-gray-200 dark:border-gray-700 flex items-center justify-between mx-auto py-1.5 px-2">
        <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-2xl font-semibold text-orange-600">
      Snapstrat
    </span>
        </NavBrand>
        <NavHamburger on:click={toggle} />
        <NavUl class="items-center" {hidden}>
            <NavLi href="/" active={true}>Examples</NavLi>
            <NavLi href="/credits">Credits</NavLi>
            <NavLi><DarkMode/> </NavLi>
        </NavUl>
    </Navbar>
</header>
<div class="px-20">
    <slot/>
</div>

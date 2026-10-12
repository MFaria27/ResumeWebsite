<svelte:window bind:scrollY />

<!-- HTML -->
<header class="site-header" class:is-scrolled={scrollY > 8 || menuOpen}>
    <nav class="navbar container px-4 py-3" aria-label="main navigation">
        <div class="navbar-brand">
            {#if !isHome}
                <a class="navbar-item brand is-size-3 is-bold" href="{ base }/" aria-label="Home" on:click={() => menuOpen = false}>
                    M<span class="has-text-grass-green">D</span>F
                </a>
            {/if}
            <button class="navbar-burger" class:is-active={menuOpen} aria-label="menu" aria-expanded={menuOpen} on:click={() => menuOpen = !menuOpen}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>
        </div>
        <div class="navbar-menu" class:is-active={menuOpen}>
            <div class="navbar-end">
                {#each sections as sect}
                    <a class="navbar-item nav-link is-size-4 is-bold" href="{ base }{sect.path}" class:is-current={isCurrent(sect.path, path)}
                       aria-current={isCurrent(sect.path, path) ? "page" : undefined} on:click={() => menuOpen = false}>
                        {sect.name}
                    </a>
                {/each}
            </div>
        </div>
    </nav>
</header>

<!-- CSS -->
<style lang="scss">
    $green: #62C370;

    .site-header {
        transition: background-color 0.3s, backdrop-filter 0.3s;
    }
    .site-header.is-scrolled {
        background-color: rgba(12, 12, 12, 0.85);
        backdrop-filter: blur(8px);
        box-shadow: 0 1px 0 rgba(255, 255, 255, 0.08);
    }
    .navbar {
        background-color: transparent;
    }
    .navbar-item {
        color: white;
        background-color: transparent !important;
        transition: color 0.3s;
    }
    .brand:hover {
        color: $green;
    }

    // Green underline that grows in on hover and stays on the current section
    .nav-link {
        position: relative;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .nav-link::after {
        content: "";
        position: absolute;
        left: 1rem;
        right: 1rem;
        bottom: 0.2rem;
        height: 3px;
        border-radius: 3px;
        background-color: $green;
        transform: scaleX(0);
        transition: transform 0.3s;
    }
    .nav-link:hover, .nav-link.is-current {
        color: $green;
    }
    .nav-link:hover::after, .nav-link.is-current::after {
        transform: scaleX(1);
    }

    .navbar-burger {
        color: white;
        background: none;
        border: none;
        cursor: pointer;
    }
    .navbar-burger:hover {
        color: $green;
        background: none;
    }
    .navbar-menu {
        background-color: transparent;
        box-shadow: none;
    }
    @media (max-width: 1023px) {
        .nav-link::after {
            left: 1rem;
            right: auto;
            width: 2rem;
        }
    }
</style>

<!-- TypeScript -->
<script lang="ts">
    import { page } from "$app/stores";
    import { base } from "$app/paths";

    const sections = [
        { name: "About",    path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Resume",   path: "/resume" }
    ];

    let scrollY = 0;
    let menuOpen = false;

    // Path without the base prefix, so matching works however the site is hosted
    $: path = $page.url.pathname.slice(base.length) || "/";
    $: isHome = path == "/";

    const isCurrent = (sectPath: string, current: string) => current.startsWith(sectPath);
</script>

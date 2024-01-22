<!-- HTML -->
<main class="h-100 page">
    <div id="particles-js"></div>
    <div class="page-header">
        <Header />
    </div>
    <div class="page-content h-100 {$section == "About" ? 'scroll-about' : ''} {$section == "Projects" ? 'scroll-proj' : ''}">
        {#if $section == "Index"   } <Name />     {/if}
        {#if $section == "About"   } <About />    {/if}
        {#if $section == "Projects"} <Projects /> {/if}
        {#if $section == "Resume"  } <Resume />   {/if}
    </div>
</main>

<!-- CSS -->
<style lang="scss">
    #particles-js {
        background-color: #0c0c0c;
        height: 103vh;
        width: 100%;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
    }
    .page {
        display: flex;
        flex-flow: column;
    }
    .page-header {
        flex: 0 1 auto;
    }
    .page-content {
        flex: 1 1 auto;
    }
    .scroll-proj {
        overflow-y: scroll;
    }
    @media (max-width: 872px) {
        .scroll-about {
            overflow-y: scroll;
        }
    }
</style>

<!-- TypeScript -->
<script lang="ts">
    import Header from "./header.svelte";
    import Name from "./name.svelte";
    import About from "./about.svelte";
    import Projects from "./projects.svelte";
    import Resume from "./resume.svelte";
    import { section } from "../store";
    import { browser } from "$app/environment";
</script>

{#if browser}
<script src="%sveltekit.assets%/particles/particles.js"></script>
<!-- <script src="%sveltekit.assets%/particles/start-particles.js"></script> -->
{/if}
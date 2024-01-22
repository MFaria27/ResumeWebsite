<!-- HTML -->
<main class="h-100 page">
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
</script>
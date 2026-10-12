<svelte:head>
    <script src="{ base }/particles/particles.js"></script>
</svelte:head>

<!-- HTML -->
<div id="particles-js"></div>
<div class="page">
    <div class="page-header">
        <Header />
    </div>
    <div class="page-content">
        <slot />
    </div>
    <Footer />
</div>

<!-- CSS -->
<style lang="scss">
    // Fixed behind the content so the whole window scrolls normally;
    // particles.json uses detect_on "window", so hover still works through content
    #particles-js {
        background-color: #0c0c0c;
        position: fixed;
        inset: 0;
        z-index: 0;
    }
    .page {
        position: relative;
        z-index: 1;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .page-header {
        position: sticky;
        top: 0;
        z-index: 30;
    }
    .page-content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
</style>

<!-- TypeScript -->
<script lang="ts">
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";
    import { base } from "$app/paths";
    import { onMount } from "svelte";

    // The layout persists across page navigation, so particles load once
    onMount(() => {
        particlesJS.load('particles-js', base + "/particles/particles.json");
    });
</script>

<Seo description="Mattheus Faria, a data scientist. Projects, experience and resume." />

<!-- HTML -->
<main class="name-page">
    <div class="container is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <h1 class="title is-size-2 is-bold has-text-centered">MATTHEUS <span class="has-text-grass-green">D.</span> FARIA</h1>
        <h2 class="title is-size-3 is-bold">Data Scientist</h2>
        <div class="socials">
            {#each socialLinks as link}
                <a class="social" href={link.href} aria-label={link.label} title={link.label}
                   target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>
                    <Icon name={link.icon} />
                </a>
            {/each}
        </div>
    </div>
</main>

<!-- CSS -->
<style lang="scss">
    $green: #62C370;

    // Fill the space under the header and center the name, nudged slightly above middle
    .name-page {
        flex: 1;
        display: flex;
        align-items: center;
        padding-bottom: 10vh;
    }
    .socials {
        display: flex;
        gap: 1rem;
        margin-top: 0.5rem;
    }
    .social {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.3);
        color: white;
        font-size: 1.1rem;
        transition: 0.3s;
    }
    .social:hover {
        color: $green;
        border-color: $green;
        transform: translateY(-2px);
    }
</style>

<!-- TypeScript -->
<script lang="ts">
    import Seo from "$lib/components/seo.svelte";
    import Icon from "$lib/components/icon.svelte";
    import { socialLinks } from "$lib/site";
</script>

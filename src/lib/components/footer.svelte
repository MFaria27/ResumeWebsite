<!-- HTML -->
<footer class="site-footer">
    <div class="container footer-inner px-5">
        <p>&copy; {year} Mattheus <span class="has-text-grass-green">D.</span> Faria</p>
        <div class="footer-links">
            {#each socialLinks as link}
                <a href={link.href} aria-label={link.label} title={link.label}
                   target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>
                    <Icon name={link.icon} />
                </a>
            {/each}
        </div>
    </div>
</footer>

<!-- CSS -->
<style lang="scss">
    $green: #62C370;

    .site-footer {
        padding: 1.5rem 0;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        background-color: rgba(12, 12, 12, 0.85);
        color: #a0a0a0;
        font-size: 0.9rem;
    }
    .footer-inner {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;
        justify-content: space-between;
    }
    .footer-links {
        display: flex;
        gap: 1.25rem;
        font-size: 1.15rem;
    }
    .footer-links a {
        display: flex;
        color: #a0a0a0;
        transition: color 0.3s;
    }
    .footer-links a:hover {
        color: $green;
    }
    @media (max-width: 500px) {
        .footer-inner {
            flex-direction: column-reverse;
        }
    }
</style>

<!-- TypeScript -->
<script lang="ts">
    import Icon from "./icon.svelte";
    import { socialLinks } from "$lib/site";

    const year = new Date().getFullYear();
</script>

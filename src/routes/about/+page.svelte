<Seo title="About" path="/about" description="About Mattheus Faria, a WPI Data Science graduate focused on business intelligence, Python and data analysis." />

<!-- HTML -->
<main class="section">
    <div class="container about">
        <div class="columns is-vcentered is-variable is-8">
            <div class="column is-5 is-flex is-justify-content-center">
                <figure class="profile">
                    <img src="{ base }/images/profile.jpg" alt="Mattheus Faria" />
                </figure>
            </div>
            <div class="column is-7">
                <h1 class="title is-size-2 is-bold">About <span class="has-text-grass-green">Me</span></h1>
                <div class="content is-size-5">
                    <p>
                        Hello! I'm Mattheus Faria, a graduate of
                        <a class="text-link" href="https://www.wpi.edu" target="_blank" rel="noopener noreferrer">Worcester Polytechnic Institute</a>
                        with a major in Data Science, focused on Business Intelligence, and a minor in Business.
                    </p>
                    <p>
                        Most of my coursework centered on back-end programming, mainly Python and data analysis,
                        and I taught myself front-end development along the way.
                    </p>
                    <p>
                        In my free time I'm usually with friends, or picking up a new language and starting a new
                        project. You can see some of them on the
                        <a class="text-link" href="{ base }/projects">Projects</a> page.
                    </p>
                </div>
                <div class="buttons social">
                    {#each socialLinks as link}
                        <a class="button social-btn" href={link.href} target={link.external ? "_blank" : undefined}
                           rel={link.external ? "noopener noreferrer" : undefined}>
                            <Icon name={link.icon} />
                            <span>{link.label}</span>
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</main>

<!-- CSS -->
<style lang="scss">
    $green: #62C370;

    .about {
        max-width: 1100px;
    }
    .profile {
        width: 100%;
        max-width: 320px;
        aspect-ratio: 4 / 5;
        border-radius: 1.5rem;
        border: 3px solid $green;
        overflow: hidden;
        box-shadow: 0 0 40px rgba(98, 195, 112, 0.2);
    }
    .profile img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center 20%;
        display: block;
    }
    .content p {
        line-height: 1.7;
    }
    .text-link {
        color: $green;
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 3px;
        transition: color 0.3s;
    }
    .text-link:hover {
        color: white;
    }
    .social {
        margin-top: 2rem;
    }
    .social-btn {
        gap: 0.5rem;
        font-weight: bold;
        color: white;
        background-color: rgba(12, 12, 12, 0.7);
        border: 2px solid rgba(255, 255, 255, 0.25);
        transition: 0.3s;
    }
    .social-btn:hover {
        color: #0c0c0c;
        background-color: $green;
        border-color: $green;
    }
    @media (max-width: 768px) {
        .title, .content, .social {
            text-align: center;
            justify-content: center;
        }
        .profile {
            max-width: 240px;
        }
    }
</style>

<!-- TypeScript -->
<script lang="ts">
    import Seo from "$lib/components/seo.svelte";
    import Icon from "$lib/components/icon.svelte";
    import { socialLinks } from "$lib/site";
    import { base } from "$app/paths";
</script>

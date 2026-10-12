<Seo title="Projects" path="/projects" description="Work, academic and personal projects by Mattheus Faria, covering data science, machine learning and web development." />

<!-- HTML -->
<main class="section">
    <div class="container">
        <h1 class="title is-size-2 is-bold has-text-centered">Pro<span class="has-text-grass-green">jects</span></h1>

        <div class="tabs-row" role="tablist" aria-label="Project categories">
            {#each categories as cat}
                <button class="tab" class:is-active={activeTab == cat} role="tab" aria-selected={activeTab == cat}
                        on:click={() => activeTab = cat}>
                    {cat}
                    <span class="count">{counts[cat]}</span>
                </button>
            {/each}
        </div>

        {#if shown.length == 0}
            <p class="empty has-text-centered is-size-5">
                {activeTab == "Work" ? "Professional work write-ups are coming soon." : "Nothing here yet."}
            </p>
        {:else}
            <div class="project-grid" role="tabpanel">
                {#each shown as project (project.Title)}
                    <article class="project-card">
                        <figure class="thumb">
                            <img src={ base }{project.Thumbnail.Icon} alt={project.Thumbnail.Alt} loading="lazy">
                            {#if project.Year}
                                <span class="year">{project.Year}</span>
                            {/if}
                        </figure>
                        <div class="card-body">
                            <h2 class="project-title is-size-5 is-bold">{project.Title}</h2>
                            <div class="tech">
                                {#each project.Code_Used as icon}
                                    <img class="tech-icon" src={ base }{icon.Icon} alt={icon.Alt} title={icon.Alt.replace(" Icon", "")}>
                                {/each}
                            </div>
                            <p class="description">{project.Description}</p>
                            {#if project.Results}
                                <p class="results"><span class="is-bold has-text-grass-green">Results:</span> {project.Results}</p>
                            {/if}
                            <div class="buttons mt-auto pt-4 mb-0">
                                {#each project.Buttons.filter(isShown) as btn}
                                    <a class="button project-btn" href={btn.Link} target="_blank" rel="noopener noreferrer">
                                        <Icon name={iconFor(btn.Label)} />
                                        <span>{btn.Label}</span>
                                    </a>
                                {:else}
                                    {#if project.Category == "Work"}
                                        <span class="private-note">Professional work · code not public</span>
                                    {/if}
                                {/each}
                            </div>
                        </div>
                    </article>
                {/each}
            </div>
        {/if}
    </div>
</main>

<!-- CSS -->
<style lang="scss">
    $green: #62C370;

    .tabs-row {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1.5rem auto 2.5rem;
        padding: 0.35rem;
        width: fit-content;
        max-width: 100%;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        background-color: rgba(18, 18, 18, 0.85);
    }
    .tab {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1.25rem;
        border: none;
        border-radius: 999px;
        background: none;
        color: white;
        font: inherit;
        font-weight: bold;
        font-size: 1.05rem;
        cursor: pointer;
        transition: 0.3s;
    }
    .tab:hover {
        color: $green;
    }
    .tab.is-active {
        background-color: $green;
        color: #0c0c0c;
    }
    .count {
        font-size: 0.8rem;
        min-width: 1.5rem;
        padding: 0 0.4rem;
        border-radius: 999px;
        background-color: rgba(255, 255, 255, 0.12);
    }
    .tab.is-active .count {
        background-color: rgba(12, 12, 12, 0.2);
    }
    .empty {
        color: #a0a0a0;
        padding: 3rem 0;
    }

    .project-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.75rem;
    }
    .project-card {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border-radius: 1rem;
        border: 1px solid rgba(255, 255, 255, 0.15);
        background-color: rgba(18, 18, 18, 0.92);
        transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
    }
    .project-card:hover {
        transform: translateY(-4px);
        border-color: $green;
        box-shadow: 0 8px 30px rgba(98, 195, 112, 0.15);
    }

    // Fixed frame; contain keeps wide diagrams and logos from being cropped
    .thumb {
        position: relative;
        aspect-ratio: 16 / 9;
        background-color: white;
        border-bottom: 3px solid $green;
    }
    .thumb img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
    }
    .year {
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
        padding: 0.15rem 0.65rem;
        border-radius: 999px;
        background-color: rgba(12, 12, 12, 0.85);
        color: $green;
        font-size: 0.85rem;
        font-weight: bold;
    }

    .card-body {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1.25rem 1.5rem 1.5rem;
    }
    .project-title {
        line-height: 1.3;
        margin-bottom: 0.75rem;
    }

    // Wraps instead of overlapping on narrow widths
    .tech {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }
    .tech-icon {
        width: 2.25rem;
        height: 2.25rem;
        padding: 0.3rem;
        object-fit: contain;
        border-radius: 0.5rem;
        background-color: rgba(255, 255, 255, 0.92);
    }

    .description, .results {
        color: #d0d0d0;
        line-height: 1.6;
    }
    .results {
        margin-top: 0.75rem;
    }
    .private-note {
        color: #a0a0a0;
        font-size: 0.9rem;
        font-style: italic;
    }

    .project-btn {
        gap: 0.4rem;
        font-weight: bold;
        color: $green;
        background-color: transparent;
        border: 2px solid $green;
        transition: 0.3s;
    }
    .project-btn:hover {
        color: #0c0c0c;
        background-color: $green;
    }
</style>

<!-- TypeScript -->
<script lang="ts">
    import Seo from "$lib/components/seo.svelte";
    import Icon from "$lib/components/icon.svelte";
    import { projects } from "$lib/projects/aaa_projects";
    import { categories, type Category } from "$lib/projects/types";
    import { base } from "$app/paths";

    const counts = Object.fromEntries(
        categories.map(cat => [cat, projects.filter(p => p.Category == cat).length])
    ) as Record<Category, number>;

    // Open on the first tab that has projects (Work, once those are added)
    let activeTab: Category = categories.find(cat => counts[cat] > 0) ?? categories[0];

    $: shown = projects.filter(p => p.Category == activeTab);

    const isShown = (btn: { Label: string, Link: string }) => btn.Label != "" && btn.Label != "Blank" && btn.Link != "";

    function iconFor(label: string) {
        if (label == "GitHub") return "github";
        if (label == "Report") return "file";
        return "external";
    }
</script>

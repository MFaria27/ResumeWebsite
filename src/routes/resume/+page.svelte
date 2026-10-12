<Seo title="Resume" path="/resume" description="Resume of Mattheus Faria, data scientist. View or download the PDF." />

<!-- HTML -->
<main class="section">
    <div class="container resume">
        <div class="resume-header">
            <h1 class="title is-size-2 is-bold mb-0">Re<span class="has-text-grass-green">sume</span></h1>
            <div class="buttons mb-0">
                <a class="button resume-btn" href={pdfUrl} target="_blank" rel="noopener noreferrer">
                    <Icon name="external" /><span>Open</span>
                </a>
                <a class="button resume-btn" href={pdfUrl} download>
                    <Icon name="download" /><span>Download</span>
                </a>
            </div>
        </div>
        <div class="viewer">
            <object data="{pdfUrl}#view=FitH" type="application/pdf" title="Resume">
                <div class="fallback">
                    <p class="is-size-5 mb-4">This browser can't show the PDF here.</p>
                    <a class="button resume-btn" href={pdfUrl} target="_blank" rel="noopener noreferrer">
                        <Icon name="file" /><span>View the resume</span>
                    </a>
                </div>
            </object>
        </div>
    </div>
</main>

<!-- CSS -->
<style lang="scss">
    $green: #62C370;

    .resume {
        max-width: 960px;
    }
    .resume-header {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;
    }
    .viewer {
        height: calc(100vh - 16rem);
        min-height: 520px;
        border-radius: 1rem;
        border: 3px solid $green;
        overflow: hidden;
        background-color: #1a1a1a;
    }
    .viewer object {
        width: 100%;
        height: 100%;
        display: block;
    }
    .fallback {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        text-align: center;
    }
    .resume-btn {
        gap: 0.4rem;
        font-weight: bold;
        color: $green;
        background-color: transparent;
        border: 2px solid $green;
        transition: 0.3s;
    }
    .resume-btn:hover {
        color: #0c0c0c;
        background-color: $green;
    }
</style>

<!-- TypeScript -->
<script lang="ts">
    import Seo from "$lib/components/seo.svelte";
    import Icon from "$lib/components/icon.svelte";
    import { resumeFile } from "$lib/site";
    import { base } from "$app/paths";

    const pdfUrl = `${base}/${encodeURIComponent(resumeFile)}`;
</script>

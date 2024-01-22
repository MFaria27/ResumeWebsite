<!-- HTML -->
<main>
    <nav class="navbar is-opaque p-5">
        <div class="navbar-brand px-4">
            <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                {#if $section != "Index"}
                    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <h1 class="is-size-3 is-bold" on:click={() => setSection("Index")}><span class="hover-green">M<span class="has-text-grass-green">D</span>F</span></h1>
                {/if}
            </div>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                {#each sections as sect}
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div class="hover-green navbar-item is-size-4 is-bold {sect.text_color}" on:click={() => setSection(sect.Name)}><span class="hover-green">{sect.Name}</span></div>
                {/each}
            </div>
        </div>
    </nav>
</main>

<!-- CSS -->
<style lang="scss">
    .hover-green:hover {
        color: #62C370;
        transition: 0.3s;
    }
</style>

<!-- TypeScript -->
<script lang="ts">
    import { section } from "../store"

    let sections = [
        {"Name": "About", "text_color": "has-text-white"},
        {"Name": "Projects", "text_color": "has-text-white"},
        {"Name": "Resume", "text_color": "has-text-white"}
    ]

    function setSection (toSwitch: string) {
        $section = toSwitch;
        sections.forEach(sect => {
            if(sect.Name == toSwitch) sect.text_color = "has-text-grass-green";
            else sect.text_color = "has-text-white";
        });
        sections = sections;
    }
</script>
<!-- HTML -->
<main class="h-100">
    <div id="Projects" class="container">
        <div class="columns is-multiline m-1">
            {#each projects as project}
                <div class="column is-one-third">
                    <div class="card h-100 has-background-slate">
                        <header class="card-header">
                            <p class="card-header-title is-bold is-flex is-justify-content-center">{project.Title}</p>
                        </header>
                        <div class="card-image">
                            <figure class="image is-3by1">
                                <img src={project.Thumbnail.Icon} alt={project.Thumbnail.Alt}>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="field is-grouped w-100">
                                {#if project.Buttons[0].Label != "Blank"}
                                    <p class="control">
                                        <button class="button w-100 is-bold" on:click={() => parent.open(project.Buttons[0].Link)}>{project.Buttons[0].Label}</button>
                                    </p>
                                {/if}
                                {#if project.Buttons[1].Label != "Blank"}
                                    <p class="control">
                                        <button class="button w-100 is-bold" on:click={() => parent.open(project.Buttons[1].Link)}>{project.Buttons[1].Label}</button>
                                    </p>
                                {/if}
                            </div>
                            <div id="Icons" class="columns is-multiline m-1 is-mobile">
                                {#each project.Code_Used as icon}
                                    <div class="column is-one-fifth">
                                        <figure class="image is-48x48">
                                            <img src={icon.Icon} alt={icon.Alt}>
                                        </figure>
                                    </div>
                                {/each}
                            </div>
                            <div class="content">
                                <p>{project.Description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</main>

<!-- CSS -->
<style lang="scss">
    .card {
        border: solid gray 3px;
        border-radius: 25px;
        opacity: 90%;
        transition: 0.3s;
    }
    .card:hover {
        border: solid white 3px;
    }
    .control {
        width: 50%;
        margin: 0;
    }
    .button {
        background-color: #0c0c0c;
        border: solid #62C370 4px;
        color: #62C370;
        transition: 0.3s;
    }
    .button:hover{
        background-color: #62C370;
        color: #0c0c0c;
    }
</style>

<!-- TypeScript -->
<script lang="ts">
    import { projects } from "./projects/aaa_projects"

</script>
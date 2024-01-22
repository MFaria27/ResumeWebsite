<!-- HTML -->
<main class="h-100">
    <div class="container h-100">
        <div class="tile is-ancestor is-vertical">
            <div class="tile">
                <div class="tile is-4 is-flex is-justify-content-center">
                    <div id="about-img" class="h-100 p-3 is-flex is-flex-direction-column is-align-items-center">
                        <!-- svelte-ignore a11y-img-redundant-alt -->
                        <img src="/images/profile.jpg" alt="Profile Picture" />
                    </div>
                </div>
                <div class="tile is-8 is-flex is-flex-direction-column is-justify-content-center">
                    <div class="content is-size-5-tablet is-bold is-flex is-flex-direction-column">
                        <p>
                            Hello! I'm Mattheus Faria, a senior at Worcester Polytechnic Institute majoring in Data Science geared towards Business Intelligence and minoring in Business.
                        </p>
                        <p>
                            I have been studying mostly back-end programming languages throughout my college classes, 
                            usually focusing on Python and Data Analysis, while self-teaching myself some front-end 
                            languages.  
                        </p>
                        <p>
                            I usually spend my free time either spending time with friends or learning/improving my knowledge 
                            coding by learning new languages or starting projects. 
                        </p>
                    </div>
                </div>
            </div>
            <div class="tile pt-4 is-flex is-align-items-center is-justify-content-center">
                <div id="icons" class="columns is-mobile w-100">
                    {#each icons as icon}
                        <div class="column is-flex is-justify-content-center is-flex-direction-column is-align-items-center">
                            <a href={icon.link} target="_blank">
                                <figure class="image is-128x128"><img src={icon.icon} alt={icon.alt}></figure>
                            </a>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</main>

<!-- CSS -->
<style lang="scss">
    #about-img {
        max-width: 80%;
    }
    .content {
        text-align: center;
    }
    .container {
        padding-left: 4rem !important;
        padding-right: 4rem !important;
    }
    #icons figure {
        border-radius: 20%;
        border: solid white 5px;
        padding: 30px;
    }
    @media (max-width: 872px) {
        #about-img {
            width: 240px;
        }
        .container {
            padding-left: 2rem !important;
            padding-right: 2rem !important;
        }
    }
    @media (max-width: 500px) {
        #icons figure {
            width: 64px;
            height: 64px;
            padding: 4px;
        }
    }
</style>

<!-- TypeScript -->
<script lang="ts">
    
    let icons = [
        {"link": "https://github.com/MFaria27", "icon": "/images/GitHub.png", "alt": "Github"},
        {"link": "https://www.linkedin.com/in/mattheusfaria", "icon": "/images/linkedin.png", "alt": "LinkedIn"},
        {"link": "mailto:mfaria@wpi.edu", "icon": "/images/mail.png", "alt": "Mail"},
    ]

</script>
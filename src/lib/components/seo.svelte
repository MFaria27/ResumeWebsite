<svelte:head>
    <title>{fullTitle}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content="{siteUrl}/images/profile.jpg" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={fullTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="{siteUrl}/images/profile.jpg" />
</svelte:head>

<!-- TypeScript -->
<script lang="ts">
    import { siteName, siteUrl } from "$lib/site";

    export let title = "";        // Page name; omit on the home page
    export let description: string;
    export let path = "/";

    $: fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Data Scientist`;
    $: url = siteUrl + path;
</script>

import type { Project } from "./types";

export let SpotifyDataVis: Project = {
    "Title" : "Song Data Vis Website",
    "Category" : "Academic",
    "Year" : "2022",
    "Thumbnail" :  { "Icon" : "/images/project-thumbnails/SpotifyProjectThumbnail.webp", "Alt" : "SpotVis Thumbnail" },
    "Buttons" : [
        { "Label" : "GitHub", "Link" : "https://github.com/MFaria27/SpotifyDataVisualization" },
        { "Label" : "Live", "Link" : "https://mfaria27.github.io/SpotifyDataVisualization/" }
    ],
    "Description" : "In a team, used Python for data collection, cleaning and management scraped from Spotify top hits playlists. Used HTML and D3 JavaScript library to create an interactive visualization displaying various data points pertaining to the best songs of 2018 - 2021.",
    "Code_Used" : [
        { "Icon" : "/images/code-icons/python.png", "Alt" : "Python Icon" },
        { "Icon" : "/images/code-icons/d3.png", "Alt" : "D3 Icon" },
        { "Icon" : "/images/code-icons/javascript.png", "Alt" : "JS Icon" }
    ]
}
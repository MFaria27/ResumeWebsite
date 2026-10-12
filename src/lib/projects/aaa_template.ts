import type { Project } from "./types";

export let t: Project = {
    "Title" : "",
    "Category" : "Personal",   // "Work" | "Academic" | "Personal" (picks the tab)
    "Year" : "",             // e.g. "2024"; leave "" to hide
    "Thumbnail" :  { "Icon" : "/images/project-thumbnails/", "Alt" : "Thumbnail" },
    "Buttons" : [
        { "Label" : "", "Link" : "" },
        { "Label" : "", "Link" : "" }
    ],
    "Description" : "",
    // "Results" : "",       // Optional outcome line (mainly for work projects)
    "Code_Used" : [
        { "Icon" : "/images/code-icons/", "Alt" : "Icon" },
        { "Icon" : "/images/code-icons/", "Alt" : "Icon" },
        { "Icon" : "/images/code-icons/", "Alt" : "Icon" },
        { "Icon" : "/images/code-icons/", "Alt" : "Icon" }
    ]
}
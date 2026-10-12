import type { Project } from "./types";

export let Kickstarter: Project = {
    "Title" : "Kickstarter Clone",
    "Category" : "Academic",
    "Year" : "2022",
    "Thumbnail" :  { "Icon" : "/images/project-thumbnails/punchenderThumbnail.webp", "Alt" : "Kickstarter Thumbnail" },
    "Buttons" : [
        { "Label" : "GitHub", "Link" : "https://github.com/wduf/punchender" },
        { "Label" : "Blank", "Link" : "" }
    ],
    "Description" : "Developed a clone website of Kickstarter using React.js and Amazon Web Services, with a focus on scalability.",
    "Code_Used" : [
        { "Icon" : "/images/code-icons/aws.png", "Alt" : "AWS Icon" },
        { "Icon" : "/images/code-icons/React.svg", "Alt" : "React Icon" },
        { "Icon" : "/images/code-icons/sql.png", "Alt" : "SQL Icon" }
    ]
}
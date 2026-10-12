import type { Project } from "./types";

export let InternshipScrapper: Project = {
    "Title" : "Internship Scrapper",
    "Category" : "Personal",
    "Year" : "2022",
    "Thumbnail" :  { "Icon" : "/images/project-thumbnails/indeed-logo.webp", "Alt" : "Intern Thumbnail" },
    "Buttons" : [
        { "Label" : "GitHub", "Link" : "https://github.com/MFaria27/InternshipScrapper" },
        { "Label" : "Blank", "Link" : "" }
    ],
    "Description" : "Scrapped data from Indeed.com and exported it into a readable excel file using get requests and BeautifulSoup in python.",
    "Code_Used" : [
        { "Icon" : "/images/code-icons/python.png", "Alt" : "Python Icon" }
    ]
}
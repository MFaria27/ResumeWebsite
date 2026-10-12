// Tabs on the Projects page, in display order
export const categories = ["Work", "Academic", "Personal"] as const;
export type Category = typeof categories[number];

export type Project = {
    "Title" : string,
    "Category" : Category,
    "Year" : string,          // Shown on the card, e.g. "2023" or "2022 - 2023". Leave "" to hide
    "Thumbnail" : { "Icon" : string, "Alt" : string },
    "Buttons" : { "Label" : string, "Link" : string }[],   // Label "Blank" (or empty Link) hides a button
    "Description" : string,
    "Results"? : string,      // Optional outcome line, e.g. for approved work projects
    "Code_Used" : { "Icon" : string, "Alt" : string }[]
};

import { c as create_ssr_component, a as subscribe, b as each, e as escape, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
let section = writable("Index");
const css$3 = {
  code: ".hover-green.svelte-1p9mixh:hover{color:#62C370;transition:0.3s}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $section, $$unsubscribe_section;
  $$unsubscribe_section = subscribe(section, (value) => $section = value);
  let sections = [
    {
      "Name": "About",
      "text_color": "has-text-white"
    },
    {
      "Name": "Projects",
      "text_color": "has-text-white"
    },
    {
      "Name": "Resume",
      "text_color": "has-text-white"
    }
  ];
  $$result.css.add(css$3);
  $$unsubscribe_section();
  return ` <main><nav class="navbar is-opaque p-5"><div class="navbar-brand px-4"><div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">${$section != "Index" ? `  <h1 class="is-size-3 is-bold" data-svelte-h="svelte-10ebnkz"><span class="hover-green svelte-1p9mixh">M<span class="has-text-grass-green">D</span>F</span></h1>` : ``}</div>  <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="menu" data-svelte-h="svelte-5zy109"><span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span></a></div> <div class="navbar-menu" id="menu"><div class="navbar-end">${each(sections, (sect) => {
    return `  <div class="${"hover-green navbar-item is-size-4 is-bold " + escape(sect.text_color, true) + " svelte-1p9mixh"}"><span class="hover-green svelte-1p9mixh">${escape(sect.Name)}</span></div>`;
  })}</div></div></nav></main>   `;
});
const Name = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <main class="h-100" data-svelte-h="svelte-qixmvz"><div class="h-80 container is-flex is-flex-direction-column is-justify-content-center is-align-items-center"><h1 class="title is-size-2 is-bold has-text-centered">MATTHEUS <span class="has-text-grass-green">D.</span> FARIA</h1> <h2 class="title is-size-3 is-bold">Data Scientist</h2></div></main>   `;
});
const css$2 = {
  code: "#about-img.svelte-1u3nwyw.svelte-1u3nwyw{max-width:80%}.content.svelte-1u3nwyw.svelte-1u3nwyw{text-align:center}.container.svelte-1u3nwyw.svelte-1u3nwyw{padding-left:4rem !important;padding-right:4rem !important}#icons.svelte-1u3nwyw figure.svelte-1u3nwyw{border-radius:20%;border:solid white 5px;padding:30px}@media(max-width: 872px){#about-img.svelte-1u3nwyw.svelte-1u3nwyw{width:240px}.container.svelte-1u3nwyw.svelte-1u3nwyw{padding-left:2rem !important;padding-right:2rem !important}}@media(max-width: 500px){#icons.svelte-1u3nwyw figure.svelte-1u3nwyw{width:64px;height:64px;padding:4px}}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let icons = [
    {
      "link": "https://github.com/MFaria27",
      "icon": "/images/GitHub.png",
      "alt": "Github"
    },
    {
      "link": "https://www.linkedin.com/in/mattheusfaria",
      "icon": "/images/linkedin.png",
      "alt": "LinkedIn"
    },
    {
      "link": "mailto:mfaria@wpi.edu",
      "icon": "/images/mail.png",
      "alt": "Mail"
    }
  ];
  $$result.css.add(css$2);
  return ` <main class="h-100"><div class="container h-100 svelte-1u3nwyw"><div class="tile is-ancestor is-vertical"><div class="tile" data-svelte-h="svelte-1xewfck"><div class="tile is-4 is-flex is-justify-content-center"><div id="about-img" class="h-100 p-3 is-flex is-flex-direction-column is-align-items-center svelte-1u3nwyw"> <img src="${escape(base, true) + "/images/profile.jpg"}" alt="Profile Picture"></div></div> <div class="tile is-8 is-flex is-flex-direction-column is-justify-content-center"><div class="content is-size-5-tablet is-bold is-flex is-flex-direction-column svelte-1u3nwyw"><p>Hello! I&#39;m Mattheus Faria, a graduate of Worcester Polytechnic Institute majored in Data Science geared towards Business Intelligence and minored in Business.</p> <p>I have been studying mostly back-end programming languages throughout my college classes, 
                            usually focusing on Python and Data Analysis, while self-teaching myself some front-end 
                            languages.</p> <p>I usually spend my free time either spending time with friends or learning/improving my knowledge 
                            coding by learning new languages or starting projects.</p></div></div></div> <div class="tile pt-4 is-flex is-align-items-center is-justify-content-center"><div id="icons" class="columns is-mobile w-100 svelte-1u3nwyw">${each(icons, (icon) => {
    return `<div class="column is-flex is-justify-content-center is-flex-direction-column is-align-items-center"><a${add_attribute("href", icon.link, 0)} target="_blank"><figure class="image is-128x128 svelte-1u3nwyw"><img src="${escape(base, true) + escape(icon.icon, true)}"${add_attribute("alt", icon.alt, 0)}></figure></a> </div>`;
  })}</div></div></div></div></main>   `;
});
let Beecology = {
  "Title": "Beecology MQP Project",
  "Thumbnail": { "Icon": "/images/project-thumbnails/mqpThumbnail.png", "Alt": "MQP Thumbnail" },
  "Buttons": [
    { "Label": "", "Link": "" },
    { "Label": "Live", "Link": "https://beecology.wpi.edu/webapp_new/main/#/app/home" }
  ],
  "Description": "Worked in a group of 8 overhaul the Beecology Project. Designed through Figma, our subgroup of four completely redesigned the prior version, on top of adding new features.",
  "Code_Used": [
    { "Icon": "/images/code-icons/angular.png", "Alt": "Angular Icon" },
    { "Icon": "/images/code-icons/typescript.png", "Alt": "Typescript Icon" },
    { "Icon": "/images/code-icons/gitlab.svg", "Alt": "Gitlab Icon" }
  ]
};
let IRS_Parser = {
  "Title": "IRS 990 Web Parser",
  "Thumbnail": { "Icon": "/images/project-thumbnails/parserThumbnail.png", "Alt": "Parser Thumbnail" },
  "Buttons": [
    { "Label": "Live", "Link": "parserweb.mattheusfaria.com" },
    { "Label": "", "Link": "" }
  ],
  "Description": "Used the AWS suite and Angular to create a website that looks up colleges through Propublica Nonprofit, adds it to a global database, and allows the user to compile basic information onto an excel file",
  "Code_Used": [
    { "Icon": "/images/code-icons/angular.png", "Alt": "Angular Icon" },
    { "Icon": "/images/code-icons/aws.png", "Alt": " AWS Icon" },
    { "Icon": "/images/code-icons/python.png", "Alt": "Python Icon" }
  ]
};
let NVidia = {
  "Title": "NVIDIA IQP",
  "Thumbnail": { "Icon": "/images/project-thumbnails/NVidiaThumbnail.png", "Alt": "Nvidia Thumbnail" },
  "Buttons": [
    { "Label": "Report", "Link": "https://digital.wpi.edu/concern/student_works/dz010t26k?locale=en" },
    { "Label": "Blank", "Link": "" }
  ],
  "Description": "Worked with two teams of 4 to design, implement, and test an FPS video game environment with the aim of testing the effects of latency compensation techniques on player experience",
  "Code_Used": [
    { "Icon": "/images/code-icons/sql.png", "Alt": "SQL Icon" },
    { "Icon": "/images/code-icons/tableau.png", "Alt": "Tableau Icon" },
    { "Icon": "/images/code-icons/C_Programming.svg", "Alt": "C Icon" },
    { "Icon": "/images/code-icons/office_suite.png", "Alt": "Office Icon" }
  ]
};
let AI_Chess = {
  "Title": "AI Chess Player",
  "Thumbnail": { "Icon": "/images/project-thumbnails/chessThumbnail.png", "Alt": "Chess Thumbnail" },
  "Buttons": [
    { "Label": "GitHub", "Link": "https://github.com/wduf/chess" },
    { "Label": "Blank", "Link": "" }
  ],
  "Description": "Created a chess bot using artificial intelligence and chess game engine that can generate all legal moves for a given board state.",
  "Code_Used": [
    { "Icon": "/images/code-icons/python.png", "Alt": "Python Icon" }
  ]
};
let Kickstarter = {
  "Title": "Kickstarter Clone",
  "Thumbnail": { "Icon": "/images/project-thumbnails/punchenderThumbnail.png", "Alt": "Kickstarter Thumbnail" },
  "Buttons": [
    { "Label": "GitHub", "Link": "https://github.com/wduf/punchender" },
    { "Label": "Blank", "Link": "" }
  ],
  "Description": "Developed a clone website of Kickstarter using React.js and Amazon Web Services, with a focus on scalability.",
  "Code_Used": [
    { "Icon": "/images/code-icons/aws.png", "Alt": "AWS Icon" },
    { "Icon": "/images/code-icons/React.svg", "Alt": "React Icon" },
    { "Icon": "/images/code-icons/sql.png", "Alt": "SQL Icon" }
  ]
};
let InternshipScrapper = {
  "Title": "Internship Scrapper",
  "Thumbnail": { "Icon": "/images/project-thumbnails/indeed-logo.png", "Alt": "Intern Thumbnail" },
  "Buttons": [
    { "Label": "GitHub", "Link": "https://github.com/MFaria27/InternshipScrapper" },
    { "Label": "Blank", "Link": "" }
  ],
  "Description": "Scrapped data from Indeed.com and exported it into a readable excel file using get requests and BeautifulSoup in python.",
  "Code_Used": [
    { "Icon": "/images/code-icons/python.png", "Alt": "Python Icon" }
  ]
};
let WordGames = {
  "Title": "Python Word Games",
  "Thumbnail": { "Icon": "/images/project-thumbnails/PythonWordGamesThumbnail.png", "Alt": "Word Thumbnail" },
  "Buttons": [
    { "Label": "GitHub", "Link": "https://github.com/MFaria27/PythonWordGames" },
    { "Label": "Blank", "Link": "" }
  ],
  "Description": "Created Wordle and Hangman playable in a python console during a 1-Hour Coding Challenge, each with a large seelction of possible words gathered through get requests.",
  "Code_Used": [
    { "Icon": "/images/code-icons/python.png", "Alt": "Python Icon" }
  ]
};
let Via = {
  "Title": "Personal Assistant Via",
  "Thumbnail": { "Icon": "/images/project-thumbnails/VoiceRecognitionThumbnail.png", "Alt": "Via Thumbnail" },
  "Buttons": [
    { "Label": "GitHub", "Link": "https://github.com/MFaria27/VirtualAssistantVia" },
    { "Label": "Blank", "Link": "" }
  ],
  "Description": "Created a personal bot to run in the background and search for eligible voice commands and execute various basic orders.",
  "Code_Used": [
    { "Icon": "/images/code-icons/python.png", "Alt": "Python Icon" }
  ]
};
let SpotifyDataVis = {
  "Title": "Song Data Vis Website",
  "Thumbnail": { "Icon": "/images/project-thumbnails/SpotifyProjectThumbnail.png", "Alt": "SpotVis Thumbnail" },
  "Buttons": [
    { "Label": "GitHub", "Link": "https://github.com/MFaria27/SpotifyDataVisualization" },
    { "Label": "Live", "Link": "https://mfaria27.github.io/SpotifyDataVisualization/" }
  ],
  "Description": "In a team, used Python for data collection, cleaning and management scraped from Spotify top hits playlists. Used HTML and D3 JavaScript library to create an interactive visualization displaying various data points pertaining to the best songs of 2018 - 2021.",
  "Code_Used": [
    { "Icon": "/images/code-icons/python.png", "Alt": "Python Icon" },
    { "Icon": "/images/code-icons/d3.png", "Alt": "D3 Icon" },
    { "Icon": "/images/code-icons/javascript.png", "Alt": "JS Icon" }
  ]
};
let SpotifyAlgorithm = {
  "Title": "Predicting Song Popularity",
  "Thumbnail": { "Icon": "/images/project-thumbnails/SpotifyAlgorithm.png", "Alt": "SpotAlgo Thumbnail" },
  "Buttons": [
    { "Label": "GitHub", "Link": "https://github.com/MFaria27/PredictingSongPopularity" },
    { "Label": "Blank", "Link": "" }
  ],
  "Description": "Implemented Machine Learning and Spotify data gathering to accurately predict the 'Popularity Index' of a Spotify song given specific parameters on a hypothetical song.",
  "Code_Used": [
    { "Icon": "/images/code-icons/python.png", "Alt": "Python Icon" }
  ]
};
let DuckHunt = {
  "Title": "Duck Hunt Website",
  "Thumbnail": { "Icon": "/images/project-thumbnails/DuckHuntScreenshot.png", "Alt": "Duck Thumbnail" },
  "Buttons": [
    { "Label": "GitHub", "Link": "https://github.com/MFaria27/DuckHuntWeb" },
    { "Label": "Live", "Link": "https://mfaria27.github.io/DuckHuntWeb/" }
  ],
  "Description": "Created a working website under a WPI host address that simulated the original Duck Hunt using the languages JavaScript, HTML, and CSS. Contained animation, random flight patterns, and score keeping.",
  "Code_Used": [
    { "Icon": "/images/code-icons/HTML5.png", "Alt": "HTML Icon" },
    { "Icon": "/images/code-icons/css.png", "Alt": "CSS Icon" },
    { "Icon": "/images/code-icons/javascript.png", "Alt": "JS Icon" }
  ]
};
let projects = [
  Beecology,
  IRS_Parser,
  NVidia,
  AI_Chess,
  Kickstarter,
  InternshipScrapper,
  WordGames,
  Via,
  SpotifyDataVis,
  SpotifyAlgorithm,
  DuckHunt
];
const css$1 = {
  code: ".card.svelte-86u3jl{border:solid gray 3px;border-radius:25px;opacity:90%;transition:0.3s}.card.svelte-86u3jl:hover{border:solid white 3px}.control.svelte-86u3jl{width:50%;margin:0}.button.svelte-86u3jl{background-color:#0c0c0c;border:solid #62C370 4px;color:#62C370;transition:0.3s}.button.svelte-86u3jl:hover{background-color:#62C370;color:#0c0c0c}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return ` <main class="h-100"><div id="Projects" class="container"><div class="columns is-multiline m-1">${each(projects, (project) => {
    return `<div class="column is-one-third"><div class="card h-100 has-background-slate svelte-86u3jl"><header class="card-header"><p class="card-header-title is-bold is-flex is-justify-content-center">${escape(project.Title)}</p></header> <div class="card-image" data-svelte-h="svelte-18zyf6r"><figure class="image is-3by1"><img src="${escape(base, true) + escape(project.Thumbnail.Icon, true)}"${add_attribute("alt", project.Thumbnail.Alt, 0)}> </figure></div> <div class="card-content"><div class="field is-grouped w-100">${project.Buttons[0].Label != "Blank" ? `<p class="control svelte-86u3jl"><button class="button w-100 is-bold svelte-86u3jl">${escape(project.Buttons[0].Label)}</button> </p>` : ``} ${project.Buttons[1].Label != "Blank" ? `<p class="control svelte-86u3jl"><button class="button w-100 is-bold svelte-86u3jl">${escape(project.Buttons[1].Label)}</button> </p>` : ``}</div> <div id="Icons" class="columns is-multiline m-1 is-mobile">${each(project.Code_Used, (icon) => {
      return `<div class="column is-one-fifth" data-svelte-h="svelte-1q9vanv"><figure class="image is-48x48"><img src="${escape(base, true) + escape(icon.Icon, true)}"${add_attribute("alt", icon.Alt, 0)}></figure> </div>`;
    })}</div> <div class="content"><p>${escape(project.Description)}</p></div> </div></div> </div>`;
  })}</div></div></main>   `;
});
const Resume = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <main class="h-100" data-svelte-h="svelte-16ini2b"><div class="container"><div class="is-flex is-justify-content-center"><h1><a class="is-bold is-size-3" href="${escape(base, true) + "/MFaria Resume Oct 2023.pdf"}" target="_blank">PDF VERSION</a></h1></div></div></main>   `;
});
const css = {
  code: "#particles-js.svelte-1egmy6e{background-color:#0c0c0c;height:103vh;width:100%;z-index:0;position:absolute;top:0;left:0}.page.svelte-1egmy6e{display:flex;flex-flow:column}.page-header.svelte-1egmy6e{flex:0 1 auto}.page-content.svelte-1egmy6e{flex:1 1 auto}.scroll-proj.svelte-1egmy6e{overflow-y:scroll}@media(max-width: 872px){.scroll-about.svelte-1egmy6e{overflow-y:scroll}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $section, $$unsubscribe_section;
  $$unsubscribe_section = subscribe(section, (value) => $section = value);
  $$result.css.add(css);
  $$unsubscribe_section();
  return `${$$result.head += `<!-- HEAD_svelte-1pha31q_START --><script src="${escape(base, true) + "/particles/particles.js"}" data-svelte-h="svelte-1lmfth7"><\/script><!-- HEAD_svelte-1pha31q_END -->`, ""}  <main class="h-100 page svelte-1egmy6e"><div id="particles-js" class="svelte-1egmy6e"></div> <div class="page-header svelte-1egmy6e">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}</div> <div class="${"page-content h-100 " + escape($section == "About" ? "scroll-about" : "", true) + " " + escape($section == "Projects" ? "scroll-proj" : "", true) + " svelte-1egmy6e"}">${$section == "Index" ? `${validate_component(Name, "Name").$$render($$result, {}, {}, {})}` : ``} ${$section == "About" ? `${validate_component(About, "About").$$render($$result, {}, {}, {})}` : ``} ${$section == "Projects" ? `${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}` : ``} ${$section == "Resume" ? `${validate_component(Resume, "Resume").$$render($$result, {}, {}, {})}` : ``}</div></main>   `;
});
export {
  Page as default
};

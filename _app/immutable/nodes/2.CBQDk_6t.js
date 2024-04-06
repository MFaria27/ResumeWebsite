import{s as R,n as M,b as Te,o as $e,x as we,y as De}from"../chunks/scheduler.D1w__Cfl.js";import{S as q,i as F,e as g,s as x,c as p,d as I,g as f,h as B,y as W,o as d,j as H,k as h,z as ie,A as se,b as O,f as Q,l as Pe,u as K,B as je,v as X,w as Y,t as E,a as V,n as te,x as Z,q as ne}from"../chunks/index.CTueT2qT.js";import{w as Ee,b as z}from"../chunks/paths.DDmUxCFQ.js";function U(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}let le=Ee("Index");function he(i,e,n){const t=i.slice();return t[6]=e[n],t}function fe(i){let e,n='<span class="hover-green svelte-1p9mixh">M<span class="has-text-grass-green">D</span>F</span>',t,s;return{c(){e=g("h1"),e.innerHTML=n,this.h()},l(l){e=p(l,"H1",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-10ebnkz"&&(e.innerHTML=n),this.h()},h(){d(e,"class","is-size-3 is-bold")},m(l,r){H(l,e,r),t||(s=se(e,"click",i[3]),t=!0)},p:M,d(l){l&&f(e),t=!1,s()}}}function me(i){let e,n,t=i[6].Name+"",s,l,r,v;function a(){return i[4](i[6])}return{c(){e=g("div"),n=g("span"),s=O(t),this.h()},l(c){e=p(c,"DIV",{class:!0});var u=I(e);n=p(u,"SPAN",{class:!0});var o=I(n);s=Q(o,t),o.forEach(f),u.forEach(f),this.h()},h(){d(n,"class","hover-green svelte-1p9mixh"),d(e,"class",l="hover-green navbar-item is-size-4 is-bold "+i[6].text_color+" svelte-1p9mixh")},m(c,u){H(c,e,u),h(e,n),h(n,s),r||(v=se(e,"click",a),r=!0)},p(c,u){i=c,u&1&&t!==(t=i[6].Name+"")&&Pe(s,t),u&1&&l!==(l="hover-green navbar-item is-size-4 is-bold "+i[6].text_color+" svelte-1p9mixh")&&d(e,"class",l)},d(c){c&&f(e),r=!1,v()}}}function Se(i){let e,n,t,s,l,r,v='<span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span>',a,c,u,o=i[1]!="Index"&&fe(i),L=U(i[0]),m=[];for(let b=0;b<L.length;b+=1)m[b]=me(he(i,L,b));return{c(){e=g("main"),n=g("nav"),t=g("div"),s=g("div"),o&&o.c(),l=x(),r=g("a"),r.innerHTML=v,a=x(),c=g("div"),u=g("div");for(let b=0;b<m.length;b+=1)m[b].c();this.h()},l(b){e=p(b,"MAIN",{});var D=I(e);n=p(D,"NAV",{class:!0});var k=I(n);t=p(k,"DIV",{class:!0});var _=I(t);s=p(_,"DIV",{class:!0});var y=I(s);o&&o.l(y),y.forEach(f),l=B(_),r=p(_,"A",{role:!0,class:!0,"aria-label":!0,"aria-expanded":!0,"data-target":!0,"data-svelte-h":!0}),W(r)!=="svelte-5zy109"&&(r.innerHTML=v),_.forEach(f),a=B(k),c=p(k,"DIV",{class:!0,id:!0});var $=I(c);u=p($,"DIV",{class:!0});var A=I(u);for(let T=0;T<m.length;T+=1)m[T].l(A);A.forEach(f),$.forEach(f),k.forEach(f),D.forEach(f),this.h()},h(){d(s,"class","is-flex is-flex-direction-column is-justify-content-center is-align-items-center"),d(r,"role","button"),d(r,"class","navbar-burger"),d(r,"aria-label","menu"),d(r,"aria-expanded","false"),d(r,"data-target","menu"),d(t,"class","navbar-brand px-4"),d(u,"class","navbar-end"),d(c,"class","navbar-menu"),d(c,"id","menu"),d(n,"class","navbar is-opaque p-5")},m(b,D){H(b,e,D),h(e,n),h(n,t),h(t,s),o&&o.m(s,null),h(t,l),h(t,r),h(n,a),h(n,c),h(c,u);for(let k=0;k<m.length;k+=1)m[k]&&m[k].m(u,null)},p(b,[D]){if(b[1]!="Index"?o?o.p(b,D):(o=fe(b),o.c(),o.m(s,null)):o&&(o.d(1),o=null),D&5){L=U(b[0]);let k;for(k=0;k<L.length;k+=1){const _=he(b,L,k);m[k]?m[k].p(_,D):(m[k]=me(_),m[k].c(),m[k].m(u,null))}for(;k<m.length;k+=1)m[k].d(1);m.length=L.length}},i:M,o:M,d(b){b&&f(e),o&&o.d(),ie(m,b)}}}function ge(i){const e=i.dataset.target,n=document.getElementById(e);i.classList.toggle("is-active"),n.classList.toggle("is-active"),i.classList.toggle("is-opaque"),n.classList.toggle("is-opaque")}function xe(i,e,n){let t;Te(i,le,c=>n(1,t=c));let s=[{Name:"About",text_color:"has-text-white"},{Name:"Projects",text_color:"has-text-white"},{Name:"Resume",text_color:"has-text-white"}],l;function r(c){we(le,t=c,t),s.forEach(u=>{u.Name==c?u.text_color="has-text-grass-green":u.text_color="has-text-white"}),c!="Index"&&l.forEach(u=>{ge(u)}),n(0,s)}return $e(()=>{l=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0),l.forEach(c=>{c.addEventListener("click",()=>{ge(c)})})}),[s,t,r,()=>r("Index"),c=>r(c.Name)]}class Be extends q{constructor(e){super(),F(this,e,xe,Se,R,{})}}function Me(i){let e,n='<div class="h-80 container is-flex is-flex-direction-column is-justify-content-center is-align-items-center"><h1 class="title is-size-2 is-bold has-text-centered">MATTHEUS <span class="has-text-grass-green">D.</span> FARIA</h1> <h2 class="title is-size-3 is-bold">Data Scientist</h2></div>';return{c(){e=g("main"),e.innerHTML=n,this.h()},l(t){e=p(t,"MAIN",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-qixmvz"&&(e.innerHTML=n),this.h()},h(){d(e,"class","h-100")},m(t,s){H(t,e,s)},p:M,i:M,o:M,d(t){t&&f(e)}}}class He extends q{constructor(e){super(),F(this,e,null,Me,R,{})}}function pe(i,e,n){const t=i.slice();return t[1]=e[n],t}function ve(i){let e,n,t,s,l,r;return{c(){e=g("div"),n=g("a"),t=g("figure"),s=g("img"),r=x(),this.h()},l(v){e=p(v,"DIV",{class:!0});var a=I(e);n=p(a,"A",{href:!0,target:!0});var c=I(n);t=p(c,"FIGURE",{class:!0});var u=I(t);s=p(u,"IMG",{src:!0,alt:!0}),u.forEach(f),c.forEach(f),r=B(a),a.forEach(f),this.h()},h(){De(s.src,l=""+(z+i[1].icon))||d(s,"src",l),d(s,"alt",i[1].alt),d(t,"class","image is-128x128 svelte-1u3nwyw"),d(n,"href",i[1].link),d(n,"target","_blank"),d(e,"class","column is-flex is-justify-content-center is-flex-direction-column is-align-items-center")},m(v,a){H(v,e,a),h(e,n),h(n,t),h(t,s),h(e,r)},p:M,d(v){v&&f(e)}}}function Ve(i){let e,n,t,s,l=`<div class="tile is-4 is-flex is-justify-content-center"><div id="about-img" class="h-100 p-3 is-flex is-flex-direction-column is-align-items-center svelte-1u3nwyw"><img src="${z}/images/profile.jpg" alt="Profile Picture"/></div></div> <div class="tile is-8 is-flex is-flex-direction-column is-justify-content-center"><div class="content is-size-5-tablet is-bold is-flex is-flex-direction-column svelte-1u3nwyw"><p>Hello! I&#39;m Mattheus Faria, a graduate of Worcester Polytechnic Institute majored in Data Science geared towards Business Intelligence and minored in Business.</p> <p>I have been studying mostly back-end programming languages throughout my college classes, 
                            usually focusing on Python and Data Analysis, while self-teaching myself some front-end 
                            languages.</p> <p>I usually spend my free time either spending time with friends or learning/improving my knowledge 
                            coding by learning new languages or starting projects.</p></div></div>`,r,v,a,c=U(i[0]),u=[];for(let o=0;o<c.length;o+=1)u[o]=ve(pe(i,c,o));return{c(){e=g("main"),n=g("div"),t=g("div"),s=g("div"),s.innerHTML=l,r=x(),v=g("div"),a=g("div");for(let o=0;o<u.length;o+=1)u[o].c();this.h()},l(o){e=p(o,"MAIN",{class:!0});var L=I(e);n=p(L,"DIV",{class:!0});var m=I(n);t=p(m,"DIV",{class:!0});var b=I(t);s=p(b,"DIV",{class:!0,"data-svelte-h":!0}),W(s)!=="svelte-1xewfck"&&(s.innerHTML=l),r=B(b),v=p(b,"DIV",{class:!0});var D=I(v);a=p(D,"DIV",{id:!0,class:!0});var k=I(a);for(let _=0;_<u.length;_+=1)u[_].l(k);k.forEach(f),D.forEach(f),b.forEach(f),m.forEach(f),L.forEach(f),this.h()},h(){d(s,"class","tile"),d(a,"id","icons"),d(a,"class","columns is-mobile w-100 svelte-1u3nwyw"),d(v,"class","tile pt-4 is-flex is-align-items-center is-justify-content-center"),d(t,"class","tile is-ancestor is-vertical"),d(n,"class","container h-100 svelte-1u3nwyw"),d(e,"class","h-100")},m(o,L){H(o,e,L),h(e,n),h(n,t),h(t,s),h(t,r),h(t,v),h(v,a);for(let m=0;m<u.length;m+=1)u[m]&&u[m].m(a,null)},p(o,[L]){if(L&1){c=U(o[0]);let m;for(m=0;m<c.length;m+=1){const b=pe(o,c,m);u[m]?u[m].p(b,L):(u[m]=ve(b),u[m].c(),u[m].m(a,null))}for(;m<u.length;m+=1)u[m].d(1);u.length=c.length}},i:M,o:M,d(o){o&&f(e),ie(u,o)}}}function Ce(i){return[[{link:"https://github.com/MFaria27",icon:"/images/GitHub.png",alt:"Github"},{link:"https://www.linkedin.com/in/mattheusfaria",icon:"/images/linkedin.png",alt:"LinkedIn"},{link:"mailto:mfaria@wpi.edu",icon:"/images/mail.png",alt:"Mail"}]]}class Ne extends q{constructor(e){super(),F(this,e,Ce,Ve,R,{})}}let We={Title:"Beecology MQP Project",Thumbnail:{Icon:"/images/project-thumbnails/mqpThumbnail.png",Alt:"MQP Thumbnail"},Buttons:[{Label:"Blank",Link:""},{Label:"Live",Link:"https://beecology.wpi.edu/webapp_new/main/#/app/home"}],Description:"Worked in a group of 8 overhaul the Beecology Project. Designed through Figma, our subgroup of four completely redesigned the prior version, on top of adding new features.",Code_Used:[{Icon:"/images/code-icons/angular.png",Alt:"Angular Icon"},{Icon:"/images/code-icons/typescript.png",Alt:"Typescript Icon"},{Icon:"/images/code-icons/gitlab.svg",Alt:"Gitlab Icon"}]},Ue={Title:"IRS 990 Web Parser",Thumbnail:{Icon:"/images/project-thumbnails/parserThumbnail.png",Alt:"Parser Thumbnail"},Buttons:[{Label:"Live",Link:"parserweb.mattheusfaria.com"},{Label:"Blank",Link:""}],Description:"Used the AWS suite and Angular to create a website that looks up colleges through Propublica Nonprofit, adds it to a global database, and allows the user to compile basic information onto an excel file",Code_Used:[{Icon:"/images/code-icons/angular.png",Alt:"Angular Icon"},{Icon:"/images/code-icons/aws.png",Alt:" AWS Icon"},{Icon:"/images/code-icons/python.png",Alt:"Python Icon"}]},ze={Title:"NVIDIA IQP",Thumbnail:{Icon:"/images/project-thumbnails/NVidiaThumbnail.png",Alt:"Nvidia Thumbnail"},Buttons:[{Label:"Report",Link:"https://digital.wpi.edu/concern/student_works/dz010t26k?locale=en"},{Label:"Blank",Link:""}],Description:"Worked with two teams of 4 to design, implement, and test an FPS video game environment with the aim of testing the effects of latency compensation techniques on player experience",Code_Used:[{Icon:"/images/code-icons/sql.png",Alt:"SQL Icon"},{Icon:"/images/code-icons/tableau.png",Alt:"Tableau Icon"},{Icon:"/images/code-icons/C_Programming.svg",Alt:"C Icon"},{Icon:"/images/code-icons/office_suite.png",Alt:"Office Icon"}]},Ge={Title:"AI Chess Player",Thumbnail:{Icon:"/images/project-thumbnails/chessThumbnail.png",Alt:"Chess Thumbnail"},Buttons:[{Label:"GitHub",Link:"https://github.com/wduf/chess"},{Label:"Blank",Link:""}],Description:"Created a chess bot using artificial intelligence and chess game engine that can generate all legal moves for a given board state.",Code_Used:[{Icon:"/images/code-icons/python.png",Alt:"Python Icon"}]},Re={Title:"Kickstarter Clone",Thumbnail:{Icon:"/images/project-thumbnails/punchenderThumbnail.png",Alt:"Kickstarter Thumbnail"},Buttons:[{Label:"GitHub",Link:"https://github.com/wduf/punchender"},{Label:"Blank",Link:""}],Description:"Developed a clone website of Kickstarter using React.js and Amazon Web Services, with a focus on scalability.",Code_Used:[{Icon:"/images/code-icons/aws.png",Alt:"AWS Icon"},{Icon:"/images/code-icons/React.svg",Alt:"React Icon"},{Icon:"/images/code-icons/sql.png",Alt:"SQL Icon"}]},qe={Title:"Internship Scrapper",Thumbnail:{Icon:"/images/project-thumbnails/indeed-logo.png",Alt:"Intern Thumbnail"},Buttons:[{Label:"GitHub",Link:"https://github.com/MFaria27/InternshipScrapper"},{Label:"Blank",Link:""}],Description:"Scrapped data from Indeed.com and exported it into a readable excel file using get requests and BeautifulSoup in python.",Code_Used:[{Icon:"/images/code-icons/python.png",Alt:"Python Icon"}]},Fe={Title:"Python Word Games",Thumbnail:{Icon:"/images/project-thumbnails/PythonWordGamesThumbnail.png",Alt:"Word Thumbnail"},Buttons:[{Label:"GitHub",Link:"https://github.com/MFaria27/PythonWordGames"},{Label:"Blank",Link:""}],Description:"Created Wordle and Hangman playable in a python console during a 1-Hour Coding Challenge, each with a large seelction of possible words gathered through get requests.",Code_Used:[{Icon:"/images/code-icons/python.png",Alt:"Python Icon"}]},Je={Title:"Personal Assistant Via",Thumbnail:{Icon:"/images/project-thumbnails/VoiceRecognitionThumbnail.png",Alt:"Via Thumbnail"},Buttons:[{Label:"GitHub",Link:"https://github.com/MFaria27/VirtualAssistantVia"},{Label:"Blank",Link:""}],Description:"Created a personal bot to run in the background and search for eligible voice commands and execute various basic orders.",Code_Used:[{Icon:"/images/code-icons/python.png",Alt:"Python Icon"}]},Oe={Title:"Song Data Vis Website",Thumbnail:{Icon:"/images/project-thumbnails/SpotifyProjectThumbnail.png",Alt:"SpotVis Thumbnail"},Buttons:[{Label:"GitHub",Link:"https://github.com/MFaria27/SpotifyDataVisualization"},{Label:"Live",Link:"https://mfaria27.github.io/SpotifyDataVisualization/"}],Description:"In a team, used Python for data collection, cleaning and management scraped from Spotify top hits playlists. Used HTML and D3 JavaScript library to create an interactive visualization displaying various data points pertaining to the best songs of 2018 - 2021.",Code_Used:[{Icon:"/images/code-icons/python.png",Alt:"Python Icon"},{Icon:"/images/code-icons/d3.png",Alt:"D3 Icon"},{Icon:"/images/code-icons/javascript.png",Alt:"JS Icon"}]},Qe={Title:"Predicting Song Popularity",Thumbnail:{Icon:"/images/project-thumbnails/SpotifyAlgorithm.png",Alt:"SpotAlgo Thumbnail"},Buttons:[{Label:"GitHub",Link:"https://github.com/MFaria27/PredictingSongPopularity"},{Label:"Blank",Link:""}],Description:"Implemented Machine Learning and Spotify data gathering to accurately predict the 'Popularity Index' of a Spotify song given specific parameters on a hypothetical song.",Code_Used:[{Icon:"/images/code-icons/python.png",Alt:"Python Icon"}]},Ke={Title:"Duck Hunt Website",Thumbnail:{Icon:"/images/project-thumbnails/DuckHuntScreenshot.png",Alt:"Duck Thumbnail"},Buttons:[{Label:"GitHub",Link:"https://github.com/MFaria27/DuckHuntWeb"},{Label:"Live",Link:"https://mfaria27.github.io/DuckHuntWeb/"}],Description:"Created a working website under a WPI host address that simulated the original Duck Hunt using the languages JavaScript, HTML, and CSS. Contained animation, random flight patterns, and score keeping.",Code_Used:[{Icon:"/images/code-icons/HTML5.png",Alt:"HTML Icon"},{Icon:"/images/code-icons/css.png",Alt:"CSS Icon"},{Icon:"/images/code-icons/javascript.png",Alt:"JS Icon"}]},be=[We,Ue,ze,Ge,Re,qe,Fe,Je,Oe,Qe,Ke];function _e(i,e,n){const t=i.slice();return t[2]=e[n],t}function Xe(i,e,n){const t=i.slice();return t[5]=e[n],t}function Ye(i){let e,n,t=i[2].Buttons[0].Label+"",s,l,r;function v(){return i[0](i[2])}return{c(){e=g("p"),n=g("button"),s=O(t),this.h()},l(a){e=p(a,"P",{class:!0});var c=I(e);n=p(c,"BUTTON",{class:!0});var u=I(n);s=Q(u,t),u.forEach(f),c.forEach(f),this.h()},h(){d(n,"class","button w-100 is-bold svelte-86u3jl"),d(e,"class","control svelte-86u3jl")},m(a,c){H(a,e,c),h(e,n),h(n,s),l||(r=se(n,"click",v),l=!0)},p(a,c){i=a},d(a){a&&f(e),l=!1,r()}}}function Ze(i){let e,n,t=i[2].Buttons[1].Label+"",s,l,r;function v(){return i[1](i[2])}return{c(){e=g("p"),n=g("button"),s=O(t),this.h()},l(a){e=p(a,"P",{class:!0});var c=I(e);n=p(c,"BUTTON",{class:!0});var u=I(n);s=Q(u,t),u.forEach(f),c.forEach(f),this.h()},h(){d(n,"class","button w-100 is-bold svelte-86u3jl"),d(e,"class","control svelte-86u3jl")},m(a,c){H(a,e,c),h(e,n),h(n,s),l||(r=se(n,"click",v),l=!0)},p(a,c){i=a},d(a){a&&f(e),l=!1,r()}}}function et(i){let e,n=`<figure class="image is-48x48"><img src="${z}${i[5].Icon}" alt="${i[5].Alt}"/></figure> `;return{c(){e=g("div"),e.innerHTML=n,this.h()},l(t){e=p(t,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-1q9vanv"&&(e.innerHTML=n),this.h()},h(){d(e,"class","column is-one-fifth")},m(t,s){H(t,e,s)},p:M,d(t){t&&f(e)}}}function Ie(i){let e,n,t,s,l=i[2].Title+"",r,v,a,c=`<figure class="image is-3by1"><img src="${z}${i[2].Thumbnail.Icon}" alt="${i[2].Thumbnail.Alt}"/></figure>`,u,o,L,m,b,D,k,_,y,$=i[2].Description+"",A,T,w=i[2].Buttons[0].Label!="Blank"&&Ye(i),S=i[2].Buttons[1].Label!="Blank"&&Ze(i),J=U(i[2].Code_Used),j=[];for(let P=0;P<J.length;P+=1)j[P]=et(Xe(i,J,P));return{c(){e=g("div"),n=g("div"),t=g("header"),s=g("p"),r=O(l),v=x(),a=g("div"),a.innerHTML=c,u=x(),o=g("div"),L=g("div"),w&&w.c(),m=x(),S&&S.c(),b=x(),D=g("div");for(let P=0;P<j.length;P+=1)j[P].c();k=x(),_=g("div"),y=g("p"),A=O($),T=x(),this.h()},l(P){e=p(P,"DIV",{class:!0});var N=I(e);n=p(N,"DIV",{class:!0});var C=I(n);t=p(C,"HEADER",{class:!0});var oe=I(t);s=p(oe,"P",{class:!0});var ce=I(s);r=Q(ce,l),ce.forEach(f),oe.forEach(f),v=B(C),a=p(C,"DIV",{class:!0,"data-svelte-h":!0}),W(a)!=="svelte-18zyf6r"&&(a.innerHTML=c),u=B(C),o=p(C,"DIV",{class:!0});var G=I(o);L=p(G,"DIV",{class:!0});var ee=I(L);w&&w.l(ee),m=B(ee),S&&S.l(ee),ee.forEach(f),b=B(G),D=p(G,"DIV",{id:!0,class:!0});var re=I(D);for(let ae=0;ae<j.length;ae+=1)j[ae].l(re);re.forEach(f),k=B(G),_=p(G,"DIV",{class:!0});var ue=I(_);y=p(ue,"P",{});var de=I(y);A=Q(de,$),de.forEach(f),ue.forEach(f),G.forEach(f),C.forEach(f),T=B(N),N.forEach(f),this.h()},h(){d(s,"class","card-header-title is-bold is-flex is-justify-content-center"),d(t,"class","card-header"),d(a,"class","card-image"),d(L,"class","field is-grouped w-100"),d(D,"id","Icons"),d(D,"class","columns is-multiline m-1 is-mobile"),d(_,"class","content"),d(o,"class","card-content"),d(n,"class","card h-100 has-background-slate svelte-86u3jl"),d(e,"class","column is-one-third")},m(P,N){H(P,e,N),h(e,n),h(n,t),h(t,s),h(s,r),h(n,v),h(n,a),h(n,u),h(n,o),h(o,L),w&&w.m(L,null),h(L,m),S&&S.m(L,null),h(o,b),h(o,D);for(let C=0;C<j.length;C+=1)j[C]&&j[C].m(D,null);h(o,k),h(o,_),h(_,y),h(y,A),h(e,T)},p(P,N){P[2].Buttons[0].Label!="Blank"&&w.p(P,N),P[2].Buttons[1].Label!="Blank"&&S.p(P,N)},d(P){P&&f(e),w&&w.d(),S&&S.d(),ie(j,P)}}}function tt(i){let e,n,t,s=U(be),l=[];for(let r=0;r<s.length;r+=1)l[r]=Ie(_e(i,s,r));return{c(){e=g("main"),n=g("div"),t=g("div");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){e=p(r,"MAIN",{class:!0});var v=I(e);n=p(v,"DIV",{id:!0,class:!0});var a=I(n);t=p(a,"DIV",{class:!0});var c=I(t);for(let u=0;u<l.length;u+=1)l[u].l(c);c.forEach(f),a.forEach(f),v.forEach(f),this.h()},h(){d(t,"class","columns is-multiline m-1"),d(n,"id","Projects"),d(n,"class","container"),d(e,"class","h-100")},m(r,v){H(r,e,v),h(e,n),h(n,t);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(t,null)},p(r,[v]){if(v&0){s=U(be);let a;for(a=0;a<s.length;a+=1){const c=_e(r,s,a);l[a]?l[a].p(c,v):(l[a]=Ie(c),l[a].c(),l[a].m(t,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=s.length}},i:M,o:M,d(r){r&&f(e),ie(l,r)}}}function nt(i){return[t=>parent.open(t.Buttons[0].Link),t=>parent.open(t.Buttons[1].Link)]}class it extends q{constructor(e){super(),F(this,e,nt,tt,R,{})}}function st(i){let e,n=`<div class="container"><div class="is-flex is-justify-content-center"><h1><a class="is-bold is-size-3" href="${z}/MFaria Resume Oct 2023.pdf" target="_blank">PDF VERSION</a></h1></div></div>`;return{c(){e=g("main"),e.innerHTML=n,this.h()},l(t){e=p(t,"MAIN",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-16ini2b"&&(e.innerHTML=n),this.h()},h(){d(e,"class","h-100")},m(t,s){H(t,e,s)},p:M,i:M,o:M,d(t){t&&f(e)}}}class at extends q{constructor(e){super(),F(this,e,null,st,R,{})}}function ke(i){let e,n;return e=new He({}),{c(){K(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,s){Y(e,t,s),n=!0},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function Le(i){let e,n;return e=new Ne({}),{c(){K(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,s){Y(e,t,s),n=!0},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function ye(i){let e,n;return e=new it({}),{c(){K(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,s){Y(e,t,s),n=!0},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function Ae(i){let e,n;return e=new at({}),{c(){K(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,s){Y(e,t,s),n=!0},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function lt(i){let e,n="",t,s,l,r,v,a,c,u,o,L,m,b,D,k;c=new Be({});let _=i[0]=="Index"&&ke(),y=i[0]=="About"&&Le(),$=i[0]=="Projects"&&ye(),A=i[0]=="Resume"&&Ae();return{c(){e=g("script"),e.innerHTML=n,s=x(),l=g("main"),r=g("div"),v=x(),a=g("div"),K(c.$$.fragment),u=x(),o=g("div"),_&&_.c(),L=x(),y&&y.c(),m=x(),$&&$.c(),b=x(),A&&A.c(),this.h()},l(T){const w=je("svelte-1pha31q",document.head);e=p(w,"SCRIPT",{src:!0,"data-svelte-h":!0}),W(e)!=="svelte-1lmfth7"&&(e.innerHTML=n),w.forEach(f),s=B(T),l=p(T,"MAIN",{class:!0});var S=I(l);r=p(S,"DIV",{id:!0,class:!0}),I(r).forEach(f),v=B(S),a=p(S,"DIV",{class:!0});var J=I(a);X(c.$$.fragment,J),J.forEach(f),u=B(S),o=p(S,"DIV",{class:!0});var j=I(o);_&&_.l(j),L=B(j),y&&y.l(j),m=B(j),$&&$.l(j),b=B(j),A&&A.l(j),j.forEach(f),S.forEach(f),this.h()},h(){De(e.src,t=z+"/particles/particles.js")||d(e,"src",t),d(r,"id","particles-js"),d(r,"class","svelte-1egmy6e"),d(a,"class","page-header svelte-1egmy6e"),d(o,"class",D="page-content h-100 "+(i[0]=="About"?"scroll-about":"")+" "+(i[0]=="Projects"?"scroll-proj":"")+" svelte-1egmy6e"),d(l,"class","h-100 page svelte-1egmy6e")},m(T,w){h(document.head,e),H(T,s,w),H(T,l,w),h(l,r),h(l,v),h(l,a),Y(c,a,null),h(l,u),h(l,o),_&&_.m(o,null),h(o,L),y&&y.m(o,null),h(o,m),$&&$.m(o,null),h(o,b),A&&A.m(o,null),k=!0},p(T,[w]){T[0]=="Index"?_?w&1&&E(_,1):(_=ke(),_.c(),E(_,1),_.m(o,L)):_&&(ne(),V(_,1,1,()=>{_=null}),te()),T[0]=="About"?y?w&1&&E(y,1):(y=Le(),y.c(),E(y,1),y.m(o,m)):y&&(ne(),V(y,1,1,()=>{y=null}),te()),T[0]=="Projects"?$?w&1&&E($,1):($=ye(),$.c(),E($,1),$.m(o,b)):$&&(ne(),V($,1,1,()=>{$=null}),te()),T[0]=="Resume"?A?w&1&&E(A,1):(A=Ae(),A.c(),E(A,1),A.m(o,null)):A&&(ne(),V(A,1,1,()=>{A=null}),te()),(!k||w&1&&D!==(D="page-content h-100 "+(T[0]=="About"?"scroll-about":"")+" "+(T[0]=="Projects"?"scroll-proj":"")+" svelte-1egmy6e"))&&d(o,"class",D)},i(T){k||(E(c.$$.fragment,T),E(_),E(y),E($),E(A),k=!0)},o(T){V(c.$$.fragment,T),V(_),V(y),V($),V(A),k=!1},d(T){T&&(f(s),f(l)),f(e),Z(c),_&&_.d(),y&&y.d(),$&&$.d(),A&&A.d()}}}function ot(i,e,n){let t;Te(i,le,l=>n(0,t=l)),$e(()=>{s()});function s(){particlesJS.load("particles-js",z+"/particles/particles.json",function(){console.log("callback - particles-js config loaded")})}return[t]}class dt extends q{constructor(e){super(),F(this,e,ot,lt,R,{})}}export{dt as component};

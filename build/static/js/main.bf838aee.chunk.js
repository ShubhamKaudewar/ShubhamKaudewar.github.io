(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/profile.f8a9c6e7.jpeg"},16:function(e,a,t){e.exports=t(27)},21:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(14),s=t.n(i),l=(t(21),t(2)),o=t(3),c=t(5),m=t(4),d=t(15),h=t.n(d),u=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).sidebarData=e.sidebarData,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},r.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},r.a.createElement("span",{className:"d-block d-lg-none"},this.sidebarData.firstName," ",this.sidebarData.lastName),r.a.createElement("span",{className:"d-none d-lg-block"},r.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:h.a,alt:""}))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#experience"},"Experience")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},"Education")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#interests"},"Interests")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#awards"},"Awards")))))}}]),t}(n.Component),p=t(6),g=t(7),f=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).landingData=e.landingData,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h1",{className:"mb-0 nameCustom"},this.landingData.firstName,r.a.createElement("span",{className:"text-primary"},this.landingData.lastName)),r.a.createElement("div",{className:"subheading mb-5"},this.landingData.phoneNumber," \xb7",r.a.createElement("a",{href:"mailto:name@email.com"},this.landingData.email)),r.a.createElement("p",{className:"lead mb-5"},this.landingData.bio),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:this.landingData.linkedin},r.a.createElement(p.a,{icon:g.f})),r.a.createElement("a",{href:this.landingData.github},r.a.createElement(p.a,{icon:g.c})),r.a.createElement("a",{href:this.landingData.hackerRank},r.a.createElement(p.a,{icon:g.d})),r.a.createElement("a",{href:this.landingData.sololearn},r.a.createElement(p.a,{icon:g.a})),r.a.createElement("a",{href:this.landingData.facebook},r.a.createElement(p.a,{icon:g.b})),r.a.createElement("a",{href:this.landingData.instagram},r.a.createElement(p.a,{icon:g.e})))))}}]),t}(n.Component),b=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).experience=e.experience,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Experience"),this.experience.map((function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.position),r.a.createElement("div",{className:"subheading mb-3"},e.organization),r.a.createElement("p",null,e.aboutWork)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))}))))}}]),t}(n.Component),w=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).education=e.education,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Education"),this.education.map((function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.university),r.a.createElement("div",{className:"subheading mb-3"},e.degree),r.a.createElement("p",{className:"subheading mb-3"},e.branch," ",e.year)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))}))))}}]),t}(n.Component),v=t(9),E=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).skills=e.skills,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Skills"),r.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),r.a.createElement("div",{className:"row"},this.skills.map((function(e,a){return r.a.createElement("div",{key:a,className:"col-6"},r.a.createElement("p",{className:"list-item"},r.a.createElement(p.a,{icon:v.b,color:"green"}),r.a.createElement("span",{className:"ml-3 skills"},r.a.createElement("a",{href:e.link,rel:"noopener noreferrer",target:"_blank"},e.name))))})))))}}]),t}(n.Component),k=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).interests=e.interests,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Interests"),r.a.createElement("p",null,this.interests.paragraphOne),r.a.createElement("p",{className:"mb-0"},this.interests.paragraphTwo)))}}]),t}(n.Component),N=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).awards=e.awards,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"awards"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Awards & Certifications"),r.a.createElement("ul",{className:"fa-ul mb-0"},this.awards.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(p.a,{icon:v.a,color:"#ffc107"}),r.a.createElement("span",{className:"ml-2"}," ",e.awardDetail," "))})))))}}]),t}(n.Component),y=t(8),j=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).skills=e.skills,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{class:"page-footer font-small blue"},r.a.createElement("div",{class:"footer-copyright text-center py-3"},"This portfolio built on ",r.a.createElement("a",{href:"https://reactjs.org/"},r.a.createElement(p.a,{icon:g.g,color:"white"}))))}}]),t}(n.Component),D=t(12),S=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={landingData:y.landing,experience:y.experience,education:y.education,skills:y.skills,interests:y.interests,awards:y.awards,footer:y.Footer},D.a.initialize("UA-131088172-2"),D.a.pageview(window.location.pathname),n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,{sidebarData:this.state.landingData}),r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement(f,{landingData:this.state.landingData}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(b,{experience:this.state.experience}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(w,{education:this.state.education}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(E,{skills:this.state.skills}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(k,{interests:this.state.interests}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(N,{awards:this.state.awards}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(j,{footer:this.state.footer})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('{"landing":{"firstName":"Shubham","lastName":"Kaudewar","phoneNumber":"+91-8657528799","bio":"I am a Full-Stack Developer who contributed my knowledge in various forms. My tech stack includes Python, PHP, and Javascript. Python for server-side and scripting and Javascript for the frontend. I use the Django framework for server-side development and React for frontend  evelopment. Experienced MySQL, SQLite, JSON, MongoDB such databases till now. I was Web Manager at NSS IIT-Bombay for tenure 2019-20 at my institute where I am responsible for building dynamic sites for the NSS community. I am 3rd year UG B.Tech Chemical Engineering student at IIT-Bombay.","email":"kaudewar@gmail.com","linkedin":"https://www.linkedin.com/in/shubham-kaudewar-736ab6137/","github":"https://github.com/ShubhamKaudewar","hackerRank":"https://www.hackerrank.com/ShubhamKaudewar","facebook":"https://www.facebook.com/shubham.kaudewar/","instagram":"https://www.instagram.com/__tyrion_lannister_/","sololearn":"https://www.sololearn.com/Profile/374584"},"experience":[{"position":"Web & Design Head","organization":"NSS IIT-Bombay","aboutWork":"Developed website Birds of IIT-Bombay detailed information like name to identification sound fetching data from database SQL. With mobile responsive ajax-jQuery search bar. Modified OLI Video Downloader fetching from SQL with PHP and creative UI/UX Design. Diagnosed error and implemented solutions on apache Server for web hosting of php files manage SSH connection and files transferserver through FileZilla software Best optimized sites with Google Chrome Search Engine Optimization technique with chrome lighthouse and diagnosed problems and have skills able to sort out bugs in console","fromDate":"April 2019","toDate":"April 2020"},{"position":"SME Intern","organization":"TutorMate Edu.","aboutWork":"Helped in content creation and curriculum development keeping the companies\' protocol Subject Matter Expert of physics subject in content development of NCERT, MHCET, IITJEE, NEET in office work. Achieved excellency in Microsoft word software and MathType. Part of a team and successfully able to complete daily task within deadline over the month","fromDate":"December 2019","toDate":"January 2020"},{"position":"Hospitality & PR Coordinator","organization":"Mood Indigo","aboutWork":"I was Coordinator at Hospitality and Public Relation Department.Positioning for College Ambassador at different colleges for publicity and conducting school and college level short events for showing MI events and giving points to respective CR Conducted college publicity drive in Mumbai colleges to increase fest participants by 10%. Managed accommodation and logistics for accommodation of 200 participants","fromDate":"December 2018","toDate":"January 2019"}],"education":[{"university":"Indian Institute of Technology Bombay","degree":"Bachelor of Technology","branch":"Chemical","year":"Thirdie","fromDate":"July 2017","toDate":"Present"}],"skills":[{"name":"Python","link":"https://www.python.org/"},{"name":"Django","link":"https://www.djangoproject.com/"},{"name":"PHP","link":"https://www.php.net/"},{"name":"JavaScript","link":"https://www.javascript.com/"},{"name":"ReactJs","link":"https://reactjs.org/"},{"name":"NodeJs","link":"https://nodejs.org/en/"},{"name":"HTML5","link":"https://html.com/"},{"name":"CSS3","link":"https://www.w3.org/Style/CSS/Overview.en.html"},{"name":"VS Code","link":"https://code.visualstudio.com/"},{"name":"MySQL","link":"https://www.mysql.com/"},{"name":"SQLite","link":"https://www.sqlite.org/"},{"name":"MongoDB","link":"https://www.mongodb.com/"},{"name":"phpMyAdmin","link":"https://www.phpmyadmin.net/"},{"name":"Git & GitHub","link":"https://github.com/"},{"name":"SSH Terminal","link":"https://www.ssh.com/ssh/"},{"name":"Google Analytics","link":"https://analytics.google.com/"},{"name":"Google Cloud APIs","link":"https://cloud.google.com/apis/docs/overview"},{"name":"C++","link":"http://www.cplusplus.org/"},{"name":"jQuery","link":"https://jquery.com/"},{"name":"Ajax","link":"https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX"}],"interests":{"paragraphOne":"Apart from being a web developer, I enjoy most of my time watching TV Series and listening to music. In the institute, I spent the most time with friends. I like to explore new food places in Mumbai. I like to read tech articles and posts a lot. Character L in death note is my favorite","paragraphTwo":"When forced indoors, I follow many sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world."},"awards":[{"awardDetail":"Achieved 1 Gold and 2 Silver badges on best practice site HackerRank"},{"awardDetail":"Certified in 5 programming courses on Sololearn.com"},{"awardDetail":"Achieved 100% in SEO Chrome Light House Audit"},{"awardDetail":"First Rank in District in MTSE Exam in 2013"},{"awardDetail":"Successfully completed Crossy-GC track (Running Race) 3 times till now"},{"awardDetail":"Participated in Gyration (Dance General Championship) and the team got 2nd position"}]}')}},[[16,1,2]]]);
//# sourceMappingURL=main.bf838aee.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/arun.ed83902f.pdf"},,function(e,a,t){e.exports=t.p+"static/media/milkball.3f02797c.webm"},,function(e,a,t){e.exports=t.p+"static/media/contact.46efc84b.gif"},function(e,a,t){e.exports=t.p+"static/media/contact1.20b2eae0.gif"},function(e,a,t){e.exports=t.p+"static/media/contact2.479780de.gif"},function(e,a,t){e.exports=t.p+"static/media/contact3.b08fc243.gif"},function(e,a,t){e.exports=t(24)},,,,,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/file.cae7ee3f.mp4"},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(7),s=t.n(l),r=(t(21),t(1)),c=t(2),o=t(4),m=t(3),u=t(5),d=t(8),p=t.n(d),h=t(9),f=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=new h.a("#typed",{strings:["  Frontend Developer"],typeSpeed:50,backSpeed:25,startDelay:500,backDelay:1e3,showCursor:!0,cursorChar:"|",loop:!0});this.typed=e}},{key:"componentWillUnmount",value:function(){this.typed&&this.typed.destroy()}},{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{id:"home"},i.a.createElement("nav",{id:"nav-wrap"},i.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),i.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),i.a.createElement("ul",{id:"nav",className:"nav"},i.a.createElement("li",{className:"current"},i.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),i.a.createElement("div",{className:"row banner"},i.a.createElement("div",{className:"banner-text"},i.a.createElement("div",{className:"spring-animation"},i.a.createElement("h1",{className:"responsive-headline "},"I ",i.a.createElement("span",{className:"wave"},"\ud83d\udc4b ")," am ",e.name),i.a.createElement("h2",null,"   ",i.a.createElement("span",{id:"typed",style:{display:"inline-block",fontSize:"1em",color:"white",fontFamily:"Merriweather",fontWeight:"300"}}))),i.a.createElement("div",{className:"zoom-animation"},i.a.createElement("h3",{style:{color:"#fff",fontFamily:"Merienda, cursive "}}," ",e.roleDescription)),i.a.createElement("hr",null),i.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url,target:"_blank"},i.a.createElement("i",{className:e.className})))}))),i.a.createElement("div",{className:"resume-download-button"},i.a.createElement("a",{href:p.a,download:"Arun Kumar M BE.pdf"},"Download Resume"))),i.a.createElement("p",{className:"scrolldown"},i.a.createElement("a",{className:"smoothscroll",href:"#about"},i.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),g=t(10),E=t.n(g),v=(t(23),function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"three columns"},i.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("center",null,i.a.createElement("h2",null,"About Me")),i.a.createElement("p",{style:{fontFamily:"Oregano, cursive"}},e.aboutme),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"columns contact-details"},i.a.createElement("center",null,i.a.createElement("h2",null,"Contact Details")),i.a.createElement("p",{className:"address",style:{fontFamily:"Oregano, cursive"}},i.a.createElement("span",null,e.name," M"),i.a.createElement("br",null),i.a.createElement("span",null,e.address),i.a.createElement("br",null),i.a.createElement("span",null,e.Email),i.a.createElement("br",null),i.a.createElement("span",null,e.phone))),i.a.createElement("center",null,i.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,style:{width:"35%",height:"auto"}},i.a.createElement("source",{src:E.a,type:"video/mp4"}),"Your browser does not support the video tag."))))))}}]),a}(n.Component)),b=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"resume",style:{fontFamily:"DM Serif Display, serif"}},i.a.createElement("div",{className:"row education"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Education"))),i.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return i.a.createElement("div",{className:"row item"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("h3",null,e.UniversityName),i.a.createElement("p",{className:"info"},e.specialization,i.a.createElement("span",null,"\u2022")," ",i.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),i.a.createElement("p",{className:"info"},e.Achievements)))}))),i.a.createElement("div",{className:"row work"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Work"))),i.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return i.a.createElement("div",{className:"row item"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("h3",null,e.CompanyName),i.a.createElement("p",{className:"info"},e.specialization,i.a.createElement("span",null,"\u2022")," ",i.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),i.a.createElement("p",null,e.Achievements)))}))),i.a.createElement("div",{className:"row skill"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Skills"))),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("p",null,e.skillsDescription),i.a.createElement("div",{className:"bars"},i.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return i.a.createElement("li",null,i.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),i.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),y=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"portfolio"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns collapsed"},i.a.createElement("h1",null,"Check Out Some of My Works."),i.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return i.a.createElement("div",{className:"columns portfolio-item"},i.a.createElement("div",{className:"item-wrap"},i.a.createElement("a",{href:"#modal-01"},i.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),i.a.createElement("div",{className:"overlay"},i.a.createElement("div",{className:"portfolio-item-meta"},i.a.createElement("h5",null,e.name),i.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),N=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"testimonials"},i.a.createElement("div",{className:"text-container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"two columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Client Testimonials"))),i.a.createElement("div",{className:"ten columns flex-container"},i.a.createElement("div",{className:"flexslider"},i.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return i.a.createElement("li",null,i.a.createElement("blockquote",null,i.a.createElement("p",null,e.description),i.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(n.Component),w=t(11),k=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e){t.setState(Object(w.a)({},e.target.name,e.target.value))},t.state={name:"",email:"",message:""},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){this.props.resumeData;return i.a.createElement("section",{id:"contact"},i.a.createElement("div",{className:"row section-head"},i.a.createElement("div",{className:"ten columns"},i.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"),i.a.createElement("img",{src:"  https://msbtemicroprojectpdf.in/wp-content/uploads/2023/09/contact-us.gif",className:"rotated-image",alt:"Rotated Giphy"}))),i.a.createElement("div",{className:"row"},i.a.createElement("aside",{className:"eigth columns footer-widgets"},i.a.createElement("div",{className:"widget"}))),i.a.createElement("form",{className:"form-container",action:"https://formspree.io/f/xnqejnvg",method:"POST"},i.a.createElement("label",{className:"form-label",htmlFor:"name"},"Name:"),i.a.createElement("input",{className:"form-input",type:"text",id:"name",name:"name",value:this.state.name,onChange:this.handleChange,required:!0}),i.a.createElement("label",{className:"form-label",htmlFor:"email"},"Email:"),i.a.createElement("input",{className:"form-input",type:"email",id:"email",name:"email",value:this.state.email,onChange:this.handleChange,required:!0}),i.a.createElement("label",{className:"form-label",htmlFor:"message"},"Message:"),i.a.createElement("input",{className:"form-input",id:"message",name:"message",value:this.state.message,onChange:this.handleChange,required:!0}),i.a.createElement("button",{className:"form-button",type:"submit"},"Send Message")))}}]),a}(n.Component),j=t(12),O=t.n(j),C=t(13),D=t.n(C),S=t(14),M=t.n(S),x=t(15),A=t.n(x),P=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("footer",null,i.a.createElement("div",{style:{textAlign:"left",position:"absolute",width:"100%"}},i.a.createElement("img",{src:A.a,className:"rotated-image1",alt:"Rotated Giphy"}),i.a.createElement("img",{src:M.a,className:"rotated-image1",alt:"Rotated Giphy"}),i.a.createElement("img",{src:O.a,className:"rotated-image1",alt:"Rotated Giphy"}),i.a.createElement("img",{src:D.a,className:"rotated-image1",alt:"Rotated Giphy"})),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return i.a.createElement("li",null,i.a.createElement("a",{href:e.url},i.a.createElement("i",{className:e.className})))}))),i.a.createElement("p",{style:{color:"white"}},"Copyright \xa9 2024, All Rights Reserved"),i.a.createElement("div",{id:"go-top"},i.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},i.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),L={imagebaseurl:"https://rbhatia46.github.io/",name:"Arun Kumar ",role:"  ",linkedinId:" Arun Kumar M",skypeid:"Your skypeid",roleDescription:"   To utilize my skills in front-end development and experience in React.js to build dynamic and responsive user interfaces. Seeking a challenging role that allows me to enhance my technical skills and contribute to the success of the organization.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/arun-kumar-m-020669275/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/",className:"fa fa-github"},{name:"skype",url:"http://twitter.com/",className:"fa fa-twitter"}],aboutme:"   I am a skilled front-end web developer with expertise in React.js. I specialize in building dynamic and responsive user interfaces that are visually appealing and user-friendly. I have experience in working with various software and tools such as JavaScript, HTML & CSS, Bootstrap, Git, Node.js, MySQL, and MongoDB. I am passionate about learning new technologies and enhancing my technical skills to contribute to the success of the organization.",address:"4/11, JP Nagar, Tiruppur.",Email:"Email : arunaakash114@gmail.com",phone:"Phone : +916369084994",education:[{UniversityName:" Jai Shriram Enginnering Colloge",specialization:"Mechanical Engineering",MonthOfPassing:"April",YearOfPassing:"2019",Achievements:"Percentage - First Class"},{UniversityName:"Bishop Ubagaraswamy School",specialization:"Higher Secondary School",MonthOfPassing:"May",YearOfPassing:"2015",Achievements:"Percentage - 76.1%"},{UniversityName:" Government Secondary School",specialization:" Secondary School - 10th",MonthOfPassing:"Mar",YearOfPassing:"2013",Achievements:"Percentage - 78.1%"}],work:[{CompanyName:"Altius Technologies l Coimbatore Tamilnadu 641011",specialization:"Front End Developer",MonthOfLeaving:"Dec 2022- Present",YearOfLeaving:"",Achievements:" Develop and implement user-friendly web interfaces using React.js. Collaborate with cross-functional teams to design and Write clean, efficient, and well-documented code. Optimize web applications for maximum speed and scalability. Stayed up-to-date with the latest front-end technologies and trends."},{CompanyName:" Qtree Technologies l Coimbatore Tamilnadu 641011",specialization:"Front End Developer",MonthOfLeaving:"Oct 2022 - Dec 2022",YearOfLeaving:"",Achievements:"  Develop and maintain responsive websites using the framework. Strong understanding of HTML5, CSS, and JavaScript Familiarity with Bootstrap and React Basic knowledge of Redux Experience with GitHub Excellent communication and teamwork skills Passion for learning and a willingness to take on new challenges"},{CompanyName:" Barani Hydraulics India Private Limited l Coimbatore Tamilnadu - 641011",specialization:"Project Engineer",MonthOfLeaving:" June 2020 - Sep 2022",YearOfLeaving:"",Achievements:"  Supervise and coordinate the production of hydraulic components using CNC machines Program and optimize CNC machines for efficient and accurate production Ensure that all products meet quality standards Manage and train CNC machine operators Troubleshoot and resolve production problems"},{specialization:"Graduate Engineering Trainee",MonthOfLeaving:" June 2019 - June 2020",Achievements:"  Project Planning: Developed and implemented project plans that defined the scope, schedule, and budget of projects. Worked with cross-functional teams to identify project requirements, prepare project plans, and monitored progress to ensure timely delivery. Design and Development: Designed and developed manufacturing processes, equipment, and tools that improved efficiency and productivity. Conducted feasibility studies and cost-benefit analyses to determine the best manufacturing solutions. Team Management: Managed cross-functional teams, including engineers, technicians, and machinists, to ensure projects were completed on time, within budget, and to customer specifications"}],skillsDescription:"My Soft Skils here",skills:[{skillname:"react-js"},{skillname:"Ionic-framework"},{skillname:"javascript"},{skillname:"angular-js"},{skillname:"github"},{skillname:"html5-css3"}],portfolio:[{description:"mobileapp",imgurl:"images/portfolio/origami.jpg"},{description:"Webapplication",imgurl:"images/portfolio/coffee.jpg"},{description:"mobileapp",imgurl:"images/portfolio/girl.jpg"},{description:"Webapplication",imgurl:"images/portfolio/judah.jpg"}],testimonials:[{description:"Financial App - Ionic FRAMEWORK",name:"Developing a robust financial application with Ionic framework, our solution seamlessly combines the versatility of Ionic for cross-platform compatibility with powerful financial features. Users can experience a user-friendly interface, real-time updates, and secure financial management, making it an essential tool for effective personal finance control."},{description:" Commercial Website - React JS",name:"  Boasting a one-year anniversary, my professional journey includes spearheading a commercial website where I skillfully implemented React.js and JavaScript on the front end. This endeavor resulted in a user-centric platform that seamlessly combines dynamic content and responsive design, ensuring an engaging and modernized user experience. Leveraging React.js component-based architecture and the versatility of JavaScript, I successfully enhanced the site's performance, contributing to its robust and visually appealing interface. Reflecting on the past year, this project exemplifies my proficiency in utilizing cutting- edge technologies to create compelling online experiences"},{description:"  E-commerce website - Angular JS",name:" An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service"}]},R=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,{resumeData:L}),i.a.createElement(v,{resumeData:L}),i.a.createElement(b,{resumeData:L}),i.a.createElement(y,{resumeData:L}),i.a.createElement(N,{resumeData:L}),i.a.createElement(k,{resumeData:L}),i.a.createElement(P,{resumeData:L}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[16,2,1]]]);
//# sourceMappingURL=main.ac72904d.chunk.js.map
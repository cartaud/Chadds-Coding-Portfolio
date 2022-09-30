const nav = document.querySelector('#directory-container');
const social = document.querySelector('#social-container');

if (window.innerWidth <= 480) {
    nav.innerHTML = `
    <button class="dropbtn">NAVIGATION
      <i class="fa fa-caret-down"></i>
    </button>
    <ul class="dropdown-nav">
        <li class="orange" id="about-link">ABOUT ME</li>
        <li id="projects-link">PROJECTS</li>
        <li id="contact-link">CONTACT</li>
        <li id="resume-link">RESUME</li>
    </ul>
    `
    social.innerHTML = `
    <button class="dropbtn">SOCIAL
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-social">
        <a href="https://www.linkedin.com/in/chadd-artaud/" target="_blank">Linkedin</a>
        <a href="https://github.com/cartaud" target="_blank">Github</a>
        <a href="https://twitter.com/ArtaudChadd" target="_blank">Twitter</a>
        <a href="https://www.facebook.com/chadd.artaud" target="_blank">Facebook</a>
        <a href="https://www.instagram.com/chadd_a33/" target="_blank">Instagram</a>
    </div>
    `
}

const content = document.querySelector('#right-container');
const about = document.querySelector('#about-link');
const project = document.querySelector('#projects-link');
const contact = document.querySelector('#contact-link');
const resume = document.querySelector('#resume-link');

const showAbout = () => {
    window.removeEventListener('click', closeProject)
    project.classList.remove('orange');
    contact.classList.remove('orange');
    resume.classList.remove('orange');
    about.classList.add('orange');
    content.innerHTML = aboutTemplate;
};

const showProjects = () => {
    window.addEventListener('click', closeProject)
    about.classList.remove('orange');
    contact.classList.remove('orange');
    resume.classList.remove('orange');
    project.classList.add('orange');
    content.innerHTML = projectTemplate;
};

const showContact = () => {
    window.removeEventListener('click', closeProject)
    about.classList.remove('orange');
    project.classList.remove('orange');
    resume.classList.remove('orange');
    contact.classList.add('orange');
    content.innerHTML = contactTemplate;
};

const showResume = () => {
    window.removeEventListener('click', closeProject)
    about.classList.remove('orange');
    project.classList.remove('orange');
    contact.classList.remove('orange');
    resume.classList.add('orange');
    content.innerHTML = resumeTemplate;
};

about.addEventListener('click', showAbout);
project.addEventListener('click', showProjects);
contact.addEventListener('click', showContact);
resume.addEventListener('click', showResume);

const aboutTemplate = `
<header>
    <h1 class="orange">MY NAME IS CHADD ARTAUD</h1>
    <h2>DEDICATED TO WRITING CLEAN CODE</h2>
</header>
<div id="bio-container">
    <div id="portrait-container">
        <img src="./assets/images/profile.png" alt="self portrait">
    </div>
    <div id="bio">
        <p>
            My name is Chadd Artaud and I was born and raised in San Diego, California. My first experience with 
            coding was as an undergraduate at the University of Nevada, Reno where I earned my Bachelors of Science
            in Mechanical Engineering. I enjoy solving complex problems as there is no better feeling than solving 
            a problem that you have been working on for a long period of time. 
        </p>
        <br><br>
        <p>
            When I first started software development, I was a self learner for 6 months. Once I had a firm grasp of 
            the basics, I decided to take the next step and enroll in an intensive 24 week full stack software development bootcamp through University of California, 
            San Diego Extension program. Now that I have completed the bootcamp, my goal for myself is to be working as a software engineer by the end of this year
            where I can use my knowledge in software engineering to contribute to a company's success.
        </p>
    </div>
</div>
`
//on click of image, send a new template but with image replaced with options
//to github or deployed
const projectTemplate = `
<header>
    <h1 class="orange">MY PROJECTS</h1>
    <h2>CLICK ON PROJECT IMAGE FOR MORE</h2>
</header>
<div id="projects">
    <div class="projects-row">
        <div class="project-container" onclick="thoughtClick(this, true)" id="thought-container">
            <img src="./assets/images/thought.png"  alt="deep thoughts" class="projectPreview">
            <div class="project-title">
                <h5>Deep Thoughts</h5>
                <h6>AWS</h6>
            </div>
        </div>
        <div class="project-container" onclick="bookClick(this, true)" id="book-container">
            <img src="./assets/images/bookSearch.png"  alt="Book Search" class="projectPreview">
            <div class="project-title">
                <h5>Book Search</h5>
                <h6>GraphQL</h6>
            </div>
        </div>
        <div class="project-container" onclick="techClick(this, true)" id="tech-container">
            <img src="./assets/images/techBlog.png"  alt="Tech Blog" class="projectPreview">
            <div class="project-title">
                <h5>Tech Blog</h5>
                <h6>MVC</h6>
            </div>
        </div>
    </div>

    <div class="projects-row">
        <div class="project-container" onclick="portfolIOClick(this, true)" id="io-container">
            <img src="./assets/images/portfolIOPreview.png"  alt="Portfolio Generator" class="projectPreview">
            <div class="project-title">
                <h5>Portfol.IO</h5>
                <h6>MERN</h6>
            </div>
        </div>
        <div class="project-container" onclick="ecomClick(this, true)" id="ecom-container">
            <img src="./assets/images/eCom.png"  alt="E-Commerce" class="projectPreview">
            <div class="project-title">
                <h5>E-Commerce</h5>
                <h6>ORM</h6>
            </div>
        </div>
        <div class="project-container" onclick="etchClick(this, true)" id="etch-container">
            <img src="./assets/images/etch.png"  alt="Etch-A-Sketch" class="projectPreview">
            <div class="project-title">
                <h5>Etch-A-Sketch</h5>
                <h6>Javascript</h6>
            </div>
        </div>
    </div>
</div>
`

const contactTemplate = `
<header>
    <h1 class="orange">CONTACT INFORMATION</h1>
</header>
<div id='contact-info'>
    <h4>CELL PHONE: (858) 829-3988</h4>
    <h4>EMAIL: chadd_artaud@cox.net</h4>
</div>
`

const resumeTemplate = `
<header>
    <h1 class="orange">RESUME</h1>
    <h2>CLICK THE IMAGE TO DOWNLOAD PDF</h2>
</header>
<div id='resume'>
    <a href="https://drive.google.com/file/d/1DFxCHSbkLI_6MChXdYyocgvT9ESyobuw/view?usp=sharing" target="_blank">
        <img src="./assets/images/resumePreview.png" alt="Resume">
    </a>
</div>
`

const techClick = (x, bool) => {
    if (bool) {
        x.innerHTML = `
        <div class="project-click">
            <div class="project-description" id="tech-des">
            A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and 
            comment on other developers’ posts as well.  
            </div>
            <div class="project-buttons">
                <a href="https://github.com/cartaud/mvcTechBlog" class="gitLink" target="_blank">GitHub</a>
                <a href="https://mvctechchat.herokuapp.com/" class="deployedLink" target="_blank">Deployed</a>
            </div>
        </div>
        `
    } else {
        x.innerHTML = `
        <img src="./assets/images/techBlog.png"  alt="Tech Blog" class="projectPreview">
        <div class="project-title">
            <h5>Tech Blog</h5>
            <h6>MVC</h6>
        </div>
        `
    }
}

const bookClick = (x, bool) => {
    if (bool) {
        x.innerHTML = `
        <div class="project-click">
            <div class="project-description" id="book-des">
            Google Books API search engine that allows users to save book searches to the back end.   
            </div>
            <div class="project-buttons">
                <a href="https://github.com/cartaud/bookSearchEngine" class="gitLink" target="_blank">GitHub</a>
                <a href="https://book-search-engine-x.herokuapp.com/" class="deployedLink" target="_blank">Deployed</a>
            </div>
        </div>
        `
    } else {
        x.innerHTML = `
        <img src="./assets/images/bookSearch.png"  alt="Book Search" class="projectPreview">
        <div class="project-title">
            <h5>Book Search</h5>
            <h6>GraphQL</h6>
        </div>
        `
    }
}

const portfolIOClick = (x, bool) => {
    if (bool) {
        x.innerHTML = `
        <div class="project-click">
            <div class="project-description" id="io-des">
            Application that allows a user to create modernized and responsive portfolio templates. Mobile viewing is 
            not yet supported.  
            </div>
            <div class="project-buttons">
                <a href="https://github.com/cartaud/Portfol.io" class="gitLink" target="_blank">GitHub</a>
                <a href="https://aqueous-spire-68906.herokuapp.com/" class="deployedLink" target="_blank">Deployed</a>
            </div>
        </div>
        `
    } else {
        x.innerHTML = `
        <img src="./assets/images/portfolIOPreview.png"  alt="Portfolio Generator" class="projectPreview">
        <div class="project-title">
            <h5>Portfol.IO</h5>
            <h6>MERN</h6>
        </div>
        `
    }
}

const thoughtClick = (x, bool) => {
    if (bool) {
        x.innerHTML = `
        <div class="project-click">
            <div class="project-description" id="thought-des">
            Application where users can post thoughts and images. This application utilizes tools from Amazon Web Services 
            such as DynamoDB (database), S3 Bucket (image storage), and EC2 (instance).
            </div>
            <div class="project-buttons">
                <a href="https://github.com/cartaud/aws-thought" class="gitLink" target="_blank">GitHub (private)</a>
                <a href="http://3.15.234.21/" class="deployedLink" target="_blank">Deployed</a>
            </div>
        </div>
        `
    } else {
        x.innerHTML = `
        <img src="./assets/images/thought.png"  alt="Deep Thoughts" class="projectPreview">
        <div class="project-title">
            <h5>Deep Thoughts</h5>
            <h6>AWS</h6>
        </div>
        `
    }
}

const ecomClick = (x, bool) => {
    if (bool) {
        x.innerHTML = `
        <div class="project-click">
            <div class="project-description" id="ecom-des">
            The back end for an e-commerce site. For a demonstration on how it works, click on the Demo button below.
            </div>
            <div class="project-buttons">
                <a href="https://github.com/cartaud/E-CommerceBackEnd" class="gitLink" target="_blank">GitHub</a>
                <a href="https://drive.google.com/file/d/1Q-SiV-bwHzu4gs3of6QgcFHbizdkEDLa/view?usp=sharing" class="deployedLink" target="_blank">Demo</a>
            </div>
        </div>
        `
    } else {
        x.innerHTML = `
            <img src="./assets/images/eCom.png"  alt="E-Commerce" class="projectPreview">
            <div class="project-title">
                <h5>E-Commerce</h5>
                <h6>ORM</h6>
            </div>
        `
    }
}

const etchClick = (x, bool) => {
    if (bool) {
        x.innerHTML = `
        <div class="project-click">
            <div class="project-description" id="etch-des">
            Draw whatever you want using the custom color pallet or go crazy with rainbow mode. Mouse required.
            </div>
            <div class="project-buttons">
                <a href="https://github.com/cartaud/etch-a-sketch" class="gitLink" target="_blank">GitHub</a>
                <a href="https://cartaud.github.io/etch-a-sketch/" class="deployedLink" target="_blank">Deployed</a>
            </div>
        </div>
        `
    } else {
        x.innerHTML = `
            <img src="./assets/images/etch.png"  alt="Etch-A-Sketch" class="projectPreview">
            <div class="project-title">
                <h5>Etch-A-Sketch</h5>
                <h6>Javascript</h6>
            </div>
            </a>
        `
    }
}


const closeProject = (x) => {
    if (x.srcElement.id === "tech-des") {
        techClick(document.querySelector('#tech-container'), false)    }
    if (x.srcElement.id === "book-des") {
        bookClick(document.querySelector('#book-container'), false)
    } 
    if (x.srcElement.id === "io-des") {
        portfolIOClick(document.querySelector('#io-container'), false)
    }
    if (x.srcElement.id === "thought-des") {
        thoughtClick(document.querySelector('#thought-container'), false)
    }
    if (x.srcElement.id === "ecom-des") {
        ecomClick(document.querySelector('#ecom-container'), false)
    }
    if (x.srcElement.id === "etch-des") {
        etchClick(document.querySelector('#etch-container'), false)
    }
}            



showAbout()

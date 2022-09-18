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
        <img src="./assets/images/profile.png" alt="">
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
            When I first started learning software development, I was a self learner for 6 months. Once I had a firm grasp of 
            the basics, I decided to take the next step and sign up for a full stack software development bootcamp through University of California, 
            San Diego Extension program. My goal for myself is to be working as a software engineer by the end of this year
            where I can continuously learn and improve my software engineering skills.
        </p>
    </div>
</div>
`
//on click of image, send a new template but with image replaced with options
//to github or deployed
const projectTemplate = `
<header>
    <h1 class="orange">MY PROJECTS</h1>
    <h2>CLICK ON THE PROJECT TO VIEW</h2>
</header>
<div id="projects">
    <div class="projects-row">
        <div class="project-container" onclick="portfolIOClick(this, true)" id="io-container">
            <img src="./assets/images/portfolIOPreview.png"  alt="Portfolio Generator" class="projectPreview">
            <div class="project-title">
                <h5>Portfol.IO</h5>
                <h6>MERN</h6>
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
        <div class="project-container" onclick="noteClick(this, true)" id="note-container">
            <img src="./assets/images/noteTaker.png"  alt="Note Taker" class="projectPreview">
            <div class="project-title">
                <h5>Note Taker</h5>
                <h6>Express.JS</h6>
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
    <a href="https://drive.google.com/file/d/1Udy_tTqkliDoq768v7BR0G15tw3QaHBA/view?usp=sharing" target="_blank">
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
            Application that allows a user to create modernized and responsive portfolio templates.  
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

const noteClick = (x, bool) => {
    if (bool) {
        x.innerHTML = `
        <div class="project-click">
            <div class="project-description" id="note-des">
            Note taker that can be used to write and save notes. This application uses an Express.js back end 
            and saves and retrieve note data from a JSON file.
            </div>
            <div class="project-buttons">
                <a href="https://github.com/cartaud/expressNoteTaker" class="gitLink" target="_blank">GitHub</a>
                <a href="https://aqueous-spire-68906.herokuapp.com/" class="deployedLink" target="_blank">Deployed</a>
            </div>
        </div>
        `
    } else {
        x.innerHTML = `
        <img src="./assets/images/noteTaker.png"  alt="Note Taker" class="projectPreview">
        <div class="project-title">
            <h5>Note Taker</h5>
            <h6>Express.JS</h6>
        </div>
        `
    }
}

const ecomClick = (x, bool) => {
    if (bool) {
        x.innerHTML = `
        <div class="project-click">
            <div class="project-description" id="ecom-des">
            The back end for an e-commerce site.
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
            Draw whatever you want using a custom color pallet or go crazy with rainbow mode.
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
    if (x.srcElement.id === "note-des") {
        noteClick(document.querySelector('#note-container'), false)
    }
    if (x.srcElement.id === "ecom-des") {
        ecomClick(document.querySelector('#ecom-container'), false)
    }
    if (x.srcElement.id === "etch-des") {
        etchClick(document.querySelector('#etch-container'), false)
    }
}            



showAbout()

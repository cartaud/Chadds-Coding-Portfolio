const content = document.querySelector('#right-container');
const about = document.querySelector('#about-link');
const project = document.querySelector('#projects-link');
const contact = document.querySelector('#contact-link');
const resume = document.querySelector('#resume-link');

const showAbout = () => {
    project.classList.remove('orange');
    contact.classList.remove('orange');
    resume.classList.remove('orange');
    about.classList.add('orange');
    content.innerHTML = aboutTemplate;
};

const showProjects = () => {
    about.classList.remove('orange');
    contact.classList.remove('orange');
    resume.classList.remove('orange');
    project.classList.add('orange');
    content.innerHTML = projectTemplate;
};

const showContact = () => {
    about.classList.remove('orange');
    project.classList.remove('orange');
    resume.classList.remove('orange');
    contact.classList.add('orange');
    content.innerHTML = contactTemplate;
};

const showResume = () => {
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
            My name is Chadd Artaud and I was born and raised in San Diego, California. I am a 24 year old
            who is beginning his journey into software engineering. My first experience with coding was as an 
            undergraduate at the University of Nevada, Reno where I earned my Bachelors of Science in Mechanical 
            Engineering. I enjoy solving challenging problems as there is no better feeling than solving 
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

const projectTemplate = `
<header>
    <h1 class="orange">MY PROJECTS</h1>
    <h2>CLICK ON THE PROJECT TO VIEW</h2>
</header>
<div id="projects">
    <div>
        <div class="project-container">
            <a href="https://github.com/cartaud/mvcTechBlog" target="_blank">
            <img src="./assets/images/techBlog.png"  alt="Tech Blog">
            <div class="project-title">
                <h5>Tech Blog</h5>
                <h6>MVC</h6>
            </div>
            </a>
        </div>
        <div class="project-container">
            <a href="https://github.com/cartaud/E-CommerceBackEnd" target="_blank">
            <img src="./assets/images/eCom.png"  alt="E-Commerce">
            <div class="project-title">
                <h5>E-Commerce</h5>
                <h6>ORM</h6>
            </div>
            </a>
        </div>
        <div class="project-container">
            <a href="https://github.com/cartaud/expressNoteTaker" target="_blank">
            <img src="./assets/images/noteTaker.png"  alt="Note Taker">
            <div class="project-title">
                <h5>Note Taker</h5>
                <h6>Express.JS</h6>
            </div>
        </div>
    </div>

    <div>
        <div class="project-container">
            <a href="https://github.com/cartaud/employeeTracker" target="_blank">
            <img src="./assets/images/employeeTracker.png"  alt="Employee Tracker">
            <div class="project-title">
                <h5>Employee Tracker</h5>
                <h6>SQL</h6>
            </div>
            </a>
        </div>
        <div class="project-container">
            <a href="https://cartaud.github.io/etch-a-sketch/" target="_blank">
            <img src="./assets/images/etch.png"  alt="Etch-A-Sketch">
            <div class="project-title">
                <h5>Etch-A-Sketch</h5>
                <h6>Javascript</h6>
            </div>
            </a>
        </div>
        <div class="project-container">
            <a href="https://github.com/cartaud/vinylMusicShop" target="_blank">
            <img src="./assets/images/musicStore.png"  alt="Music Store">
            <div class="project-title">
                <h5>Music Store</h5>
                <h6>Fullstack</h6>
            </div>
            </a>
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
    <a href="./assets/codingResume.pdf" target="_blank">
        <img src="./assets/images/resumePreview.png" alt="Resume">
    </a>
</div>
`
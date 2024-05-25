document.querySelector('#skills-button').addEventListener('click', checkSkills)
document.querySelector('#interests-button').addEventListener('click', checkInterests)
document.querySelector('#experience-button').addEventListener('click', checkExperience)



let skillsCopy = `JavaScript, Typescript, HTML/CSS/SASS, React.js, Angular, WebGL, Three.js, Canvas, Storybook, Gatsby
Node.js, Python, Java, C#, PHP, Shell
GraphQL, MongoDB, JSON, SQL
Docker, NPM/Yarn, Webpack, Jenkins, Git 
AWS, Google Cloud, Microsoft Azure 
Agile/Sprint, Jira, Figma, Photoshop, Illustrator, Blender, SEO, Google Analytics, CMS/WordPress`

let interestsCopy = `I've been a Software Engineer since doing a General Assembly Bootcamp in 2017. Technologically, I'm into WebGL, applied uses of AI, accessibility engineering, and the intersection of technology and marketing. A lot of my early work was in enabling others to do their work more efficiently, and I still am interested in how technology can enable us to live more simple lives. My recent work has touched marketing increasingly—I've been realizing how a good product can drive great technical work. And I've been enjoying playing with AI tools and looking for novel applications of them.

Outside of engineering, I'm interested in luxury brands, philosophy, theology, medieval history, and modern trends. I like the social side of gaming. I like reading deep books and thinking big thoughts.`

let greetingCopy = "hello. I'm Kevin."
let catchCopy = "I'm a well-seasoned Full-Stack Engineer with experience in complex web apps. I’ve been a mentor, a team-builder, and a leader—I try to delegate the work that needs to be delegated while keeping a close eye on everything in my domain. My latest focuses are on everything Typescript / React as well as growing in my understanding of accessibility best-practices."
let catchID = '#landing-text'
let greetingID = '#hello'
let infoID = '#information'
let infoCopy = "What would you like to learn about me?"
let aboutMeSections = [greetingID, catchID, infoID]
let aboutMeCopy = [greetingCopy, catchCopy, infoCopy]

setCardSize(aboutMeSections, aboutMeCopy)
setTimeout(function() {
    addText("#hello", "hello. I'm Kevin.", 500, 60)
}, 600)
setTimeout(function() {
    addText(catchID, catchCopy)
}, 1500)
setTimeout(function() {
    addText(infoID, infoCopy)
}, 6500)

let buttons = document.querySelectorAll('.navigation-button')
setTimeout(function() {
    buttons.forEach(button => {
        button.classList.remove('invisible')
    })
}, 7000)

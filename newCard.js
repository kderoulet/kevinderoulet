let cards = document.querySelectorAll('.card-wrapper.invisible')

function newCard(title, titleID, content, contentID) {
    let card = cards.item(0)
    card.classList.remove('invisible')
    cards = document.querySelectorAll('.card-wrapper.invisible')
    scrollToElement(card)

    card.querySelector('h1').setAttribute('id', titleID)
    card.querySelector('p').setAttribute('id', contentID)
    let sections = [titleID, contentID]
    let contents = [title, content]
    setCardSize(sections, contents)
    setTimeout(function() {
        addText(titleID, title)
    }, 400)
    setTimeout(function() {
        addText(contentID, content)
    }, 800)
}

function checkSkills() {
    let skillsElement = document.querySelector('#skills')
    if (skillsElement) {
        scrollToElement(skillsElement.parentElement)
    } else {
        newCard('Skills', 'skills', skillsCopy, 'skills-content')
    }
}
function checkInterests() {
    let interestsElement = document.querySelector('#interests')
    if (interestsElement) {
        scrollToElement(interestsElement.parentElement)
    } else {
        newCard('Interests', 'interests', interestsCopy, 'interests-content')
    }
}
function checkExperience() {
    let experienceElement = document.querySelector('#experience')
    if (experienceElement) {
        scrollToElement(experienceElement.parentElement)
    } else {
        newCard('Experience', 'experience', '', 'experience-content')
        document.querySelector('#experience-content').remove() 
        experienceElement = document.querySelector('#experience')
        let tabWrapper = experienceElement.parentElement.appendChild(document.createElement("div"))
        tabWrapper.classList.add('tab-wrapper')
        tabWrapper.innerHTML= `
        
        <div class="tab">
            <button class="tab-link active" onclick="openTab(event, 'Tab1')">AKQA</button>
            <button class="tab-link" onclick="openTab(event, 'Tab2')">NIS America</button>
            <button class="tab-link" onclick="openTab(event, 'Tab3')">Oakland Athletics</button>
            <button class="tab-link" onclick="openTab(event, 'Tab4')">Grocery Outlet</button>
        </div>
        
        <div id="Tab1" class="tab-content">
            <h3 class="job-description-title">Senior Frontend Engineer</h3>
            <span class="job-description-time-active">June 2021 – present</span>
            <ul class="job-description-bullets">
                <li>Technologies: Typescript / React / JS / CSS / SASS / HTML frontend, Storybook, Gatsby, Git, Docker, NPM, Yarn, Webpack, Jenkins</li>
                <li>Workflow: Agile / Sprint, Jira (and internal ticket management tool), Figma, Photoshop</li>
            </ul>
            <p>
                As a Senior Software Engineer for a AKQA, I've supported a Sunnyvale Tech Giant, where I've played a key role in enhancing and supporting web apps and components within the Web Frameworks team. I’ve learned and grown continuously in this role, particularly in testing and deployment; I've closely collaborated with the Tech Giant's engineers to glean insights into their approach to stability and scalability. In addition to my core responsibilities, I've mentored the engineers on my team, facilitated engineering training, and held the team to the highest code standards. Most of my code contributions have been in the form of executing pixel-perfect, accessible UIs, building components utilized in Marketing and E-commerce pages throughout the Tech Giant's customer-facing and internal pages. I also briefly contracted with AKQA prior to 06/21 to do React work for IBM/Redhat.
            </p>
        </div>
        
        <div id="Tab2" class="tab-content">
            <h3 class="job-description-title">Senior Full-Stack Engineer [Contract]</h3>
            <span class="job-description-time-active">January 2021 – June 2021</span>
            <ul class="job-description-bullets">
                <li>Technologies: React / JS / CSS / HTML frontend, Node / PHP / Python backends, WebGL for 3d in browser, Canvas for 2d in browser, Apache, Google Cloud, Git, NPM, Webpack</li>
                <li>Workflow: Agile / Sprint, Jira, Photoshop, Illustrator, Blender</li>
            </ul>
            <p>
                I contracted with NIS America to enhance their technological offerings by building websites and reusable components for game-release marketing pages and their flagship NGPX conference. By developing component libraries and reusable APIs, I improved their development lifecycle. And using Google Analytics, I was able to bring improvements to the technical team, particularly improving their utilization of SEO and getting their CMS up-to-speed. My role involved analyzing, designing, developing, deploying, and maintaining web application components in a modern architecture based on React.js and Node.js, and moving the team toward a Google Cloud infrastructure. I had the opportunity to grow in my use of creative technologies like WebGL and Canvas for in-browser graphics. Finally, this was a great opportunity to mentor other developers, and was a great experience leading a small dev team.
            </p>
        </div>
        
        <div id="Tab3" class="tab-content">
            <h3 class="job-description-title">Full-Stack Engineer</h3>
            <span class="job-description-time-active">January 2019 – March 2020</span>
            <ul class="job-description-bullets">
                <li>Technologies: React / JS / CSS / HTML frontend, Node / Python / Java backends, Python / Shell scripting, Google Cloud for storage (Datastore) and server-less APIs + BigQuery, Git, SQL</li>
                <li>Workflow: Agile / Sprint, Jira, NPM, Yarn, Webpack</li>
            </ul>
            <p>
                As the lead engineer on the A’s Tech Innovation team, I architected and executed solutions to business needs. The apps I built were React- or JS-based on the front end, and used Node.js and Python along with Google Cloud’s infrastructure to power their data-heavy back-ends. I also split time on the Baseball Operations side of the Athletics, where I leveraged my Google Cloud knowledge to securely move our applications and data processes to the cloud. 
            </p>
        </div>
        <div id="Tab4" class="tab-content">
            <h3 class="job-description-title">Full-Stack Engineer</h3>
            <span class="job-description-time-active">April 2018 – January 2019</span>
            <ul class="job-description-bullets">
                <li>Technologies: Angular / JS / CSS / HTML frontend, C# backend, Microsoft Azure, Git</li>
                <li>Workflow: Agile / Sprint, Jira / ServiceNow, NPM, Webpack</li>
            </ul>
            <p>
                At Grocery Outlet, I worked largely on internal sites, executing designers’ vision and adding features to streamline company processes. I built and maintained the internal ordering site as well as the corresponding C# backend for communication with the inventory database. I was also responsible for integrations with ServiceNow and PagerDuty.
            </p>
        </div>`
        tabWrapper.querySelector(".tab-link").click()
    }
}

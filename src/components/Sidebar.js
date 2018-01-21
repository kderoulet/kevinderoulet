import React from 'react'

const Sidebar = () => {
    return(
        <div className="container col-sm-4" id="sidebar">
            <div className="fixed">
                <img src={"../assets/box.jpg"}/>
                <h3>Kevin de Roulet</h3>
                <p>Full-Stack Web Developer</p>
                <p className="about">
                    I'm a Web Developer working in React, Node.js, Express.js, MongoDB, JavaScript, Ruby on Rails, CSS, and HTML.
                    <br/>
                </p>
                <p className="about light-text">
                    <i className="fa fa-file-text" aria-hidden="true"></i> <a href="./assets/Resume-Kevin-de-Roulet.pdf" target="blank">My Resume</a>
                    <br/>
                    <i className="fa fa-github-square" aria-hidden="true"></i> <a href="https://github.com/kderoulet" target="blank">Github</a>
                    <br/>
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i> <a href="https://linkedin.com/in/kevinderoulet" target="blank">LinkedIn</a>
                    <br/>
                    <i className="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:kevinderoulet@gmail.com">kevinderoulet@gmail.com</a>
                    <br/><br/>
                </p>
            </div>
        </div>
    )
}

export default Sidebar
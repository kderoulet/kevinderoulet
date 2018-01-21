import React from 'react'
import box from '../assets/box.jpg'
import './Sidebar.css'

const Sidebar = () => {
    return(
        <div className="sidebar container-fluid">
            <div className="content">
                <img src={box} alt="profile" className="profileImage"/>
                <h3>Kevin de Roulet</h3>
                <p>Full-Stack Web Developer</p>
                <p className="about">
                    I'm a Web Developer working in React, Node.js, Express.js, MongoDB, JavaScript, Ruby on Rails, CSS, and HTML.
                    <br/>
                </p>
                <p className="about">
                    <i className="fa fa-file-text"></i> <a href="/src/assets/Resume-Kevin-de-Roulet.pdf" target="blank">My Resume</a>
                    <br/>
                    <i className="fa fa-github-square"></i> <a href="https://github.com/kderoulet" target="blank">Github</a>
                    <br/>
                    <i className="fa fa-linkedin-square"></i> <a href="https://linkedin.com/in/kevinderoulet" target="blank">LinkedIn</a>
                    <br/>
                    <i className="fa fa-envelope"></i> <a href="mailto:kevinderoulet@gmail.com">kevinderoulet@gmail.com</a>
                    <br/><br/>
                </p>
            </div>
        </div>
    )
}

export default Sidebar
import React from 'react'
import box from '../assets/box.jpg'
import './Sidebar.css'

const Sidebar = () => {
    return(
        <div className="sidebar container-fluid">
            <div className="content">
                <img src={box} alt="profile" className="profileImage"/>
                <h3>Kevin de Roulet</h3>
                <p><span style={{color: "#777777"}}>Full-Stack Web Developer</span></p>
                <p className="about" style={{borderBottom: "1px solid #777777", borderTop: "1px solid #777777"}}>
                    I work in React, Angular, Node, Express, MongoDB, JavaScript, Ruby on Rails, CSS, and HTML.
                </p>
                <p className="about">
                    <br/>
                    <i style={{color: "#777777"}}className="fa fa-github-square"></i> <a href="https://github.com/kderoulet" target="_blank" rel="noopener noreferrer">Github</a>
                    <br/>
                    <i style={{color: "#777777"}}className="fa fa-linkedin-square"></i> <a href="https://linkedin.com/in/kevinderoulet" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <br/>
                    <i style={{color: "#777777"}}className="fa fa-envelope"></i> <a href="mailto:kevinderoulet@gmail.com">kevinderoulet@gmail.com</a>
                    <br/><br/>
                </p>
            </div>
        </div>
    )
}

export default Sidebar
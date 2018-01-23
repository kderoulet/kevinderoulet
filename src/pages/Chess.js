import React from 'react'
import { Link } from 'react-router-dom'
import chess from '../assets/chess.png'

const Chess = () => {
    return(
        <div className='transition-item container'>
            <Link to='/portfolio'>Back to Portfolio</Link><br/><br/>
            <h2>React Chess</h2>
            <Link to='/portfolio'><img className='img-fluid' src={chess} alt='chess project' style={{maxWidth: 500}}></img></Link>
                <p>Built with: React.js, Node.js, Express.js, MongoDB, Socket.io</p>
                <p>React Chess: a full-stack React app with no imported chess libraries. Allows local play against a friend or matched online play.</p>
                <p>This is the capstone project of my General Assembly bootcamp, built over a 7-day sprint. In this project I implemented the full game logic of chess, JSON web tokens for authentication and authorization, and Socket.io for real-time matches played online.</p>
                <p><a href='https://chessforreact.herokuapp.com/' target='_blank' rel='noopener noreferrer'>Check Out the App</a></p>
                <p><a href='https://github.com/kderoulet/react-chess' target='_blank' rel='noopener noreferrer'>Check Out the Github</a></p>
        </div>
    )
}
export default Chess
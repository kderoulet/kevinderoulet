import React from 'react'
import ryde from '../assets/ryde.png'
import { Link } from 'react-router-dom'


const Ryde = () => {
    return(
        <div className='transition-item container'>
            <Link to='/portfolio'>Back to Portfolio</Link><br/><br/>
            <h2>Ryde</h2>
            <Link to='/portfolio'><img className='img-fluid' src={ryde} alt='ryde project' style={{maxWidth: 500}}></img></Link>
            <br/><br/>
                <p>Built with: Ruby on Rails, Active Record, Bootstrap, HTML</p>
                <p>Ryde: A ride-sharing app for the upcoming space travel economy built over a 7-day sprint with Ruby on Rails.</p>
                <p>I designed this project mobile-first, and I kept the number of views to a minimum, providing as much functionality as possible without constant page changes.</p>
                <br/>
                <p><a style={{backgroundColor: "#2687FB", color: "#FFFFFF", padding: 20, borderRadius: "5%"}}href='https://ancient-meadow-38445.herokuapp.com/' target='_blank' rel='noopener noreferrer'>Check Out the App</a> &nbsp;&nbsp;&nbsp;&nbsp;
                <a style={{backgroundColor: "#2687FB", color: "#FFFFFF", padding: 20, borderRadius: "5%"}}href='https://github.com/kderoulet/ryde_app' target='_blank' rel='noopener noreferrer'>Check Out the Github</a></p>
        </div>
    )
}
export default Ryde
import React from 'react'
import wtpa from '../assets/WTPA.png'
import { Link } from 'react-router-dom'

const WTPA = () => {
    return(
        <div className='container'>
            <Link to='/portfolio'>Back to Portfolio</Link><br/><br/>
            <h2>WTPA</h2>
            <Link to='/portfolio'><img className='img-fluid' src={wtpa} alt='WTPA project' style={{maxWidth: 500}}></img></Link>
            <br/><br/>
                <p>Built with: JavaScript, Node.js, Express.js, and MongoDB</p>
                <p>Where the Party App: A night-out event planning app built over a 7-day sprint.</p>
                <br/>
                <p>This was a group project in which I was the coding lead. I successfully implemented authorization features, API calls through the Yelp Fusion API, and all of the itinerary-building logic.</p>
                <br/>
                <p><a style={{backgroundColor: "#2687FB", color: "#FFFFFF", padding: 20, borderRadius: "5%"}}href='https://wtpa.herokuapp.com/' target='_blank' rel='noopener noreferrer'>Check Out the App</a> &nbsp; &nbsp; &nbsp; &nbsp;
                <a style={{backgroundColor: "#2687FB", color: "#FFFFFF", padding: 20, borderRadius: "5%"}}href='https://github.com/kderoulet/WTPA' target='_blank' rel='noopener noreferrer'>Check Out the Github</a></p>
        </div>
    )
}
export default WTPA
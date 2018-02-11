import React from 'react'
import solitaire from '../assets/solitaire.png'
import {Link} from 'react-router-dom'

const Solitaire = () => {
    return(
        <div className='transition-item container'>
            <Link to='/portfolio'>Back to Portfolio</Link><br/><br/>
            <h2>Solitaire</h2>
            <Link to='/portfolio'><img className='img-fluid' src={solitaire} alt='solitaire project' style={{maxWidth: 500}}></img></Link>
                <br/><br/>
                <p>Built with: JavaScript, jQuery, CSS, HTML</p>
                <p>Solitaire: the classic solitaire game built out as a JavaScript web-app.</p>
                <p>In this project, I wrote and implemented all of solitaire's game logic, using vanilla JavaScript as well as jQuery. This app was designed mobile-first, running just as smoothly on a smart phone as on a desktop.</p>
                <br/>
                <p><a style={{backgroundColor: "#2687FB", color: "#FFFFFF", padding: 20, borderRadius: "5%"}} href='https://kderoulet.github.io/solitaire/' target='_blank' rel='noopener noreferrer'>Check Out the App</a> &nbsp; &nbsp; &nbsp; &nbsp;
                <a style={{backgroundColor: "#2687FB", color: "#FFFFFF", padding: 20, borderRadius: "5%"}} href='https://github.com/kderoulet/solitaire' target='_blank' rel='noopener noreferrer'>Check Out the Github</a></p>
        </div>
    )
}
export default Solitaire
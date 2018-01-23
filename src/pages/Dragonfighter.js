import React from 'react'
import dragonfighter from '../assets/dragonfighter.png'
import {Link} from 'react-router-dom'

const Dragonfighter = () => {
    return(
        <div className='transition-item container'>
            <Link to='/portfolio'>Back to Portfolio</Link><br/><br/>
            <h2>Dragonfighter</h2>
            <Link to='/portfolio'><img className='img-fluid' src={dragonfighter} alt='dragonfighter project' style={{maxWidth: 500}}></img></Link>
                <p>Built with: JavaScript, jQuery, CSS, HTML</p>
                <p>Dragonfighter: a just-for-fun text-based adventure built with Javascript.</p>
                <p>I designed this as a Single-Page Application (SPA) in the spirit of many react apps. The game therefore functions totally without new page requests once the initial page is loaded.</p>
                <p><a href='https://kderoulet.github.io/dragonfighter/' target='_blank' rel='noopener noreferrer'>Check Out the App</a></p>
                <p><a href='https://github.com/kderoulet/dragonfighter' target='_blank' rel='noopener noreferrer'>Check Out the Github</a></p>
        </div>
    )
}
export default Dragonfighter
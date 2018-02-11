import React from 'react'
import {Link} from 'react-router-dom'
import chess from '../assets/chess.png'
import dragonfighter from '../assets/dragonfighter.png'
import ryde from '../assets/ryde.png'
import solitaire from '../assets/solitaire.png'
import WTPA from '../assets/WTPA.png'
import './Portfolio.css'

const Portfolio = () => {
    return(
        <div className="container portfolio">
                    <br/>
                <div className="project">
                    <h1>Portfolio</h1>
                    <Link to='/chess'><img className="img-fluid" src={chess} alt="Chess Project"/></Link>
                    React Chess | <a href="https://chessforreact.herokuapp.com/" rel="noopener noreferrer" target="_blank">Demo</a> | <a href="https://github.com/kderoulet/react-chess" className="link" rel="noopener noreferrer" target="_blank">Github</a>                  
                </div>
                <div className="project">
                    <Link to='/wtpa'><img className="img-fluid" src={WTPA} alt="WTPA Project"/></Link>
                    Where the Party App | <a href="https://wtpa.herokuapp.com/"rel="noopener noreferrer" target="_blank">Demo</a> | <a href="https://github.com/kderoulet/WTPA" rel="noopener noreferrer" target="_blank">Github</a>                  
                </div>
                <div className="project">
                    <Link to='/ryde'><img className="img-fluid" src={ryde} alt="Ryde Project"/></Link>                            
                    Ryde App | <a href="https://ancient-meadow-38445.herokuapp.com/"rel="noopener noreferrer" target="_blank">Demo</a> | <a href="https://github.com/kderoulet/ryde_app" rel="noopener noreferrer" target="_blank">Github</a>                  
                </div>
                <div className="project">
                    <Link to='/dragonfighter' ><img className="img-fluid" src={dragonfighter} alt="Dragonfighter Project"/></Link>                         
                    Dragonfighter App | <a href="https://kderoulet.github.io/dragonfighter/">Demo</a> | <a href="https://github.com/kderoulet/dragonfighter" rel="noopener noreferrer" target="_blank">Github</a>                  
                </div>
                <div className="project">
                    <Link to='/solitaire' ><img className="img-fluid" src={solitaire} alt="Solitaire Project"/></Link>                            
                    Solitaire App | <a href="https://kderoulet.github.io/solitaire/">Demo</a> | <a href="https://github.com/kderoulet/solitaire" rel="noopener noreferrer" target="_blank">Github</a>                  
                </div>
        </div>
    )
}
export default Portfolio
import React from 'react'
// import {Link} from 'react-router-dom'
import chess from '../assets/chess.png'
import dragonfighter from '../assets/dragonfighter.png'
import ryde from '../assets/ryde.png'
import solitaire from '../assets/solitaire.png'
import WTPA from '../assets/WTPA.png'
import './Portfolio.css'

const Portfolio = () => {
    return(
        <div class="container portfolio">
            <div>
                <div>
                    <br/>
                </div>
                <div class="project">
                    <h3>Portfolio</h3>
                    <img class="img-fluid" src={chess} alt="Chess Project"/>
                    React Chess | <a href="https://chessforreact.herokuapp.com/" rel="noopener noreferrer" target="_blank">Demo</a> | <a href="https://github.com/kderoulet/react-chess" class="link" rel="noopener noreferrer" target="_blank">Github</a>                  
                </div>
                <div class="project">
                    <img class="img-fluid" src={WTPA} alt="WTPA Project"/>
                    Where the Party App | <a href="https://wtpa.herokuapp.com/"rel="noopener noreferrer" target="_blank">Demo</a> | <a href="https://github.com/kderoulet/WTPA" rel="noopener noreferrer" target="_blank">Github</a>                  
                </div>
                <div class="project">
                    <a ><img class="img-fluid" src={ryde} alt="Ryde Project"/></a>                            
                    RYDE App | <a href="https://ancient-meadow-38445.herokuapp.com/"rel="noopener noreferrer" target="_blank">Demo</a> | <a href="https://github.com/kderoulet/ryde_app" rel="noopener noreferrer" target="_blank">Github</a>                  
                </div>
                <div class="project">
                    <a ><img class="img-fluid" src={dragonfighter} alt="Dragonfighter Project"/></a>                         
                    Dragonfighter App | <a href="https://kderoulet.github.io/dragonfighter/">Demo</a> | <a href="https://github.com/kderoulet/dragonfighter" rel="noopener noreferrer" target="_blank">Github</a>                  
                </div>
                <div class="project">
                    <a ><img class="img-fluid" src={solitaire} alt="Solitaire Project"/></a>                            
                    Solitaire App | <a href="https://kderoulet.github.io/solitaire/">Demo</a> | <a href="https://github.com/kderoulet/solitaire" rel="noopener noreferrer" target="_blank">Github</a>                  
                </div>
            </div>
        </div>
    )
}
export default Portfolio
import React from 'react'
import { Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group' 
import './Welcome.css'


const Welcome = () => {
    return(
        <CSSTransitionGroup
            transitionName="welcome"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
        >
            <div className='container'>
                <h1 style={{backgroundColor: "#D5D5D5"}}><span style={{color: "#FE5E57"}}>We</span><span style={{color: "#FFBD2E"}}>lco</span><span style={{color: "#29C941"}}>me</span></h1>
                <br/>
                <Link to='/portfolio' style={{backgroundColor: "#29C941", margin: 30, padding: 20, borderRadius: "5%"}}>To My Portfolio!</Link><br/><br/>
            </div>
        </CSSTransitionGroup>
    )
}
export default Welcome
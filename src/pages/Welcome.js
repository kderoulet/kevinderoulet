import React from 'react'
import { Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group' 
import './Welcome.css'


const Welcome = () => {
    return(
            <div className='container page'>
                <CSSTransitionGroup
                    transitionName="welcome"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                    <h1 className="welcomeText">Welcome</h1>
                </CSSTransitionGroup>
                <CSSTransitionGroup
                    transitionName="p1"
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                <p style={{color: "#777777"}}>I'm Kevin de Roulet, a Full-Stack Web Developer. Before I discovered the joys of coding, I studied philosophy at the graduate level. Studying philosophy taught me to think critically about challenging subjects, and now I get to use those skills to tackle challenges in Web Development.</p>
                </CSSTransitionGroup>
                <CSSTransitionGroup
                    transitionName="p2"
                    transitionAppear={true}
                    transitionAppearTimeout={2000}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                <p style={{color: "#777777"}}>Currently, I'm working on a couple projects: a MERN-stack reading app, and a for-production React Native app (for iOS and Android). If you'd like to see some of my past projects, click below!</p>
                <br/>
                <div style={{textAlign: "center"}}>
                    <Link to='/portfolio' style={{backgroundColor: "#2687FB", color: "#FFFFFF", padding: 20, borderRadius: "5%"}}>To My Portfolio!</Link><br/><br/>
                </div>
                </CSSTransitionGroup>
            </div>
    )
}
export default Welcome
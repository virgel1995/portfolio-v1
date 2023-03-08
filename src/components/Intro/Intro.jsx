import React from 'react'
import './Intro.scss'


const Intro = () => {
    return (
        <div className="intro">
            <img id="avatar" src="assets/avatar.jpg" alt="placeholder" />
            <div className="intro__info">
                <div className="name">Virus24</div> 
                <div className="aka">Backend</div>
                <div className="nickname">Devloper</div>
                <div className="info">Person who love JavaScript Can work with Nodejs, Php take A Look at my portfolio  </div>
            </div>   
        </div>
    )
}

export default Intro

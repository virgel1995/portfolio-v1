import React from 'react'
import Intro from '../Intro/Intro'
import Social from '../Social/Social'
import Navbar from "../Navbar/Navbar"
import "./mainBG.scss"

const MainBG = () => {
    return (
			<div>
				<Navbar />
        <div className="mainbg" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/assets/background.jpg')`, minHeight: window.innerHeight}}>
            <Intro />
            <Social />
        </div>
			</div>
    )
}

export default MainBG

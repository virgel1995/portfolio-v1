

import "./Navbar.scss"

export default function Navbar(){

	return (
		<div>
		<div className="nav">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className="nav-title">
      Virus24
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
<img src= "/assets/avatar.jpg" className= "navHumberger" alt = "button"/>
    </label>
  </div>
  
  <div className="nav-links">
    <a href="//github.io/jo_geek" target="_blank" rel="noreferrer">Github</a>
    <a href="http://stackoverflow.com/users/4084003/" target="_blank" rel="noreferrer">Stackoverflow</a>
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank" rel="noreferrer">LinkedIn</a>
    <a href="https://codepen.io/jo_Geek/" target="_blank" rel="noreferrer">Codepen</a>
    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank" rel="noreferrer">JsFiddle</a>
  </div>
</div>
		</div>
	)
}
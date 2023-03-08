

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
    <a href="//github.io/virgel1995" target="_blank" rel="noreferrer">Github</a>
    <a href="http://stackoverflow.com" target="_blank" rel="noreferrer">Stackoverflow</a>

  </div>
</div>
		</div>
	)
}
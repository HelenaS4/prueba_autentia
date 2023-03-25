import { NavLink } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import './HeaderStyles.css'

const Header = () => {
    const auth = getAuth();

    return (
        <>
            <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	        <label htmlFor="menu-icon"></label>
  	        <nav className="nav"> 		
  		        <ul className="pt-5">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/expenses">Expenses</NavLink></li>
                    <li><NavLink to="/friends">Friends</NavLink></li>
                    <li><NavLink to="/balance">Balance</NavLink></li>
  		        </ul>
  	        </nav>
        </>
    )
}

export default Header
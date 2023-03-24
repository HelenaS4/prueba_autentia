import { NavLink } from 'react-router-dom'

import './HomeMenuStyles.css'

const HomeMenu = () => {
    return (
        <>
            <nav className="navMenu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Expenses">Gastos</NavLink>
                <NavLink to="/Friends">Amigos</NavLink>
                <NavLink to="/Balance">Balance</NavLink>
                <div className="dot"></div>
            </nav>
        </>
    )
}

export default HomeMenu
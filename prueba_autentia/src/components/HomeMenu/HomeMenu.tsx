import { getAuth, signOut } from 'firebase/auth'
import { NavLink } from 'react-router-dom'

import './HomeMenuStyles.css'

const HomeMenu = () => {
    const auth = getAuth();

    return (
        <>
            <div className='logout-div'>
                <button className='logout-button' onClick={() => signOut(auth)}><i className="gg-log-out"></i></button>
            </div>
            <nav className="navMenu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/expenses">Gastos</NavLink>
                <NavLink to="/friends">Amigos</NavLink>
                <NavLink to="/balance">Balance</NavLink>
                <div className="dot"></div>
            </nav>
        </>
    )
}

export default HomeMenu
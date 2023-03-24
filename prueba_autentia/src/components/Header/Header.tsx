import './HeaderStyles.css'

const Header = () => {
    return (
        <>
            <nav className="navMenu">
                <a href="#">Home</a>
                <a href="#">Gastos</a>
                <a href="#">Amigos</a>
                <a href="#">Balance</a>
                <div className="dot"></div>
            </nav>
        </>
    )
}

export default Header
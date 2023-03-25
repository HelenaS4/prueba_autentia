import { NavLink } from "react-router-dom"

const ErrorPage = () => {
    return(
        <>
            <h1>Oopsie! Something went wrong</h1>
            <br></br>
            <NavLink to="/" style={{ color: 'rgba(255, 255, 255, 0.87)' }}>
                <b style={{ fontSize: '250%' }}>Take me back! </b>
                
            </NavLink>
            <span style={{ fontSize: '250%' }}>&#128517;</span>
        </>
    )
}

export default ErrorPage
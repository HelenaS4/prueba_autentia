import { getAuth, signOut } from "firebase/auth";
import "./FooterStyle.css"

const Footer = () => {
    const auth = getAuth();

    return (
        <>
            <div className="footer">
                <button className="logout-button"  onClick={() => signOut(auth)}>Logout</button>
            </div>
        </>
    )
}

export default Footer
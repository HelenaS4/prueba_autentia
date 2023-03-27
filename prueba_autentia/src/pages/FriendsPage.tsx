import AuthRoute from "../components/Auth/AuthRoute"
import Footer from "../components/Footer/Footer"
import FriendTab from "../components/Friends/FriendTab"
import Header from "../components/Header/Header"

import "./PageStyle.css"

const FriendsPage = () => {
    return (
        <>
            <div className="container">
                <AuthRoute>
                    <Header/>
                    <FriendTab/>
                    <Footer/>
                </AuthRoute>
            </div>
        </>
    )
}

export default FriendsPage
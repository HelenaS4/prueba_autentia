import AuthRoute from "../components/Auth/AuthRoute"
import Footer from "../components/Footer/Footer"
import FriendTab from "../components/Friends/FriendTab"
import Header from "../components/Header/Header"

const FriendsPage = () => {
    return (
        <>
            <AuthRoute>
                <Header/>
                <FriendTab/>
                <Footer/>
            </AuthRoute>
        </>
    )
}

export default FriendsPage
import AuthRoute from "../components/Auth/AuthRoute"
import BalanceList from "../components/Balance/BalanceList"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

const BalancePage = () => {
    return (
        <>
            <AuthRoute>
                <Header/>
                <BalanceList/>
                <Footer/>
            </AuthRoute>
        </>
    )
}

export default BalancePage
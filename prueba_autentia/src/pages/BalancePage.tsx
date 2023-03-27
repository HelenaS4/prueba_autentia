import AuthRoute from "../components/Auth/AuthRoute"
import BalanceList from "../components/Balance/BalanceList"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

import "./PageStyle.css"

const BalancePage = () => {
    return (
        <>
            <AuthRoute>
                <div className="container">
                    <Header/>
                    <BalanceList/>
                    <Footer/>
                </div>
            </AuthRoute>
        </>
    )
}

export default BalancePage
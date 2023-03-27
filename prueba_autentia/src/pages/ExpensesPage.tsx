import AuthRoute from "../components/Auth/AuthRoute"
import ExpensesTab from "../components/Expenses/ExpensesTab"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

import "./PageStyle.css"


const ExpensesPage = () => {
    return (
        <>
            <div className="container">
                <AuthRoute>
                    <Header/>
                    <ExpensesTab/>
                    <Footer/>
                </AuthRoute>
                
            </div>
        </>
    )
}

export default ExpensesPage
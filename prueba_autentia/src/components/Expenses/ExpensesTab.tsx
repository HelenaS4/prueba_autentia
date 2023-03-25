import ExpensesList from "./ExpensesList"
import NewExpenseForm from "./NewExpenseForm"
import './ExpensesTab.css'

const ExpensesTab = () => {
    return (
        <>
            <div className="tabs">
                <div className="tab-2">
                    <label htmlFor="tab2-1">Expenses</label>
                    <input id="tab2-1" name="tabs-two" type="radio" defaultChecked={true}/>
                    <div>
                        <ExpensesList/>
                    </div>
                </div>
                <div className="tab-2">
                    <label htmlFor="tab2-2">New expense</label>
                    <input id="tab2-2" name="tabs-two" type="radio"/>
                    <div>
                        <NewExpenseForm/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpensesTab
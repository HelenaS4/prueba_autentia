import { useState } from 'react'
import './NewExpenseForm.css'

const session_user = JSON.parse(localStorage.getItem('user_data') || '{}');

const NewExpenseForm = () => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmitNewExpense = (e:any) => {
        e.preventDefault();
        let expenses = JSON.parse(localStorage.getItem('shared_expenses') || '{}');
        let last_expense = expenses.data[expenses.data.length - 1];
        let new_expense_id = last_expense.id + 1;

        let new_expense = {
            id: new_expense_id,
            payment_owner: {
                id: session_user.id,
                name: session_user.name
            },
            amount: amount,
            description: description,
            date: new Date()
        }

        expenses.data.push(new_expense);
        localStorage.setItem('shared_expenses', JSON.stringify(expenses));
        window.location.reload()
    }

    return (
        <>
            <h1>Add a new expense note</h1>
            <form id="expenseForm" onSubmit={handleSubmitNewExpense}>
                <input type="number" name="amount" className="expense-input" placeholder="Write the amount" 
                value={amount} onChange={e => setAmount(e.target.value)}/>
                <input type="text" name="description" className="expense-input" placeholder="Write the description" 
                value={description} onChange={e => setDescription(e.target.value)}/>
                <input type="submit" className="submit-button" value="Add an expense"/>
            </form>
        </>
    )
}

export default NewExpenseForm
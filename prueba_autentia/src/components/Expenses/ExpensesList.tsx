const shared_expenses = JSON.parse(localStorage.getItem('shared_expenses') || '{}');
const friends_group = JSON.parse(localStorage.getItem('friends_group') || '{}');
const session_user = JSON.parse(localStorage.getItem('user_data') || '{}');

const getFriendsGroupExpenses = (shared_expenses:any, friends_group:any, session_user:any) => {
    const friends_group_expenses:any = [];

    for (const expense of shared_expenses.data) {
        for (const friend of friends_group.data) {
            if (friend.id == expense.payment_owner.id) {
                friends_group_expenses.push(expense);
            }
        }
        if (session_user.id == expense.payment_owner.id) {
            friends_group_expenses.push(expense);
        }
    }

    return friends_group_expenses;
}

const convertToTime = (shared_expenses_date:string|Date) => {
    let now = new Date();
    let date = new Date(shared_expenses_date);

    let milliseconds = now.getTime() - date.getTime();

    let seconds = Math.floor(milliseconds / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + ' years ago';
    }

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + ' months ago';
    }

    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + ' days ago';
    }

    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + ' hours ago';
    }

    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + ' minutes ago';
    }

    if (seconds < 10 || interval <= 1) return 'Just now';
}

const ExpensesList = () => {
    
    const friends_group_expenses = getFriendsGroupExpenses(shared_expenses, friends_group, session_user);

    const sorted_shared_expenses = friends_group_expenses.sort((shared_expense_1: any, shared_expense_2: any) => {
        return (new Date(shared_expense_2.date)).getTime() - (new Date(shared_expense_1.date)).getTime()
    })

    return (
        <>
            <h1>Expenses</h1>

            <div className="container">
	            <table>
                    <thead>
                        <tr>
                            <th>Payment owner</th>
                            <th>Amount</th>
                            <th>Description</th>
                            <th>Payment date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sorted_shared_expenses.map((friends_group_expenses:any) => (
                            <tr key={friends_group_expenses.id}>
                                <td>{friends_group_expenses.payment_owner.name}</td>
                                <td>{friends_group_expenses.amount}</td>
                                <td>{friends_group_expenses.description}</td>
                                <td>{convertToTime(friends_group_expenses.date)}</td>
                            </tr>
                        ))}
                    </tbody>
	            </table>
            </div>
        </>
    )
}

export default ExpensesList
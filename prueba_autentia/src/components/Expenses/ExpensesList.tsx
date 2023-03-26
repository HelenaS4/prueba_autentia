const ExpensesList = () => {
    const shared_expenses = JSON.parse(localStorage.getItem('shared_expenses') || '{}');

    const convertToTime = (shared_expenses_date:string) => {
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
        
        if (seconds < 10) return 'Just now';

    }
    
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
                        {shared_expenses.data.map((shared_expense:any) => (
                            <tr key={shared_expense.id}> 
                                <td>{shared_expense.payment_owner.name}</td>
                                <td>{shared_expense.amount}</td>
                                <td>{shared_expense.description}</td>
                                <td>{convertToTime(shared_expense.date)}</td>
                            </tr>
                        ))}
                    </tbody>
	            </table>
            </div>
        </>
    )
}

export default ExpensesList
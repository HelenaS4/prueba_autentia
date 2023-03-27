const AddNewFriend = () => {
    const friends = JSON.parse(localStorage.getItem('friends') || '{}');

    return (
        <>
            <h1>Ugh people</h1>

            {friends.data.map((friend:any) => (
                <li key={friend.id}>{friend.name} <button>+</button></li>
            ))}
        </>
    )
}

export default AddNewFriend
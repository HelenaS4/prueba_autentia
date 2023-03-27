const AddNewFriend = () => {
    const friends = JSON.parse(localStorage.getItem('friends') || '{}');
    const friends_group = JSON.parse(localStorage.getItem('friends_group') || '{}')

    return (
        <>
            <h1>Ugh people</h1>

            {friends.data.map((friend:any) => (
                <li key={friend.id}>{friend.name} <button >+</button></li>
            ))}
        </>
    )
}

export default AddNewFriend
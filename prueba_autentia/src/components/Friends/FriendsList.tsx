const FriendsList = () => {
    const friends_group = JSON.parse(localStorage.getItem('friends_group') || '{}')

    return (
        <>
            <h1>Friends!</h1>
            <div className="container">
                <ul>
                    {friends_group.data.map((friend:any) => (
                        <li key={friend.id}>{friend.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default FriendsList
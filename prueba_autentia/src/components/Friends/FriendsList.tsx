const FriendsList = () => {
    const friends_group = JSON.parse(localStorage.getItem('friends_group') || '{}')

    return (
        <>
            <h1>Friends!</h1>
            <ul>
                {friends_group.data.map((friend:any) => (
                    <li key={friend.friend.id}>{friend.friend.name}</li>
                ))}
            </ul>
            
        </>
    )
}

export default FriendsList
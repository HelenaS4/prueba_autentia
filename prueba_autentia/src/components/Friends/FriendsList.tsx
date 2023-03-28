const FriendsList = () => {
    const friends_group = JSON.parse(localStorage.getItem('friends_group') || '{}')

    return (
        <>
            <h1>Friends!</h1>
            <div className="container">
                <ul>
                    {friends_group.data.map((friend:any) => (
                        <li key={friend.id} style={{marginTop: '20px'}}><span style={{fontSize: '30px'}}>{friend.name}</span></li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default FriendsList
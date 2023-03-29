import "./AddNewFriendStyle.css"

const AddNewFriend = () => {
    const friends = JSON.parse(localStorage.getItem('friends') || '{}');
    const friends_group = JSON.parse(localStorage.getItem('friends_group') || '{}');
    const session_user = JSON.parse(localStorage.getItem('user_data') || '{}');

    const loadPeople = () => {

        let people_without_me:any = [];
    
        for (const friend of friends.data) {
            if (friend.uuid != session_user.uuid) {
                people_without_me.push(friend)
            }
        }
    
        return people_without_me
    } 

    const addNewFriend = (friend:any) => {
        let friend_already_exists = friends_group.data.find((friend_group:any) => friend_group.id == friend.id);
            
        if (!friend_already_exists) {
            friends_group.data.push(friend);
            localStorage.setItem('friends_group', JSON.stringify(friends_group));
            window.location.reload();
        }
    }

    const people_without_me = loadPeople();

    console.log(people_without_me)

    return (
        <>
            <h1>Ugh people</h1>
            <ul>
                {people_without_me.map((friend:any) => (
                    <li key={friend.id} className="friend-item">
                        <span>{friend.name}</span>
                        <button className="plus-button" onClick={() => addNewFriend(friend)}>+</button>
                    </li>
                ))}
            </ul>
            
        </>
    )
    
}

export default AddNewFriend
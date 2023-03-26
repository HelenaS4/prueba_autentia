import AddNewFriend from "./AddNewFriend"
import CreateNewFriend from "./CreateNewFriend"
import FriendsList from "./FriendsList"
import './FriendTab.css'

const FriendTab = () => {
    return (
        <>
            <div className="tabs">
                <div className="tab-2">
                    <label htmlFor="tab2-1">Friends!</label>
                    <input id="tab2-1" name="tabs-two" type="radio" defaultChecked={true}/>
                    <div>
                        <FriendsList/>
                    </div>
                </div>
                <div className="tab-2">
                    <label htmlFor="tab2-2">Not friends... yet</label>
                    <input id="tab2-2" name="tabs-two" type="radio"/>
                    <div>
                        <AddNewFriend/>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default FriendTab
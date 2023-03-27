import { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import './FormSignInStyles.css'

import shared_expenses from '../../data/shared_expenses.json'
import friends from '../../data/friends.json'
import friends_group from '../../data/friend_group.json'

const FormSignIn = (props:any) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);

    const signInWithGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
        .then(response => {
            if (!localStorage.getItem('friends') && !localStorage.getItem('shared_expenses')) {
                localStorage.setItem('shared_expenses', JSON.stringify(shared_expenses));
                localStorage.setItem('friends', JSON.stringify(friends));
            }
            localStorage.setItem('friends_group', JSON.stringify(friends_group));

            let friends_data = JSON.parse(localStorage.getItem('friends') || '{}');
            let last_friend = friends_data.data[friends_data.data.length - 1];
            let new_id = last_friend.id + 1;

            const user_data = {
                id: new_id,
                name: response.user.displayName as string,
                uuid: response.user.uid
            }

            let user_uuid_exists = friends_data.data.find((friends:any) => friends.uuid == user_data.uuid);

            if (!user_uuid_exists) {
                friends_data.data.push(user_data);
                localStorage.setItem('friends', JSON.stringify(friends_data));
            }

            localStorage.setItem('user_data', JSON.stringify(user_data))
            navigate('/')
        }).catch(error => {
            console.log(error);
            setAuthing(false);
        })
    }

    return (
        <>
            <div className="container">
                <div className="left">
                    <div className="login">Login</div>
                    <div className="eula">By logging in you agree to the ridiculously long terms that you didn't bother to read</div>
                </div>
                <div className="right">
                    <div className="form">
                        <button className="button-64" role="button" onClick={() => signInWithGoogle()}>
                            <span className="text">Login!</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormSignIn
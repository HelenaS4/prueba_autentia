import { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import './FormSignInStyles.css'

import shared_expenses from '../../data/shared_expenses.json'
import friends from '../../data/friends.json'
import friends_group from '../../data/friend_group.json'
import logo from '../../assets/logo.png'

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

            let user_uuid_exists = friends_data.data.find((friends:any) => {
                if (friends.uuid == user_data.uuid) {
                    localStorage.setItem('user_data', JSON.stringify(friends));
                    return true;
                } 
                return false;
            });

            if (!user_uuid_exists) {
                friends_data.data.push(user_data);
                localStorage.setItem('friends', JSON.stringify(friends_data));
                localStorage.setItem('user_data', JSON.stringify(user_data));
            }

            navigate('/')
        }).catch(error => {
            console.log(error);
            setAuthing(false);
        })
    }

    return (
        <>
            <div className="login-container">
                    <img src={logo} alt="logo" id="img-logo"/>
                    <h1 id="titulo-login">Prueba Autentia</h1>
                    <div className="login">
                        <button className="button-64" role="button" onClick={() => signInWithGoogle()}>
                            <span className="text">Login!</span>
                        </button>
                    </div>
            </div>
        </>
    )
}

export default FormSignIn
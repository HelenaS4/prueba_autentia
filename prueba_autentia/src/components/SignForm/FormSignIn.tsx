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
            localStorage.setItem('shared_expenses', JSON.stringify(shared_expenses));
            localStorage.setItem('friends', JSON.stringify(friends));
            localStorage.setItem('friends_group', JSON.stringify(friends_group));
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
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AuthRoute = (props:any) => {
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const AuthCheck = onAuthStateChanged(auth, (user) => {
            if(user) {
                setLoading(false);
            } else {
                localStorage.removeItem('friends');
                localStorage.removeItem('friends_group');
                localStorage.removeItem('user_data');
                navigate('/signIn')
            }
            
        });
        return () => AuthCheck();
    }, [auth])

    

    if(loading) return <p>Loading...</p>

    return <>{children}</>
}

export default AuthRoute
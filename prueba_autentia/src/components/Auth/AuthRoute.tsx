import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AuthRoute = (props:any) => {
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AuthCheck()
    }, [auth])

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if(user) {
            setLoading(false);
        } else {
            console.log("Access denied");
            navigate('/signIn')
        }
    });

    if(loading) return <p>Loading...</p>

    return <>{children}</>
}

export default AuthRoute
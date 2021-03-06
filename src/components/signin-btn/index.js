import React, { useContext } from 'react'
import { UserContext } from '../../contexts/user';
import { signInWithGoogle } from '../../services/auth'
import "./style.css"

export default function SignInBtn() {
    const [, setUser] = useContext(UserContext).user;
 
    const signInBtnClick = async () => {
        let userBySignIn = await signInWithGoogle();
        if(userBySignIn) setUser(userBySignIn);
        
    };
    
        return (
            <div className="signInBtn" onClick={signInBtnClick}>
                <p>SignIn with Google</p>
            </div>
        );


}
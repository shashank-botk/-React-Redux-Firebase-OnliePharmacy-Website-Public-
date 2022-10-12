import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  emailSignInStart, googleSignInStart   } from './../../redux/User/user.actions';
import { Link, useHistory } from 'react-router-dom';
import './styles.scss';
import Buttons from '../forms/Button';

import FormInput from './../forms/FormInput';
import AuthWrapper from '../AuthWrapper';


const mapState = ({ user }) => ({
    currentUser : user.currentUser

});

const  SingIn = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentUser } = useSelector(mapState);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (currentUser){
            resetForm();
            
            history.push('/');
        }

    }, [currentUser]);

    const resetForm = () => {
        setEmail('');
        setPassword('');
    };

    const handleSubmit =  e => {
        e.preventDefault();
        dispatch(emailSignInStart({email, password}));

    }

    const handleGoogleSignIn = () => {
        dispatch(googleSignInStart());
    }

    const configAuthWrapper ={
        headline: 'LogIn'
    };
    return (
   
        <AuthWrapper {...configAuthWrapper}>
            <div className= "formWrap"> 
                <form onSubmit= {handleSubmit }>

                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={ e => setEmail(e.target.value)}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={ password }
                        placeholder="Password"
                        handleChange={e => setPassword(e.target.value)}
                    />
                    <Buttons type = "submit">
                        LogIn
                    </Buttons>
                    <div className = "socialSignin">
                        <div className = "row">
                            <Buttons onClick={ handleGoogleSignIn }>
                                Sign In with Google
                            </Buttons>
                        </div>
                    </div>
                    <div className= "links">
                        <Link to = "/registration">
                            Register
                        </Link>
                        {` | `}
                        <Link to = "/recovery">
                            Reset Password
                        </Link>
                    </div>
                </form>
            </div>

        </AuthWrapper>    
    );
}

export default SingIn;
import React from 'react';
import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/signup/SignUp';
import './Authpage.scss';

const Authpage = () => {
    return (
        <div className="auth-container">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default Authpage;
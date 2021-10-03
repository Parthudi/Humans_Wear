import React from 'react'

import SignIn from '../../components/sign-in/signin'
import SignUp from '../../components/sign-up/sign-up'
import './signup-signin.css'

const SignInAndSignUp = (props) => {
    return(
        <div className='sign-in-and-sign-up'>
                <SignIn />
                <SignUp />
        </div>
    )
}

export default SignInAndSignUp
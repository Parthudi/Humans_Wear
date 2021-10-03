import React, { Component } from 'react'
import './signin.css'
import FormInput from '../formInput/formInput'
import CustomButton from '../CustomButton/CustomButton'
import {auth, signInWithGoogle} from '../../firebase.utility/firebase.utility.js'

class SignIn extends Component {
    state = {
            email: '',
            password: ''
    }

    handleonSubmit = async event => {
        event.preventDefault()

        const {email, password} = this.state

        try{
        await auth.signInWithEmailAndPassword(email, password)

            this.setState({ email:'' , password:''})

        } catch(error) {

            console.log(error.message)
        }
     }

    OnHandleChange = (event) => {
        
        this.setState({ [event.target.name] : event.target.value  })
           // this.setState({ email: event.target.email , password: event.target.password})
           // this.setState({ [name] : value})
        }

        
    render() {
    return (
            <div className='sign-in'>
               
                <h1><b> I already have an account </b></h1>
                <span> Signin with your email & password </span>

                <form className='forum' onSubmit={ this.handleonSubmit }>
                    
                    <FormInput type="text"     name='email'     value={this.state.email}    labal='E-mail'    onChange={this.OnHandleChange}  required/>
                
                    <FormInput type="password" name='password'  value={this.state.password} labal='Password'  onChange={this.OnHandleChange}  required/>

                    <div className='Buttons'> 
                        <CustomButton type='submit'> SIGN IN </CustomButton>  
                        <CustomButton googlestyle='true' onClick={signInWithGoogle}>  Sign in with Google </CustomButton>  
                    </div>
                   
                        
                </form>
                
            </div>
        )       
    }
  }
export default SignIn
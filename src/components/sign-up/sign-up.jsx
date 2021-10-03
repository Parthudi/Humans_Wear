import React, {Component} from 'react'
import FormInput from '../formInput/formInput'
import CustomButton from '../CustomButton/CustomButton'
import { auth, CreateUserProfileDocument } from '../../firebase.utility/firebase.utility'
import './sign-up.css'

class SignUp extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmpassword: ''
    }

    handleonSubmit = async event => {
        event.preventDefault()

        const {displayName, email, password, confirmpassword} = this.state

        if( password !== confirmpassword ) {
            alert('Password didnot match')
            return ;
          }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

              await CreateUserProfileDocument(user, {displayName})

              this.setState( {
                displayName: '',
                email: '',
                password: '',
                confirmpassword: ''
            })

        } catch(error) {
            console.log(error.message)
        }
    }

    handleonchange = (event) => {
            this.setState({ [event.target.name ] : [event.target.value] })
        }

  
 render() {
   
    return(

       <div className='sign-up'>
           <h1><b> I dont have an account </b></h1>
              <span> Sign up with your email & password </span>

              <form className='sign-up-form' onSubmit={this.handleonSubmit}>

                 <FormInput type="text"      name='displayName'     value={this.state.displayName}     labal='User Name'        onChange={this.handleonchange}  required/>  
                 <FormInput type="text"      name='email'           value={this.state.email}           labal='E-mail'           onChange={this.handleonchange}  required/>  
                 <FormInput  type="password" name='password'        value={this.state.password}        labal='Password'         onChange={this.handleonchange}  required/>  
                 <FormInput type="password"  name='confirmpassword' value={this.state.confirmpassword} labal='Confirm Password' onChange={this.handleonchange}  required/> 
               
                 <CustomButton type='submit'> SIGN UP </CustomButton>
              </form>
        </div>
           
        )
    }
}

export default SignUp
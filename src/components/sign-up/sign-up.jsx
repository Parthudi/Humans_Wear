import React, {useState} from 'react'
import FormInput from '../formInput/formInput'
import CustomButton from '../CustomButton/CustomButton'
import { auth, CreateUserProfileDocument } from '../../firebase.utility/firebase.utility'
import './sign-up.css'

const Signup = () =>  {
    const [values, setValues] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmpassword: ''
    });

    const handleonSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmpassword} = values

        if(password !== confirmpassword) {
            alert('Password didnot match')
            return;
          }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
              await CreateUserProfileDocument(user, {displayName})
              setValues({
                displayName: '',
                email: '',
                password: '',
                confirmpassword: ''
            })
        }catch(error) {
            console.log(error.message)
        }
    }

    const handleonchange = (event) => {
        setValues({...values, [event.target.name ] : event.target.value })
        }
        
    return(
       <div className='sign-up'>
           <h1><b> I dont have an account </b></h1>
              <span> Sign up with your email & password </span>

              <form className='sign-up-form' onSubmit={() => handleonSubmit()}>

                 <FormInput type="text"      name='displayName'     value={values.displayName}     labal='User Name'        onChange={(e) => handleonchange(e)}  required />  
                 <FormInput type="text"      name='email'           value={values.email}           labal='E-mail'           onChange={(e) => handleonchange(e)}  required />  
                 <FormInput type="password" name='password'         value={values.password}        labal='Password'         onChange={(e) => handleonchange(e)}  required />  
                 <FormInput type="password"  name='confirmpassword' value={values.confirmpassword} labal='Confirm Password' onChange={(e) => handleonchange(e)}  required /> 
               
                 <CustomButton type='submit'> SIGN UP </CustomButton>
              </form>
        </div>
        )
}

export default Signup
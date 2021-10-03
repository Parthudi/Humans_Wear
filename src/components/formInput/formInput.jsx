import React from 'react'
import './formInput.css'

const FormInput = (props) => {
    //console.log(props.labal)
   // console.log('length: ' +props.value.length)
    return(
        <div className='group'>
            <input className='form-input' onChange={props.handleChange} autocomplete="off" {...props}/>
            {
               props.labal ? 
               ( <label className={`${props.value.length  ? 'shrink ' : ''} form-input-label`} >
               {props.labal}
             </label> ) : null
            }
        </div>
    )
}


export default FormInput
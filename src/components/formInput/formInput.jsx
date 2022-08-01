import React, {memo} from 'react'
import './formInput.css'

const FormInput = memo((props) => {
    return(
        <div className='group'>
            <input className='form-input' onChange={props.handleChange} autocomplete="off" {...props}/>
            {
               props.labal ? 
                    (<label className={`${props.value.length  ? 'shrink ' : ''} form-input-label`} >
                        {props.labal}
                    </label> ) : null
            }
        </div>
    )
});

export default FormInput
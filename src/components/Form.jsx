import React, {useState} from 'react'

const Form = () => {

    const [firstName, setFirstName] = useState ("")
    const [lastName, setLastName] = useState ("")
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] =  useState("")

    return (
        <div>
            <div className='row'>
                <form action="" className='col-md-5 offset-1'>
                    <div className='form-group'>
                        {firstName && firstName.length < 2 ? <p>Name must be at least 2 characters</p> : null }
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" className='form-control' onChange={(e)=> setFirstName(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        {lastName && lastName.length < 2 ? <p>Name must be at least 2 characters</p> : null }
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" className='form-control' onChange={(e)=> setLastName(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        {email && email.length < 5 ? <p>Name must be at least  characters</p> : null }
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" className='form-control' onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        {password && password.length < 8 ? <p>Name must be at least 8 characters</p> : null }
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" id="password" className='form-control' onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        {passwordConfirm && passwordConfirm.length < 8 ? <p>Name must be at least 8 characters</p> : null }
                        {passwordConfirm && password != passwordConfirm ? <p>Passwords must match</p>: null}
                        <label htmlFor="passwordConfirm">Confirm Password</label>
                        <input type="text" name="passwordConfirm" id="passwordConfirm" className='form-control' onChange={(e) => setPasswordConfirm(e.target.value)} />
                    </div>
                </form>
            </div>
            <div className='row'>
                <div className='col-md-5 offset-1'>
                    <p>Your From Data</p>
                    <p>First Name: {firstName} </p>
                    <p>Last Name: {lastName} </p>
                    <p>Email: {email} </p>
                    <p>Password: {password}</p>
                    <p>Confirm Password: {passwordConfirm}</p>
                </div>
            </div>
        </div>
    )
}

export default Form
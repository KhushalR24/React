import React, { useContext } from 'react'
import { useState } from 'react'
import { UserContext } from '../Context/UserContextProvider'
import { PassContext } from '../Context/PassContextProvider'


function Login() {

    const {user , setUser} = useContext(UserContext)
    const {pass , setPass} = useContext(PassContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({user})
        setPass({pass})
    }

console.log(user, pass);
    return (
        <div>
            <h2>Login</h2>
            <input
                type='text'
                value={user}
                onChange={(e) => {
                    setUser(e.target.value)
                }}
                placeholder='username' />

            <input
                type='text'
                value={pass}
                onChange={(e) => {
                    setPass(e.target.value)
                }}
                placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login

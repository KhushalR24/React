import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContextProvider'
import { PassContext } from '../Context/PassContextProvider'


function Password() {
    const { key } = useContext(PassContext)

    if (!key.password) return <div>Please Login</div>
    return <div>Your Password Is {key.password}</div>

}


export default Password





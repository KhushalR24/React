import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContextProvider'
import { PassContext } from '../Context/PassContextProvider'


function Profile() {
    const { user } = useContext(UserContext)
    const { pass } = useContext(PassContext)

    if (!user.user) {
        return <div>Please Login</div>
    } else {

        return (
            <div>
                <div> Welcome {user.user}</div>
                {console.log()}
                <div> Your Password Is {pass.pass}</div>
            </div>
        )
    }


}


export default Profile





import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

const Login = () => {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result)

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })

            }).catch(error => alert(error.message))
    }
    return (
        <div className='login' >
            <div className="login__logo">
                <img src="https://i.imgur.com/LeTEcLR.jpg?1" alt="fb circle" />
                <img src="https://i.imgur.com/UqHl9fj.jpg?1" alt="fb text"/>
            </div>
            <Button type='submit' onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
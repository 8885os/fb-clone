import { Button } from '@material-ui/core'
import React from 'react'
import '../styles/Login.css'
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

const Login = () => {

    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            }).catch(error => console.log(error.message))
    }

    return (
        <div className='login'>
            <div className="login__logo">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png?20200820101156' alt='facebook'>
                </img>
                <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' alt='facebooktext'>
                </img>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
import {REGISTER_SUCCESS, LOGIN_SUCCESS, REDIRECTED} from './actionTypes'
import {register, login} from '../api/remote'

function registerSuccess(){
    return {
        type: REGISTER_SUCCESS
    }
}

function loginSuccess(){
    return {
        type: LOGIN_SUCCESS
    }
}

export function redirect(){
    return {
        type: REDIRECTED
    }
}

function registerAction (name, email, password){
    return async (dispatch) => {
        return register(name, email, password).then(json=>{
            if(json.success){
                dispatch(registerSuccess())
            }
        })  
    }
}

function loginAction (email, password){
    return (dispatch) =>{
        return login(email, password).then(json=>{
            localStorage.setItem('authToken', json.token)
            localStorage.setItem('user', json.user.name)
            dispatch(loginSuccess())
        })    
    }
}

function logoutAction(){
    return (dispatch) => {
        localStorage.clear()
    }
}

export {registerAction, loginAction, logoutAction}
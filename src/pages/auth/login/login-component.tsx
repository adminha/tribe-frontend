import { useState } from "react";
import { useAppDispatch, useAppSelector, useForm } from "../../../app/hooks";
import LoginApi from "../../api/login";
import { changeLoginStatus, changeTribeAccessToken, selectLoginStatus } from "./login-redux";
import { useRouter } from 'next/router'

function LoginComponent() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const data = {username: username, password: password}
    const isLoggedIn = useAppSelector(selectLoginStatus)
    const dispatch = useAppDispatch()
    const router = useRouter()
    const handleUsernameChange = (value) => {
        setUsername(value)
    }
    const handlePasswordChange = (value) => {
        setPassword(value)
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        let result = await LoginApi(data)
        dispatch(changeLoginStatus(result[0]))
        dispatch(changeTribeAccessToken(result[1]))
        router.push('/recent-posts')
    }
    return (
        <form onSubmit={e => handleLogin(e)}>
            
            <div className="d-flex align-items-center mb-3 pb-1">
                <i className="fas fa-cubes fa-2x me-3"></i>
                <span className="h1 fw-bold mb-5 mx-auto">Adminha</span>
            </div>
            <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5>
            <div className="form-outline mb-4">
                <input type="text" id="form2Example17" placeholder="Username" className="form-control form-control-lg" onChange={e => handleUsernameChange(e.target.value)} />
            </div>
            <div className="form-outline mb-4">
                <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder="Password" onChange={e => handlePasswordChange(e.target.value)} />
            </div>
            <div className="pt-1 mb-4">
                <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
            </div>
        </form>
    );
}
export default LoginComponent;
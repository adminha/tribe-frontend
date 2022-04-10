import { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import LoginApi from "../../../app/api/login";
import { useRouter } from 'next/router'
import { changeLoginStatus, updateUserObject } from "../../../app/login-redux";

function LoginComponent() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const data = {username: username, password: password}
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
        await LoginApi(data).then((success) => {
            dispatch(changeLoginStatus(true))
            dispatch(updateUserObject(success.data))
        })
        router.push('/recent-posts')
    }
    return (
        <form className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" onSubmit={e => handleLogin(e)}>
            <div className="text-center mb-10">
                <i className="fas fa-cubes fa-2x me-3"></i>
                <h1 className="text-dark mb-3">Adminha</h1>
                <h5 className="text-gray-400 fw-bold fs-4">Sign into your account</h5>
            </div>            
            <div className="fv-row mb-10 fv-plugins-icon-container">
                <input type="text" id="form2Example17" placeholder="Username" className="form-control form-control-lg" onChange={e => handleUsernameChange(e.target.value)} />
            </div>
            <div className="fv-row mb-10 fv-plugins-icon-container">
                <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder="Password" onChange={e => handlePasswordChange(e.target.value)} />
            </div>
            <div className="text-center">
                <button className="btn btn-lg btn-primary w-100 mb-5" type="submit">Login</button>
            </div>
        </form>
    );
}
export default LoginComponent;
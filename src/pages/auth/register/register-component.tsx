import { useState } from "react"
import RegisterApi from "../../api/register";

function RegisterComponent() {
    const [ButtonText, setButtonText] = useState('Register')
    const [Inputs, setInputs] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
    })
    const [Message, setMessage] = useState('')
    
    const handleInputChange = (e) => {
        setInputs({...Inputs, [e.target.id]: e.target.value});
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        setButtonText('Registering...')
        await RegisterApi(Inputs).then((success) => {
            setButtonText('Success! Check your mailbox!')
            console.log(success)
        }, (failure) => {
            setButtonText('Failed, Check inputs...')
            console.log(failure)
        })
    }
    return (
        <form className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" onSubmit={e => handleRegister(e)}>
            
            <div className="text-center mb-10">
                <i className="fas fa-cubes fa-2x me-3"></i>
                <h1 className="text-dark mb-3">Adminha</h1>
                <h5 className="text-gray-400 fw-bold fs-4">Register new account</h5>
            </div>            
            <div className="fv-row mb-10 fv-plugins-icon-container">
                <input type="text" id="firstname" placeholder="First Name" className="form-control form-control-lg" onChange={e => handleInputChange(e)} />
            </div>
            <div className="fv-row mb-10 fv-plugins-icon-container">
                <input type="text" id="lastname" placeholder="Last Name" className="form-control form-control-lg" onChange={e => handleInputChange(e)} />
            </div>
            <div className="fv-row mb-10 fv-plugins-icon-container">
                <input type="email" id="email" placeholder="Email" className="form-control form-control-lg" onChange={e => handleInputChange(e)} />
            </div>
            <div className="fv-row mb-10 fv-plugins-icon-container">
                <input type="password" id="password" className="form-control form-control-lg" placeholder="Password" onChange={e => handleInputChange(e)} />
            </div>
            <div className="text-center">
                <button className="btn btn-lg btn-primary w-100 mb-5" type="submit">{ButtonText}</button>
            </div>
        </form>
    )
}
export default RegisterComponent
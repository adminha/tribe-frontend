import { useState } from "react";
import { SaveDefaultWallet } from "../../../../app/api/rewards";
import { useAppSelector } from "../../../../app/hooks";
import { selectUserObject } from "../../../../app/login-redux";

const DefaultWalletCardBody = () => {
    const userObject = useAppSelector(selectUserObject)
    
    const [DefaultWallet, setDefaultWallet] = useState(null)
    
    return (
        <div className="card-body border-top p-9">
            <p className="mb-5 fs-5">Here you can select your default wallet address, which your rewards will be sent to it's address.</p>
            <div className="mb-3">
                <label htmlFor="defaultwallet" className="form-label">Select your default wallet</label>
                <select className="form-control" name="defaultwallet" id="defaultwallet" onChange={(e) => setDefaultWallet(e.target.options[e.target.options.selectedIndex].id)}>
                    {userObject.user.wallets.map((item) => {
                        return <option id={item.id.toString()} key={item.id}>{item.address}</option>
                    })}
                
                </select>
            </div>
        </div>
    );
}

export default DefaultWalletCardBody;
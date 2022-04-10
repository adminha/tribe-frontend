import { useState } from "react";
import { GenerateNewWallet } from "../../../../app/api/rewards";
import { useAppSelector } from "../../../../app/hooks";
import { selectUserObject } from "../../../../app/login-redux";
import Wallet from "../../wallet";

const GenerateWalletCardBody = () => {
    const [Wallet, setWallet] = useState(null)
    const [GeneratedWallet, setGeneratedWallet] = useState(null)
    const userObject = useAppSelector(selectUserObject)
    const generateWallet = async () => {
        setGeneratedWallet(await GenerateNewWallet({username: userObject.user.username}))
    }
    const handleInputChange = (e) => {
        setWallet(e.target.value)
    }
    return (
        <div className="card-body border-top p-9">
            <p className="pb-5">If you have a wallet yourself, you can put the address here. If you don't, we can generate a new wallet for you. Try it on this page.</p>
            <p className="pb-5">On every reaction you make on posts, We'll send <span className="fw-bold text-warning">100 TRT token rewards</span> to your wallet address provided here.</p>
            <div className="row">
                <div className="col">
                    <h3 className="pb-5 text-danger">Add your own wallet address</h3>
                    <p className="pb-5">Only enter your Ethereum Testnet (Ropsten Network) wallet address here. Any address on the other networks won't work and you may lose your rewards.</p>
                    <div className="row">
                        <label className="col-lg-4 col-form-label required fw-bold fs-6">Enter Wallet Address</label>
                        <div className="col-lg-8 fv-row fv-plugins-icon-container">
                            <input type="text" name="fname" className="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="0x..." value={Wallet ? Wallet : ''} onChange={(e) => handleInputChange(e)} />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h3 className="pb-5 text-success">Generate a new wallet</h3>
                    <p className="pb-5">You can generate a new wallet here. <span className="text-danger">Don't forget to save your Private key somewhere secure. WE DON'T SAVE ANY PRIVATE KEYS ON OUR DATABASE.</span> So in case of losing your private key, you may lose your funds.</p>
                    <button type="button" className="btn btn-success" onClick={generateWallet}>Generate Wallet</button>
                    {GeneratedWallet && 
                    <div className="form-group mt-5 mb-5">
                        <label htmlFor="privatekey">Private Key</label>
                        <input type="text" name="privatekey" className="form-control form-control-lg form-control-solid fs-8" readOnly={true} value={GeneratedWallet.privatekey} />
                    </div>
                    }
                    {GeneratedWallet && 
                    <div className="form-group mb-5">
                        <label htmlFor="publickey">Wallet Address</label>
                        <input type="text" name="publickey" className="form-control form-control-lg form-control-solid mb-3 mb-lg-0 fs-8" readOnly={true} value={GeneratedWallet.address} />
                    </div>
                    }
                </div>
            </div>
            
        </div>
    );
}

export default GenerateWalletCardBody;
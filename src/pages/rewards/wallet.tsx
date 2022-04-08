import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import RewardsAPI from "../api/rewards";
import { selectUserObject } from "../auth/login/login-redux";
import Head from "../templates/master/head";

const Wallet = () => {
    const [Wallet, setWallet] = useState(null)
    const userObject = useAppSelector(selectUserObject)
    const handleInputChange = (e) => {
        setWallet(e.target.value)
    }
    const discardChanges = () => {
        setWallet('')
    }
    const saveChanges = () => {
        return RewardsAPI({username: userObject.user.username, walletAddress: Wallet})
    }
    return (
        <>
            <Head title="My Wallets" />
            <div className="card mb-5 mb-xl-10">
                <div className="card-header border-0 cursor-pointer">
                    <div className="row align-items-center">
                        <div className="card-title m-0">
                            <h3 className="fw-bolder m-0">Update Wallet Address</h3>
                        </div>
                    </div>
                </div>
                <div className="card-body border-top p-9">
                    <p className="pb-5">On every reaction you make on posts, We'll send <span className="fw-bold text-warning">1000 token rewards</span> to your wallet address provided here.</p>
                    <h3 className="pb-5 text-danger">Warning!</h3>
                    <p className="pb-5">Only enter your Ethereum Testnet (Ropsten Network) wallet address here. Any address on the other networks won't work and you may lose your rewards.</p>
                    <div className="row">
                        <label className="col-lg-4 col-form-label required fw-bold fs-6">Enter Wallet Address</label>
                        <div className="col-lg-8 fv-row fv-plugins-icon-container">
                            <input type="text" name="fname" className="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="0x..." value={Wallet} onChange={(e) => handleInputChange(e)} />
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-end py-6 px-9">
                    <button type="reset" className="btn btn-light btn-active-light-primary me-2" onClick={discardChanges}>Discard</button>
                    <button type="submit" className="btn btn-primary" id="kt_account_profile_details_submit" onClick={saveChanges}>Save Changes</button>
                </div>
            </div>
        </>
    );
}

export default Wallet;
import { useState } from "react";
import { useAppDispatch, useAppSelector, useInterval } from "../../app/hooks";
import { GenerateNewWallet, SaveDefaultWallet, UpdateUserWallet } from "../api/rewards";
import { selectUserObject, updateUserObject } from "../auth/login/login-redux";
import Head from "../templates/master/head";

function Wallet() {
    const [Wallet, setWallet] = useState(null)
    const [GeneratedWallet, setGeneratedWallet] = useState(null)
    const [SaveButtonText, setSaveButtonText] = useState('Save Changes')
    const [DefaultWallet, setDefaultWallet] = useState(null)
    const userObject = useAppSelector(selectUserObject)
    const handleInputChange = (e) => {
        setWallet(e.target.value)
    }
    const discardChanges = () => {
        setWallet('')
    }
    const saveChanges = () => {
        setSaveButtonText('Saving...')
        UpdateUserWallet({username: userObject.user.username, walletAddress: Wallet}).then((success) => {
            setSaveButtonText('Saved Successfully!')
        }, (failure) => {
            setSaveButtonText('Error Occured!')
        })
        setSaveButtonText('Save Changes')
    }
    const generateWallet = async () => {
        setGeneratedWallet(await GenerateNewWallet({username: userObject.user.username}))
        console.log(GeneratedWallet)
    }
    const saveDefaultWallet = () => {
        setSaveButtonText('Saving...')
        SaveDefaultWallet({username: userObject.user.username, walletId: DefaultWallet}).then((success) => {
            setSaveButtonText('Saved Successfully!')
        }, (failure) => {
            setSaveButtonText('Error Occured!')
        })
        setSaveButtonText('Save Changes')
    }
    console.log(userObject)
    return (
        <>
            <Head title={`${userObject ? userObject.user.firstName : ''}'s Wallets`} />
            <div className="card mb-5 mb-xl-10">
                <div className="card-header border-0 cursor-pointer">
                    <div className="row align-items-center">
                        <div className="card-title m-0">
                            <h3 className="fw-bolder m-0">Add your wallet address or generate a new one</h3>
                        </div>
                    </div>
                </div>
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
                                    <input type="text" name="fname" className="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="0x..." value={Wallet} onChange={(e) => handleInputChange(e)} />
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
                <div className="card-footer d-flex justify-content-end py-6 px-9">
                    <button type="reset" className="btn btn-light btn-active-light-primary me-2" onClick={discardChanges}>Discard</button>
                    <button type="submit" className="btn btn-primary" id="kt_account_profile_details_submit" onClick={saveChanges}>{SaveButtonText}</button>
                </div>
            </div>
            <div className="card mb-5 mb-xl-10">
                <div className="card-header border-0 cursor-pointer">
                    <div className="row align-items-center">
                        <div className="card-title m-0">
                            <h3 className="fw-bolder m-0">Choose your default wallet</h3>
                        </div>
                    </div>
                </div>
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
                <div className="card-footer d-flex justify-content-end py-6 px-9">
                    <button type="submit" className="btn btn-primary" id="kt_account_profile_details_submit" onClick={saveDefaultWallet}>{SaveButtonText}</button>
                </div>
            </div>
        </>
    );
}

export default Wallet;
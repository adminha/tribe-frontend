import { useState } from "react"
import { UpdateUserWallet } from "../../../../app/api/rewards"
import { useAppSelector } from "../../../../app/hooks"
import { selectUserObject } from "../../../../app/login-redux"

const GenerateWalletCardFooter = () => {
    const [Wallet, setWallet] = useState(null)
    const [SaveButtonText, setSaveButtonText] = useState('Save Changes')
    const userObject = useAppSelector(selectUserObject)

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
    return (
        <div className="card-footer d-flex justify-content-end py-6 px-9">
            <button type="reset" className="btn btn-light btn-active-light-primary me-2" onClick={discardChanges}>Discard</button>
            <button type="submit" className="btn btn-primary" id="kt_account_profile_details_submit" onClick={saveChanges}>{SaveButtonText}</button>
        </div>
    );
}

export default GenerateWalletCardFooter;
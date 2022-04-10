import { useState } from "react"
import { SaveDefaultWallet } from "../../../../app/api/rewards"
import { useAppSelector } from "../../../../app/hooks"
import { selectUserObject } from "../../../../app/login-redux"

const DefaultWalletCardFooter = () => {
    const [SaveButtonText, setSaveButtonText] = useState('Save Changes')
    const userObject = useAppSelector(selectUserObject)
    const [DefaultWallet, setDefaultWallet] = useState(null)
    const saveDefaultWallet = () => {
        setSaveButtonText('Saving...')
        SaveDefaultWallet({username: userObject.user.username, walletId: DefaultWallet}).then((success) => {
            setSaveButtonText('Saved Successfully!')
        }, (failure) => {
            setSaveButtonText('Error Occured!')
        })
        setSaveButtonText('Save Changes')
    }
    return (
        <div className="card-footer d-flex justify-content-end py-6 px-9">
            <button type="submit" className="btn btn-primary" id="kt_account_profile_details_submit" onClick={saveDefaultWallet}>{SaveButtonText}</button>
        </div>
    );
}

export default DefaultWalletCardFooter;
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectLoginStatus, selectUserObject } from "../../app/login-redux";
import Head from "../templates/master/head";
import WalletCardHeader from "./wallet-components/card-header";
import GenerateWalletCardBody from "./wallet-components/generate-wallet/card-body";
import GenerateWalletCardFooter from "./wallet-components/generate-wallet/card-footer";
import DefaultWalletCardBody from "./wallet-components/default-wallet/card-body";
import DefaultWalletCardFooter from "./wallet-components/default-wallet/card-footer";

function Wallet() {
    
    const userObject = useAppSelector(selectUserObject)
    
    const isLoggedIn = useAppSelector(selectLoginStatus)
	const router = useRouter()
	useEffect(() => {
	  isLoggedIn ? router.push('/rewards/wallet') : router.push('/auth/login')
	}, [])
    return (
        <>
            <Head title={`${userObject ? userObject.user.firstName : ''}'s Wallets`} />
            <div className="card mb-5 mb-xl-10">
                <WalletCardHeader title="Add your wallet address or generate a new one" />
                <GenerateWalletCardBody />
                <GenerateWalletCardFooter />
            </div>
            <div className="card mb-5 mb-xl-10">
                <WalletCardHeader title="Choose your default wallet" />
                <DefaultWalletCardBody />
                <DefaultWalletCardFooter />
            </div>
        </>
    );
}

export default Wallet;
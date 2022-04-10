import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { GetRewards } from "../../app/api/rewards";
import { selectLoginStatus, selectUserObject } from "../../app/login-redux";
import Head from "../templates/master/head";
import RewardsTable from "./rewards-table/table";

function Rewards() {
    const userObject = useAppSelector(selectUserObject)
    const [Data, setData] = useState(null)
    useEffect(() => {
        GetRewards(userObject.user.username).then((success) => {
            setData(success.data)
        })
    }, [])
    const isLoggedIn = useAppSelector(selectLoginStatus)
	const router = useRouter()
	useEffect(() => {
	  isLoggedIn ? router.push('/rewards') : router.push('/auth/login')
	}, [])  
    return (
        <>
            <Head title="My Rewards" />
            <div className="card mb-5 mb-xl-10">
                <div className="card-header border-0 cursor-pointer">
                    <div className="row align-items-center">
                        <div className="card-title m-0">
                            <h3 className="fw-bolder m-0">Earnings & Rewards (Tribe Reward Token)</h3>
                        </div>
                    </div>
                </div>
                <div className="card-body border-top p-9">
                    {Data !== null ? <RewardsTable data={Data}/> : ''}
                </div>
            </div>
        </>
    );
}

export default Rewards;
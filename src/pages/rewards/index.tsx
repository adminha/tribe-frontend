import Link from "next/link";
import Head from "../templates/master/head";

function Rewards() {
    return (
        <>
            <Head title="My Rewards" />
            <div>
                <Link href='rewards/wallet'>
                    <a>Choose wallet</a>
                </Link>
            </div>
        </>
    );
}

export default Rewards;
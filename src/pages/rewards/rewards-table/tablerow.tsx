import { usePost } from "@tribeplatform/react-sdk/hooks";
import moment from "moment";


function TableRow(props) {
    const walletsWithRewards = props.data
    const getPostTitle = (postId) => {
        const {data: post, isLoading, isFetched} = usePost({id: postId})
        return isLoading ? 'Loading...' : post?.title
    }
    
    return (
        <>
        {walletsWithRewards.map(wallet => {
            return(
                wallet.rewards.map(rewardItem => {
                    return (
                        <tr key={rewardItem.id} className="odd">
                            <td>
                                <a href={`https://ropsten.etherscan.io/tx/${rewardItem.transactionId}`} className="text-gray-800 text-hover-primary text-truncate">{rewardItem.transactionId}</a>
                            </td>
                            <td>{getPostTitle(rewardItem.tribeReactionId)}</td>
                            <td className="text-end" colSpan={2}>
                                <a href={`https://ropsten.etherscan.io/tx/${rewardItem.transactionId}`} className="text-gray-600 text-hover-primary">
                                    <div className="row">
                                        <div className="col">
                                            <img src="/coin-794.svg" width={40} />
                                        </div>
                                        <div className="col">
                                            <span className="badge py-3 px-4 fs-7 badge-light-warning float-end">100 TRT Tokens</span>
                                        </div>
                                    </div>
                                </a>
                            </td>
                            <td className="text-end">
                                <span className="text-gray-300">{moment(rewardItem.createdAt).format("DD/MM/YYYY HH:mm") }</span>
                            </td>
                        </tr>
                    )
                })
            )
        })}
        </>
    );
}

export default TableRow;
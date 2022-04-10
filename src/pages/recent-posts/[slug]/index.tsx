import { useRouter } from "next/router";
import { usePost } from '@tribeplatform/react-sdk/hooks'
import SinglePost from "./single-post";
import Head from "../../templates/master/head";

function SinglePostIndex() {
    const router = useRouter()
    const postid = router.query.pid as string
    const {data: post, isLoading, isFetched} = usePost({id: postid})
    return (
        <>
        <Head />
        {isLoading && <h1>Loading...</h1>}
        {isFetched && <SinglePost post={post} />}
        </>
    )
}

export default SinglePostIndex;
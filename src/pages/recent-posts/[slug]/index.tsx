import { useRouter } from "next/router";
import { usePost } from '@tribeplatform/react-sdk/hooks'

function SinglePost() {
    const router = useRouter()
    const postid = router.query.pid as string
    const {data: post, isLoading} = usePost({id: postid})
    console.log(post)
    if (isLoading) {
        return (
            <div className="card">
                <p className="fw-bold">Loading...</p>
            </div>
        )
    }
    else {
        return (
            <div className="card">
                {isLoading && <p className="fw-bold">Loading...</p>}
                {!isLoading}
                <div className="card-header py-10">
                    <div className="row align-items-center">
                        <a><h1 className="fs-2x text-dark">{post?.title}</h1></a>
                        <div className="fs-5 text-muted fw-bold">{post?.owner.member.name}, {post?.owner.member.tagline}</div>
                    </div>
                </div>
                <div className="card-body p-5 px-lg-10 py-lg-10">
                    <div className="row g-10" dangerouslySetInnerHTML={{ __html: JSON.parse(post?.mappingFields[1].value) }}></div>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-warning">Like & Get Rewarded</button>
                </div>
            </div>
        )
    }
}

export default SinglePost;
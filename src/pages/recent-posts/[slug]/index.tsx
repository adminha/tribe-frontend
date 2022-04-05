import { useRouter } from "next/router";
import { usePost } from '@tribeplatform/react-sdk/hooks'

function SinglePost() {
    const router = useRouter()
    const postid = router.query.pid as string
    const {data: post} = usePost({variables: {id: postid}})

    console.log(post)
    return (
        <div className="card">
            {postid}
            {/* <div className="card-header py-10">
                <div className="row align-items-center">
                    <div className="col-2">
                        <img className="img w-100 rounded-circle" src={props.post.owner.member.profilePicture.url} />
                    </div>
                    <div className="col-10">
                        <a><h1 className="fs-2x text-dark">{props.post.title}</h1></a>
                        <div className="fs-5 text-muted fw-bold">{props.post.owner.member.name}, {props.post.owner.member.tagline}</div>
                    </div>
                </div>
            </div>
            <div className="card-body p-5 px-lg-10 py-lg-10">
                <div className="row g-10" dangerouslySetInnerHTML={{ __html: props.post.shortContent }}></div>
            </div> */}
        </div>
    );
}

export default SinglePost;
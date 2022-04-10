import { useReplies } from "@tribeplatform/react-sdk/hooks"
import { simplifyPaginatedResult } from "@tribeplatform/react-sdk/utils"
import Head from "../../templates/master/head"
import { LikeButton } from "../post-item-template/like-button"
import AddReply from "./add-reply"
import PostReplies from "./post-replies"
import SinglePostSidebar from "./single-post-sidebar"
import SVGTitleIcon from "./svg-title-icon"

function SinglePost(props) {
    const {data: replies} = useReplies({variables: {postId: props.post.id, limit: 10}})
    const {nodes: latestReplies} = simplifyPaginatedResult(replies);
    return(
        <>
        <Head title={props.post?.title} />
        <div className="card">
            <div className="card-body">
                <div className="d-flex flex-column flex-xl-row p-7">
                    <div className="flex-lg-row-fluid me-xl-15 mb-20 mb-xl-0">
                        <div className="d-flex align-items-center mb-12">
                            <SVGTitleIcon />
                            <div className="d-flex flex-column">
                                <h1 className="text-gray-800 fw-bold">
                                    {props.post?.title}
                                </h1>
                                <div>
                                    <span className="fw-bold text-muted me-6">Community: 
                                        <a href={`https://adminha.tribeplatform.com/${props.post?.space.slug}`} className="text-muted text-hover-primary"> {props.post?.space.name}</a>
                                    </span>
                                    <span className="fw-bold text-muted me-6">By: 
                                    <a href="#" className="text-muted text-hover-primary">{props.post?.owner.member.name}, {props.post?.owner.member.tagline}</a></span>
                                    <span className="fw-bold text-muted">Created: 
                                        <span className="fw-bolder text-gray-600 me-1">{props.post?.createdAt}</span>
                                    </span>
                                </div>
                                
                            </div>
                        </div>
                        <div className="mb-15">
                            <div className="mb-15 fs-5 fw-normal text-gray-800" dangerouslySetInnerHTML={{ __html:
                            JSON.parse(props.post?.mappingFields[1].value)
                            }}>
                            </div>
                        </div>
                        <div className="mb-15">
                            <span className="fs-1 fw-bold text-warning">Like This Post & Get Rewarded 100 TRT Tokens!</span>
                            <LikeButton post={props.post} />
                        </div>
                        <div className="mb-15">
                            <div>
                                {latestReplies.map((reply) => {
                                    return <PostReplies reply={reply} />
                                })}
                            </div>
                        </div>
                        <div className="mb-15">
                            <h3 className="mb-15"> Add Your Comment & Get Rewarded 100 TRT Tokens In Your Wallet!</h3>
                            <AddReply postId={props.post.id}/>
                        </div>
                    </div>
                    <SinglePostSidebar />
                </div>
            </div>
        </div>
        </>
    )
}
export default SinglePost
import { useReplies } from "@tribeplatform/react-sdk/hooks"
import { simplifyPaginatedResult } from "@tribeplatform/react-sdk/utils"
import Head from "../../templates/master/head"
import { LikeButton } from "../../templates/posts/like-button"
import AddReply from "./add-reply"
import PostReplies from "./post-replies"
import SinglePostSidebar from "./single-post-sidebar"

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
                            <span className="svg-icon svg-icon-4qx svg-icon-success ms-n2 me-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM11.7 17.7L16 14C16.4 13.6 16.4 12.9 16 12.5C15.6 12.1 15.4 12.6 15 13L11 16L9 15C8.6 14.6 8.4 14.1 8 14.5C7.6 14.9 8.1 15.6 8.5 16L10.3 17.7C10.5 17.9 10.8 18 11 18C11.2 18 11.5 17.9 11.7 17.7Z" fill="currentColor"></path>
                                    <path d="M10.4343 15.4343L9.25 14.25C8.83579 13.8358 8.16421 13.8358 7.75 14.25C7.33579 14.6642 7.33579 15.3358 7.75 15.75L10.2929 18.2929C10.6834 18.6834 11.3166 18.6834 11.7071 18.2929L16.25 13.75C16.6642 13.3358 16.6642 12.6642 16.25 12.25C15.8358 11.8358 15.1642 11.8358 14.75 12.25L11.5657 15.4343C11.2533 15.7467 10.7467 15.7467 10.4343 15.4343Z" fill="currentColor"></path>
                                    <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
                                </svg>
                            </span>
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
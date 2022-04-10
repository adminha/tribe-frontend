function PostReplies(props) {
    return(
        <div className="row my-9">
            <div className="col-10">
                <div className="card card-bordered">
                    <div className="card-body">
                        <div className="w-100 d-flex flex-stack mb-8">
                            <div className="d-flex align-items-center f">
                                <div className="symbol symbol-50px me-5">
                                    <div className="symbol-label fs-1 fw-bolder bg-light-info text-info">{props.reply.owner.member.name[0]}</div>
                                </div>
                                <div className="d-flex flex-column fw-bold fs-5 text-gray-600 text-dark">
                                    <div className="d-flex align-items-center">
                                        <a href="/metronic8/demo1/../demo1/pages/user-profile/overview.html" className="text-gray-800 fw-bolder text-hover-primary fs-5 me-3">{props.reply.owner.member.name}</a>
                                        <span className="badge badge-light-danger">Author</span>
                                    </div>
                                    <span className="text-muted fw-bold fs-6">{props.reply.createdAt}</span>
                                </div>
                            </div>
                            <div className="m-0">
                                <button className="btn btn-color-gray-400 btn-active-color-primary p-0 fw-bolder">Reply</button>
                            </div>
                        </div>
                        <p className="fw-normal fs-5 text-gray-700 m-0" dangerouslySetInnerHTML={{ __html:
                            JSON.parse(props.reply.mappingFields[0].value)
                            }}></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostReplies
function Content(props) {
    return (
        <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
            <div className="post d-flex flex-column-fluid" id="kt_post">
                <div id="kt_content_container" className="container-xxl">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Content;
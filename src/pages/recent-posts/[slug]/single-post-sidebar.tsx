function SinglePostSidebar() {
	// Nothing dynamic, just a placeholder raw HTML to keep the page's design nice & clean!
    return (
        <div className="flex-column flex-lg-row-auto w-100 mw-lg-300px mw-xxl-350px">
			<div className="position-relative mb-15">
				<span className="svg-icon svg-icon-1 svg-icon-primary position-absolute top-50 translate-middle ms-9">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
						<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"></path>
					</svg>
				</span>
				<input type="text" className="form-control form-control-lg form-control-solid ps-14" name="search" defaultValue={''} placeholder="Search" />
			</div>
			<div className="card-rounded bg-primary bg-opacity-5 p-10 mb-15">
				<h2 className="text-dark fw-bolder mb-11">More Channels</h2>
				<div className="d-flex align-items-center mb-10">
					<i className="bi bi-file-earmark-text text-primary fs-1 me-5"></i>
					<div className="d-flex flex-column">
						<h5 className="text-gray-800 fw-bolder">Backend Repository</h5>
						<div className="fw-bold">
							<span className="text-muted">Check out my</span>
							<a href="https://github.com/adminha/tribe/" className="link-primary ps-1">NestJS Repo</a>
						</div>
					</div>
				</div>
				<div className="d-flex align-items-center mb-10">
					<i className="bi bi-file-earmark-text text-primary fs-1 me-5"></i>
					<div className="d-flex flex-column">
						<h5 className="text-gray-800 fw-bolder">Frontend Repository</h5>
						<div className="fw-bold">
							<span className="text-muted">Check out my</span>
							<a href="https://github.com/adminha/tribe-frontend/" className="link-primary ps-1">React/Redux/Next.js Repo</a>
						</div>
					</div>
				</div>
				<div className="d-flex align-items-center mb-10">
					<i className="bi bi-chat-square-text-fill text-primary fs-1 me-5"></i>
					<div className="d-flex flex-column">
						<h5 className="text-gray-800 fw-bolder">More to discuss?</h5>
						<div className="fw-bold">
							<span className="text-muted">Email me</span>
							<a href="#" className="link-primary ps-1">moxafari@gmail.com</a>
						</div>
					</div>
				</div>
				<div className="d-flex align-items-center mb-10">
					<i className="bi bi-twitter text-primary fs-1 me-5"></i>
					<div className="d-flex flex-column">
						<h5 className="text-gray-800 fw-bolder">WhatsApp Call?</h5>
						<div className="fw-bold">
							<span className="text-muted">You can find me @</span>
							<a href="#" className="link-primary ps-1">+989372779303</a>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}
export default SinglePostSidebar
function SinglePostSidebar() {
    return (
        <div className="flex-column flex-lg-row-auto w-100 mw-lg-300px mw-xxl-350px">
												<div className="position-relative mb-15">
													<span className="svg-icon svg-icon-1 svg-icon-primary position-absolute top-50 translate-middle ms-9">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
															<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"></path>
														</svg>
													</span>
													<input type="text" className="form-control form-control-lg form-control-solid ps-14" name="search" value="" placeholder="Search" />
												</div>
												<div className="card-rounded bg-primary bg-opacity-5 p-10 mb-15">
													<h2 className="text-dark fw-bolder mb-11">More Channels</h2>
													<div className="d-flex align-items-center mb-10">
														<i className="bi bi-file-earmark-text text-primary fs-1 me-5"></i>
														<div className="d-flex flex-column">
															<h5 className="text-gray-800 fw-bolder">Project Briefing</h5>
															<div className="fw-bold">
																<span className="text-muted">Check out our</span>
																<a href="#" className="link-primary">Support Policy</a>
															</div>
														</div>
													</div>
													<div className="d-flex align-items-center mb-10">
														<i className="bi bi-chat-square-text-fill text-primary fs-1 me-5"></i>
														<div className="d-flex flex-column">
															<h5 className="text-gray-800 fw-bolder">More to discuss?</h5>
															<div className="fw-bold">
																<span className="text-muted">Email us to</span>
																<a href="#" className="link-primary">support@keenthemes.com</a>
															</div>
														</div>
													</div>
													<div className="d-flex align-items-center mb-10">
														<i className="bi bi-twitter text-primary fs-1 me-5"></i>
														<div className="d-flex flex-column">
															<h5 className="text-gray-800 fw-bolder">Latest News</h5>
															<div className="fw-bold">
																<span className="text-muted">Follow us at</span>
																<a href="#" className="link-primary">KeenThemes Twitter</a>
															</div>
														</div>
													</div>
													<div className="d-flex align-items-center">
														<i className="bi bi-github text-primary fs-1 me-5"></i>
														<div className="d-flex flex-column">
															<h5 className="text-gray-800 fw-bolder">Github Access</h5>
															<div className="fw-bold">
																<span className="text-muted">Our github repo</span>
																<a href="#" className="link-primary">KeenThemes Github</a>
															</div>
														</div>
													</div>
												</div>
												<div className="card-rounded bg-primary bg-opacity-5 p-10 mb-15">
													<h1 className="fw-bolder text-dark mb-9">Documentation</h1>
													<div className="d-flex align-items-center mb-6">
														<span className="svg-icon svg-icon-2 ms-n1 me-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor"></path>
															</svg>
														</span>
														<a href="#" className="fw-bold text-gray-800 text-hover-primary fs-5 m-0">Angular Admin</a>
													</div>
													<div className="d-flex align-items-center mb-6">
														<span className="svg-icon svg-icon-2 ms-n1 me-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor"></path>
															</svg>
														</span>
														<a href="#" className="fw-bold text-gray-800 text-hover-primary fs-5 m-0">React Admin</a>
													</div>
													<div className="d-flex align-items-center mb-6">
														<span className="svg-icon svg-icon-2 ms-n1 me-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor"></path>
															</svg>
														</span>
														<a href="#" className="fw-bold text-gray-800 text-hover-primary fs-5 m-0">Vue Dashboard</a>
													</div>
													<div className="d-flex align-items-center mb-6">
														<span className="svg-icon svg-icon-2 ms-n1 me-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor"></path>
															</svg>
														</span>
														<a href="#" className="fw-bold text-gray-800 text-hover-primary fs-5 m-0">Niche Theme</a>
													</div>
													<div className="d-flex align-items-center mb-6">
														<span className="svg-icon svg-icon-2 ms-n1 me-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor"></path>
															</svg>
														</span>
														<a href="#" className="fw-bold text-gray-800 text-hover-primary fs-5 m-0">Dashboard Admin</a>
													</div>
													<div className="d-flex align-items-center mb-6">
														<span className="svg-icon svg-icon-2 ms-n1 me-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor"></path>
															</svg>
														</span>
														<a href="#" className="fw-bold text-gray-800 text-hover-primary fs-5 m-0">Dorsey Front-end</a>
													</div>
													<div className="d-flex align-items-center mb-6">
														<span className="svg-icon svg-icon-2 ms-n1 me-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor"></path>
															</svg>
														</span>
														<a href="#" className="fw-bold text-gray-800 text-hover-primary fs-5 m-0">CRM Admin</a>
													</div>
													<div className="d-flex align-items-center mb-6">
														<span className="svg-icon svg-icon-2 ms-n1 me-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor"></path>
															</svg>
														</span>
														<a href="#" className="fw-bold text-gray-800 text-hover-primary fs-5 m-0">Admin Dashbaord</a>
													</div>
													<div className="d-flex align-items-center">
														<span className="svg-icon svg-icon-2 ms-n1 me-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor"></path>
															</svg>
														</span>
														<a href="#" className="fw-bold text-gray-800 text-hover-primary fs-5 m-0">Intranet Admin</a>
													</div>
												</div>
											</div>
    )
}
export default SinglePostSidebar
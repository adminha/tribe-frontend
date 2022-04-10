import Head from "../templates/master/head";

function Settings() {
    // Just a placeholder... Didn't have enough time to complete this page...
    return (
        <>
        <Head title="Tribe User Account Settings" />
        <div className="card mb-5 mb-xl-10">
            <div className="card-header border-0 cursor-pointer">
                <div className="row align-items-center">
                    <div className="card-title m-0">
                        <h3 className="fw-bolder m-0">Tribe User Account Settings</h3>
                    </div>
                </div>
            </div>
            <div className="card-body border-top p-9">
            <h3 className="pb-5">To be completed ...</h3>
                <div className="row mb-6 blury">
                    <label className="col-lg-4 col-form-label required fw-bold fs-6">Full Name</label>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6 fv-row fv-plugins-icon-container">
                                <input type="text" name="fname" className="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="First name" defaultValue="Mostafa" />
                            <div className="fv-plugins-message-container invalid-feedback"></div></div>
                            <div className="col-lg-6 fv-row fv-plugins-icon-container">
                                <input type="text" name="lname" className="form-control form-control-lg form-control-solid" placeholder="Last name" defaultValue="Safarian" />
                            <div className="fv-plugins-message-container invalid-feedback"></div></div>
                        </div>
                    </div>
                </div>
                <div className="row mb-6 blury">
                    <label className="col-lg-4 col-form-label required fw-bold fs-6">Company</label>
                    <div className="col-lg-8 fv-row fv-plugins-icon-container">
                        <input type="text" name="company" className="form-control form-control-lg form-control-solid" placeholder="Company name" defaultValue="Adminha" />
                    <div className="fv-plugins-message-container invalid-feedback"></div></div>
                </div>
                <div className="row mb-6 blury">
                    <label className="col-lg-4 col-form-label fw-bold fs-6">
                        <span className="required">Contact Phone</span>
                        <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="" data-bs-original-title="Phone number must be active" aria-label="Phone number must be active"></i>
                    </label>
                    <div className="col-lg-8 fv-row fv-plugins-icon-container">
                        <input type="tel" name="phone" className="form-control form-control-lg form-control-solid" placeholder="Phone number" defaultValue="+989372779303" />
                    <div className="fv-plugins-message-container invalid-feedback"></div></div>
                </div>
                <div className="row mb-6 blury">
                    <label className="col-lg-4 col-form-label fw-bold fs-6">Company Site</label>
                    <div className="col-lg-8 fv-row">
                        <input type="text" name="website" className="form-control form-control-lg form-control-solid" placeholder="Company website" defaultValue="adminha.com" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Settings;
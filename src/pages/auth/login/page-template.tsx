import LoginComponent from "./login-component";

function LoginPageTemplate() {
    return (
        <section className="vh-100 bg-light">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100 ">
                <div className="col col-xl-10">
                    <div className="card border-light rounded-3">
                    <div className="row g-0 ">
                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                            alt="login form" className="img-fluid"/>
                        </div>
                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
                            <LoginComponent />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default LoginPageTemplate;
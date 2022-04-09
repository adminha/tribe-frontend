import RegisterComponent from "./register-component";

function RegisterPageTemplate() {
    return (
        <section className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
            <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
                <div className="row d-flex justify-content-center align-items-center h-100 ">
                <div className="col col-xl-10">
                    <div className="card border-light rounded-3">
                    <div className="row g-0 ">
                        <div className="card-body p-4 p-lg-5 text-black">
                            <RegisterComponent />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}
export default RegisterPageTemplate
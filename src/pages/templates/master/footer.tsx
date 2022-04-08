const Footer = () => {
    return (
        <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
            <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
                <div className="text-dark order-2 order-md-1">
                    <span className="text-muted fw-bold me-1">2022©</span>
                    <a href="https://www.adminha.com" target="_blank" className="text-gray-800 text-hover-primary">Created with &#10084; by Mostafa Safarian</a>
                </div>
                <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                    <li className="menu-item">
                        <a href="https://www.adminha.com" target="_blank" className="menu-link px-2">Adminha</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
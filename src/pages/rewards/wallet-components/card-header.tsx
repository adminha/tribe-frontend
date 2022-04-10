const WalletCardHeader = (props) => {
    return (
        <div className="card-header border-0 cursor-pointer">
            <div className="row align-items-center">
                <div className="card-title m-0">
                    <h3 className="fw-bolder m-0">{props.title}</h3>
                </div>
            </div>
        </div>
    );
}

export default WalletCardHeader;
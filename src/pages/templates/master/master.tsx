import { useAppSelector } from "../../../app/hooks";
import { selectLoginStatus } from "../../auth/login/login-redux";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

const Master = (props) => {
	const isLoggedIn = useAppSelector(selectLoginStatus)
	console.log(isLoggedIn)
    return (
		<div className="d-flex flex-column flex-root">
			<div className="page d-flex flex-row flex-column-fluid">
				<Sidebar />
				<div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
					<Header />
						<Content>
							{props.children}
						</Content>
					<Footer />
				</div>
			</div>
		</div>
    );
}

export default Master;
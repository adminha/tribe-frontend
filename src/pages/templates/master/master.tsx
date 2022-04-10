import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectLoginStatus } from "../../../app/login-redux";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

function Master(props) {
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
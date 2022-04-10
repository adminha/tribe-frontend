import Link from "next/link"
import { useAppSelector } from "../../../../app/hooks"
import { selectLoginStatus } from "../../../../app/login-redux"
import SVGIcon from "./svg-icon"

function SidebarMenuItem(props) {
    const isLoggedIn = useAppSelector(selectLoginStatus)
    if (isLoggedIn && props.showForAuthenticated || !isLoggedIn && !props.showForAuthenticated) {
        return (
            <span className="menu-link">
                <SVGIcon />
                <Link href={props.href}>
                    <span className="menu-title" onClick={props.function}>{props.title}</span>
                </Link>
                <span className="menu-arrow"></span>
            </span>
        )
    }
    else {
        return(
            <></>
        )
    }
}
export default SidebarMenuItem
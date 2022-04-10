import { removeCookies } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { changeLoginStatus, selectLoginStatus } from "../../../../app/login-redux";
import SVGIcon from "./svg-icon";

function LogoutMenuItem() {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(selectLoginStatus)
    const handleLogout = () => {
        removeCookies("NestJwtToken")
        dispatch(changeLoginStatus(false))
        router.push('/')
    }
    if (isLoggedIn) {
        return (
            <span className="menu-link">
                <SVGIcon />
                <Link href='/'>
                    <span className="menu-title" onClick={handleLogout}>Logout</span>
                </Link>
                <span className="menu-arrow"></span>
            </span>
        );
    }
    else {
        return (
            <></>
        )
    }
}

export default LogoutMenuItem;
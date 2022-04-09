import { removeCookies } from "cookies-next";
import { useRouter } from "next/router";

function Logout() {
    removeCookies("NestJwtToken")
    const router = useRouter()
    return (
        router.push("/")
    );
}

export default Logout;
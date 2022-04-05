import { useRouter } from "next/router";

const Logout = () => {
    localStorage.clear();
    const router = useRouter()
    return (
        router.push("/")
    );
}

export default Logout;
import { useAuthStore } from "@/store/authStore";

export default function Home() {
    const {isloggedIn} = useAuthStore();
    console.log(isloggedIn)
    return (
        <>
            <div>home body</div>
        </>
    );
}

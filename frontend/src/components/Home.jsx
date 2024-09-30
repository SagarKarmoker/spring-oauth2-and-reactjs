
export default function Home() {
    const handleGoogle = async () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google" // change for github
    }
    return (
        <>
            <div>
                <h1>Spring Security and React</h1>
                <button onClick={handleGoogle}>
                    Log in Google
                </button>
            </div>
        </>
    )
}

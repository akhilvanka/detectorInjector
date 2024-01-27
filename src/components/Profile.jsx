export default function Profile({auth}) {
    return (
        <div>
            <h1>Email: {auth.currentUser.email}</h1>
        </div>
    )
}
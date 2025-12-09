const UserStatus = ({loggedIn, isAdmin}: {loggedIn: boolean, isAdmin: boolean}) => {
    let status;

    if (isAdmin && loggedIn) {
        status = <p>Welcome Admin!</p>
    } else if (!isAdmin && loggedIn) {
        status = <p>Welcome User</p>
    } else {
        status = <p>Login</p>
    }

    return (
        <div>
            {status}
        </div>
    )
}
export default UserStatus;

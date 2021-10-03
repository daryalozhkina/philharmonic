const User = (user) => {
    return(
        <tr className="user-row">
            <td>
                {user.id}
            </td>
            <td>
                {user.username}
            </td>
            <td>
                {user.gender}
            </td>
            <td>
                {user.date_birth}
            </td>
        </tr>
    )
}

const UserList = (users) => {
    return (
    <div className="users-list">
        <h1>Users</h1>
        <table className="user-list__table">
            <thead>
            <tr>
                <th>id</th>
                <th>username</th>
                <th>gender</th>
                <th>date birth</th>
            </tr>
            </thead>
            <tbody>
            {users.users.map(User)}
            </tbody>
        </table>
    </div>
    )
}


export default UserList;
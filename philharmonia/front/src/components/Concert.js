const Concert = ({concert}) => {
    return (
        <tr className="concert-row">
            <td>
                {concert.id}
            </td>
            <td>
                <Link to={`/concerts/detail/${concert.id}`} className="nav-link">
                        {concert.name}
                </Link>
            </td>
            <td>
                {concert.created}
            </td>
            <td>
                <Link to={`/concert/delete/${concert.id}`} className="nav-link">
                        delete
                </Link>
            </td>
        </tr>
    )
}

const ConcertList = ({concerts}) => {
//    console.log('concerts:', concerts);
    return (
        <table className={"concert-list"}>
            <thead>
            <tr>
                <th>id<th>
                <th>name</th>
                <th>created</th>
                <th>
                <Link to={"/users"} className="nav-link">
                                    Users
                                </Link></th>
            </tr>
            </thead>
            <tbody>
            {concerts.map((concert) => <Concert key={concert.name} concert={concert}/>)}
            </tbody>
        </table>
    )
}

export default ConcertList;
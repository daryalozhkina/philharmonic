const Concert = ({concert}) => {
    console.log('concert:', concert);
    return (
        <tr className="concert-row">
            <td>
                {concert.name}
            </td>
            <td>
                {concert.created}
            </td>
        </tr>
    )
}

const ConcertList = ({concerts}) => {
    console.log('concerts:', concerts);
    return (
        <table className={"concert-list"}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Created</th>
            </tr>
            </thead>
            <tbody>
            {concerts.map((concert) => <Concert key={concert.name} concert={concert}/>)}
            </tbody>
        </table>
    )
}

export default ConcertList;
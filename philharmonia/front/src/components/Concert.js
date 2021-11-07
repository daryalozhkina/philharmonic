import {NavLink as Link} from "react-router-dom";
import React from "react";

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
                {concert.desc}
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
    return (
            <table className={"concert-list__table"}>
                <thead>
                <tr>
                    <th>id<th>
                    <th>name</th>
                    <th>desc</th>
                    <th>created</th>
                </tr>
                </thead>
                <tbody>
                {concerts.map((concert) => <Concert key={concert.id} concert={concert}/>)}
                </tbody>
            </table>
    )
}
export default ConcertList;

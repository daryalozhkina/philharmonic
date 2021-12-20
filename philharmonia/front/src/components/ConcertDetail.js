import React from "react";
import {useParams} from "react-router";

const ConcertDetail = ({concerts, users}) => {
    let {id} = useParams();
    let concert = concerts.filter((item) =>item.id === +id)[0];

    return (
    <div className={"concert-detail"}>
            <h2>Concert: {concert.name}</h2>
            <h3>Desc: {concert.desc}</h3>
            <p>Created: {concert.created}</p>
   </div>
    )

}

export default ConcertDetail;
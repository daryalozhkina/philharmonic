const Item = ({item}) => {
    return (
        <tr className="item-row">
            <td>
                {item.id}
            </td>
            <td>
                {item.name}
            </td>
            <td>
                {item.concert}
            </td>
        </tr>
    )
}

const ItemList = ({items}) => {
    return (
        <div className="item-list">
            <h1>Номера</h1>
            <table className="item-list__table">
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>concert</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item) => <Item key={item.id} item={item}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default ItemList;
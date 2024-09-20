function Table({ title, data, price, id, score }) {
    return (
        <tbody>
            <tr>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{data}</td>
                <td>{price ? `${price} €` : `${score}/100`}</td>
            </tr>
        </tbody>
    );
}

export default Table;

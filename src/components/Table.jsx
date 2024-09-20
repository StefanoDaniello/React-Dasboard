import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Table({ title, data, price, id, score, slug }) {
    return (
        <tbody>
            <tr>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{data}</td>
                <td>{price ? `${price} €` : `${score}/100`}</td>
                <td>
                    <Link to={`/${price ? 'books' : 'film'}/${slug}`} key={slug}>
                        <button className="btn btn-primary">
                            <FontAwesomeIcon icon={faEye} />
                        </button>
                    </Link>
                </td>
            </tr>
        </tbody>
    );
}

export default Table;


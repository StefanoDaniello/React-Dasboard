import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { myContextApp } from '../store/context';  // Assumendo che il context sia definito qui

function Table({ title, data, price, id, score, slug, type }) {
    const { setCommedy } = myContextApp(); 

    // const navigate = useNavigate();
    //utilizzo useNavigate per passare i dati alla rotta
    const handleShowDetails = () => {
        setCommedy({ title, data, score });  // Setta i dati nel context
        // navigate(`/commedy/${slug}`, {
        //     state: {
        //         title,
        //         data,
        //         score,
        //     }
        // });
    };

    return (
        <>
            <tbody>
                <tr>
                    <th scope="row">{id}</th>
                    <td>{title}</td>
                    <td>{data}</td>
                    <td>{price ? `${price} €` : `${score}/100`}</td>
                    {type ? (
                        <td>
                            <Link to={`/commedy/${slug}`} key={slug}>
                                <button className="btn btn-success" onClick={handleShowDetails}>
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                            </Link>
                        </td>
                    ) : (
                        <td>
                            <Link to={`/${price ? 'books' : 'film'}/${slug}`} key={slug}>
                                <button className="btn btn-primary">
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                            </Link>
                        </td>
                    )}
                </tr>
            </tbody>
        </>
    );
}

export default Table;


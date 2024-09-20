import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm, faBook, faDashboard } from '@fortawesome/free-solid-svg-icons';

function SidebarComponents() {
  const location = useLocation();

  return (
    <div className="d-flex flex-column py-3 sidebar">
      <div className="d-flex">
        <div className="img-container">
        <FontAwesomeIcon icon={faDashboard} className="dasboard-icon" />
        </div>
        <div className='ms-2'>
          <strong className="text-center text-white">Dashboard</strong> <br />
          <small className='text-white'>prova</small>
        </div>
      </div>

      <strong className='text-white p-2'>Principali</strong>
      <ul className="nav flex-column">
        <li className={`nav-item ${location.pathname === '/' ? 'bg-active' : ''}`}>
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'text-dark' : 'text-white'}`}
          >
            <FontAwesomeIcon icon={faHome} className="me-2" />
            Home
          </Link>
        </li>
        <li className={`nav-item ${location.pathname === '/film' ? 'bg-active' : ''}`}>
          <Link
            to="/film"
            className={`nav-link ${location.pathname === '/film' ? 'text-dark' : 'text-white'}`}
          >
            <FontAwesomeIcon icon={faFilm} className="me-2" />
            Film
          </Link>
        </li>
        <li className={`nav-item ${location.pathname === '/books' ? 'bg-active' : ''}`}>
          <Link
            to="/books"
            className={`nav-link ${location.pathname === '/books' ? 'text-dark' : 'text-white'}`}
          >
            <FontAwesomeIcon icon={faBook} className="me-2" />
            Books
          </Link>
        </li>
        <li className={`nav-item ${location.pathname === '/commedy' ? 'bg-active' : ''}`}>
          <Link
            to="/commedy"
            className={`nav-link ${location.pathname === '/commedy' ? 'text-dark' : 'text-white'}`}
          >
            <FontAwesomeIcon icon={faBook} className="me-2" />
            Commedy
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SidebarComponents;

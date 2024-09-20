// import { useLocation } from 'react-router-dom';
import { myContextApp } from '../store/context';

function ModalComponent() {
    // //utilizzo useLocation per prendere i dati passati a queata rotta
    // const location = useLocation();
    // const { title, data, score } = location.state || {}; // Recupera i dati dalla navigazione

    const { commedy, setCommedy } = myContextApp(); 
    const handleClose = ()=>{
        setCommedy(null);
    }
    if (!commedy) return null;
    return (
        <div className="custom-modal-overlay">
            <div className="custom-modal">
                <div className="custom-modal-header">
                    <h5>Dettagli della Commedia</h5>
                    <button className="close-btn" onClick={handleClose}>
                        &times;
                    </button>
                </div>
                <div className="custom-modal-body">
                    <p><strong>Title:</strong> {commedy.title}</p>
                    <p><strong>Data:</strong> {commedy.data}</p>
                    <p><strong>Punteggio:</strong> {commedy.score}</p>
                </div>
                <div className="custom-modal-footer">
                    <button onClick={handleClose} className="modal-btn">Chiudi</button>
                </div>
            </div>
        </div>
    );
}

export default ModalComponent;

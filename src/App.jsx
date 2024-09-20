import SidebarComponents from './components/SidebarComponents';
import './App.css';

function App() {
  return (
    <>
      <div className="d-flex">
        <SidebarComponents />
        <div className='container-wrapper text-center pt-5 align-items-start '>
          <div className="message p-5">
            <div>
              <h1 className="text-black">Benvenuto nella Dashboard!</h1>
              <p className="text-black">Qui puoi gestire i tuoi film e libri in modo semplice e veloce.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

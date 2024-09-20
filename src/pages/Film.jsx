import SidebarComponents from '../components/SidebarComponents';
import Table from '../components/Table';
import { myContextApp } from '../store/context';

function Film(){
  const {filmList}=myContextApp()
    return (
      <>
      <div className="d-flex">
          <SidebarComponents />
          <div className='container-wrapper '>
              <div className="container">
                  <h1 className='py-2'>Film</h1>
                  <table class="table">
                      <thead>
                          <tr>
                              <th scope="col">#</th>
                              <th scope="col">Titolo</th>
                              <th scope="col">Data</th>
                              <th scope="col">Punteggio</th>
                              <th scope="col">Mostra</th>
                          </tr>
                      </thead>
                      {filmList.map(film => (
                          <Table
                            key={film.slug}
                            id={film.id}
                            title={film.title}
                            data={film.release_date}
                            score={film.rt_score}
                            slug={film.slug}
                          >
                          </Table>
                      ))}
                  </table>
              </div>

          </div>
      </div>
  </>
      );
}

export default Film
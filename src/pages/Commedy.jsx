import SidebarComponents from '../components/SidebarComponents';
import Table from '../components/Table';
import { myContextApp } from '../store/context';
import { Outlet } from 'react-router-dom';


function Commedy() {
    const {commedyList}=myContextApp()
    return (
        <>
            <div className="d-flex">
                <SidebarComponents />
                <div className='container-wrapper '>
                    <div className="container">
                        <h1 className='py-2'>Commedie</h1>
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
                            {commedyList.map(commedy => (
                                <Table
                                    key={commedy.slug}
                                    id={commedy.id}
                                    title={commedy.title}
                                    data={commedy.release_date}
                                    score={commedy.rt_score}
                                    slug={commedy.slug}
                                    type={"commedy"}
                                >
                                </Table>
                            ))}
                        </table>
                        <Outlet />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Commedy
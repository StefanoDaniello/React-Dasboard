import SidebarComponents from '../components/SidebarComponents';
import Table from '../components/Table';
import { myContextApp } from '../store/context';
function Books() {
    const { booksList } = myContextApp();
    return (
        <>
            <div className="d-flex">
                <SidebarComponents />
                <div className='container-wrapper '>
                    <div className="container">
                        <h1 className='py-2'>Books</h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Titolo</th>
                                    <th scope="col">Data</th>
                                    <th scope="col">Prezzo</th>
                                    <th scope="col">Mostra</th>
                                </tr>
                            </thead>
                            {booksList.map(book => (
                                <Table
                                    key={book.slug}
                                    id={book.id}
                                    title={book.title}
                                    data={book.release_date}
                                    price={book.price}
                                    slug={book.slug}
                                >
                                </Table>
                            ))}
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Books
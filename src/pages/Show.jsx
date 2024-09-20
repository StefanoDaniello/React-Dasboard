import { useParams, useLocation } from "react-router-dom";
import { myContextApp } from "../store/context";
import SidebarComponents from "../components/SidebarComponents";
import Card from "../components/Card";

function Show() {
    const location = useLocation();
    const { filmList, booksList } = myContextApp();
    const { FilmSlug, BooksSlug } = useParams();

    const film = filmList.find(item => item.slug === FilmSlug);
    const book = booksList.find(item => item.slug === BooksSlug);

    return (
        <>
            <div className="d-flex">
                <SidebarComponents />
                <div className='container-wrapper text-center  '>
                    {location.pathname.startsWith('/film/') && film ? (
                        <Card
                            title={film.title}
                            description={film.description}
                            producer={film.producer}
                            release_date={film.release_date}
                            rt_score={film.rt_score}
                            image={film.image}

                        ></Card>
                    ) : location.pathname.startsWith('/books/') && book ? (
                        <Card
                            title={book.title}
                            description={book.description}
                            author={book.author}
                            release_date={book.release_date}
                            price={book.price}
                            image={book.image}
                        ></Card>
                    ) : (
                        <p>Non trovato</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Show;

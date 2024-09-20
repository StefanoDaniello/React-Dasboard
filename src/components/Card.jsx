import { Link } from "react-router-dom";
function Card({ title, description, release_date, image, author, price, rt_score, producer }) {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p><strong>Release Date:</strong> {release_date}</p>
                {producer  && rt_score? (
                    <div>
                        {/* film  */}
                        <p><strong>Producer:</strong> {producer}</p>
                        <p><strong>Score:</strong> {rt_score}/100</p>
                        <Link to={"/film"}>
                            <button className="btn btn-primary">Indietro</button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        {/* book  */}
                        <p><strong>Author:</strong> {author}</p>
                        <p><strong>Price:</strong> {price} €</p>
                        <Link to={"/books"}>
                            <button className="btn btn-primary">Indietro</button>
                        </Link>
                    </div>
                )}
                {/* {producer && <p><strong>Producer:</strong> {producer}</p>} */}
            </div>
        </div>
    );
}

export default Card;

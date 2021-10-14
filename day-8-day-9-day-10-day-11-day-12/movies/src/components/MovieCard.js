import { Link } from "react-router-dom";

function MovieCard(props) {
    return (
        <div className="col-md-3 col-sm-6 mt-3">
            <div className="card" style={{ width: '100%' }}>
               <Link to = { '/home/movie/'+props.id } >
               <img src={ props.coverURL } className="card-img-top" alt="..." />
               </Link>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>

                </div>
            </div>
        </div>
    );
}

export default MovieCard;
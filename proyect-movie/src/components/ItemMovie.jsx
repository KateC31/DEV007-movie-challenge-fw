// Importa la imagen predeterminada 'NoImage.png'.
import DefaultImage from "/NoImage.png";
// Importa el componente 'Link' de 'react-router-dom' para crear enlaces.
import { Link } from "react-router-dom";

// Define el componente 'ItemMovie' como una función que recibe propiedades.
const ItemMovie = ({ id, title, type, year, poster }) => {

 // Decide qué imagen mostrar: la imagen de la película o la imagen predeterminada.
    let image = poster === "N/A" ? DefaultImage : poster;

    return (
        // Crea un enlace a la página de detalles de la película.
        <Link to={`/movies/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <article>
            {/* Define un artículo que representa un elemento de película. */}
            <div className="item-movie" style= {{ backgroundImage: `url(${image})`}}>
                 <div className="info">
                      <h4>{ title }</h4>
                 {/* Muestra el tipo de película y el año. */}     
                      <p className="row-info"><span>{type}</span><span>{year}</span></p>
                 </div>
            </div>
        </article>
        </Link>
    );
}

// Exporta el componente 'ItemMovie'.
export default ItemMovie;
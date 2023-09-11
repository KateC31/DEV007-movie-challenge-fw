// Importa 'useParams' de 'react-router-dom' para obtener los parámetros de la URL.
import { useParams } from "react-router-dom";
// Importa 'useFetch' desde '../hooks/useFetch' para manejar la obtención de datos.
import { useFetch } from "../hooks/useFetch";
// Importa la imagen predeterminada 'NoImage.png'.
import DefaultImage from '/NoImage.png';

// Define el componente 'SingleMovie'.
const SingleMovie = () => {
// Obtiene el parámetro 'id' de la URL utilizando 'useParams'.
    const { id } = useParams();
 // Utiliza 'useFetch' para obtener datos de una API utilizando el 'id' como parte de la consulta.   
    const { isLoading, error, data} = useFetch(`&i=${id}`);

// Si los datos están cargando, muestra un indicador de carga.
    if (isLoading) {
        return <div className="loading"></div>

    }

 // Extrae datos específicos de la película de la respuesta.
    const {Poster, Title, Plot, Year, Country, Director, Released, Runtime} = data;

// Decide qué imagen mostrar: la imagen de la película o la imagen predeterminada.
    let image = Poster === "N/A" ? DefaultImage : Poster;

// Renderiza el componente 'SingleMovie' con los datos obtenidos.
    return (
        !isLoading ?
        <div className="single-movie">
             <img src={image} alt={Title} />
             <div className="single-info">
                <h2>{ Title }</h2>
                <p>{ Plot }</p>
                <p><strong>Country: </strong>{ Country }</p>
                <p><strong>Director: </strong>{ Director }</p>
                <p><strong>Released: </strong>{ Released }</p>
                <p><strong>Runtime: </strong>{ Runtime }</p>
                <p><strong>Year: </strong>{ Year }</p>
             </div>
        </div>
        : ''
    );
}

// Exporta el componente 'SingleMovie' para que pueda ser utilizado en otros archivos.
export default SingleMovie;
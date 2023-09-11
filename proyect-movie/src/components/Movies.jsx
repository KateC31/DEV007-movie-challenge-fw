// Importa 'useContext' desde 'react' para acceder al contexto.
import { useContext } from "react";
// Importa 'DataContex' desde '../context/DataContext' para utilizar el contexto de datos.
import { DataContex } from "../context/DataContext";
// Importa el componente 'ItemMovie' desde './ItemMovie'.
import ItemMovie from "./ItemMovie";

// Define el componente 'Movies'.
const Movies = () => {
    // Utiliza 'useContext' para obtener datos y estado del contexto 'DataContex'.
    const {isLoading, data } = useContext(DataContex);

    return (
       <div className="movies-content">
        {
            !isLoading ? // Comprueba si los datos no están cargando.
                 data.map(item =>(
                    <ItemMovie 
                    key={item.imdbID}
                    id={item.imdbID}
                    title={item.Title}
                    type={item.Type}
                    year={item.Year}
                    poster={item.Poster}
                    />
                 ))
            : "" // Si los datos están cargando, no muestra nada (cadena vacía).
        }
       </div>
    );
}

// Exporta el componente 'Movies'.
export default Movies;
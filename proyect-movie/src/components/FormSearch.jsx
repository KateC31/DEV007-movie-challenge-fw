// Importación de las funciones 'useState' y 'useContext' desde la librería 'react'
import { useState, useContext } from "react";
// Importación del contexto 'DataContex' desde "../context/DataContext"
import { DataContex} from "../context/DataContext";

// Definición del componente 'FormSearch'
const FormSearch = () => {
     // Uso del hook 'useState' para manejar el estado 'title' (título de la película)
    const [title, setTitle] = useState("");
     // Uso del hook 'useContext' para obtener valores del contexto 'DataContex'
    const {setQuery, error} = useContext(DataContex);

    //const {data} = useFetch("&s=troya");
 // Definición de la función 'handleSubmit' que maneja la presentación del formulario
    const handleSubmit = e => {
        e.preventDefault();// Prevenir comportamiento por defecto del formulario
        setQuery(title);// Establecer el valor de 'title' en el contexto mediante 'setQuery'
        //console.log("title: ", title);
    }

     // Retorno del contenido JSX del componente 'FormSearch'
    return (
        <div className="form-search">
          {/* Contenedor del formulario de búsqueda */}
            <h2>MovieStream</h2>
           {/* Encabezado del formulario */}
            <form onSubmit={ handleSubmit }>
            {/* Formulario que se envía al llamar a 'handleSubmit' */}
        {/* Input para introducir el título de la película */}
                <input type="text" placeholder="Title movie" onChange={e =>setTitle(e.target.value)}/>  {/* Actualiza el estado 'title' al cambiar el valor del input*/}
                 {/* Botón para enviar el formulario */}
                <input type="submit" value="Search"/>
            </form>
            { error && <p className="error">The movie doesn't exist</p>}
        </div>
    );
}


// Exportación del componente 'FormSearch' para su uso en otros módulos
export default FormSearch;
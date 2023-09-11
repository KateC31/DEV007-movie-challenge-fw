// Importa el componente 'FormSearch' desde el archivo './formSearch'.
import FormSearch from "./formSearch";
// Importa el componente 'Movies' desde el archivo './Movies'.
import Movies from "./Movies";

// Define el componente 'MainPage'.
const MainPage = () => {
    return ( 
        <> {/* Utiliza el fragmento React para agrupar elementos sin necesidad de un div adicional. */}
        {/* Renderiza el componente 'FormSearch'. */}
           <FormSearch/>
          {/* Renderiza el componente 'Movies'. */} 
           <Movies/>

        </>
    );
}

// Exporta el componente 'MainPage'.
export default MainPage;
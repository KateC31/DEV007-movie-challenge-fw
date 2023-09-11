// Importa la hoja de estilo CSS para la aplicación.
import './App.css'
// Importa las rutas y el enrutador (BrowserRouter) de "react-router-dom".
import { Routes, Route, BrowserRouter } from "react-router-dom";
// Importa el componente 'MainPage' desde el archivo './components/MainPage'.
import MainPage from './components/MainPage';
// Importa el componente 'SingleMovie' desde el archivo './components/SingleMovie'.
import SingleMovie from './components/SingleMovie';

//https://www.omdbapi.com/?apikey=cae1b0b8&s=troya

//https://www.omdbapi.com/?apikey=cae1b0b8&i=tt11796304

// Define la función principal 'App', que es el componente principal de la aplicación.
function App() {


  return (
 // El componente principal 'App' está envuelto en un elemento <div> con la clase "App".    
    <div className="App">
{/* Utiliza el enrutador BrowserRouter para manejar las rutas de la aplicación. */}    
      <BrowserRouter>
{/* Define las rutas de la aplicación utilizando el componente 'Routes' de 'react-router-dom'. */}
      <Routes>
{/* Define una ruta para la página principal ("/") que renderiza el componente 'MainPage'. */}
        <Route path='/' element={<MainPage/> }/>
 {/* Define una ruta para las páginas de películas ("/movies/:id") que renderiza el componente 'SingleMovie'. */}
        <Route path='/movies/:id' element={<SingleMovie/> }/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

// Exporta el componente 'App' para que pueda ser utilizado en otros archivos.
export default App

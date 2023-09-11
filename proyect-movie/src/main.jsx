// Importa la biblioteca React.
import React from 'react'
// Importa la función ReactDOM para renderizar componentes React en el DOM.
import ReactDOM from 'react-dom/client'
// Importa el componente 'App' desde un archivo llamado 'App'.
import App from './App'
// Importa una hoja de estilo CSS llamada 'App.css'.
import './App.css'
// Importa el componente 'DataProvider' desde un archivo llamado 'DataContext' en la carpeta 'context'.
import { DataProvider } from "./context/DataContext";

// Crea un "root" en el DOM utilizando ReactDOM.createRoot() y obtiene un elemento con el id 'root'.
ReactDOM.createRoot(document.getElementById('root')).render(
 // Abre un modo estricto de React para mostrar advertencias y errores adicionales en desarrollo.
  <React.StrictMode>
{/* Utiliza el componente 'DataProvider' para proporcionar datos a la aplicación. */}   
    <DataProvider>
 {/* Renderiza el componente 'App', que es el punto de entrada principal de la aplicación. */}
     <App />  
    </DataProvider>
  </React.StrictMode>
)

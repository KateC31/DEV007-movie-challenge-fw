import './App.css'
import FormSearch from './components/formSearch'
import Movies from './components/Movies'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from './components/MainPage';
import SingleMovie from './components/SingleMovie';

//https://www.omdbapi.com/?apikey=cae1b0b8&s=troya

//https://www.omdbapi.com/?apikey=cae1b0b8&i=tt11796304

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/> }/>
        <Route path='/movies/:id' element={<SingleMovie/> }/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

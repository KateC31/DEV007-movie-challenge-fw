import './App.css'
import FormSearch from './components/formSearch'
import Movies from './components/Movies'

//https://www.omdbapi.com/?apikey=cae1b0b8&s=troya

//https://www.omdbapi.com/?apikey=cae1b0b8&i=tt11796304

function App() {


  return (
    <div className="App">
      < FormSearch/>
      <Movies />
    </div>
  )
}

export default App

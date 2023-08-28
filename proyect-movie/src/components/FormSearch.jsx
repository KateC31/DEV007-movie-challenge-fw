import { useState, useContext } from "react";
import { DataContex} from "../context/DataContext";


const FormSearch = () => {
    const [title, setTitle] = useState("");
    const {setQuery, error} = useContext(DataContex);

    //const {data} = useFetch("&s=troya");

    const handleSubmit = e => {
        e.preventDefault();
        setQuery(title);
        //console.log("title: ", title);
    }
    return (
        <div className="form-search">
            <h2>Old Movies Finder</h2>
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Title movie" onChange={e =>setTitle(e.target.value)}/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    );
}

export default FormSearch;
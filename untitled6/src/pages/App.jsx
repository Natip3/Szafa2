import '../App.css'
import {Outlet} from "react-router-dom";

function App() {


    return (
        <>
            <Outlet/>
            <h1>Robimy przegląd butów?</h1>
        </>
    )
}

export default App
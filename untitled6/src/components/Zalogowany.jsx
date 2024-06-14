
function Zalogowany(){
    let imie= localStorage.getItem('firstname')
    let nazwisko = localStorage.getItem('lastname')
    if(!localStorage.getItem('firstName')) {
       window.location.replace('/Error.jsx')
    }
    return(
        <section className="zalogowano">
            <div className="opiszalogowanego">
                <h1>Witaj {imie} {nazwisko}!</h1>
            </div>
        </section>
    )
}
export default Zalogowany
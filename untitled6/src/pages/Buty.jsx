import '../styles/Buty.css';
import {useState} from "react";
import {Link} from "react-router-dom";

const Szafa = () => {
    const buty = [
        {name: 'Buty1', link:"../../public/buty1.jpg", color: 'czarny', type: 'na obcasie słupkowym', material: 'zamsz'},
        {name: 'Buty2', link:"../../public/buty2.jpg", color: 'burgundowy', type: 'szpilki', material: 'lakierowane'},
        {name: 'Buty3', link:"../../public/buty3.jpg", color: 'czarny', type: 'szpilki', material: 'zamsz'},
        {name: 'Buty4', link:"../../public/buty4.jpg", color: 'czarny', type: 'sportowe', material: 'materiał'},
        {name: 'Buty5', link:"../../public/buty5.jpg", color: 'czarny', type: 'sportowe', material: 'sieteczkowe'},
        {name: 'Buty6', link:"../../public/buty6.jpg", color: 'szary', type: 'na codzień', material: 'materiał'},
        {name: 'Buty7', link:"../../public/buty7.jpg", color: 'czarny', type: 'na codzień', material: 'skóra ekologiczna'},
        {name: 'Buty8', link:"../../public/buty8.jpg", color: 'czarny', type: 'wyjściowe', material: 'skóra lakierowana'},
        {name: 'Buty9', link:"../../public/buty9.jpg", color: 'czarny', type: 'wyjściowe', material: 'skóra sztuczna'},
    ];

    console.log(buty)

    const [znajdz, setZnajdz] = useState('');

    const handleInputChange = (event) => {
        setZnajdz(event.target.value);
    };



    const Przefiltrowane = buty.filter((zdjecie) =>
        zdjecie.name.toLowerCase().includes(znajdz.toLowerCase()) ||
        zdjecie.color.toLowerCase().includes(znajdz.toLowerCase()) ||
        zdjecie.type.toLowerCase().includes(znajdz.toLowerCase()) ||
        zdjecie.material.toLowerCase().includes(znajdz.toLowerCase())
    );

    return(

        <div className="page-wrapper">

            <h1>Twoja szafa</h1>

            <input name={"szukaj"} type={"text"} placeholder={"Wyszukaj buty"} value={znajdz} onChange={handleInputChange}/>
            <br/><br/><br/>

            <div className="shoe-list">
                {Przefiltrowane.map((shoe, index) => (
                    <div key={index} className="shoe-item">
                        <Link to={`/buty/${shoe.name}`}>
                            <img src={shoe.link} alt={shoe.name}/>
                        </Link>
                        <h3>{shoe.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Szafa
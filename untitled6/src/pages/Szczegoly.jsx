import {useParams} from "react-router-dom";


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

const Opis = () => {
    const { name } = useParams();
    const but = buty.find((b) => b.name === name);

    if (!but) {
        return <h2>Nie znaleziono butów o nazwie {name}</h2>;
    }

    return (
        <div className="page-wrapper">
            <h1>{but.name}</h1>
            <img src={but.link} alt={but.name}/>
            <h2>Kolor: {but.color}</h2>
            <h2>Typ: {but.type}</h2>
            <h2>Materiał: {but.material}</h2>
        </div>
    );
};

export default Opis;
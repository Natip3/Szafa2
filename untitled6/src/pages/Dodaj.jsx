import React, { useState } from 'react';


function Dodaj() {
    const [product, setProduct] = useState({
        name: '',
        image: null,
        data: '',
        place: '',
        description: '',
        color: '',
        size: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setProduct({ ...product, image: files[0] });
        } else {
            setProduct({ ...product, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Produkt:', product);
        alert('Buty zostały dodane!');
    };

    return (
        <div className="container">
            <br/>
            <h1 className="dodawanko">Dodaj Buty</h1>
            <br/>
            <form onSubmit={handleSubmit} className="zatwierdzanko">
                <div className="wyniki">
                    <label htmlFor="name">Nazwa:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="sprawdzanie"
                        required
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <div className="wyniki">
                    <label htmlFor="image">Zdjęcie:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        className="sprawdzanie"
                        onChange={handleChange}
                    />
                </div>
                <div className="wyniki">
                    <label htmlFor="data">Data zakupu:</label>
                    <br/>
                    <input
                        type="date"
                        id="data"
                        name="data"
                        className="sprawdzanie"
                        style={{width: '200px', padding: '2px'}}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <div className="wyniki">
                    <label htmlFor="place">Miejsce zakupu:</label>
                    <input
                        type="text"
                        id="place"
                        name="place"
                        className="sprawdzanie"
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <div className="wyniki">
                    <label htmlFor="description">Opis:</label>
                    <br/>
                    <textarea
                        id="description"
                        name="description"
                        className="sprawdzanie"
                        onChange={handleChange}
                    ></textarea>
                </div>
                <br/>
                <div className="wyniki">
                    <label htmlFor="color">Kolor:</label>
                    <br/>
                    <input
                        type="color"
                        id="color"
                        name="color"
                        className="sprawdzanie"
                        style={{width: '200px', height: '150px', padding: '2px'}}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <div className="wyniki">
                    <label htmlFor="size">Rozmiar EU:</label>
                    <br/>
                    <input
                        type="number"
                        id="size"
                        name="size"
                        className="sprawdzanie"
                        style={{width: '200px', padding: '2px'}}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <button type="submit" className="button">Dodaj buty</button>
                <br/><br/>
            </form>
        </div>
    );
}

export default Dodaj;

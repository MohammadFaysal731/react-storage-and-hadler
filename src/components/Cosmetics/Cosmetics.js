import React, { useEffect, useState } from 'react';
import './Cosmetics.css'
import Cosmetic from '../Cosmetic/Cosmetic';
import { getTotal } from '../Utilities/calculate';
// import { add } from '../Utilities/calculate';
// import add from '../Utilites/calculate';

const Cosmetics = () => {
    // const first = 55;
    // const second = 66;
    // const total = add(first, second)
    //   const cosmetics =  [
    //         { id: 1, name: 'Alta', price: 100 },
    //         { id: 2, name: 'Palis', price: 200 },
    //         { id: 3, name: 'Malis', price: 300 },
    //         { id: 4, name: 'Balis', price: 400 },
    //         { id: 5, name: 'Nalis', price: 500 }
    //     ]; 
    // [
    //     {
    //         "id": "62387532383198e04b5a97d0",
    //         "price": 145,
    //         "name": "Mcneil Blackwell"
    //     },
    //     {
    //         "id": "623875328638e90d1407e18c",
    //         "price": 157,
    //         "name": "Adriana Barton"
    //     },
    //     {
    //         "id": "62387532226b55e5673d5320",
    //         "price": 90,
    //         "name": "Blanchard Shepherd"
    //     },
    //     {
    //         "id": "623875327348d00707d67e1c",
    //         "price": 130,
    //         "name": "Sara Pace"
    //     },
    //     {
    //         "id": "623875327f044da2ddf8e0eb",
    //         "price": 135,
    //         "name": "Marguerite Doyle"
    //     }
    // ] 
    const [cosmetics, setCosmetic] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetic(data))
    }, [])
    const total = getTotal(cosmetics);
    return (
        <div className=''>
            <h1>Welcome to my cosmetics store</h1>
            <p>Money needed:{total}</p>
            {/* <p>Total:{total}</p> */}
            <div className="cosmetics">
                {
                    cosmetics.map(cosmetic => <Cosmetic
                        key={cosmetic.id}
                        cosmetic={cosmetic}
                    ></Cosmetic>)
                }
            </div>
        </div>
    );
};

export default Cosmetics;
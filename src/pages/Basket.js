import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';

function Basket() {

    const basket = useSelector((state => state.dataReducer.basket));

    const showItem = (item, index) => {
        return (
            <div>{item.name}</div>
        )
    }

    return (
        <div>
            <Header />
            Basket
            {basket.map((item, index) => showItem(item, index))}
        </div>
    )
}

export default Basket;

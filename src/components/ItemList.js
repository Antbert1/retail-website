import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue, setBasket, setFilteredClothingList, setBasketIDs } from '../redux/actions';
import Button from '../components/Button';

function ItemList() {
    const dispatch = useDispatch();
    const clothingData = useSelector((state => state.dataReducer.filteredClothingList));
    const clothingDataFull = useSelector((state => state.dataReducer.clothingList));
    const basket = useSelector((state => state.dataReducer.basket));
    const basketIDs = useSelector((state => state.dataReducer.basketIDs));

    const filterByCategory = (category) => {
        const filteredItems = clothingDataFull.filter(function (item) {
            return item.category.includes(category);
        });
        dispatch(setFilterValue(category));
        dispatch(setFilteredClothingList(filteredItems));
    }

    const showCategories = (category, index) => {
        return (
            <div className="category" key={index} onClick={() => filterByCategory(category)}>{category}</div>
        )
    }

    const addToBasket = (item) => {
        item.inBasket = true;
        let basketCopy = [...basket];
        let basketIDsCopy = [...basketIDs];
        basketIDsCopy.push(item.id);
        basketCopy.push(item);
        dispatch(setBasket(basketCopy));
        dispatch(setBasketIDs(basketIDsCopy));
    }

    const removeFromBasket = (item) => {
        const basketCopy = basket.filter(function (obj) {
            return obj.id !== item.id;
        });
        let basketIDsNew = basketIDs.filter(function (id) {
            return id !== item.id
        })
        dispatch(setBasketIDs(basketIDsNew));
        dispatch(setBasket(basketCopy));
    }

    const renderAddButton = (item) => {
        //Check if basketIDs contains the current id
        if (item.quantity === 0) {
            return <div className="itemUnavailable">Item Unavailable</div>
        } else if (!basketIDs.includes(item.id)) {
            return <Button title="Add To Basket" classes="customBtn greenBtn" buttonClicked={() => addToBasket(item)} />
        } else {
            return <Button title="Remove From Basket" classes="customBtn redBtn" buttonClicked={() => removeFromBasket(item)} />
        }
    }

    const showItem = (item, index) => {
        return (
            <div className="item" key={index}>
                <div className="itemImg">
                    <img
                        src={item.image}
                        alt="clothing"
                        className="clothingImage"
                    />
                </div>
                <div className="itemTitleRow">
                    <div className="itemTitle">
                        {item.name}
                    </div>
                    <div className="itemCats">
                        {item.category.split(" ").map((cat, i) => showCategories(cat, i))}
                    </div>
                </div>
                <div className="itemBottomRow">
                    <div className="price">
                        £{item.price}
                        {item.quantity > 0 ?
                            <div className="quantity">({item.quantity} available)</div>
                            :
                            <div className="quantity">Out of Stock</div>
                        }
                    </div>
                    {renderAddButton(item)}
                </div>
            </div>
        )
    }

    return (
        <div className="itemGrid">
            {clothingData.map((item, index) => showItem(item, index))}
        </div>
    )
}

export default ItemList;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue, setClothingList, setFilteredClothingList } from '../redux/actions';
import Button from '../components/Button';

function ItemList() {
    const dispatch = useDispatch();
    const clothingData = useSelector((state => state.dataReducer.filteredClothingList));
    const clothingDataFull = useSelector((state => state.dataReducer.clothingList));

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
        debugger;
    }

    const showItem = (item, index) => {
        return (
            <div className="item">
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
                    <Button title="Add To Basket" classes="customBtn greenBtn" onClick={() => addToBasket(item)} />
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

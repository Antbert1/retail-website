import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import { setBasket, setBasketIDs } from '../redux/actions';
import Button from '../components/Button';
import Header from '../components/Header';

function Basket() {
    const dispatch = useDispatch();
    const basket = useSelector((state => state.dataReducer.basket));
    const basketIDs = useSelector((state => state.dataReducer.basketIDs));

    //Track what discounts have been applied
    const [discounts, setDiscounts] = useState([
        {
            index: 0,
            title: "£5 off your Order",
            active: false,
            visible: true,
            value: 5
        },
        {
            index: 1,
            title: "£10 off when you spend over £50",
            active: false,
            visible: false,
            value: 10
        },
        {
            index: 2,
            title: "£15 off when you buy a cycling item and spend over £75",
            active: false,
            visible: false,
            value: 15
        }
    ]);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        let total = getTotal();
        let discountsCopy = [...discounts];
        if (total > 50) {
            discountsCopy[1].visible = true;
        }
        let containsCycling = false;
        for (var i = 0; i < basket.length; i++) {
            if (basket[i].category.includes("cycling")) {
                containsCycling = true;
                break;
            }
        }
        if (total > 75 && containsCycling) {
            discountsCopy[2].visible = true;
        }
        setDiscounts(discountsCopy);
        setTotal(total);
    }, []);

    const showCategories = (category, index) => {
        return (
            <div className="category" key={index}>{category}</div>
        )
    }

    const addDiscount = (discount, index) => {
        let discountsCopy = [...discounts];
        discountsCopy[index].active = true;
        setDiscounts(discountsCopy);
        const newTotal = total - discount.value;
        setTotal(newTotal);
    }

    const removeDiscount = (discount, index) => {
        let discountsCopy = [...discounts];
        discountsCopy[index].active = false;
        setDiscounts(discountsCopy);
        const newTotal = total + discount.value;
        setTotal(newTotal);
    }

    const showDiscounts = (discount, index) => {
        if (discount.visible) {
            return (
                <div className="discount" key={index}>
                    <div>{discount.title}</div>
                    {discount.active ?
                        <FontAwesomeIcon icon={faSquareCheck} onClick={() => removeDiscount(discount, index)} />
                        :
                        <FontAwesomeIcon icon={faSquare} onClick={() => addDiscount(discount, index)} />
                    }

                </div>
            )
        }
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

    const showItem = (item, index) => {
        return (
            <div className="item" key={index}>
                <div className="itemTitleRow">
                    <div className="itemTitle">
                        {item.name}
                    </div>
                    <div className="itemCats">
                        {item.category.split(" ").map((cat, i) => showCategories(cat, i))}
                    </div>
                </div>
                <div className="itemInfo">
                    <div className="itemImg">
                        <img
                            src={item.image}
                            alt="clothing"
                            className="clothingImage"
                        />
                    </div>
                    <div className="itemBlurb">
                        <div>
                            <p className="blurbParagraph">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                            <div className="price">
                                £{item.price}
                            </div>
                        </div>
                        <div className="removeFromBasket" onClick={() => removeFromBasket(item)}>Remove From Basket</div>
                    </div>

                </div>
            </div>
        )
    }

    const getTotal = () => {
        return (basket.reduce((n, { price }) => n + parseFloat(price), 0))
    }

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row"><h2>Basket</h2></div>
                {basketIDs.length === 0 ?
                    <div className="basketEmpty">Your basket is currently empty</div>
                    :
                    <div>
                        <div className="row">
                            {basket.map((item, index) => showItem(item, index))}
                        </div>
                        <div className="discounts">
                            <h3>Available Discounts</h3>
                            <div>
                                {discounts.map((item, index) => showDiscounts(item, index))}
                            </div>
                        </div>
                        <div className="payDetails">
                            <div className="total">
                                Total: £{total}
                            </div>
                            <Button title="Pay Now" classes="customBtn greenBtn shortBtn" />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Basket;

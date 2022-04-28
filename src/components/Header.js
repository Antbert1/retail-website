import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Header() {

    const goToBasket = () => {
    }

    return (
        <div className="container-fluid topBanner">
            <div className="topBannerInner">
                <Link to="/">
                    <div className="titleItem">Retail Website</div>
                </Link>
                <Link to="/basket">
                    <FontAwesomeIcon icon={faBasketShopping} className="titleItem" onClick={goToBasket} />
                </Link>
            </div>
        </div>
    )
}

export default Header;

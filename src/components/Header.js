import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Header() {
    const basketIDs = useSelector((state => state.dataReducer.basketIDs));

    return (
        <div className="container-fluid topBanner">
            <div className="topBannerInner">
                <Link to="/">
                    <div className="titleItem">Retail Website</div>
                </Link>
                <Link to="/basket">
                    {basketIDs.length > 0 && <div className="totalItems">{basketIDs.length}</div>}
                    <FontAwesomeIcon icon={faBasketShopping} className="titleItem" />
                </Link>
            </div>
        </div>
    )
}

export default Header;

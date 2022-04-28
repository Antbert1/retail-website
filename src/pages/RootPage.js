import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setClothingList, setFilteredClothingList, setFilterValue } from '../redux/actions';
import Header from '../components/Header';
import ItemList from '../components/ItemList';
import Button from '../components/Button';
import clothingData from "../clothingData";

function RootPage() {
    const dispatch = useDispatch();
    const filterValue = useSelector((state => state.dataReducer.filterValue));
    const fullClothingList = useSelector((state => state.dataReducer.clothingList));

    useEffect(() => {
        //Initialise list from ItemList.js file. In reality this would be a fetch request to an api
        dispatch(setClothingList(clothingData));
        dispatch(setFilteredClothingList(clothingData));
    }, []);

    const clearFilter = () => {
        dispatch(setFilterValue(""));
        dispatch(setFilteredClothingList(fullClothingList));
    }

    return (
        <div>
            <Header />
            {filterValue !== "" ?
                <div className="filterValue filterValueSpace">
                    <div>Filtered by: <span className="filterItem">{filterValue}</span></div>
                    <Button title="Clear Filter" buttonClicked={clearFilter} classes="customBtn redBtn" />
                </div>
                :
                <div className="filterValueSpace"></div>
            }
            <ItemList />
        </div>
    )
}

export default RootPage;

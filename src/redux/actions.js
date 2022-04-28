export const CLOTHING_LIST = 'CLOTHING_LIST';
export const FILTERED_CLOTHING_LIST = 'FILTERED_CLOTHING_LIST';
export const FILTER_VALUE = 'FILTER_VALUE';
export const BASKET = 'BASKET';
export const BASKET_IDS = 'BASKET_IDs';

export function setClothingList(clothingList) {
    return {
        type: CLOTHING_LIST,
        clothingList,
    };
}

export function setFilteredClothingList(filteredClothingList) {
    return {
        type: FILTERED_CLOTHING_LIST,
        filteredClothingList,
    };
}

export function setFilterValue(filterValue) {
    return {
        type: FILTER_VALUE,
        filterValue,
    };
}

export function setBasket(basket) {
    return {
        type: BASKET,
        basket,
    };
}

export function setBasketIDs(basketIDs) {
    return {
        type: BASKET_IDS,
        basketIDs,
    };
}
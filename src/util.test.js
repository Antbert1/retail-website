import { getTotal } from "./util";

const basket = [
    {
        id: 1,
        name: "Fleece, Red",
        category: "Womens hiking",
        price: "32",
        quantity: 4,
        image: "https://cdn.pixabay.com/photo/2016/10/07/19/05/girl-1722402_960_720.jpg"
    },
    {
        id: 2,
        name: "Boots, Brown",
        category: "Womens hiking",
        price: "99",
        quantity: 10,
        image: "https://cdn.pixabay.com/photo/2016/09/02/11/10/boots-1638873_960_720.jpg"
    },
    {
        id: 3,
        name: "Fleece, Green",
        category: "Mens hiking",
        price: "34",
        quantity: 6,
        image: "https://cdn.pixabay.com/photo/2017/05/26/14/58/fabric-2346211_960_720.jpg"
    }
];

test("Sum all values in basket", () => {
    expect(getTotal(basket)).toBe(165);
})
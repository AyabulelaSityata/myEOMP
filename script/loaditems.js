// load items if they are not available

let allProducts = [
    {
        id: 1,
        category: "pants",
        image: 'https://i.postimg.cc/0NvPsQpH/55.jpg',
        price: 'R2000'
    },

    {
        id: 2,
        category: "pants",
        image: 'https://i.postimg.cc/0NvPsQpH/55.jpg',
        price: 'R2000'
    },

    {
        id: 3,
        category: "pants",
        image: 'https://i.postimg.cc/xTG9F92j/p2.jpg',
        price: 'R2000'
    },

    {
        id: 4,
        category: "pants",
        image: 'https://i.postimg.cc/sDjLszWg/p3.jpg',
        price: 'R2000'
    },
     {
        id: 5,
        category: "hoodies",
        image: 'https://i.postimg.cc/0NvPsQpH/55.jpg',
        price: 'R2000'
    },

    {
        id: 6,
        category: "hoodies",
        image: 'https://i.postimg.cc/0NvPsQpH/55.jpg',
        price: 'R2000'
    },

    {
        id: 7,
        category: "hoodies",
        image: 'https://i.postimg.cc/xTG9F92j/p2.jpg',
        price: 'R2000'
    },

    {
        id: 8,
        category: "hoodies",
        image: 'https://i.postimg.cc/sDjLszWg/p3.jpg',
        price: 'R2000'
    },
    {
        id: 9,
        category: 'sneaker',
        image: 'https://i.postimg.cc/0NvPsQpH/55.jpg',
        price: 'R2000'
    },

    {
        id: 10,
        category: "sneaker",
        image: 'https://i.postimg.cc/0NvPsQpH/55.jpg',
        price: 'R2000'
    },

    {
        id: 11,
        category: "sneaker",
        image: 'https://i.postimg.cc/xTG9F92j/p2.jpg',
        price: 'R2000'
    },

    {
        id: 12,
        category: "sneaker",
        image: 'https://i.postimg.cc/sDjLszWg/p3.jpg',
        price: 'R2000'
    },
     {
        id: 13,
        category: "caps",
        image: 'https://i.postimg.cc/0NvPsQpH/55.jpg',
        price: 'R2000'
    },

    {
        id: 14,
        category: "caps",
        image: 'https://i.postimg.cc/0NvPsQpH/55.jpg',
        price: 'R2000'
    },

    {
        id: 15,
        category: "caps",
        image: 'https://i.postimg.cc/xTG9F92j/p2.jpg',
        price: 'R2000'
    },

    {
        id: 16,
        category: "caps",
        image: 'https://i.postimg.cc/sDjLszWg/p3.jpg',
        price: 'R2000'
    },
]
let items = JSON.parse(localStorage.getItem('products'));
if (!items){
    localStorage.setItem('products', JSON.stringify(allProducts));
}
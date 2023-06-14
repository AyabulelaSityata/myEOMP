let products = document.querySelector('.productList')
let productList = [
    {
        id: 1,
        title: 'Cargo pants',
        image: 'https://i.postimg.cc/0NvPsQpH/55.jpg',
        price: 'R200 - R300'
    },

    {
        id: 2,
        title: 'Hoodies',
        image: 'https://i.postimg.cc/QtQJcCF5/hhhd.jpg',
        price: 'R250 - R450'
    },

    {
        id: 3,
        title: 'Sneakers',
        image: 'https://i.postimg.cc/FsH4LdWX/sneak1.jpg',
        price: 'R1300 - R2500'
    },

    {
        id: 4,
        title: 'Caps/Beanies',
        image: 'https://i.postimg.cc/7ZrPWLhb/cap.jpg',
        price: 'R230 - R380'
    },

];

productList.forEach((product) => {
    products.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.price}</p>
                <a href="./products.html" class="btn"><button>View more</button></a>
            </div>
        </div>`
})
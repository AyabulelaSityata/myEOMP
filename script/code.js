let products = document.querySelector('.productList')
let featuredProducts = [
    {
        id: 1,
        title: 'Cargo pants',
        description: 'ranges from black white all colors',
        image: 'https://i.postimg.cc/0NvPsQpH/55.jpg',
        price: 300
    },

    {
        id: 2,
        title: 'Hoodies',
        description: 'ranges from black white all colors',
        image: 'https://i.postimg.cc/QtQJcCF5/hhhd.jpg',
        price: 450
    },

    {
        id: 3,
        title: 'Sneakers',
        description: 'ranges from black white all colors',
        image: 'https://i.postimg.cc/FsH4LdWX/sneak1.jpg',
        price: 2500
    },

    {
        id: 4,
        title: 'Caps/Beanies',
        description: 'ranges from black white all colors',
        image: 'https://i.postimg.cc/7ZrPWLhb/cap.jpg',
        price: 380
    },

];

featuredProducts.forEach((product) => {
    products.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                 <p class="card-desc">${product.description}</p>
                <p class="card-text">R${product.price}</p>
                <a href="./products.html" class="btn"><button>View more</button></a>
            </div>
        </div>`
})
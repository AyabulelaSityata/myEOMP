let cargoPants = document.querySelector('.cargo')
let pantsList = [
    {
        id: 1,
        title: 'Cargo#1',
        image: 'https://i.postimg.cc/0NvPsQpH/55.jpg',
        price: 'R2000'
    },

    {
        id: 2,
        title: 'Cargo#2',
        image: 'https://i.postimg.cc/0NvPsQpH/55.jpg',
        price: 'R2000'
    },

    {
        id: 3,
        title: 'Cargo#3',
        image: 'https://i.postimg.cc/xTG9F92j/p2.jpg',
        price: 'R2000'
    },

    {
        id: 4,
        title: 'Cargo#4',
        image: 'https://i.postimg.cc/sDjLszWg/p3.jpg',
        price: 'R2000'
    },
]

pantsList.forEach((cargo) => {
    cargoPants.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="${cargo.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${cargo.title}</h5>
            <p class="card-text">${cargo.price}</p>
            <a href="#" class="btn"><button>Add to cart</button></a>
        </div>
    </div>`
})

// HOODIES

let hoodies = document.querySelector('.hoodie')
let hoodiesList = [
    {
        id: 1,
        title: 'Cargo pants',
        image: 'https://i.postimg.cc/0NvPsQpH/55.jpg',
        price: 'R2000'
    },

    {
        id: 2,
        title: 'Hoodies',
        image: 'https://i.postimg.cc/0NvPsQpH/55.jpg',
        price: 'R2000'
    },

    {
        id: 3,
        title: 'Sneakers',
        image: 'https://i.postimg.cc/xTG9F92j/p2.jpg',
        price: 'R2000'
    },

    {
        id: 4,
        title: 'Caps/Beanies',
        image: 'https://i.postimg.cc/sDjLszWg/p3.jpg',
        price: 'R2000'
    },
]
hoodiesList.forEach((hoodie) => {
    hoodies.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="${hoodie.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${hoodie.title}</h5>
            <p class="card-text">${hoodie.price}</p>
            <a href="#" class="btn"><button>Add to cart</button></a>
        </div>
    </div>`
})
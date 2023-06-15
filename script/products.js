let productList = document.querySelector('.products');
let allProducts = JSON.parse(localStorage.getItem('products'));

let btnFilter = document.querySelector('.btn-filter');

// filtering products by category
let filterElement = document.querySelector('.filter');

btnFilter.addEventListener('click', () => {
    let filter = filterElement.value;

    let filteredProducts = allProducts;

    // if all is selected
    if (filter === 'pants'){
        filteredProducts = allProducts.filter(product => {
            return product.category === 'pants';
        })
    } else if (filter === 'hoodies'){
        filteredProducts = allProducts.filter(product => {
            return product.category === 'hoodies';
        })
    } else if (filter === 'sneaker'){
        filteredProducts = allProducts.filter(product => {
            return product.category === 'sneaker';
        })
    } else if (filter === 'caps'){
        filteredProducts = allProducts.filter(product => {
            return product.category === 'caps';
        })
    }

    displayProducts(filteredProducts);
   
});

let checkoutItems = []

function displayProducts(products){
    productList.innerHTML = "";
    products.forEach((product) => {
        productList.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.category}</h5>
                <p class="card-text">${product.price}</p>
                <a class="btn"><button class="add">Add to cart</button></a>
            </div>
        </div>` 

        document.querySelector('.add')
        .addEventListener('click', (e) => {
            e.preventDefault();
            checkoutItems.push(product);
            localStorage.setItem('checkoutItems', 
            JSON.stringify(checkoutItems));
        })
       
    }) 
   
    
}

displayProducts(allProducts)
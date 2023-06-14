let products = JSON.parse(localStorage.getItem('products')) || []

let product_target = document.querySelector('.myProducts')


let localData = [
    // insert data here
    {
        id: 1,
        description: "black and white",
        price: 200,
        image: "https://i.postimg.cc/0NvPsQpH/55.jpg",
        category: "Category1"
    },

    products.push(localData)
]

function displayAdmin() {
    products.forEach((product) => {
        document.querySelector('.products').innerHTML += `
        <tr>
            <th class="col-2"><span class="Type text-black">${product.id}</span></th>
            <th class="col-2"><span class="Type text-black">${product.category}</span></th>
            <th class="col-2"><span class="Type text-black">${product.name}</span></th>
            <th class="col-2"><span class="Type text-black">R${product.price}</span></th>
    
                <button type="button" class="delete" onclick="deleteProduct(${product.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </span></th>
            <th class="col-2"><span class="Type text-black">
                <button type="button" class="edit" onclick="editProduct(${product.id})">
                    <i class="fas fa-edit"></i>
                </button>
            </span></th>
        </tr>`;
    });
}

// Set array to localStorage

localStorage.setItem('products', JSON.stringify(products))


//



window.onload = function() {
    var overlay = document.getElementById('overlay');
    var closeBtn = document.getElementById('closeBtn');
    
    overlay.style.display = 'flex';

    closeBtn.onclick = function() {
        overlay.style.display = 'none';
    };
};


let products = [
    {
        id: 0,
        image: "https://i.pinimg.com/564x/3f/4a/eb/3f4aeb727853d059366f587be61438c1.jpg",
        product: "Gnar Figure",
        price: 100.0,
    },
    {
        id: 1,
        image: "https://i.pinimg.com/564x/7f/1f/e5/7f1fe54f08de26eaa4a7ad930f29797c.jpg",
        product: "Azir Figure",
        price: 100.0,
    },
    {
        id: 2,
        image: "https://i.pinimg.com/564x/a8/10/cc/a810cc3010b48356f2df7ac0ef361fac.jpg",
        product: "Yuumi Figure",
        price: 100.0,
    },
    {
        id: 3,
        image: "https://i.pinimg.com/564x/a7/fb/44/a7fb4464f5719096c3903ff1cfead676.jpg",
        product: "Alistar Figure",
        price: 100.0,
    },
    {
        id: 4,
        image: "https://i.pinimg.com/564x/8d/3b/d3/8d3bd33d4ca90f235e3f46d8dbc70506.jpg",
        product: "Jhin Figure",
        price: 100.0,
    },
    {
        id: 5,
        image: "https://i.pinimg.com/564x/4c/92/18/4c9218f0be539e2e55355c249bc716a6.jpg",
        product: "Heimerdinger Figure",
        price: 100.0,
    },

    {
        id: 6,
        image: "https://i.pinimg.com/564x/59/2d/f3/592df399a7815d6b5ec9981581f51580.jpg",
        product: "Kindreds Figure",
        price: 100.0,
    },

    {
        id: 7,
        image: "https://i.pinimg.com/564x/3e/83/f9/3e83f940d0ab4af083113c0ef6594af2.jpg",
        product: "Jax Figure",
        price: 100.0,
    },

    {
        id: 8,
        image: "https://i.pinimg.com/564x/ac/76/4c/ac764c5e4659710783ecbd354c3b8767.jpg",
        product: " Tristana Figure",
        price: 100.0,
    },
];


function readProducts() {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";
    products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${product.image}" alt="Imagem do produto">
            <div class="card-container--info">
                <p>${product.product}</p>
                <div class="card-container--price">
                    <p>R$ ${product.price.toFixed(2)}</p>
                    <img class="trash" src="./img/icons8-lixo-64.png" alt="Ícone do Lixo" onclick="deleteProduct(${product.id})">
                    <img class="edit" src="./img/icons8-caneta-64.png" alt="Ícone de Edição" onclick="updateProduct(${product.id})">
                </div>
            </div>
        `;
        cards.appendChild(card);
    });
}

function createProduct() {
    const form = document.getElementById("form-product");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const price = parseFloat(document.getElementById("price").value);
        const image = document.getElementById("image").value;
        if (name && price && image) {
            const newProduct = {
                id: products.length,
                image,
                product: name,
                price,
            };
            products.push(newProduct);
            readProducts();
            form.reset();
        } else {
            alert("Preencha todos os campos!");
        }
    });
}

function deleteProduct(id) {
    if (confirm("Tem certeza que deseja excluir o produto?")) {
        products = products.filter((product) => product.id !== id);
        readProducts();
        if (products.length === 0) {
            alert("Nenhum produto encontrado!");
        }
    }
}

// Função para atualizar um produto
function updateProduct(id) {
    const product = products.find((product) => product.id === id);
    if (product) {
        const name = prompt("Novo nome do produto:", product.product);
        const price = parseFloat(prompt("Novo valor do produto:", product.price));
        const image = prompt("Nova imagem do produto:", product.image);
        if (name && price && image) {
            product.product = name;
            product.price = price;
            product.image = image;
            readProducts();
            alert("Produto atualizado com sucesso!");
        } else {
            alert("Preencha todos os campos!");
        }
    } else {
        alert("Produto não encontrado!");
    }
}

readProducts();

createProduct();
const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const addressInput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")

let cart = [];

// Abrir o modal do carrinho
cartBtn.addEventListener("click", function(){
    updateCartModal();
    cartModal.style.display = "flex"
})

//fechar moral carrinho
cartModal.addEventListener("click", function(event){
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
})

//fechar no botão FECHAR
closeModalBtn.addEventListener("click", function(){
    cartModal.style.display = "none"
})


menu.addEventListener("click", function(event){
    let parentButton = event.target.closest(".add-to-cart-btn")
    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
        
        // Adicionar no carrinho
        addToCart(name,price)
    }
})

// função para adicionar no carrinho
function addToCart(name,price){
    const existeItem = cart.find(item => item.name === name)

    if(existeItem){
        // se o tem já existe aumenta apenas a quantidade +1
        existeItem.quantity += 1;
    }
    else{
        cart.push({
            name,
            price,
            quantity: 1,
        })
    }
    updateCartModal()
}

// atualiza o carrinho
function updateCartModal(){
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("flex", "justify-between","mb-4", "flex-col")

        cartItemElement.innerHTML = `
            <div class="flex items-center justify-between border-b-2 border-gray-400 px-1">
                <div>
                    <p class="font-bold" >${item.name}</p>
                    <p>Quantidade: ${item.quantity}</p>
                    <p class="font-bold mt-2">R$ ${item.price.toFixed(2)}</p>
                </div>

                <button class="remove-item-btn" data-name="${item.name}" >Remover</button>
            </div>
        `

        total += item.price * item.quantity;

        cartItemsContainer.appendChild(cartItemElement)
    })

    cartTotal.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    } );

    cartCounter.innerHTML = cart.length;

}

//função para remover o item do carrinho
cartItemsContainer.addEventListener("click", function(event){
    if(event.target.classList.contains("remove-item-btn")){
        const name = event.target.getAttribute("data-name")

        removeItemCart(name);
    }

})
function removeItemCart(name){
    const index = cart.findIndex(item => item.name === name);

    if(index !== -1){
        const item = cart[index]

        if(item.quantity > 1){
            item.quantity -= 1;
            updateCartModal();
            return;
        }
        cart.splice(index, 1);
        updateCartModal();
    }

}

// verificar o endereço
addressInput.addEventListener("input", function(event){
    let inputValue = event.target.value;

    if(inputValue !== ""){
        addressInput.classList.remove("border-red-500")
        addressWarn.classList.add("hidden")
    }
})

// finalizar pedido 
checkoutBtn.addEventListener("click", function(){

    const isOpen = verificarHorario();
    if(!isOpen){

        Toastify({
            text: "LET's GO BURGER FECHADO",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
            background: "#ef4444"
            },
        }).showToast();

        return;
    }


    if(cart.length === 0) {
        Toastify({
            text: "Nenhum lanche no carrinho",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
            background: "#ef4444"
            },
        }).showToast();

        return;
    }
    if(addressInput.value === ""){
        addressWarn.classList.remove("hidden")
        addressInput.classList.add("border-red-500")
        return;
    }
    // enviar para o wpp

    const cartItems = cart.map((item) => {
        return(
            ` ${item.name} Quantidade: (${item.quantity}) Preço: R$${item.price.toFixed(2)} |`
        )
    }).join("")

    const menssagem = encodeURIComponent(cartItems)
    const telefone = "82999211763"

    window.open(`https://wa.me/${telefone}?text=${menssagem} Endereço: ${addressInput.value}`, "_balnk")

    Toastify({
        text: "Pedido Finalizado! Por favor, aconpanhar pelo whatsapp.",
        duration: 7000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)"
        },
    }).showToast();
    cart = [];
    addressInput.value = "";
    updateCartModal();
    
})

//verificar a hora e manipular o card horario
function verificarHorario(){
    const data = new Date()
    const hora = data.getHours();
    return hora >= 18 && hora < 22;
}

const spanHorario = document.getElementById("date-span")
const isOpen = verificarHorario()

if(isOpen){
    spanHorario.classList.remove("bg-red-500")
    spanHorario.classList.add("bg-gree-600")
}
else{
    spanHorario.classList.remove("bg-gree-600")
    spanHorario.classList.add("bg-red-500")
}
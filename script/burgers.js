document.addEventListener('DOMContentLoaded', function () {
    const burgers = [
        {
            name: 'Cheese Burger Duplo',
            description: 'Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.',
            valor: '18,90',
            price: 18.90,
            image: './img/bg-2 1.png'
        },
        {
            name: 'Cheese Burger 2',
            description: 'Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.',
            valor: '10,90',
            price: 10.90,
            image: './img/bg-2 1.png'
        },
        {
            name: 'Cheese Burger 3',
            description: 'Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.',
            valor: '11,90',
            price: 11.90,
            image: './img/bg-2 1.png'
        },
        {
            name: 'Cheese Burger 4',
            description: 'Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.',
            valor: '12,90',
            price: 12.90,
            image: './img/bg-2 1.png'
        }
    ];

    const burgerContainer = document.getElementById('burger-container');

    burgers.forEach(burger => {
        const burgerElement = document.createElement('div');
        burgerElement.className = 'p-2 flex gap-2 items-center';
        burgerElement.innerHTML = `
            <img src="${burger.image}" alt="${burger.name}" class="w-28 h-28 rounded-md">
            <div>
                <p class="font-bold">${burger.name}</p>
                <p class="text-sm">${burger.description}</p>
                <div class="flex items-center gap-2 justify-between mt-2">
                    <p class="font-bold text-lg">R$ ${burger.valor}</p>
                    <button class="bg-green-600 px-5 rounded add-to-cart-btn hover:scale-125 duration-200"
                        data-name="${burger.name}" 
                        data-price="${burger.price.toFixed(2)}"
                        data-valor="${burger.valor}">
                        <i class="fa fa-cart-plus text-lg text-white"></i>
                    </button>
                </div>
            </div>
        `;
        burgerContainer.appendChild(burgerElement);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const burgers1 = [
        {
            name: 'Cheese Burger Duplo22',
            description: 'Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.',
            valor: '18,90',
            price: 18.90,
            image: './img/bg-2 1.png'
        },
        {
            name: 'Cheese Burger 22222',
            description: 'Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.',
            valor: '10,90',
            price: 10.90,
            image: './img/bg-2 1.png'
        },
        {
            name: 'Cheese Burger 32',
            description: 'Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.',
            valor: '11,90',
            price: 11.90,
            image: './img/bg-2 1.png'
        },
        {
            name: 'Cheese Burger 42',
            description: 'Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.',
            valor: '12,90',
            price: 12.90,
            image: './img/bg-2 1.png'
        }
    ];

    const burgerContainer = document.getElementById('burger-container2');

    burgers1.forEach(burger2 => {
        const burgerElement2 = document.createElement('div');
        burgerElement2.className = 'p-2 flex gap-2 items-center';
        burgerElement2.innerHTML = `
            <img src="${burger2.image}" alt="${burger2.name}" class="w-28 h-28 rounded-md">
            <div>
                <p class="font-bold">${burger2.name}</p>
                <p class="text-sm">${burger2.description}</p>
                <div class="flex items-center gap-2 justify-between mt-2">
                    <p class="font-bold text-lg">R$ ${burger2.valor}</p>
                    <button class="bg-green-600 px-5 rounded add-to-cart-btn hover:scale-125 duration-200"
                        data-name="${burger2.name}" 
                        data-price="${burger2.price.toFixed(2)}"
                        data-valor="${burger2.valor}">
                        <i class="fa fa-cart-plus text-lg text-white"></i>
                    </button>
                </div>
            </div>
        `;
        burgerContainer.appendChild(burgerElement2);
    });
});
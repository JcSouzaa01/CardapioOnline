document.addEventListener('DOMContentLoaded', function () {
    const burgers = [
        {
            name: "Let's Go Simples",
            description: 'Burger artesanal 150g, queijo cheddar, presunto e salada.',
            valor: '16,49',
            price: 16.49,
            image: './img/Burger/bg-2 1.png'
        },
        {
            name: "Let's Go Eggs",
            description: 'Burger artesanal 150g, ovo, queijo cheddar, presunto e salada.',
            valor: '17,49',
            price: 17.49,
            image: './img/Burger/bg-2 1.png'
        },
        {
            name: "Let's Go Bacon",
            description: 'Burger artesanal 150g, chips de bacon, queijo cheddar, presunto e salada.',
            valor: '24,49',
            price: 24.49,
            image: './img/Burger/bg-2 1.png'
        },
        {
            name: "Let's Go Duplo",
            description: 'Burger artesanal 150g (2), queijo cheddar (2), presunto (2), cebola caramelizada e salada.',
            valor: '28,99',
            price: 28.99,
            image: './img/Burger/bg-2 1.png'
        }
    ];

    const burgerContainer = document.getElementById('burger-container');

    burgers.forEach(burger => {
        const burgerElement = document.createElement('div');
        burgerElement.className = 'p-2 flex gap-2 items-center';
        burgerElement.innerHTML = `
            <img src="${burger.image}" alt="${burger.name}" class="w-28 h-28 rounded-md">
            <div class="w-full">
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
            name: "Let's Go Calabresa",
            description: 'Calabresa fatiada 170g, ovo, queijo cheddar, presunto e salada.',
            valor: '16,49',
            price: 16.49,
            image: './img/Burger/bg-2 1.png'
        },
        {
            name: "Let's Go Frango",
            description: 'Frango em cubos 170g, ovo, queijo cheddar, presunto e salada.',
            valor: '16,49',
            price: 16.49,
            image: './img/Burger/LetsFrango 1.png'
        },
        {
            name: "Let's Go Calafrango",
            description: 'Calabresa fatiada 85g, frango em cubos 85g, ovo, queijo cheddar, presunto e salada.',
            valor: '17,49',
            price: 17.49,
            image: './img/Burger/LetsCalafrango 1.png'
        },
        {
            name: "Let's Go Carne do Sol",
            description: 'Carne do sol em cubos 190g, ovo, queijo cheddar, cebola caramelizada, presunto e salada.',
            valor: '23,99',
            price: 23.99,
            image: './img/Burger/bg-2 1.png'
        },
        {
            name: "Let's Go Alcatra",
            description: 'Carne de alcatra em cubos 190g, ovo, queijo cheddar, cebola caramelizada, presunto e salada.',
            valor: '26,49',
            price: 26.49,
            image: './img/Burger/LetsAlcatra 1.png'
        }
    ];

    const burgerContainer = document.getElementById('burger-container2');

    burgers1.forEach(burger2 => {
        const burgerElement2 = document.createElement('div');
        burgerElement2.className = 'p-2 flex gap-2 items-center';
        burgerElement2.innerHTML = `
            <img src="${burger2.image}" alt="${burger2.name}" class="w-28 h-28 rounded-md">
            <div class="w-full">
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
document.addEventListener('DOMContentLoaded', function () {
    const beverages = [
        {
            name: 'Coca-Cola 1L',
            valor: '7,50',
            price: 7.50,
            image: './img/Refris/coca1l-2.png'
        },
        {
            name: 'Guaraná 1L',
            valor: '6,00',
            price: 6.00,
            image: './img/Refris/guarana1l.png'
        },
        {
            name: 'Coca-Cola 350ml',
            valor: '5,00',
            price: 5.00,
            image: './img/Refris/refri-1.png'
        },
        {
            name: 'Guaraná 350ml',
            valor: '5,00',
            price: 5.00,
            image: './img/Refris/refri-2.png'
        }
    ];

    const beverageContainer = document.getElementById('bebidas-container');

    beverages.forEach(beverage => {
        const beverageElement = document.createElement('div');
        beverageElement.className = 'p-2 flex w-full gap-2 items-center';
        beverageElement.innerHTML = `
            <img src="${beverage.image}" alt="${beverage.name}" class="w-24 h-24 rounded-md">
            <div class="w-full">
                <p class="font-bold">${beverage.name}</p>
                <div class="flex items-center gap-2 justify-between mt-3">
                    <p class="font-bold text-lg">R$ ${beverage.valor}</p>
                    <button class="bg-green-600 px-5 rounded add-to-cart-btn hover:scale-125 duration-200"
                        data-name="${beverage.name}" 
                        data-price="${beverage.price.toFixed(2)}"
                        data-valor="${beverage.valor}">
                        <i class="fa fa-cart-plus text-lg text-white"></i>
                    </button>
                </div>
            </div>
        `;
        beverageContainer.appendChild(beverageElement);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const beverages2 = [
        {
            name: 'Acerola 400ml C/Água',
            description: "Polpa de Fruta",
            valor: '5,00',
            price: 5.00,
            image: './img/Sucos/sucoAcerola.png'
        },
        {
            name: 'Acerola 400ml C/Leite',
            description: "Polpa de Fruta",
            valor: '6,00',
            price: 6.00,
            image: './img/Sucos/sucoAcerola.png'
        },
        {
            name: 'Goiaba 400ml C/Água',
            description: "Polpa de Fruta",
            valor: '5,00',
            price: 5.00,
            image: './img/Sucos/sucoGoiaba.png'
        },
        {
            name: 'Goiaba 400ml C/Leite',
            description: "Polpa de Fruta",
            valor: '6,00',
            price: 6.00,
            image: './img/Sucos/sucoGoiaba.png'
        },
        {
            name: 'Graviola 400ml C/Água',
            description: "Polpa de Fruta",
            valor: '5,00',
            price: 5.00,
            image: './img/Sucos/sucoGraviola.png'
        },
        {
            name: 'Graviola 400ml C/Leite',
            description: "Polpa de Fruta",
            valor: '6,00',
            price: 6.00,
            image: './img/Sucos/sucoGraviola.png'
        },
        {
            name: 'Maracujá 400ml C/Água',
            description: "Polpa de Fruta",
            valor: '5,00',
            price: 5.00,
            image: './img/Sucos/sucoMaracuja.png'
        },
        {
            name: 'Maracujá 400ml C/Leite',
            description: "Polpa de Fruta",
            valor: '6,00',
            price: 6.00,
            image: './img/Sucos/sucoMaracuja.png'
        },
        {
            name: 'Caju 400ml C/Água',
            description: "Polpa de Fruta",
            valor: '5,00',
            price: 5.00,
            image: './img/Sucos/sucoCaju.png'
        },
        {
            name: 'Caju 400ml C/Leite',
            description: "Polpa de Fruta",
            valor: '6,00',
            price: 6.00,
            image: './img/Sucos/sucoCaju.png'
        },
    ];

    const beverageContainer2 = document.getElementById('bebidas-container2');

    beverages2.forEach(beverage2 => {
        const beverageElement2 = document.createElement('div');
        beverageElement2.className = 'p-2 flex w-full gap-2 items-center';
        beverageElement2.innerHTML = `
            <img src="${beverage2.image}" alt="${beverage2.name}" class="w-24 h-24 rounded-md">
            <div class="w-full">
                <p class="font-bold">${beverage2.name}</p>
                <p class="text-sm">${beverage2.description}</p>
                <div class="flex items-center gap-2 justify-between mt-3">
                    <p class="font-bold text-lg">R$ ${beverage2.valor}</p>
                    <button class="bg-green-600 px-5 rounded add-to-cart-btn hover:scale-125 duration-200"
                        data-name="${beverage2.name}" 
                        data-price="${beverage2.price.toFixed(2)}"
                        data-valor="${beverage2.valor}">
                        <i class="fa fa-cart-plus text-lg text-white"></i>
                    </button>
                </div>
            </div>
        `;
        beverageContainer2.appendChild(beverageElement2);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const beverages3 = [
        {
            name: 'Água Mineral S/Gás',
            valor: '2,00',
            price: 2.00,
            image: './img/Sobremesa/aguaMineral-3.png'
        },
        {
            name: 'Água Mineral C/Gás',
            valor: '3,00',
            price: 3.00,
            image: './img/Sobremesa/aguaMineral-3.png'
        }
    ];

    const beverageContainer3 = document.getElementById('bebidas-container3');

    beverages3.forEach(beverage3 => {
        const beverageElement3 = document.createElement('div');
        beverageElement3.className = 'p-2 flex w-full gap-2 items-center';
        beverageElement3.innerHTML = `
            <img src="${beverage3.image}" alt="${beverage3.name}" class="w-24 h-24 rounded-md">
            <div class="w-full">
                <p class="font-bold">${beverage3.name}</p>
                <div class="flex items-center gap-2 justify-between mt-3">
                    <p class="font-bold text-lg">R$ ${beverage3.valor}</p>
                    <button class="bg-green-600 px-5 rounded add-to-cart-btn hover:scale-125 duration-200"
                        data-name="${beverage3.name}" 
                        data-price="${beverage3.price.toFixed(2)}"
                        data-valor="${beverage3.valor}">
                        <i class="fa fa-cart-plus text-lg text-white"></i>
                    </button>
                </div>
            </div>
        `;
        beverageContainer3.appendChild(beverageElement3);
    });
});
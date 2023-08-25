
let topDiv = document.querySelector(".top-div");


let link=[
    'url',
    'https://www.homedepot.ca/product/malibu-wide-plank-french-oak-fortuna-7-17-in-x-60-in-rigid-core-luxury-vinyl-plank-flooring-23-88-sq-ft-case-/1001687997',
    'https://www.homedepot.ca/product/malibu-wide-plank-french-oak-alturas-7-17-in-x-60-in-rigid-core-luxury-vinyl-plank-flooring-23-88-sq-ft-case-/1001688001',
    'https://www.homedepot.ca/product/malibu-wide-plank-french-oak-lombard-9-13-in-x-60-in-rigid-core-luxury-vinyl-plank-flooring-30-45-sq-ft-case-/1001766070',
    'https://www.homedepot.ca/product/malibu-wide-plank-french-oak-shoreline-9-13-in-x-60-in-rigid-core-luxury-vinyl-plank-flooring-30-45-sq-ft-case-/1001766078',
    'https://www.homedepot.ca/product/malibu-wide-plank-french-oak-novato-7-17-in-x-60-in-rigid-core-luxury-vinyl-plank-flooring-23-88-sq-ft-case-/1001688002',
    'https://www.homedepot.ca/product/malibu-wide-plank-french-oak-lakeport-7-17-in-x-60-in-rigid-core-luxury-vinyl-plank-flooring-23-88-sq-ft-case-/1001688004',
    'https://www.homedepot.ca/product/allure-contact-avalon-sanded-6-inch-x-36-inch-luxury-vinyl-plank-flooring-36-sq-ft-case-/1001569946',



]

let nameF=[
    '',
    'malibu-fortuna',
    'malibu-alturas',
    'malibu-lombard',
    'malibu-Shoreline',
    'malibu-Novato',
    'malibu-Lakeport',
    'Allure - Avalon Sanded',
]

for (let i = 0; i < 10; i++) {

    let main = document.createElement('div');
    main.classList.add("main");



    let div1 = document.createElement('div');
    let img1 = document.createElement('img');
    img1.src = `img/${i+1}.1.jpg`;
    div1.appendChild(img1);
    div1.classList.add("inside");

    let div2 = document.createElement('div');
    let img2 = document.createElement('img');
    img2.src = `img/${i+1}.2.jpg`;
    div2.appendChild(img2);
    div2.classList.add("inside");

    let div3 = document.createElement('div');
    let img3 = document.createElement('img');
    img3.src = `img/${i+1}.3.jpg`;
    div3.appendChild(img3);
    div3.classList.add("inside");
    
    let div4 = document.createElement('div');     
    div4.innerText=nameF[i+1];
    let a1 = document.createElement('a');
    a1.href=link[i+1];
    a1.innerText="link";
    div4.appendChild(a1);
    div4.classList.add("inside");



    main.append(div1,div2,div3,div4);

    topDiv.appendChild(main)

}
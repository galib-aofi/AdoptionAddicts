document.addEventListener("DOMContentLoaded", function() {

    // -------------------------
    // Updated Animal Data with reliable images
    // -------------------------
    const animalsData = {
        dogs: [
            {name: "Buddy", breed: "Golden Retriever", age: "2 years", disease: null, info: "Friendly and playful", img: "https://placedog.net/400/300?id=1"},
            {name: "Max", breed: "Beagle", age: "1 year", disease: "None", info: "Loves to play fetch", img: "https://placedog.net/400/300?id=2"},
            {name: "Charlie", breed: "Labrador", age: "3 years", disease: null, info: "Loyal and gentle", img: "https://placedog.net/400/300?id=3"}
        ],

        cats: [
            // FIXED IMAGE URLS
            {name: "Whiskers", breed: "Siamese", age: "3 years", disease: null, info: "Very affectionate", img: "https://loremflickr.com/400/300/kitten"},
            {name: "Luna", breed: "Persian", age: "4 years", disease: "Allergy", info: "Calm and gentle", img: "https://loremflickr.com/401/300/kitten"},
            {name: "Simba", breed: "Maine Coon", age: "2 years", disease: null, info: "Playful and curious", img: "https://loremflickr.com/402/300/kitten"}
        ],

        birds: [
            {name: "Polly", breed: "Parrot", age: "2 years", disease: null, info: "Talkative and smart", img: "https://loremflickr.com/400/300/parrot"},
            {name: "Kiwi", breed: "Canary", age: "1 year", disease: null, info: "Sings beautifully", img: "https://loremflickr.com/400/300/canary"},
            {name: "Sky", breed: "Cockatiel", age: "3 years", disease: null, info: "Friendly and gentle", img: "https://loremflickr.com/400/300/cockatiel"}
        ],

        reptiles: [
            {name: "Rango", breed: "Chameleon", age: "1 year", disease: null, info: "Color changing", img: "https://loremflickr.com/400/300/chameleon"},
            {name: "Slither", breed: "Python", age: "3 years", disease: null, info: "Calm and slow", img: "https://loremflickr.com/400/300/python"},
            {name: "Lizzy", breed: "Iguana", age: "2 years", disease: null, info: "Loves sunbathing", img: "https://loremflickr.com/400/300/iguana"}
        ]
    };

    // -------------------------
    // Pages
    // -------------------------
    const mainPage = document.getElementById("main-page");
    const categoryPage = document.getElementById("category-page");
    const detailPage = document.getElementById("detail-page");

    const categoryTitle = document.getElementById("category-title");
    const animalList = document.getElementById("animal-list");
    const animalDetail = document.getElementById("animal-detail");

    // Show category page when a category is clicked
    document.querySelectorAll(".category-card").forEach(card => {
        card.addEventListener("click", () => {
            const type = card.dataset.type;
            mainPage.style.display = "none";
            categoryPage.style.display = "block";
            categoryTitle.textContent = type.charAt(0).toUpperCase() + type.slice(1);
            showAnimals(type);
        });
    });

    // Back buttons
    document.getElementById("back-to-main").addEventListener("click", () => {
        categoryPage.style.display = "none";
        mainPage.style.display = "block";
    });

    document.getElementById("back-to-category").addEventListener("click", () => {
        detailPage.style.display = "none";
        categoryPage.style.display = "block";
    });

    // Show animals in a category
    function showAnimals(type) {
        animalList.innerHTML = "";
        animalsData[type].forEach(animal => {
            const card = document.createElement("div");
            card.className = "animal-card";
            card.innerHTML = `
                <img src="${animal.img}" alt="${animal.name}">
                <h4>${animal.name}</h4>
            `;
            card.addEventListener("click", () => showAnimalDetail(animal));
            animalList.appendChild(card);
        });
    }

    // Show animal detail page
    function showAnimalDetail(animal) {
        categoryPage.style.display = "none";
        detailPage.style.display = "block";
        animalDetail.innerHTML = `
            <img src="${animal.img}" alt="${animal.name}">
            <h2>${animal.name}</h2>
            <p><strong>Breed:</strong> ${animal.breed}</p>
            <p><strong>Age:</strong> ${animal.age}</p>
            <p><strong>Disease:</strong> ${animal.disease || "None"}</p>
            <p><strong>Info:</strong> ${animal.info}</p>
            <button onclick="alert('You adopted ${animal.name}!')">Adopt</button>
        `;
    }

});

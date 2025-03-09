document.addEventListener("DOMContentLoaded", function() {
    loadCars();
});

function loadCars() {
    const carList = document.getElementById("carList");
    const cars = [
        { name: "Toyota Corolla", price: "$20,000", img: "../assets/images/toyota.jpg" },
        { name: "Honda Civic", price: "$22,000", img: "../assets/images/honda.jpg" },
        { name: "BMW X5", price: "$55,000", img: "../assets/images/bmw.jpg" }
    ];

    carList.innerHTML = "";
    cars.forEach(car => {
        const carCard = document.createElement("div");
        carCard.classList.add("car-card");
        carCard.innerHTML = `
            <img src="${car.img}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>Price: ${car.price}</p>
            <button class="btn">Buy Now</button>
        `;
        carList.appendChild(carCard);
    });
}

function filterCars() {
    alert("Filtering cars... (Functionality to be implemented)");
}

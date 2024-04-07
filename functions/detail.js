document.addEventListener("DOMContentLoaded", () => {
  const queryParams = new URLSearchParams(window.location.search);
  const restaurantId = queryParams.get("id");
  if (restaurantId) {
    displayRestaurantDetails(restaurantId);
  }
});

function displayRestaurantDetails(restaurantId) {
  const restaurant = restaurants.find((r) => r.id === Number(restaurantId));

  if (restaurant) {
    document.getElementById(
      "smallImage1"
    ).innerHTML = `<img src="${restaurant.product1}" alt="${restaurant.name} Product">`;
    document.getElementById(
      "smallImage2"
    ).innerHTML = `<img src="${restaurant.product2}" alt="${restaurant.name} Product">`;
    document.getElementById(
      "logo"
    ).innerHTML = `<img class="restaurantImg" src="${restaurant.logo}" alt="${restaurant.name} Logo">`;
    document.getElementById("name").textContent = restaurant.name;
    document.getElementById(
      "location"
    ).textContent = `Location: ${restaurant.location}`;
    document.getElementById(
      "rating"
    ).textContent = `Rating: ${restaurant.rating}`;
    document.getElementById("type").textContent = `Type: ${restaurant.type}`;
    document.getElementById(
      "desc"
    ).textContent = `Description: ${restaurant.desc}`;
  }
}

const form = document.querySelector(".reviewForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const review = e.target.review.value ?? null;

  if (review) {
    const reviewContainer = document.querySelector(".reviewsContainer");
    const singleReview = document.createElement("div");
    singleReview.classList.add("singleReview");
    singleReview.innerHTML = createReviewElement(review);
    reviewContainer.appendChild(singleReview);

    e.target.review.value = "";
  } else {
    alert("Please enter a review before submitting.");
  }
});

function createReviewElement(review) {
  return `
        <div id="review">
          ${review}
        </div>
        <div class="rating">
                <img
                  class="icon"
                  src="/images/rating.png"
                  alt="star icon"
                  width="15"
                  height="15"
                />
                <span id="rating">4.5</span>
              </div>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector('img[src="/images/Konu.png"]')
    .addEventListener("click", function () {
      window.location.href = "/pages/index.html";
    });
});

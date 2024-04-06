function sortRestaurantsByName(restaurants) {
  return restaurants.sort((a, b) => a.name.localeCompare(b.name));
}
document.addEventListener("DOMContentLoaded", () => {
  const sortedRestaurants = sortRestaurantsByName(restaurants);
  displayRestaurants(sortedRestaurants);

  document
    .getElementById("rating-select")
    .addEventListener("change", (event) => {
      const ratingValue = event.target.value;
      displayRestaurants(
        filterRestaurantsByRating(sortedRestaurants, ratingValue)
      );
    });
});

function filterRestaurantsByRating(restaurants, rating) {
  if (rating === "all") {
    return restaurants;
  }

  const ratingThreshold = parseFloat(rating);
  return restaurants.filter(
    (restaurant) => restaurant.rating >= ratingThreshold
  );
}

function displayRestaurants(sortedRestaurants) {
  const container = document.querySelector("#restaurant-list");
  container.innerHTML = sortedRestaurants
    .map(
      (restaurant) => `
      <div class="restaurant">
        <div class="logo">
            <img  class="logoR" src="${restaurant.logo}" alt="${restaurant.name} Logo" width="200" height="200">
            <h2 class="name">${restaurant.name}</h2>
        </div>
        <div class="info">
            <div class="infoInside">
                <div class="location">
                    <img  class="logoR" src="/images/map.png" alt="map icon" width="15" height="15">
                    <p> ${restaurant.location}</p>
                </div>
                <div class="rating">
                    <img  class="logoR" src="/images/rating.png" alt="rating icon" width="15" height="15">
                    <p> ${restaurant.rating}</p>
                </div>
                
            </div>
            <div class="desc">
                <p>Type: ${restaurant.type}</p>
                <div class="descInfo">
                    <img  class="logoR" src="/images/desc.png" alt="description icon" width="15" height="15">
                    <p>${restaurant.desc}</p>
                </div>
                
            </div>
            
            
        </div>
      </div>
    
    `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const sortedRestaurants = sortRestaurantsByName(restaurants);
  displayRestaurants(sortedRestaurants);
});

function sortRestaurantsByName(restaurants) {
  return restaurants.sort((a, b) => a.name.localeCompare(b.name));
}
document.addEventListener("DOMContentLoaded", () => {
  let sortedRestaurants = sortRestaurantsByName(restaurants);
  displayRestaurants(sortedRestaurants);

  document.getElementById("rating-select").addEventListener("change", () => {
    applyFilters();
  });

  document.getElementById("location-select").addEventListener("change", () => {
    applyFilters();
  });
  document.getElementById("search-button").addEventListener("click", () => {
    applyFilters();
  });

  function applyFilters() {
    const ratingValue = document.getElementById("rating-select").value;
    const locationValue = document
      .getElementById("location-select")
      .value.toLowerCase();

    let filteredRestaurants = filterRestaurantsByRating(
      sortedRestaurants,
      ratingValue
    );
    filteredRestaurants = filterRestaurantsByLocation(
      filteredRestaurants,
      locationValue
    );
    displayRestaurants(filteredRestaurants);
  }
});

function filterRestaurantsByLocation(restaurants, location) {
  if (location === "all") {
    return restaurants;
  }

  return restaurants.filter(
    (restaurant) => restaurant.location.toLowerCase() === location
  );
}

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
        <div class="restaurant" id="restaurant-${restaurant.id}" onclick="window.location.href='details.html?id=${restaurant.id}'">
          <div class="logo">
              <img  class="logoR" src="${restaurant.logo}" alt="${restaurant.name} Logo" width="200" height="200">
              <h2 class="name">${restaurant.name}</h2>
          </div>
          <div class="info">
              <div class="infoInside">
                  <div class="location">
                      <img  class="icon" src="/images/map.png" alt="map icon" width="15" height="15">
                      <p> ${restaurant.location}</p>
                  </div>
                  <div class="rating">
                      <img  class="icon" src="/images/rating.png" alt="rating icon" width="15" height="15">
                      <p> ${restaurant.rating}</p>
                  </div>
                  <div class="type">
                      <img  class="icon" src="/images/type.png" alt="map icon" width="15" height="15">
                      <p>${restaurant.type}</p>
                  </div>
                 
              </div>
              <div class="desc">
                  <div class="descInfo">
                      <img  class="icon" src="/images/desc.png" alt="description icon" width="15" height="15">
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

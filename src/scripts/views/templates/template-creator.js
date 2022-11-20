import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-thumbnail">
    <img class="restaurant__poster lazyload" src="${CONFIG.IMAGE_URL.LARGE + restaurant.pictureId}" alt="${restaurant.name}" />
  </div>
  <div class="restaurant__info">
    <h2 class="restaurant__name" tabindex="0">${restaurant.name}</h2>
    <h3 tabindex="0">Rating: <i class="fa fa-star" style="font-size:24px;color:#ffb300"></i> ${restaurant.rating}</h3>
    <p tabindex="0"><i class="fa fa-map-marker" style="font-size:24px"></i> ${restaurant.address}</p>
    <h3 tabindex="0">Kategori: </h3><p tabindex="0">${restaurant.categories.map((n) => n.name)}</p>
    <h3 tabindex="0">Makanan: </h3><p tabindex="0">${restaurant.menus.foods.map((n) => n.name)}</p>
    <h3 tabindex="0">Minuman: </h3><p tabindex="0">${restaurant.menus.drinks.map((n) => n.name)}</p>
  </div>
  <div class="restaurant__description">
    <h3 tabindex="0">Description</h3>
    <p tabindex="0">${restaurant.description}</p>
  </div>
  <h3 class="customer-review" tabindex="0">Customer Reviews</h3>
`;

const createRestaurantReviewTemplate = (review) => `
  <div class="review-detail">
    <div class="review-main">
      <i class="fa fa-user-circle" style="font-size: 40px"></i>
      <h4 tabindex="0">${review.name}</h4>
      <p tabindex="0">${review.date}</p>
    </div>
    <p tabindex="0">${review.review}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item skeleton">
    <div>
      <img class="resto-img skeleton lazyload" data-src="${CONFIG.IMAGE_URL.SMALL + restaurant.pictureId}" alt="${restaurant.name}">
      <div class="restaurant-city"><p>Kota ${restaurant.city}</p></div>
    </div>
    <div class="restaurant-info">
      <p class="rating">Rating: <i class="fa fa-star" style="font-size:24px;color:#ffb300"></i> ${restaurant.rating}</p>
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantReviewTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};

import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const MainMenu = {
  async render() {
    return `
      <div tabindex="0" class="hero">
        <div class="hero__inner">
          <h1 tabindex="0" class="hero__title">Share Happiness</h1>
          <p tabindex="0" class="hero__tagline">Find Restaurant Around You</p>
        </div>
      </div>
      <div class="content">
        <h2 class="main-title" tabindex="0">Explore Restaurant</h2>
        <div id="restaurants" class="restaurant-list">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.mainMenuRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default MainMenu;

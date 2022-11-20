/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Retaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.waitForElement('.restaurant-info a', 10);
  I.seeElement('.restaurant-info a');

  const firstRestaurant = locate('.restaurant-info a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-info a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking a restaurant', async ({ I }) => {
  I.waitForElement('.restaurant-info a', 10);
  I.seeElement('.restaurant-info a');

  const firstRestaurant = locate('.restaurant-info a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-info a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.seeElement('.restaurant-info a');
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.no-favorite', 10);
  const noFavorite = await I.grabTextFrom('.no-favorite');
  assert.strictEqual(noFavorite, 'Tidak ada list favorite untuk ditampilkan');
});

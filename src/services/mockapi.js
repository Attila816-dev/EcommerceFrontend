import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import config from '../config';

export function setupMockAPI() {
  if (!config.USE_MOCK_API) return;

  const mock = new MockAdapter(axios, { delayResponse: 300 });

  const categories = [
    {
      "id": 1,
      "name": "Food",
      "children": [
        { "id": 10, "name": "Fruits" },
        { "id": 11, "name": "Vegetables" }
      ]
    },
    {
      "id": 2,
      "name": "Drinks",
      "children": [
        { "id": 20, "name": "Juice" },
        { "id": 21, "name": "Water" }
      ]
    }
  ];

  const products = [
    { id: 1, name: 'Bananas', price: 1.2, categoryId: 1 },
    { id: 2, name: 'Coca Cola', price: 0.99, categoryId: 2 },
    { id: 3, name: 'Bread', price: 1.0, categoryId: 3 }
  ];

  const cart = [
    { id: 1, productId: 1, name: 'Bananas', quantity: 2, price: 1.2 },
    { id: 2, productId: 2, name: 'Coca Cola', quantity: 1, price: 0.99 },
  ];

  mock.onGet(`${config.API_BASE_URL}/categories`).reply(200, categories);
  mock.onGet(`${config.API_BASE_URL}/products`).reply(200, products);
  mock.onGet(`${config.API_BASE_URL}/cart`).reply(200, cart);
}
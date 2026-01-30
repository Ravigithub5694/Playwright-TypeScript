import { test, expect } from '@playwright/test';
import Ajv from 'ajv';

test('API Test - Get Product Details', async ({ request }) => {
  // Define the API endpoint URL
  const apiUrl = 'https://fakestoreapi.com/products/1';

  // Send a GET request to the endpoint
  const response = await request.get(apiUrl);

  // Verify the response code is 200
  expect(response.status()).toBe(200);

  // Parse the response JSON
  const responseBody = await response.json();

  // Validate the response contains these keys: 'id', 'price', 'category', and 'description'
  expect(responseBody).toHaveProperty('id');
  expect(responseBody).toHaveProperty('price');
  expect(responseBody).toHaveProperty('category');
  expect(responseBody).toHaveProperty('description');

  // Optionally validate the data types using a JSON Schema (Ajv)
  const ajv = new Ajv();
  const schema = {
    type: 'object',
    properties: {
      id: { type: 'number' },
      price: { type: 'number' },
      category: { type: 'string' },
      description: { type: 'string' },
      title: { type: 'string' },
      image: { type: 'string' },
      rating: {
        type: 'object',
        properties: {
          rate: { type: 'number' },
          count: { type: 'number' }
        },
        required: ['rate', 'count']
      }
    },
    required: ['id', 'price', 'category', 'description', 'title', 'image', 'rating']
  };

  const validate = ajv.compile(schema);
  const isValid = validate(responseBody);
  expect(isValid).toBe(true);

  // Log the product title and price to the console
  console.log(`Product Title: ${responseBody.title}`);
  console.log(`Product Price: $${responseBody.price}`);
});
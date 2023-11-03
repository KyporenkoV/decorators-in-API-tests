import { test, expect } from '@playwright/test';
import {ImagesController} from '../controllers/images/imagesController';

const imgID = '0XYvRd7oD';
const image = new ImagesController();

test('should be able get image by ID', async ({}) => {
  const response = await image.getById(imgID);
  expect(response.id).toBe(imgID);
});
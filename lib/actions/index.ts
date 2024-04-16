"use server";

import { srcapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;

  try {
    const srcapeProduct = await srcapeAmazonProduct(productUrl);
  } catch (error: any) {
    throw new Error(`Failed to create/update produc: ${error.message}`);
  }
}

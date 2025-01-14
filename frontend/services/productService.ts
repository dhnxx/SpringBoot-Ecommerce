import httpClient  from "@/lib/httpClient";

export const fetchProducts = async () => {
  try {
    const products = await httpClient("/api/products");
    console.log("Fetched products:", products);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

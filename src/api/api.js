export const getCategories = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    if (!response.ok) {
      throw new Error(
        "Data fetching failed, please check your network connection"
      );
    }
    const data = await response.json();
    return { response: data };
  } catch (error) {
    return { error: error };
  }
};

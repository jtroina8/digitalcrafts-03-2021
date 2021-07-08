export default async function fetchProducts(dispatch) {
  const data = await fetch("https://fakestoreapi.com/products");
  const json = await data.json();
  return dispatch({ type: "GET_PRODUCTS", payload: json });
}

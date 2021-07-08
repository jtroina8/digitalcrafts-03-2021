const initialState = [];

const getProducts = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "GET_PRODUCTS":
      return (state = action.payload);
    default:
      return state;
  }
};

export default getProducts;

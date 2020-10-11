export const initialState = {
  basket: [
    {
      id: "123456",
      title: "Harddisk External WD 8 TB - MANTAP GAN - GRATIS ONGKIR",
      price: 2000000.0,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2447E617EC5C463L._V533746472_.jpg",
    },
  ],
  user: null
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return { ...state, basket: [...state.basket, action.item] };
      break;
    case "REMOVE_FROM_BASKET":
      // Logic for removing item from basket

      // we clone the basket
      let newBasket = [...state.basket];

      // we cloned the basket
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exists in basket, remove it...
        newBasket.splice(index, 1);
      } else { 
        console.warn("cant found product");
      }

      return { ...state, basket: newBasket };
      break;
    default:
      return state;
  }
}

export default reducer;

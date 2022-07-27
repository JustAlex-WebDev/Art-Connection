import { StyledShoppingCart } from "./Styles/ShoppingCartStyled";

const ShoppingCart = ({
  cartMenu,
  onCartDelete,
  onNumberOfUnits,
  onFavouritesAdd,
}) => {
  let totalPrice = 0;
  let totalItems = 0;
  return (
    <StyledShoppingCart className="shopping-cart" id="shopping-cart">
      <div className="cart-top">
        <div className="cart-title">
          <h2>Shopping Cart</h2>
        </div>
        <div className="cart-description">
          {cartMenu.forEach(
            (item) => (totalPrice += item.price * item.numberOfUnits),
            0
          )}
          {cartMenu.forEach((item) => (totalItems += item.numberOfUnits), 0)}
          <h3 className="cart-count">{totalItems} items &nbsp;|</h3>
          <h3 className="cart-price">BGN {totalPrice}</h3>
        </div>
      </div>

      <div className="cart-menu">
        {cartMenu.map((item) => (
          <div className="img-container cart-container" key={item.id}>
            <img src={item.img} className="photo" alt="" />
            <div className="item-info cart-item-info">
              <h3>{item.name}</h3>
              <h3 className="item-description">{item.desc}</h3>
              <h3 className="colors">{item.color}</h3>
              <h3 className="price cart-item-price">
                {item.price}
                <span className="currency"> {item.currency}</span>
              </h3>
              <div className="cart-quantity-container">
                <i
                  className="fa-solid fa-minus minus-icon"
                  onClick={() => onNumberOfUnits(item.numberOfUnits--)}
                ></i>
                <h3 className="cart-quantity">{item.numberOfUnits}</h3>
                <i
                  className="fa-solid fa-plus plus-icon"
                  onClick={() => onNumberOfUnits(item.numberOfUnits++)}
                ></i>
              </div>
              <div className="cart-icon-container">
                <i
                  className="fa-solid fa-heart heart-icon cart-heart-icon"
                  onClick={() => onFavouritesAdd(item.id)}
                ></i>
                <i
                  className="fa-regular fa-trash-can cart-trash-icon"
                  onClick={() => onCartDelete(item.id)}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-checkout-container">
        <button className="btn cart-btn">
          <h3>Go to Checkout</h3>
        </button>
      </div>
    </StyledShoppingCart>
  );
};

export default ShoppingCart;

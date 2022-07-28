import { StyledMenu } from "./Styles/MenuStyled";

const Menu = ({ menu, onToggleFav, onCartAdd, onFavouritesAdd }) => {
  return (
    <StyledMenu className="menu active-content" id="menu">
      <div className="section-center">
        {menu.map((item) => (
          <article className="menu-item" key={item.id}>
            <div className="img-container">
              <img src={item.img} className="photo" alt="" />

              <div className="image-overlay image-overlay-blur">
                <button
                  className="btn overlay-btn"
                  title="Add to shopping cart"
                  onClick={() => onCartAdd(item.id)}
                >
                  <span>
                    <i
                      className="
                      fa-solid fa-cart-shopping
                      shoppingBag-icon
                      overlay-icon
                    "
                    ></i>
                  </span>
                  Add to cart
                </button>
              </div>
            </div>
            <div className="item-info-right" title="Add to favourites">
              <i
                className={`btn fa-solid fa-heart heart-icon ${
                  item.fav ? "fav" : ""
                }`}
                onClick={
                  () => onFavouritesAdd(item.id)
                  // && onToggleFav(item.id)
                }
              ></i>
            </div>
            <div className="item-info">
              <h3>{item.name}</h3>
              <h3 className="item-description">{item.desc}</h3>
              <h3 className="colors">{item.color}</h3>
              <h3 className="price">
                {item.price}
                <span className="currency"> {item.currency}</span>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </StyledMenu>
  );
};

export default Menu;

import { StyledFavourites } from "./Styles/FavouritesStyled";

const Favourites = ({ favouritesMenu, onFavouritesDelete, onCartAdd }) => {
  let totalItems = 0;
  return (
    <StyledFavourites className="favourites" id="favourites">
      <div className="favourites-top">
        <div className="favourites-title">
          <h2>Favourites</h2>
        </div>
        <div className="favourites-description">
          {favouritesMenu.forEach(
            (item) => (totalItems += item.numberOfUnits),
            0
          )}
          <h3 className="favourites-count">{totalItems} items</h3>
        </div>
      </div>

      <div className="favourites-menu">
        {favouritesMenu.map((item) => (
          <div className="img-container favourites-container" key={item.id}>
            <img src={item.img} className="photo" alt="" />
            <div className="item-info cart-item-info">
              <h3>{item.name}</h3>
              <h3 className="item-description">{item.desc}</h3>
              <h3 className="colors">{item.color}</h3>
              <div className="favourites-icon-container">
                <i
                  className="
                fa-solid fa-cart-shopping
                shoppingBag-icon
                favourites-cart-icon
              "
                  onClick={() => onCartAdd(item.id)}
                ></i>
                <i
                  className="fa-regular fa-trash-can favourites-trash-icon"
                  onClick={() => onFavouritesDelete(item.id)}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </StyledFavourites>
  );
};

export default Favourites;

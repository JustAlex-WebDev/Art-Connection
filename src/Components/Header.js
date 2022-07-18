import { StyledHeader } from "./Styles/HeaderStyled";

const Header = ({ headerBackground }) => {
  return (
    <StyledHeader className="header" id="header">
      <div className={`bg ${headerBackground ? "activated" : ""}`}>
        <nav className="navbar container">
          <button style={{ cursor: "pointer" }}>
            <h2 className="logo" title="Main Page">
              ArtConnection
            </h2>
          </button>

          <div className="list">
            <button
              className="btn place-items-center"
              id="heart-icon"
              title="Favourites"
            >
              <i className="fa-solid fa-heart heart-icon"></i>
            </button>

            <button
              className="btn place-items-center"
              id="shoppingBag-icon"
              title="Shopping Cart"
            >
              <i className="fa-solid fa-cart-shopping shoppingBag-icon"></i>
            </button>
          </div>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;

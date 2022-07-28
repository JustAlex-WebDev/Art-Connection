import { StyledHeader } from "./Styles/HeaderStyled";

const Header = ({ headerBackground, onToggleTab }) => {
  return (
    <StyledHeader className="header" id="header">
      <div className={`bg ${headerBackground ? "activated" : ""}`}>
        <nav className="navbar container">
          <button style={{ cursor: "pointer" }}>
            <h2
              className="logo"
              title="Main Page"
              onClick={() => onToggleTab(1)}
            >
              ArtConnection
            </h2>
          </button>

          <div className="list">
            <button
              className="btn place-items-center"
              id="heart-icon"
              title="Favourites"
            >
              <i
                className="fa-solid fa-heart heart-icon"
                onClick={() => onToggleTab(2)}
                onDoubleClick={() => onToggleTab(1)}
              ></i>
            </button>

            <button
              className="btn place-items-center"
              id="shoppingBag-icon"
              title="Shopping Cart"
            >
              <i
                className="fa-solid fa-cart-shopping shoppingBag-icon"
                onClick={() => onToggleTab(3)}
                onDoubleClick={() => onToggleTab(1)}
              ></i>
            </button>
          </div>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;

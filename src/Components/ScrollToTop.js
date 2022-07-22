import { StyledScrollToTop } from "./Styles/ScrollToTopStyled";

const ScrollToTop = ({ scrollToTopBtn, onScollToTop }) => {
  return (
    <StyledScrollToTop>
      <button
        onClick={onScollToTop}
        className={`btn scrollToTop-btn ${scrollToTopBtn ? "activated" : ""}`}
        id="myBtn"
        title="Go to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </StyledScrollToTop>
  );
};

export default ScrollToTop;

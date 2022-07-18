import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  .bg {
    background-color: var(--secondary-background-color);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 1.5rem;
  }

  .logo {
    padding-top: 1rem;
    padding-left: 1rem;
    font-size: var(--font-size-md);
    color: var(--dark-color);
  }

  .list {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .shoppingBag-icon {
    padding-top: 0.5rem;
    padding-right: 1rem;
  }

  .cart-shoppingBag-icon {
    padding-top: 0;
  }

  .btn {
    cursor: pointer;
  }

  .container {
    max-width: 120rem;
    margin: 0 auto;
  }

  .place-items-center {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  /* Header-Background Javascript Styles */
  .bg.activated {
    box-shadow: 0 1px 0.5rem var(--transparent-light-color);
  }
`;

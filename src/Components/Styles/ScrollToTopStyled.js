import styled from "styled-components";

export const StyledScrollToTop = styled.div`
  .scrollToTop-btn {
    display: none;
    position: fixed;
    height: 4.5rem;
    width: 4.5rem;
    bottom: 20px;
    right: 10px;
    z-index: 999;
    border: 2px solid var(--dark-color);
    background-color: transparent;
    color: white;
    cursor: pointer;
    padding: 5px;
    border-radius: 5rem;
  }

  .scrollToTop-btn:hover {
    opacity: 0.5;
  }

  .scrollToTop-i {
    color: var(--dark-color);
  }

  .activated {
    display: block;
  }
`;

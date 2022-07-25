import styled from "styled-components";

export const StyledMenu = styled.section`
  padding: 12rem 0;
  width: 100%;
  display: none;
  margin: auto;
  max-width: 120rem;

  .section-center {
    width: 100%;
    margin: auto;
    max-width: 120rem;
    display: grid;
    gap: 2.5rem 1rem;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
  }

  .menu-item {
    display: grid;
    justify-content: center;
    gap: 1rem 1.5rem;
  }

  .img-container {
    padding: 0px 9px;
    position: relative;
    min-width: 15rem;
  }

  .photo {
    min-width: 15rem;
    object-fit: scale-down;
    background-color: var(--secondary-background-color);
    height: 200px;
  }

  .item-info {
    display: flex;
    justify-content: left;
    padding: 0px 1rem;
    flex-direction: column;
  }

  .item-info-right {
    position: absolute;
    display: flex;
    font-size: 0.5rem;
    margin-left: 12.3rem;
    margin-top: 19.25rem;
    padding: 1.5rem;
  }

  .item-info-right i {
    font-size: 2rem;
  }

  .heart-icon.fav {
    color: red;
  }

  .item-description,
  .colors {
    color: hsla(0, 0%, 0%, 0.6);
  }

  .price {
    padding-top: 0.5rem;
  }

  .img-container:hover .image-overlay {
    opacity: 1;
    display: block;
  }

  .image-overlay {
    position: absolute;
    width: 15rem;
    margin-left: 1rem;
    height: 200px;
    top: 0;
    left: -0.1rem;
    z-index: 998;
    background-color: rgba(0, 0, 0, 0.5);
    color: var(--background-color);
    font-family: var(--font-family);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    display: none;
    transition: all 0.25s ease;
  }

  .image-overlay-blur {
    backdrop-filter: blur(0.2rem);
  }

  .btn {
    cursor: pointer;
  }

  .overlay-btn {
    padding: 0.8rem 0.8rem;
    top: 7.7rem;
    position: relative;
    font-family: var(--font-family);
    font-size: var(--font-size-sm);
    font-weight: 500;
    background-color: var(--transparent-light-color);
    border: 2px solid var(--background-color);
    border-radius: 5rem;
    display: flex;
    margin: auto;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    transition: all 0.25s ease;
  }

  .overlay-btn:hover {
    background-color: #868686;
  }

  .overlay-btn .overlay-icon {
    color: var(--background-color);
    font-size: 1.7rem;
  }

  @media screen and (min-width: 450px) {
  .img-container img {
    min-width: 17rem;
  }

  .photo {
    min-width: 22rem;
  }

  .item-info-right {
    margin-left: 14rem;
  }

  .image-overlay {
    width: 17rem;
    margin-left: 1rem;
  }
}

@media screen and (min-width: 800px) {
  .section-center {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

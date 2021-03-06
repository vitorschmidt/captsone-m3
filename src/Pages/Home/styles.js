import styled from "styled-components";
import backgroundGif from "../../Assets/img/background2.gif";
export const Container = styled.div`
  background-color: var(--grey-1);
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  .gif {
    max-width: 100vw;
    height: 50vh;
    background-image: url(${backgroundGif});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100vw;
    opacity: 0.8;
    background-color: white;
  }
  @media (min-width: 1101px) {
    width: 100vw;
    height: 100%;

    display: flex;
    flex-direction: column;

    .gif {
      width: 100vw;
      height: 54.7vh;
      background-image: url(${backgroundGif});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100vw;
      opacity: 0.8;
    }
  }
`;

export const SubHeader = styled.div`
  width: 100%;
  height: 200px;
  background-color: var(--background-primary);
  border-top: 1px solid var(--black);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h2,
  p,
  button {
    margin-left: 10px;
  }
  button:hover {
    color: var(--light-grey);
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
  background-color: var(--light-grey);
  box-shadow: 0px 0px 11px 0px rgba(89, 89, 89, 0.75);
  border-radius: 8px 8px 0px 0px;
  margin-bottom: 10px;
  button {
    margin: 20px;
  }

  @media (min-width: 1101px) {
    width: 100%;
  }
`;

export const DashDiv = styled.div`
  border-right: 1px solid #dfd8d8;
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito Sans", sans-serif;
  }

  .container {
      max-width: 1280px;
      width: 100%;
      margin: 0 auto;
  }

   @media (max-width: 1364px) {
    .container {
      padding: 0 1rem;
    }
  }

`;

import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./Typography";

export const GlobalStyle = createGlobalStyle`
  * { 
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body { 
    font-family: ${primaryFont};
    color: #000;
    font-siZe: 16px;
  }
`;

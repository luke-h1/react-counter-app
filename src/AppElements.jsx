import styled from "styled-components";

export const HomeContainer = styled.div`
  min-height: 50vh;
  min-width: 100vw;
`;

export const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const DecrementBtn = styled.button`
  padding: 8px;
  border-radius: 4px;
  color: #000;
  display: block;
  margin-bottom: 1rem;
`;

export const IncrementBtn = styled.button`
  border-radius: 4px;
  color: #000;
  display: block;
  margin-bottom: 1rem;
  padding: 10px;
`;

export const NumWrap = styled.div`
  margin: 0 auto;
  width: 200px;
  height: 250px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
  h1 {
    margin: 0 auto;
  }
`;

export const NumEl = styled.h1`
  text-align: center;
  color: #000;
`;

export const ResetBtn = styled.button`
  border-radius: 4px;
  color: #000;
  display: block;
  margin-bottom: 1em;
  padding: 10px;
`;
